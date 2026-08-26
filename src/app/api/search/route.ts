import { source } from '@/lib/source';
import { createTokenizer } from '@orama/tokenizers/mandarin';
import { createFromSource } from 'fumadocs-core/search/server';

export const revalidate = 3600;

export const { GET } = createFromSource(source, {
  buildIndex(page) {
    return {
      id: page.url,
      title: page.data.title,
      description: page.data.description,
      structuredData: page.data.structuredData,
      url: page.url,
      tag: page.slugs[0],
    };
  },
  localeMap: {
    en: {
      language: 'english',
    },
    cn: {
      components: {
        tokenizer: createTokenizer(),
      },
      search: {
        threshold: 0,
        tolerance: 0,
      },
    },
  },
});
