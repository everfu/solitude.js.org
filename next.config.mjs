import { createMDX } from 'fumadocs-mdx/next';
import { readdirSync } from 'node:fs';
import path from 'node:path';

const withMDX = createMDX();

function getHexoDocPaths(directory, prefix = '') {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const relative = prefix ? `${prefix}/${entry.name}` : entry.name;
    const absolute = path.join(directory, entry.name);

    if (entry.isDirectory()) return getHexoDocPaths(absolute, relative);
    if (!entry.name.endsWith('.mdx') || entry.name.endsWith('.cn.mdx')) return [];
    return [relative.replace(/\.mdx$/, '')];
  });
}

const hexoDocPaths = getHexoDocPaths(path.join(process.cwd(), 'content/docs/hexo'));

const legacyHexoRedirects = [
  ['/getting-started/introduction', '/getting-started/introduction'],
  ['/getting-started/installation', '/getting-started/installation'],
  ['/configuration/basic-useage', '/configuration/site'],
  ['/configuration/advance-config', '/configuration/advanced'],
  ['/configuration/global/front-matter', '/content-writing/front-matter'],
  ['/configuration/global/tags-plugin', '/content-writing/tags-plugin'],
  ['/configuration/fetures-page/music', '/features/music'],
  ['/configuration/fetures-page/brevity', '/features/brevity'],
  ['/configuration/fetures-page/about', '/features/about'],
  ['/configuration/fetures-page/friendshiplink', '/features/links'],
  ['/configuration/fetures-page/equipment', '/features/equipment'],
  ['/configuration/fetures-page/message', '/features/message'],
  ['/configuration/fetures-page/recentcomment', '/features/recent-comments'],
  ['/configuration/fetures-page/bangumi', '/features/bangumi'],
  ['/configuration/fetures-page/gallery', '/features/gallery'],
  ['/configuration/comment/Twikoo', '/integrations/comments/twikoo'],
  ['/configuration/comment/Waline', '/integrations/comments/waline'],
  ['/configuration/comment/Valine', '/integrations/comments/valine'],
  ['/configuration/comment/Artalk', '/integrations/comments/artalk'],
  ['/configuration/comment/Giscus', '/integrations/comments/giscus'],
  ['/configuration/search/Localsearch', '/integrations/search/local-search'],
  ['/configuration/search/Algolia', '/integrations/search/algolia'],
  ['/configuration/search/DocSearch', '/integrations/search/docsearch'],
  ['/faq/common', '/faq/common'],
  ['/faq/extend', '/faq/troubleshooting'],
];

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'contrib.rocks',
      },
      {
        protocol: 'https',
        hostname: 'www.github.com',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
      },
      {
        protocol: 'https',
        hostname: 'pic1.afdiancdn.com',
      },
      {
        protocol: 'https',
        hostname: 'img.alicdn.com',
      }
    ],
  },
  async redirects() {
    const docsRootRedirects = [
      {
        source: '/docs',
        destination: '/docs/hugo/getting-started/introduction',
        permanent: true,
      },
      {
        source: '/cn/docs',
        destination: '/cn/docs/hugo/getting-started/introduction',
        permanent: true,
      },
    ];

    const unversionedDocsRedirects = hexoDocPaths.flatMap((docPath) => [
      {
        source: `/docs/${docPath}`,
        destination: `/docs/hexo/${docPath}`,
        permanent: true,
      },
      {
        source: `/cn/docs/${docPath}`,
        destination: `/cn/docs/hexo/${docPath}`,
        permanent: true,
      },
    ]);

    const oldSiteRedirects = legacyHexoRedirects.flatMap(([source, destination]) => [
      {
        source,
        destination: `/docs/hexo${destination}`,
        permanent: true,
      },
      {
        source: `/cn${source}`,
        destination: `/cn/docs/hexo${destination}`,
        permanent: true,
      },
    ]);

    return [...docsRootRedirects, ...unversionedDocsRedirects, ...oldSiteRedirects];
  },
};

export default withMDX(config);
