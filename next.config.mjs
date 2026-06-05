import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

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
    const pages = [
      '/getting-started/introduction',
      '/getting-started/installation',
      '/configuration/basic-useage',
      '/configuration/advance-config',
      '/configuration/global/front-matter',
      '/configuration/global/tags-plugin',
      '/configuration/fetures-page/music',
      '/configuration/fetures-page/brevity',
      '/configuration/fetures-page/about',
      '/configuration/fetures-page/friendshiplink',
      '/configuration/fetures-page/equipment',
      '/configuration/fetures-page/message',
      '/configuration/fetures-page/recentcomment',
      '/configuration/fetures-page/bangumi',
      '/configuration/fetures-page/gallery',
      '/configuration/comment/Twikoo',
      '/configuration/comment/Waline',
      '/configuration/comment/Valine',
      '/configuration/comment/Artalk',
      '/configuration/comment/Giscus',
      '/configuration/search/Localsearch',
      '/configuration/search/Algolia',
      '/configuration/search/DocSearch',
      '/faq/common',
      '/faq/extend',
    ];

    return pages.flatMap((source) => [
      {
        source,
        destination: `/docs${source}`,
        permanent: true,
      },
      {
        source: `/cn${source}`,
        destination: `/cn/docs${source}`,
        permanent: true,
      },
    ]);
  },
};

export default withMDX(config);
