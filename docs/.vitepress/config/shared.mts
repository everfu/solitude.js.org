import { defineConfig } from 'vitepress';
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs';
import { figure } from '@mdit/plugin-figure';

export const shared = defineConfig({
    head: [
        ['link', {rel: 'icon', href: '/favicon.svg', type: 'image/x-icon'}],
        ['meta', {name: 'theme-color', content: '#92f8b8'}],
        ['meta', {name: 'google-site-verification', content: 'OQ-FnVME50EgIvv5nO4fsNl7EHkEl0vUSoFUe_fAMgY'}],
        ['script', {src: 'https://u.everfu.cn/script.js', async: "async", 'data-website-id': "c47ace8b-591f-4640-890b-ebf2251a9fb6"}],
    ],

    lastUpdated: true,
    cleanUrls: true,
    metaChunk: true,

    markdown: {
        config(md) {
            md.use(tabsMarkdownPlugin)
            md.use(figure, {
        figcaption: 'alt',
        copyAttrs: '^class$',
        lazy: true
      }) 
        },
        codeTransformers: [
            {
                postprocess: (code) => {
                    return code.replace(/\[!!code/g, '[!code');
                }
            }
        ]
    },

    sitemap: {
        hostname: 'https://solitude.js.org',
    },

    themeConfig: {

        socialLinks: [
            {icon: 'github', link: 'https://github.com/everfu/hexo-theme-solitude'},
        ],

        search: {
            provider: 'algolia',
            options: {
                appId: 'KNSYWJA80Y',
                apiKey: '64cec8b7ed869453640daca02f5911fc',
                indexName: 'solitude-js',
                locales: {
                    zh: {
                        placeholder: '搜索文档',
                        translations: {
                            button: {
                                buttonText: '搜索文档',
                                buttonAriaLabel: '搜索文档'
                            },
                            modal: {
                                searchBox: {
                                    resetButtonTitle: '清除查询条件',
                                    resetButtonAriaLabel: '清除查询条件',
                                    cancelButtonText: '取消',
                                    cancelButtonAriaLabel: '取消'
                                },
                                startScreen: {
                                    recentSearchesTitle: '搜索历史',
                                    noRecentSearchesText: '没有搜索历史',
                                    saveRecentSearchButtonTitle: '保存至搜索历史',
                                    removeRecentSearchButtonTitle: '从搜索历史中移除',
                                    favoriteSearchesTitle: '收藏',
                                    removeFavoriteSearchButtonTitle: '从收藏中移除'
                                },
                                errorScreen: {
                                    titleText: '无法获取结果',
                                    helpText: '你可能需要检查你的网络连接'
                                },
                                footer: {
                                    selectText: '选择',
                                    navigateText: '切换',
                                    closeText: '关闭',
                                    searchByText: '搜索提供者'
                                },
                                noResultsScreen: {
                                    noResultsText: '无法找到相关结果',
                                    suggestedQueryText: '你可以尝试查询',
                                    reportMissingResultsText: '你认为该查询应该有结果？',
                                    reportMissingResultsLinkText: '点击反馈'
                                }
                            }
                        }
                    }
                }
            }
        }
    },
})
