export const en = {
    lang: 'en-US',
    title: "Solitude Documentation",
    description: "An elegant, simple and easy-to-use Hexo theme",
    themeConfig: {
        logo: '/favicon.png',
        nav: [
            {text: 'Author', link: 'https://everfu.org'},
            {text: 'Preview', link: 'https://everfu.github.io/Solitude/'},
            {text: 'LightXi Cloud Computing', link: 'https://www.lightxi.com/'}
        ],

        sidebar: [
            {
                text: 'Introduction',
                collapsed: false,
                items: [
                    {text: 'Introduction', link: '/guide/intro'},
                    {text: 'Installation', link: '/guide/quick-start'},
                    {text: 'Page', link: '/guide/page'},
                    {text: 'Front Matter', link: '/guide/front-matter'},
                    {text: 'Tags Plugin', link: '/guide/tags-plugin'},
                ],
            },
            {
                text: 'Configuration',
                collapsed: false,
                items: [
                    {text: 'Basic', link: '/config/basic'},
                    {text: 'Extend', link: '/config/extend'},
                    {text: 'Advanced', link: '/config/advanced'},
                ],
            },
            {
                text: 'Comment System',
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
                    {text: 'Friends Link', link: '/feature/links'},
                    {text: 'About Me', link: '/feature/about'},
                    {text: 'Music Hall', link: '/feature/music'},
                    {text: 'My Equipment', link: '/feature/equipment'},
                    {text: 'Online Tools', link: '/feature/tools'},
                    {text: 'Douban', link: '/feature/douban'},
                    {text: 'Danmaku Message Page', link: '/feature/danmaku'},
                ],
            },
        ],

        footer: {
            copyright: `Copyright © ${new Date().getFullYear()} Ever Fu`,
            message: 'Special Sponsor: <a href="https://www.lightxi.com/" target="_blank"><img src="https://www.lightxi.com/favicon.ico" style="height: 28px; display: inline-block; margin-bottom: -8px"/> LightXi Cloud</a>'
        },

        editLink: {
            pattern: 'https://github.com/everfu/solitude.js.org/edit/main/docs/:path',
            text: 'Edit this page on GitHub',
        },
    },
}
