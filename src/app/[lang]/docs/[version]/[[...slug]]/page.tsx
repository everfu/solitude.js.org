import { getPageImage, getPageMarkdownUrl, source } from '@/lib/source';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
  MarkdownCopyButton,
  ViewOptionsPopover,
} from 'fumadocs-ui/layouts/docs/page';
import { notFound, permanentRedirect } from 'next/navigation';
import { getMDXComponents } from '@/components/mdx';
import type { Metadata } from 'next';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { docsRoute, gitConfig, getDocsStartPath, isDocsVersion } from '@/lib/shared';
import { createDocsMetadata } from '@/lib/seo';
import { RandomAdCard } from '@/components/ads/random-ad-card';
import { withLocale } from '@/lib/layout.shared';

export default async function Page(
  props: PageProps<'/[lang]/docs/[version]/[[...slug]]'>,
) {
  const params = await props.params;
  if (!isDocsVersion(params.version)) notFound();
  if (!params.slug?.length) {
    permanentRedirect(withLocale(params.lang, getDocsStartPath(params.version)));
  }

  const slugs = [params.version, ...params.slug];
  const page = source.getPage(slugs, params.lang);
  if (!page) notFound();

  const MDX = page.data.body;
  const markdownUrl = getPageMarkdownUrl(page).url;

  return (
    <DocsPage
      toc={page.data.toc}
      full={page.data.full}
      tableOfContent={{
        style: 'clerk',
        footer: <RandomAdCard placement="docs-sidebar" className="mt-5" />,
      }}
    >
      <DocsTitle className="text-[1.75em] font-semibold">{page.data.title}</DocsTitle>
      <DocsDescription className="mb-2 text-lg text-fd-muted-foreground">
        {page.data.description}
      </DocsDescription>
      <div className="flex flex-row flex-wrap items-center gap-2 border-b pb-6 text-sm">
        <MarkdownCopyButton markdownUrl={markdownUrl} />
        <ViewOptionsPopover
          markdownUrl={markdownUrl}
          githubUrl={`https://github.com/${gitConfig.user}/${gitConfig.repo}/blob/${gitConfig.branch}/content/docs/${page.path}`}
        />
      </div>
      <DocsBody className="text-fd-foreground/90">
        <MDX
          components={getMDXComponents({
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export function generateStaticParams() {
  return source.generateParams().flatMap((params) => {
    const [version, ...slug] = params.slug;
    if (!version || !isDocsVersion(version)) return [];
    return [{ lang: params.lang, version, slug }];
  });
}

export async function generateMetadata(
  props: PageProps<'/[lang]/docs/[version]/[[...slug]]'>,
): Promise<Metadata> {
  const params = await props.params;
  if (!isDocsVersion(params.version)) notFound();

  const page = source.getPage([params.version, ...(params.slug ?? [])], params.lang);
  if (!page) notFound();

  return {
    ...createDocsMetadata({
      title: page.data.title,
      description: page.data.description,
      image: getPageImage(page).url,
      locale: params.lang,
      path: `${docsRoute}/${page.slugs.join('/')}`,
    }),
  };
}
