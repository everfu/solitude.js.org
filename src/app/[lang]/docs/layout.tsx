import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { appName } from '@/lib/shared';
import { baseOptions, linkItems, logo } from '@/lib/layout.shared';
import { AISearch, AISearchPanel, AISearchTrigger } from '@/components/ai/search';

export default async function Layout({ params, children }: LayoutProps<'/[lang]/docs'>) {
  const { lang } = await params;
  const base = baseOptions(lang);

  return (
    <DocsLayout
      {...base}
      links={linkItems(lang).filter((item) => item.type === 'icon')}
      nav={{
        ...base.nav,
        title: (
          <>
            {logo(24)}
            <span className="font-medium max-md:hidden">{appName}</span>
          </>
        ),
      }}
      tree={source.getPageTree(lang)}
      tabs={{
        transform(option, node) {
          if (!node.icon) return option;

          return {
            ...option,
            icon: (
              <div className="size-full rounded-lg text-brand [&_svg]:size-full max-md:border max-md:bg-brand/10 max-md:p-1.5">
                {node.icon}
              </div>
            ),
          };
        },
      }}
    >
      <AISearch lang={lang}>
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
