import { defineConfig } from 'vitepress';
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

export const shared = defineConfig({

    head: [
        ['link', {rel: 'icon', href: '/favicon.png', type: 'image/x-icon'}],
        ['meta', {name: 'theme-color', content: '#1188fa'}],
        ['meta', {name: 'google-site-verification', content: 'OQ-FnVME50EgIvv5nO4fsNl7EHkEl0vUSoFUe_fAMgY'}],
        ['meta', {property: 'google-adsense-account', content: 'ca-pub-6338523842252061'}],
        ['script', {
            async: 'async',
            src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6338523842252061',
            crossorigin: 'anonymous'
        }]
    ],

    lastUpdated: true,
    cleanUrls: true,
    metaChunk: true,

    markdown: {
        config(md) {
            md.use(tabsMarkdownPlugin)
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
        logo: '/favicon.png',

        socialLinks: [
            {icon: 'github', link: 'https://github.com/everfu/hexo-theme-solitude'},
        ],
    },
})