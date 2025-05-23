import { defineConfig } from "vitepress";
import { tabsMarkdownPlugin } from "vitepress-plugin-tabs";
import { postChat } from 'vitepress-plugin-postchat'

// https://vitepress.dev/zh/reference/site-config
export default defineConfig(
  {
  vite: {
    plugins: [
    postChat({
        // 账户设置
        key: 'P-DBT4IBSKSWQLHT7O', //可以到 https://ai.tianli0.top/ 获取账户KEY

        // 文章摘要设置
        enableSummary: true, // 是否启用文章摘要
        postSelector: '#VPContent .container > .content', // 文章选择器
        title: '伍拾柒的小A', // 文章摘要标题
        summaryStyle: 'https://ai.tianli0.top/static/public/postChatUser_summary.min.css', // 文章摘要样式
        postURL: '*', // 文章URL
        blacklist: '', // 黑名单
        wordLimit: 1000, // 字数限制
        typingAnimate: true, // 是否启用打字动画
        beginningText: '这篇文章介绍了', // 开始文本
        summaryTheme: 'default', // 文章摘要主题

        // 智能对话设置
        enableAI: true, // 是否启用智能对话
        userMode: 'magic', // 可选 'magic' 或 'iframe'
        postChatConfig: {
          // 按钮样式配置
          backgroundColor: "#3e86f6", // 按钮背景颜色
          fill: "#FFFFFF", // 按钮填充颜色
          bottom: "16px", // 按钮底部位置
          left: "16px", // 按钮左侧位置
          width: "44px", // 按钮宽度
          
          // iframe模式配置
          frameWidth: "375px", // iframe宽度（仅在iframe模式下有效）
          frameHeight: "600px", // iframe高度（仅在iframe模式下有效）
          
          // 功能配置
          defaultInput: false, // 自动填充当前页面标题
          upLoadWeb: true,   // 上传网站到知识库
          showInviteLink: true, // 显示邀请链接
          addButton: true,   // 是否显示悬浮按钮
          
          // 界面配置
          userTitle: "PostChat", // 用户标题
          userDesc: "如果你对网站的内容有任何疑问，可以来问我哦～", // 用户描述
          userIcon: "", // 自定义界面图标URL
          
          // 预设问题配置
          defaultChatQuestions: [
            "你好",
            "你是谁",
            "你是做什么的",
            "你有什么功能",
            "你有什么用"
          ],
          defaultSearchQuestions: [
            "视频压缩",
            "制作黄焖鸡"
          ]
        }
      })
    ]
  },
  lang: "zh-CN",
  title: "Solitude 文档",
  description: "一款优雅简洁易使用的 Hexo 主题",
  head: [
    ["link", { rel: "icon", href: "/favicon.png", type: "image/x-icon" }],
    ["meta", { name: "theme-color", content: "#1188fa" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:locale", content: "zh-hans" }],
    ["meta", { property: "og:title", content: "Solitude 文档" }],
    ["meta", { property: "og:site_name", content: "Solitude 文档" }],
    [
      "meta",
      {
        property: "og:image",
        content: "https://s3.qjqq.cn/47/6616165b0c3de.webp!color",
      },
    ],
    ["meta", { property: "og:url", content: "https://solitude.js.org/" }],
    [
      "meta",
      { property: "og:description", content: "一款优雅简洁易使用的 Hexo 主题" },
    ],
  ],
  themeConfig: {
    logo: "/favicon.png",
    nav: [
      { text: "QQ 群", link: "https://qm.qq.com/q/mYIJRTqo0w" },
      { text: "预览", link: "https://blog.efu.me/" },
    ],

    sidebar: [
      {
        text: "简介",
        collapsed: false,
        items: [
          { text: "介绍", link: "/guide/intro" },
          { text: "安装", link: "/guide/quick-start" },
          { text: "页面", link: "/guide/page" },
          { text: "Front Matter", link: "/guide/front-matter" },
          { text: "Tags Plugin", link: "/guide/tags-plugin" },
        ],
      },
      {
        text: "配置",
        collapsed: false,
        items: [
          { text: "基本", link: "/config/basic" },
          { text: "扩展", link: "/config/extend" },
          { text: "高级", link: "/config/advanced" },
        ],
      },
      {
        text: "评论系统",
        collapsed: false,
        items: [
          { text: "基本", link: "/comment/basic" },
          { text: "Valine", link: "/comment/valine" },
          { text: "Waline", link: "/comment/waline" },
          { text: "Twikoo", link: "/comment/twikoo" },
          { text: "Artalk", link: "/comment/artalk" },
          { text: "Giscus", link: "/comment/giscus" },
        ],
      },
      {
        text: "搜索",
        collapsed: false,
        items: [
          { text: "本地搜索", link: "/search/local" },
          { text: "Algolia", link: "/search/algolia" },
        ],
      },
      {
        text: "特色页面",
        collapsed: false,
        items: [
          { text: "友情链接", link: "/feature/links" },
          { text: "关于我", link: "/feature/about" },
          { text: "音乐馆", link: "/feature/music" },
          { text: "我的装备", link: "/feature/equipment" },
          { text: "在线工具", link: "/feature/tools" },
          { text: "豆瓣", link: "/feature/douban" },
          { text: "弹幕留言页", link: "/feature/danmaku" },
          { text: "即刻短文", link: "/feature/jike" },
          { text: "最近评论", link: "/feature/recent-comments" },
        ],
      },
      {
        text: "FAQ",
        link: "/faq",
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/everfu/hexo-theme-solitude" }
    ],

    footer: {
      copyright: `版权所有 © ${new Date().getFullYear()} 伍拾柒`
    },

    editLink: {
      pattern: "https://github.com/everfu/solitude.js.org/edit/main/docs/:path",
      text: "在 GitHub 上编辑此页",
    },

    search: {
      provider: "local",
      options: {
        apiKey: "64cec8b7ed869453640daca02f5911fc",
        appId: "KNSYWJA80Y",
        indexName: "solitude-js",
        locales: {
          root: {
            placeholder: "搜索文档",
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                searchBox: {
                  resetButtonTitle: "清除查询条件",
                  resetButtonAriaLabel: "清除查询条件",
                  cancelButtonText: "取消",
                  cancelButtonAriaLabel: "取消",
                },
                startScreen: {
                  recentSearchesTitle: "搜索历史",
                  noRecentSearchesText: "没有搜索历史",
                  saveRecentSearchButtonTitle: "保存至搜索历史",
                  removeRecentSearchButtonTitle: "从搜索历史中移除",
                  favoriteSearchesTitle: "收藏",
                  removeFavoriteSearchButtonTitle: "从收藏中移除",
                },
                errorScreen: {
                  titleText: "无法获取结果",
                  helpText: "你可能需要检查你的网络连接",
                },
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                  closeText: "关闭",
                  searchByText: "搜索提供者",
                },
                noResultsScreen: {
                  noResultsText: "无法找到相关结果",
                  suggestedQueryText: "你可以尝试查询",
                  reportMissingResultsText: "你认为该查询应该有结果？",
                  reportMissingResultsLinkText: "点击反馈",
                },
              },
            },
          },
        },
      },
    },

    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    outline: {
      label: "页面导航",
    },

    lastUpdated: {
      text: "最后更新于",
    },

    langMenuLabel: "多语言",
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
  },
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin);
    },
    lineNumbers: true,
    image: {
      lazyLoading: true,
    },
  },
  sitemap: {
    hostname: "https://solitude.js.org",
  },
  lastUpdated: true,
  metaChunk: true,
});
