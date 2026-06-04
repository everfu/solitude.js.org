import type { MetadataRoute } from 'next';
import { source } from '@/lib/source';
import { docsRoute } from '@/lib/shared';
import { createLocalizedSitemapEntry } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const homeEntries = [createLocalizedSitemapEntry('en', '/'), createLocalizedSitemapEntry('cn', '/')];
  const docsEntries = source.generateParams().map((params) =>
    createLocalizedSitemapEntry(params.lang, `${docsRoute}/${params.slug.join('/')}`),
  );

  return [...homeEntries, ...docsEntries];
}
