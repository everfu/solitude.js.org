export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Solitude 文档",
  description: "无论您的设计经验如何，都可以制作漂亮的网站。",
  ogImage: "https://nextui.org/twitter-cards/nextui.jpeg",
  author: "everfu",
  email: "o@efu.me",
  siteUrl: "https://solitude.js.org",
  creator: "@everfu",
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://solitude.js.org",
    siteName: "Solitude - 美丽、快速和现代的 Hexo 主题",
    description: "无论您的设计经验如何，都可以制作漂亮的网站。",
    images: [
      {
        url: "https://nextui.org/twitter-cards/nextui.jpeg",
        width: 1200,
        height: 630,
        alt: "Solitude",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solitude - 美丽、快速和现代的 Hexo 主题",
    description: "无论您的设计经验如何，都可以制作漂亮的网站。",
    image: "https://nextui.org/twitter-cards/nextui.jpeg",
    creator: "@everfu8",
  },
  links: {
    github: "https://github.com/everfu/hexo-theme-solitude",
    twitter: "https://x.com/everfu8",
    docs: "https://solitude.js.org",
    sponsor: "https://patreon.com/everfu",
  },
};
