import { getPageImage, getPageMarkdownUrl, source } from '@/lib/source';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
  MarkdownCopyButton,
  ViewOptionsPopover,
} from 'fumadocs-ui/layouts/docs/page';
import { notFound, redirect } from 'next/navigation';
import { getMDXComponents } from '@/components/mdx';
import type { Metadata } from 'next';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { docsRoute, gitConfig } from '@/lib/shared';
import { createDocsMetadata } from '@/lib/seo';
import { RandomAdCard } from '@/components/ads/random-ad-card';

export default async function Page(props: PageProps<'/[lang]/docs/[[...slug]]'>) {
  const params = await props.params;
  if (!params.slug?.length) {
    redirect(params.lang === 'cn' ? '/cn/docs/getting-started/introduction' : '/docs/getting-started/introduction');
  }

  const page = source.getPage(params.slug, params.lang);
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
      <div className="flex flex-row flex-wrap gap-2 items-center border-b pb-6 text-sm">
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
  return source.generateParams();
}

export async function generateMetadata(
  props: PageProps<'/[lang]/docs/[[...slug]]'>,
): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug, params.lang);
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
