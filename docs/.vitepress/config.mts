import {defineConfig} from 'vitepress'
import {tabsMarkdownPlugin} from 'vitepress-plugin-tabs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    lang: 'zh-CN',
    title: "Solitude 文档",
    description: "一款优雅简洁易使用的 Hexo 主题",
    head: [
        ['link', {rel: 'icon', href: '/favicon.ico', type: 'image/x-icon'}],
        ['meta', { name: 'theme-color', content: '#5f67ee' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:locale', content: 'zh-hans' }],
        ['meta', { property: 'og:title', content: 'Solitude 文档 | 一款简洁优雅的 Hexo 主题' }],
        ['meta', { property: 'og:site_name', content: 'Solitude 文档' }],
        ['meta', { property: 'og:image', content: 'https://s3.qjqq.cn/47/6616165b0c3de.webp!color' }],
        ['meta', { property: 'og:url', content: 'https://solitude.js.org/' }],
    ],
    themeConfig: {
        logo: '/favicon.ico',
        nav: [
            {text: '作者', link: 'https://www.efu.me'}
        ],

        sidebar: [
            {
                text: '简介',
                collapsed: false,
                items: [
                    {text: '介绍', link: '/guide/intro'},
                    {text: '安装', link: '/guide/quick-start'},
                    {text: '页面', link: '/guide/page'},
                    {text: 'Front Matter', link: '/guide/front-matter'},
                    {text: 'Tags Plugin', link: '/guide/tags-plugin'},
                ]
            },
            {
                text: '配置',
                collapsed: false,
                items: [
                    {text: '基本', link: '/config/basic'},
                    {text: '扩展', link: '/config/extend'},
                    {text: '高级', link: '/config/advanced'},
                ]
            },
            {
                text: '评论系统',
                collapsed: false,
                items: [
                    {text: '基本', link: '/comment/basic'},
                    {text: 'Valine', link: '/comment/valine'},
                    {text: 'Waline', link: '/comment/waline'},
                    {text: 'Twikoo', link: '/comment/twikoo'},
                    {text: 'Artalk', link: '/comment/artalk'},
                    {text: 'Giscus', link: '/comment/giscus'},
                ]
            },
            {
                text: '搜索',
                collapsed: false,
                items: [
                    {text: '本地搜索', link: '/search/local'},
                    {text: 'Algolia', link: '/search/algolia'},
                ]
            },
            {
                text: '特色页面',
                collapsed: false,
                items: [
                    {text: '友情链接', link: '/feature/links'},
                    {text: '关于我', link: '/feature/about'},
                    {text: '音乐馆', link: '/feature/music'},
                    {text: '我的装备', link: '/feature/equipment'},
                    {text: '在线工具', link: '/feature/tools'},
                    {text: '豆瓣', link: '/feature/douban'},
                    {text: '弹幕留言页', link: '/feature/danmaku'},
                    {text: '即刻短文', link: '/feature/jike'},
                ]
            },
            {
                text: '第三方',
                collapsed: false,
                items: [
                    {text: 'Tianli GPT', link: '/third-party/tianli-gpt'},
                    {text: 'Post Chat', link: '/third-party/post-chat'},
                ]
            },
            {
                text: 'FAQ',
                link: '/faq'
            }
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/everfu/hexo-theme-solitude'},
            {icon: 'twitter', link: 'https://twitter.com/efu_oo'},
        ],

        footer: {
            copyright: `版权所有 © 2023-${new Date().getFullYear()} Ever Fu`,
            message: '基于 MIT 许可发布'
        },

        editLink: {
            pattern: 'https://github.com/everfu/solitude.js.org/edit/main/docs/:path',
            text: '在 GitHub 上编辑此页'
        },

        search: {
            provider: 'local',
            options: {
                locales: {
                    root: {
                        translations: {
                            button: {
                                buttonText: '搜索文档',
                                buttonAriaLabel: '搜索文档'
                            },
                            modal: {
                                noResultsText: '无法找到相关结果',
                                resetButtonTitle: '清除查询条件',
                                footer: {
                                    selectText: '选择',
                                    navigateText: '切换',
                                    closeText: '关闭'
                                }
                            }
                        }
                    }
                }
            }
        },

        docFooter: {
            prev: '上一页',
            next: '下一页'
        },

        outline: {
            label: '页面导航'
        },

        lastUpdated: {
            text: '最后更新于'
        },

        langMenuLabel: '多语言',
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式'
    },
    markdown: {
        config(md) {
            md.use(tabsMarkdownPlugin)
        }
    },
    sitemap: {
        hostname: 'https://solitude.js.org',
    },
    lastUpdated: true,
    metaChunk: true,
    mpa: true
})