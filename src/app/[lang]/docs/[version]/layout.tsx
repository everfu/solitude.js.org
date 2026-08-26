import { notFound } from 'next/navigation';
import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import {
  appName,
  docsVersionConfig,
  docsVersions,
  getDocsStartPath,
  isDocsVersion,
} from '@/lib/shared';
import { baseOptions, linkItems, logo, withLocale } from '@/lib/layout.shared';
import { AISearch, AISearchPanel, AISearchTrigger } from '@/components/ai/search';

export default async function Layout({
  params,
  children,
}: LayoutProps<'/[lang]/docs/[version]'>) {
  const { lang, version } = await params;
  if (!isDocsVersion(version)) notFound();

  const base = baseOptions(lang, version);
  const tree = source.getPageTree(lang);
  const tabs = docsVersions.flatMap((docsVersion) => {
    const folder = tree.children.find((node) => (
      node.type === 'folder'
      && node.root
      && node.name === docsVersionConfig[docsVersion].label
    ));
    if (!folder || folder.type !== 'folder') return [];

    return [{
      title: docsVersionConfig[docsVersion].label,
      url: withLocale(lang, getDocsStartPath(docsVersion)),
      $folder: folder,
    }];
  });

  return (
    <DocsLayout
      {...base}
      links={linkItems(lang, version).filter((item) => item.type === 'icon')}
      nav={{
        ...base.nav,
        title: (
          <>
            {logo(24)}
            <span className="font-medium max-md:hidden">{appName}</span>
          </>
        ),
      }}
      tree={tree}
      tabs={tabs}
    >
      <AISearch lang={lang} version={version}>
        <AISearchPanel />
        <AISearchTrigger
          position="float"
          className="rounded-full bg-fd-primary px-4 py-2 text-sm font-medium text-fd-primary-foreground hover:bg-fd-primary/90"
        >
          {lang === 'cn' ? '问 AI' : 'Ask AI'}
        </AISearchTrigger>
        {children}
      </AISearch>
    </DocsLayout>
  );
}
