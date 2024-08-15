export const en = {
    lang: 'en-US',
    title: "Solitude Docs",
    description: "An elegant, simple and easy-to-use Hexo theme",
    themeConfig: {
        nav: [
            {text: 'Author', link: 'https://github.com/everfu'},
            {text: 'Preview', link: 'https://everfu.github.io/Solitude/'},
            {text: 'LightXi Cloud', link: 'https://www.lightxi.com/'}
        ],

        sidebar: [
            {
                text: 'Intro',
                collapsed: false,
                items: [
                    {text: 'Intro', link: '/guide/intro'},
                    {text: 'Install', link: '/guide/quick-start'},
                    {text: 'Page', link: '/guide/page'},
                    {text: 'Front Matter', link: '/guide/front-matter'},
                    {text: 'Tags Plugin', link: '/guide/tags-plugin'},
                ],
            },
            {
                text: 'Config',
                collapsed: false,
                items: [
                    {text: 'Basic', link: '/config/basic'},
                    {text: 'Extend', link: '/config/extend'},
                    {text: 'Advanced', link: '/config/advanced'},
                ],
            },
            {
                text: 'Comment',
                collapsed: false,
                items: [
                    {text: 'Basic', link: '/comment/basic'},
                    {text: 'Valine', link: '/comment/valine'},
                    {text: 'Waline', link: '/comment/waline'},
                    {text: 'Twikoo', link: '/comment/twikoo'},
                    {text: 'Artalk', link: '/comment/artalk'},
                    {text: 'Giscus', link: '/comment/giscus'},
                ],
            },
            {
                text: 'Search',
                collapsed: false,
                items: [
                    {text: 'Local Search', link: '/search/local'},
                    {text: 'Algolia', link: '/search/algolia'},
                ],
            },
            {
                text: 'Feature Pages',
                collapsed: false,
                items: [
                    {text: 'Links', link: '/feature/links'},
                    {text: 'About', link: '/feature/about'},
                    {text: 'Music', link: '/feature/music'},
                    {text: 'Equipment', link: '/feature/equipment'},
                    {text: 'Toolbox', link: '/feature/tools'},
                    {text: 'Message', link: '/feature/danmaku'},
                ],
            },
        ],

        footer: {
            copyright: `Copyright © ${new Date().getFullYear()} <a href="https://github.com/everfu" target="_blank">Ever Fu</a>`,
            message: 'Special Sponsor: <a href="https://www.lightxi.com/" target="_blank"><img src="https://www.lightxi.com/favicon.ico" style="height: 28px; display: inline-block; margin-bottom: -8px"/> LightXi Cloud</a>'
        },

        editLink: {
            pattern: 'https://github.com/everfu/solitude.js.org/edit/main/docs/:path',
            text: 'Edit this page on GitHub',
        },
    },
}
