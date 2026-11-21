export type Run = string | { term: string };

export const command = 'gh repo clone everfu/astro-solitude';

export const copy = {
  hero: {
    says: [
      ['Turn your Markdown into', 'a beautiful blog!'],
      ['Solitude is open source,', 'made possible by the community.'],
      ['Your stories, your site.', 'Built with Solitude.'],
    ],
  },
  style: {
    tabs: {
      layouts: { label: 'Layouts', href: '/docs/astro/getting-started/introduction' },
      story: { label: 'Posts', href: '/docs/astro/content-writing/front-matter' },
      openapi: { label: 'Menus', href: '/docs/astro/reference/configuration' },
      graphql: { label: 'Sidebar', href: '/docs/astro/configuration/appearance' },
      asyncapi: { label: 'Home', href: '/docs/astro/configuration/appearance' },
    },
  },
  cli: {
    lead: 'Behind the docs',
    title: ['Customize the documentation UI with ', { term: 'Fumadocs CLI' }, '.'],
  },
};
