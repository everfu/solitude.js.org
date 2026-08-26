import { createGatewayProvider } from '@ai-sdk/gateway';
import { convertToModelMessages, stepCountIs, streamText, tool, type UIMessage } from 'ai';
import { z } from 'zod';
import { source } from '@/lib/source';
import { Document, type DocumentData } from 'flexsearch';
import { ChatUIMessage, SearchTool } from '../../../components/ai/search';
import { defaultDocsVersion, isDocsVersion, type DocsVersion } from '@/lib/shared';

interface CustomDocument extends DocumentData {
  url: string;
  title: string;
  description: string;
  content: string;
  version: DocsVersion;
}
const searchServer = createSearchServer();

async function createSearchServer() {
  const search = new Document<CustomDocument>({
    document: {
      id: 'url',
      index: ['title', 'description', 'content'],
      store: true,
    },
  });

  const docs = await chunkedAll(
    source.getPages().map(async (page) => {
      if (!('getText' in page.data)) return null;

      return {
        title: page.data.title,
        description: page.data.description,
        url: page.url,
        content: await page.data.getText('processed'),
        version: isDocsVersion(page.slugs[0]) ? page.slugs[0] : defaultDocsVersion,
      } as CustomDocument;
    }),
  );

  for (const doc of docs) {
    if (doc) search.add(doc);
  }

  return search;
}

async function chunkedAll<O>(promises: Promise<O>[]): Promise<O[]> {
  const SIZE = 50;
  const out: O[] = [];
  for (let i = 0; i < promises.length; i += SIZE) {
    out.push(...(await Promise.all(promises.slice(i, i + SIZE))));
  }
  return out;
}

/** System prompt, you can update it to provide more specific information */
const systemPrompt = [
  'You are an AI assistant for a documentation site.',
  'Use the `search` tool to retrieve relevant docs context before answering when needed.',
  'The `search` tool returns raw JSON results from documentation. Use those results to ground your answer and cite sources as markdown links using the document `url` field when available.',
  'If you cannot find the answer in search results, say you do not know and suggest a better search query.',
].join('\n');

const chinesePrompt = [
  'The current documentation language is Simplified Chinese.',
  'Answer in Simplified Chinese by default.',
  'Keep code, configuration keys, commands, and official API names in their original language.',
  'Continue citing documentation sources as markdown links when available.',
].join('\n');

export async function POST(req: Request) {
  const apiKey = process.env.AI_GATEWAY_API_KEY;
  const model = process.env.AI_GATEWAY_MODEL;

  if (!apiKey || !model) {
    return Response.json(
      {
        error: 'Ask AI is not configured. Set AI_GATEWAY_API_KEY and AI_GATEWAY_MODEL.',
      },
      { status: 500 },
    );
  }

  const reqJson = await req.json();
  const language = getClientLanguage(reqJson.messages);
  const version = getClientVersion(reqJson.messages);
  const gateway = createGatewayProvider({ apiKey });

  const result = streamText({
    model: gateway.languageModel(model),
    stopWhen: stepCountIs(5),
    tools: {
      search: createSearchTool(version),
    },
    messages: [
      {
        role: 'system',
        content: `${language === 'cn' ? `${systemPrompt}\n${chinesePrompt}` : systemPrompt}\nThe active documentation edition is ${version}. Only use search results from this edition.`,
      },
      ...(await convertToModelMessages<ChatUIMessage>(reqJson.messages ?? [], {
        convertDataPart(part) {
          if (part.type === 'data-client')
            return {
              type: 'text',
              text: `[Client Context: ${JSON.stringify(part.data)}]`,
            };
        },
      })),
    ],
    toolChoice: 'auto',
  });

  return result.toUIMessageStreamResponse();
}

function getClientLanguage(messages: unknown): 'en' | 'cn' {
  if (!Array.isArray(messages)) return 'en';

  for (const message of messages) {
    if (!message || typeof message !== 'object' || !('parts' in message)) continue;
    const parts = (message as { parts?: unknown }).parts;
    if (!Array.isArray(parts)) continue;

    for (const part of parts) {
      if (!part || typeof part !== 'object' || !('type' in part)) continue;
      if ((part as { type?: unknown }).type !== 'data-client') continue;

      const data = (part as { data?: unknown }).data;
      if (!data || typeof data !== 'object') continue;

      const language = (data as { language?: unknown }).language;
      if (language === 'cn' || language === 'en') return language;

      const location = (data as { location?: unknown }).location;
      if (typeof location === 'string' && /\/cn(?:\/|$)/.test(location)) return 'cn';
    }
  }

  return 'en';
}

function getClientVersion(messages: unknown): DocsVersion {
  if (!Array.isArray(messages)) return defaultDocsVersion;

  for (const message of messages) {
    if (!message || typeof message !== 'object' || !('parts' in message)) continue;
    const parts = (message as { parts?: unknown }).parts;
    if (!Array.isArray(parts)) continue;

    for (const part of parts) {
      if (!part || typeof part !== 'object' || !('type' in part)) continue;
      if ((part as { type?: unknown }).type !== 'data-client') continue;

      const data = (part as { data?: unknown }).data;
      if (!data || typeof data !== 'object') continue;

      const version = (data as { version?: unknown }).version;
      if (typeof version === 'string' && isDocsVersion(version)) return version;

      const location = (data as { location?: unknown }).location;
      if (typeof location === 'string') {
        const match = location.match(/\/docs\/(hugo|hexo)(?:\/|$)/);
        if (match?.[1] && isDocsVersion(match[1])) return match[1];
      }
    }
  }

  return defaultDocsVersion;
}

function createSearchTool(version: DocsVersion): SearchTool {
  return tool({
    description: `Search only the ${version} edition documentation and return raw JSON results.`,
    inputSchema: z.object({
      query: z.string(),
      limit: z.number().int().min(1).max(100).default(10),
    }),
    async execute({ query, limit }) {
      const search = await searchServer;
      const results = await search.searchAsync(query, {
        limit: Math.max(limit * 4, 40),
        merge: true,
        enrich: true,
      });

      return results
        .filter((result) => result.doc?.version === version)
        .slice(0, limit);
    },
  });
}
