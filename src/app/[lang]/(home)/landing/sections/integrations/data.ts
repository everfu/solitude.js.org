/** the modules on the board, shared by the figure and the page's Markdown version */
export interface Module {
  title: string;
  /** one line under the title */
  line: string;
  /** the package or import path that ships it */
  pkg: string;
  /** docs page; without it the cell opens the search dialog */
  href?: string;
  install: string;
}

export const modules: Module[] = [
  {title:'Search', line:'Find a guide by title or content.', pkg:'search', install:'curl "https://solitude.js.org/api/search?query=astro"'},
  {title:'Markdown', line:'Read the source of a guide.', pkg:'content', href:'/docs/astro/content-writing/front-matter', install:'curl -L https://solitude.js.org/docs/astro/content-writing/front-matter.md'},
  {title:'AI Chat', line:'Explore the documentation with AI.', pkg:'ai', href:'/docs/astro/getting-started/introduction', install:'curl -L https://solitude.js.org/llms-full.txt'},
  {title:'llms.txt', line:'A compact index for your agent.', pkg:'llms', href:'/llms.txt', install:'curl -L https://solitude.js.org/llms.txt'},
  {title:'i18n', line:'English and Chinese documentation.', pkg:'i18n', href:'/cn', install:'curl -L https://solitude.js.org/cn/docs/astro/getting-started/introduction.md'},
  {title:'OG Image', line:'Share a guide with its own preview.', pkg:'og', href:'/og/docs/astro/getting-started/introduction/image.png', install:'curl -O https://solitude.js.org/og/docs/astro/getting-started/introduction/image.png'}
];
export const more = ['twikoo','waline','artalk','giscus','valine','algolia','docsearch','local-search'].map((name,i)=>({
 name, href:'/docs/astro/integrations/' + (i < 5 ? 'comments/' : 'search/') + name
}));
