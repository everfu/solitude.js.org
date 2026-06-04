import fs from 'node:fs/promises';
import path from 'node:path';

const root = path.join(process.cwd(), 'content/docs');

function frontmatter({ title, description, icon }) {
  const lines = ['---'];
  lines.push(`title: ${JSON.stringify(title)}`);
  lines.push(`description: ${JSON.stringify(description)}`);
  if (icon) lines.push(`icon: ${JSON.stringify(icon)}`);
  lines.push('---', '');
  return lines.join('\n');
}

function page(meta, body) {
  if (typeof body !== 'string') {
    throw new TypeError(`Missing MDX body for ${meta?.title ?? 'unknown page'}`);
  }
  return `${frontmatter(meta)}${body.trim()}\n`;
}

function code(lang, text) {
  return ['```' + lang, text.trim(), '```'].join('\n');
}

function meta(title, icon, pages) {
  return JSON.stringify({ title, icon, pages }, null, 2) + '\n';
}

const files = new Map();

function add(file, content) {
  files.set(file, content);
}

function addPair(file, enMeta, cnMeta, enBody, cnBody) {
  add(`${file}.mdx`, page(enMeta, enBody));
  add(`${file}.cn.mdx`, page(cnMeta, cnBody));
}

add(
  'meta.json',
  meta('Docs', undefined, [
    'getting-started',
    'configuration',
    'content-writing',
    'features',
    'integrations',
    'faq',
  ]),
);
add(
  'meta.cn.json',
  meta('文档', undefined, [
    'getting-started',
    'configuration',
    'content-writing',
    'features',
    'integrations',
    'faq',
  ]),
);

addPair(
  'index',
  {
    title: 'Home',
    description: 'Documentation for installing, configuring, and extending the Solitude Hexo theme.',
  },
  {
    title: '首页',
    description: 'Solitude Hexo 主题的安装、配置、写作与扩展文档。',
  },
  `
## Start here

Solitude is a Hexo theme for personal sites, blogs, and long-form writing. This documentation is organized around the path most site owners follow: install the theme, make the first run, configure the visible areas, then add content and optional integrations.

<Cards>
  <Card title="Install Solitude" href="/docs/getting-started/installation" description="Prepare Hexo, install the theme, and place the configuration file." />
  <Card title="Configure the site" href="/docs/configuration/site" description="Set the site identity, language, assets, navigation, and homepage modules." />
  <Card title="Write content" href="/docs/content-writing/front-matter" description="Use Front Matter and theme tags to shape posts and pages." />
  <Card title="Add integrations" href="/docs/integrations/search/local-search" description="Enable search engines and comment systems when your site is ready." />
</Cards>

## How the docs are arranged

- **Getting Started** covers the installation path and the first successful local preview.
- **Configuration** is the reference for the theme configuration file, split by visible area.
- **Content Writing** explains post metadata and authoring helpers.
- **Features** covers special pages such as Music, About, Links, Gallery, and Bangumi.
- **Integrations** collects search and comment providers.
- **FAQ** keeps practical fixes for common setup and runtime issues.
`,
  `
## 从这里开始

Solitude 是一个面向个人站点、博客和长文写作的 Hexo 主题。文档按站点搭建时最常见的路径组织：先安装主题，再完成第一次本地预览，然后配置可见区域，最后补充内容写作能力和第三方集成。

<Cards>
  <Card title="安装 Solitude" href="/cn/docs/getting-started/installation" description="准备 Hexo、安装主题，并放置主题配置文件。" />
  <Card title="配置站点" href="/cn/docs/configuration/site" description="设置站点身份、语言、资源、导航和首页模块。" />
  <Card title="撰写内容" href="/cn/docs/content-writing/front-matter" description="使用 Front Matter 和主题标签控制文章与页面。" />
  <Card title="添加集成" href="/cn/docs/integrations/search/local-search" description="在站点稳定后启用搜索和评论服务。" />
</Cards>

## 文档如何组织

- **快速开始**：安装主题并完成第一次本地预览。
- **主题配置**：按页面区域拆分主题配置文件，方便查找。
- **内容写作**：说明文章元数据和写作辅助标签。
- **特色页面**：覆盖音乐馆、关于页、友情链接、画廊、追番等页面。
- **集成服务**：集中说明搜索和评论系统。
- **常见问题**：记录安装、配置和运行中的高频问题。
`,
);

add('getting-started/meta.json', meta('Getting Started', 'Rocket', ['introduction', 'installation', 'first-run']));
add('getting-started/meta.cn.json', meta('快速开始', 'Rocket', ['introduction', 'installation', 'first-run']));

addPair(
  'getting-started/introduction',
  {
    title: 'Introduction',
    description: 'Understand what Solitude provides and how to read the documentation.',
  },
  {
    title: '介绍',
    description: '了解 Solitude 提供什么，以及如何阅读这份文档。',
  },
  `
## What Solitude is

Solitude is a Hexo theme designed for a personal blog that feels calm, readable, and highly configurable. It includes homepage modules, sidebars, post metadata, feature pages, search integrations, and multiple comment providers.

## Who it is for

- Bloggers who want a polished site without building a theme from scratch.
- Writers who need comfortable article reading, navigation, and metadata.
- Site owners who want optional pages such as About, Links, Gallery, Music, and Bangumi.

## Documentation model

The docs use a **tutorial + reference** structure. Start with the installation flow, then read configuration pages by the area you want to change. Feature and integration pages are intentionally isolated so optional services do not interrupt the basic setup path.

## Project layout

Most work happens in two places:

${code('text', `
Blog Directory
  _config.yml
  _config.solitude.yml
  source
  themes
    solitude
`)}

Use Hexo's root configuration for site-wide Hexo behavior. Use the Solitude configuration file for theme modules, appearance, pages, comments, and search.
`,
  `
## Solitude 是什么

Solitude 是一个面向个人博客的 Hexo 主题，目标是让站点安静、耐读，并且保持足够高的可配置性。主题包含首页模块、侧边栏、文章元数据、特色页面、搜索集成和多种评论系统。

## 适合谁使用

- 想快速拥有完整博客站点，而不想从零写主题的用户。
- 重视文章阅读体验、导航和元数据展示的写作者。
- 需要关于页、友情链接、画廊、音乐馆、追番等扩展页面的站点维护者。

## 文档阅读方式

这份文档采用 **教程 + 参考** 的结构。第一次使用时先阅读安装流程；之后按想修改的页面区域查阅配置。特色页面和第三方集成独立成章，避免干扰基础搭建路径。

## 项目结构

多数配置会出现在两个位置：

${code('text', `
博客目录
  _config.yml
  _config.solitude.yml
  source
  themes
    solitude
`)}

Hexo 根配置负责站点级行为；Solitude 配置文件负责主题模块、外观、页面、评论和搜索。
`,
);

addPair(
  'getting-started/installation',
  {
    title: 'Installation',
    description: 'Install Hexo and the Solitude theme, then prepare the theme configuration.',
  },
  {
    title: '安装',
    description: '安装 Hexo 与 Solitude 主题，并准备主题配置文件。',
  },
  `
## Prerequisites

Install Node.js and make sure your package manager is available. Hexo and Solitude run inside a Hexo blog directory, so create or open that project before installing the theme.

<Steps>

### Install Hexo CLI

${code('bash', `
npm install -g hexo-cli
hexo init my-blog
cd my-blog
npm install
`)}

### Install the theme

Choose one installation method. NPM is easier to update; Git is convenient when you want to inspect or customize the theme source.

<Tabs items={["npm", "git"]}>
<Tab>

${code('bash', `
npm install hexo-theme-solitude
`)}

</Tab>
<Tab>

${code('bash', `
git clone https://github.com/everfu/hexo-theme-solitude.git themes/solitude
`)}

</Tab>
</Tabs>

### Enable the theme

Set the theme name in Hexo's root configuration.

${code('yaml', `
# _config.yml
theme: solitude
`)}

### Prepare the theme configuration

Copy the theme configuration into the blog root and keep local edits there.

${code('bash', `
cp node_modules/hexo-theme-solitude/_config.yml _config.solitude.yml
`)}

For Git installation, copy from the theme directory instead:

${code('bash', `
cp themes/solitude/_config.yml _config.solitude.yml
`)}

</Steps>

## Expected structure

<Files>
  <File name="Blog Directory" />
  <File name="_config.yml" />
  <File name="_config.solitude.yml" />
  <File name="source" />
  <File name="themes" />
</Files>

<Callout type="info">
Keep custom theme settings in the blog root. This makes theme upgrades less risky because your local configuration is not mixed with package files.
</Callout>
`,
  `
## 准备环境

先安装 Node.js，并确认包管理器可用。Hexo 和 Solitude 都运行在 Hexo 博客目录中，因此需要先创建或进入你的博客项目。

<Steps>

### 安装 Hexo CLI

${code('bash', `
npm install -g hexo-cli
hexo init my-blog
cd my-blog
npm install
`)}

### 安装主题

任选一种安装方式。NPM 更便于升级；Git 更适合需要查看或定制主题源码的场景。

<Tabs items={["npm", "git"]}>
<Tab>

${code('bash', `
npm install hexo-theme-solitude
`)}

</Tab>
<Tab>

${code('bash', `
git clone https://github.com/everfu/hexo-theme-solitude.git themes/solitude
`)}

</Tab>
</Tabs>

### 启用主题

在 Hexo 根配置中设置主题名称。

${code('yaml', `
# _config.yml
theme: solitude
`)}

### 准备主题配置

把主题配置复制到博客根目录，后续本地改动都写在这里。

${code('bash', `
cp node_modules/hexo-theme-solitude/_config.yml _config.solitude.yml
`)}

如果使用 Git 安装，则从主题目录复制：

${code('bash', `
cp themes/solitude/_config.yml _config.solitude.yml
`)}

</Steps>

## 预期结构

<Files>
  <File name="博客目录" />
  <File name="_config.yml" />
  <File name="_config.solitude.yml" />
  <File name="source" />
  <File name="themes" />
</Files>

<Callout type="info">
建议把自定义主题配置保存在博客根目录。这样升级主题时，本地配置不会和包内文件混在一起。
</Callout>
`,
);

addPair(
  'getting-started/first-run',
  {
    title: 'First Run',
    description: 'Start the local Hexo server and confirm Solitude is loaded correctly.',
  },
  {
    title: '首次运行',
    description: '启动本地 Hexo 服务，并确认 Solitude 已正确加载。',
  },
  `
## Start the preview server

Run Hexo locally from the blog root:

${code('bash', `
hexo clean
hexo generate
hexo server
`)}

Open the local address printed by Hexo, usually \`http://localhost:4000\`.

## Confirm the theme is active

Check these items first:

- The homepage uses Solitude's layout instead of Hexo's default theme.
- Static assets load without 404 errors.
- The browser console does not show missing configuration errors.
- \`_config.yml\` contains \`theme: solitude\`.
- \`_config.solitude.yml\` exists in the blog root.

## Where to edit next

After the first successful preview, make changes in this order:

1. Configure site identity in [Site Configuration](/docs/configuration/site).
2. Adjust menus and homepage modules in [Navigation](/docs/configuration/navigation) and [Homepage](/docs/configuration/home).
3. Set article defaults in [Posts](/docs/configuration/posts).
4. Add search or comments only after the base site is stable.

<Callout type="success">
Once the local preview works, keep changes small and refresh frequently. It is much easier to identify the option that caused a problem.
</Callout>
`,
  `
## 启动本地预览

在博客根目录运行 Hexo：

${code('bash', `
hexo clean
hexo generate
hexo server
`)}

打开 Hexo 输出的本地地址，通常是 \`http://localhost:4000\`。

## 确认主题已生效

优先检查这些项目：

- 首页已经显示 Solitude 的布局，而不是 Hexo 默认主题。
- 静态资源没有 404。
- 浏览器控制台没有缺失配置导致的错误。
- \`_config.yml\` 中存在 \`theme: solitude\`。
- 博客根目录存在 \`_config.solitude.yml\`。

## 接下来改哪里

首次预览成功后，建议按这个顺序调整：

1. 在 [站点配置](/cn/docs/configuration/site) 中设置站点身份信息。
2. 在 [导航菜单](/cn/docs/configuration/navigation) 和 [首页配置](/cn/docs/configuration/home) 中调整入口与首页模块。
3. 在 [文章配置](/cn/docs/configuration/posts) 中设置文章默认行为。
4. 基础站点稳定后，再添加搜索或评论系统。

<Callout type="success">
本地预览能跑起来后，建议每次只改少量配置并及时刷新。这样更容易定位是哪一项引起了问题。
</Callout>
`,
);

add(
  'configuration/meta.json',
  meta('Configuration', 'Settings', ['site', 'navigation', 'home', 'sidebar', 'posts', 'appearance', 'advanced']),
);
add(
  'configuration/meta.cn.json',
  meta('配置', 'Settings', ['site', 'navigation', 'home', 'sidebar', 'posts', 'appearance', 'advanced']),
);

const configPages = [
  [
    'site',
    'Site Configuration',
    '站点配置',
    'Configure the site identity, language, links, and shared assets used by Solitude.',
    '配置 Solitude 使用的站点身份、语言、链接和公共资源。',
    'Globe',
    `
## Purpose

Site configuration defines the identity that appears across the theme: title, subtitle, author information, language behavior, and shared asset paths.

## Minimal example

${code('yaml', `
# _config.yml
title: My Blog
subtitle: Notes and essays
author: Your Name
language: en
url: https://example.com

# _config.solitude.yml
site:
  name: My Blog
  description: Notes and essays from Your Name
  icon: /img/avatar.png
`)}

## What to verify

- \`url\` matches the final deployed domain.
- Avatar, logo, and favicon paths are reachable from the generated site.
- The language in Hexo and the theme match your content.
- Public contact links point to stable profiles, not temporary test accounts.

## Common fields

Use Hexo root options for canonical site metadata. Use Solitude options for how that information is presented in theme modules.
`,
    `
## 用途

站点配置决定主题中反复出现的身份信息：标题、副标题、作者、语言行为和公共资源路径。

## 最小示例

${code('yaml', `
# _config.yml
title: 我的博客
subtitle: 笔记与文章
author: 你的名字
language: zh-CN
url: https://example.com

# _config.solitude.yml
site:
  name: 我的博客
  description: 你的名字的笔记与文章
  icon: /img/avatar.png
`)}

## 检查重点

- \`url\` 与最终部署域名一致。
- 头像、Logo、favicon 等路径能在生成后的站点访问。
- Hexo 和主题中的语言设置与内容语言一致。
- 公开联系方式指向稳定账号，不使用临时测试账号。

## 常见字段

站点规范信息优先写在 Hexo 根配置；Solitude 配置负责这些信息在主题模块中的展示方式。
`,
  ],
  [
    'navigation',
    'Navigation',
    '导航菜单',
    'Configure menu groups, page links, icon buttons, and external entries.',
    '配置菜单分组、页面链接、图标按钮和外部入口。',
    'Navigation',
    `
## Purpose

Navigation should answer one question quickly: where can visitors go next? Keep the primary menu short and move secondary links into groups or icon buttons.

## Example

${code('yaml', `
menu:
  home:
    name: Home
    url: /
    icon: fas fa-home
  archives:
    name: Archives
    url: /archives/
    icon: fas fa-box-archive
  about:
    name: About
    url: /about/
    icon: fas fa-user

rightside:
  readmode: true
  aside: true
`)}

## Design guidance

- Put daily reading paths first: Home, Archives, Categories, Tags, About.
- Use absolute URLs for external profiles and mark them consistently.
- Avoid placing every feature page in the top menu; use groups when the list grows.
- Keep icon names consistent with the icon library used by your theme build.
`,
    `
## 用途

导航要快速回答一个问题：访客接下来可以去哪里？主菜单保持精简，次要链接放进分组或图标按钮。

## 示例

${code('yaml', `
menu:
  home:
    name: 首页
    url: /
    icon: fas fa-home
  archives:
    name: 归档
    url: /archives/
    icon: fas fa-box-archive
  about:
    name: 关于
    url: /about/
    icon: fas fa-user

rightside:
  readmode: true
  aside: true
`)}

## 配置建议

- 把常用阅读路径放在前面：首页、归档、分类、标签、关于。
- 外部资料使用完整 URL，并保持打开方式一致。
- 不要把所有特色页面都塞进主菜单；数量变多时使用分组。
- 图标名称要与主题构建中使用的图标库保持一致。
`,
  ],
  [
    'home',
    'Homepage',
    '首页配置',
    'Configure homepage recommendations, top banner, groups, and entry modules.',
    '配置首页推荐、顶部横幅、分组和入口模块。',
    'House',
    `
## Purpose

The homepage introduces the site and guides readers toward recent or important content. Use it to show a small number of deliberate choices instead of every available module.

## Example

${code('yaml', `
home:
  top:
    enable: true
    banner:
      title: Welcome
      description: Notes, projects, and essays
    recommend:
      enable: true
      posts:
        - /posts/hello-solitude/
        - /posts/theme-notes/
  groups:
    enable: true
`)}

## Recommended workflow

1. Start with the top banner and recent posts.
2. Add recommendations only for evergreen content.
3. Add groups when readers need clear entry points.
4. Revisit the homepage after publishing several posts.
`,
    `
## 用途

首页用于介绍站点，并把读者引导到近期或重要内容。它应该展示少量有意选择的入口，而不是堆满所有可用模块。

## 示例

${code('yaml', `
home:
  top:
    enable: true
    banner:
      title: 欢迎
      description: 笔记、项目与文章
    recommend:
      enable: true
      posts:
        - /posts/hello-solitude/
        - /posts/theme-notes/
  groups:
    enable: true
`)}

## 推荐流程

1. 先启用顶部横幅和近期文章。
2. 只把长期有价值的内容放进推荐位。
3. 当读者需要明确入口时再添加分组。
4. 发布一批文章后，再回头整理首页。
`,
  ],
  [
    'sidebar',
    'Sidebar',
    '侧边栏',
    'Configure profile cards, table of contents, tags, and site information blocks.',
    '配置个人卡片、目录、标签和站点信息模块。',
    'PanelRight',
    `
## Purpose

The sidebar supports reading. It can show author identity, article navigation, popular tags, and site information, but each extra block competes with the article body.

## Example

${code('yaml', `
aside:
  enable: true
  card:
    enable: true
    name: Your Name
    description: Writing about web, design, and life
  toc:
    enable: true
  tags:
    enable: true
  siteinfo:
    enable: true
`)}

## Practical defaults

- Keep the table of contents enabled for long posts.
- Use the profile card if the site is personal or author-led.
- Disable low-value counters until they contain meaningful data.
- Check the mobile layout after adding several sidebar modules.
`,
    `
## 用途

侧边栏服务于阅读。它可以展示作者身份、文章目录、热门标签和站点信息，但每多一个模块都会分走正文注意力。

## 示例

${code('yaml', `
aside:
  enable: true
  card:
    enable: true
    name: 你的名字
    description: 记录 Web、设计与生活
  toc:
    enable: true
  tags:
    enable: true
  siteinfo:
    enable: true
`)}

## 实用默认值

- 长文章建议保留文章目录。
- 如果站点以个人作者为中心，可以启用个人卡片。
- 统计类模块在数据不足时可以先关闭。
- 增加多个侧边栏模块后，要检查移动端布局。
`,
  ],
  [
    'posts',
    'Posts',
    '文章配置',
    'Configure default post behavior, expiration reminders, related posts, and article lists.',
    '配置文章默认行为、过期提醒、相关文章和文章列表。',
    'FileText',
    `
## Purpose

Post configuration controls how article pages behave by default. Front Matter can still override many settings on a single post.

## Example

${code('yaml', `
post:
  copyright:
    enable: true
    license: CC BY-NC-SA 4.0
  expiration:
    enable: true
    days: 180
  related:
    enable: true
    limit: 6
  list:
    date: true
    tags: true
    categories: true
`)}

## When to override per post

Use Front Matter when one article needs special behavior, such as hiding the cover, disabling comments, pinning the article, or using a custom description.

<Callout type="info">
Theme defaults should describe the common case. Per-post Front Matter should describe exceptions.
</Callout>
`,
    `
## 用途

文章配置控制文章页的默认行为。单篇文章仍然可以通过 Front Matter 覆盖其中许多设置。

## 示例

${code('yaml', `
post:
  copyright:
    enable: true
    license: CC BY-NC-SA 4.0
  expiration:
    enable: true
    days: 180
  related:
    enable: true
    limit: 6
  list:
    date: true
    tags: true
    categories: true
`)}

## 什么时候按文章覆盖

当某篇文章需要特殊行为时，使用 Front Matter，例如隐藏封面、关闭评论、置顶文章或设置自定义描述。

<Callout type="info">
主题默认配置应该描述大多数文章的共同规则；单篇 Front Matter 用来描述例外。
</Callout>
`,
  ],
  [
    'appearance',
    'Appearance',
    '外观配置',
    'Configure colors, display mode, fonts, CSS prefixes, and visual defaults.',
    '配置颜色、显示模式、字体、CSS 前缀和视觉默认值。',
    'Palette',
    `
## Purpose

Appearance options shape the first impression of the site. Keep color, typography, and display mode consistent with the writing tone you want.

## Example

${code('yaml', `
style:
  color:
    main: '#3b82f6'
    dark: '#60a5fa'
  darkmode:
    enable: true
    default: auto
  font:
    enable: true
    family: Inter
  css_prefix: true
`)}

## Review checklist

- Text remains readable in light and dark modes.
- Custom fonts load before layout shift becomes noticeable.
- Theme colors pass contrast checks on buttons and links.
- CSS prefixing is enabled only when you need broader browser support.
`,
    `
## 用途

外观配置决定站点的第一印象。颜色、字体和显示模式应该和你希望呈现的写作气质保持一致。

## 示例

${code('yaml', `
style:
  color:
    main: '#3b82f6'
    dark: '#60a5fa'
  darkmode:
    enable: true
    default: auto
  font:
    enable: true
    family: Inter
  css_prefix: true
`)}

## 检查清单

- 明暗模式下文字都保持可读。
- 自定义字体不会造成明显布局跳动。
- 主题色在按钮和链接上有足够对比度。
- 只有需要更广浏览器兼容性时才开启 CSS 前缀。
`,
  ],
  [
    'advanced',
    'Advanced Configuration',
    '高级配置',
    'Configure optional advanced features such as math, verification, extensions, PWA, and word count.',
    '配置数学公式、网站验证、扩展、PWA 和字数统计等可选高级功能。',
    'SlidersHorizontal',
    `
## Purpose

Advanced options are useful after the basic site works. Enable them one at a time so problems are easy to trace.

## Example

${code('yaml', `
wordcount:
  enable: true

katex:
  enable: true
  per_page: true

verification:
  google: ''
  bing: ''

extend:
  css:
    - /css/custom.css
  js:
    - /js/custom.js

pwa:
  enable: false
`)}

## Feature notes

- Word count usually requires the Hexo word count plugin.
- Math rendering should be enabled only on pages that need formulas when possible.
- Verification tokens belong to search engines and webmaster platforms.
- Custom CSS and JS should be versioned with your blog source.
- PWA requires careful testing of cache behavior after deployment.
`,
    `
## 用途

高级配置适合在基础站点已经稳定后再启用。建议一次只打开一个功能，方便定位问题。

## 示例

${code('yaml', `
wordcount:
  enable: true

katex:
  enable: true
  per_page: true

verification:
  google: ''
  bing: ''

extend:
  css:
    - /css/custom.css
  js:
    - /js/custom.js

pwa:
  enable: false
`)}

## 功能说明

- 字数统计通常需要额外安装 Hexo 字数统计插件。
- 数学公式建议尽量按需启用。
- 网站验证字段来自搜索引擎或站长平台。
- 自定义 CSS 和 JS 应该跟随博客源码一起管理。
- PWA 会影响缓存行为，部署后需要仔细测试。
`,
  ],
];

for (const [slug, enTitle, cnTitle, enDesc, cnDesc, icon, enBody, cnBody] of configPages) {
  addPair(
    `configuration/${slug}`,
    { title: enTitle, description: enDesc, icon },
    { title: cnTitle, description: cnDesc, icon },
    enBody,
    cnBody,
  );
}

add('content-writing/meta.json', meta('Content Writing', 'Pencil', ['front-matter', 'tags-plugin']));
add('content-writing/meta.cn.json', meta('内容写作', 'Pencil', ['front-matter', 'tags-plugin']));

addPair(
  'content-writing/front-matter',
  {
    title: 'Front Matter',
    description: 'Use Front Matter to control post and page metadata in Hexo and Solitude.',
    icon: 'FilePenLine',
  },
  {
    title: 'Front Matter',
    description: '使用 Front Matter 控制 Hexo 与 Solitude 中的文章和页面元数据。',
    icon: 'FilePenLine',
  },
  `
## Purpose

Front Matter is the metadata block at the top of a Markdown file. Hexo reads it first, then Solitude uses those values to render covers, descriptions, tags, categories, comments, and page-specific behavior.

## Basic example

${code('md', `
---
title: Hello Solitude
date: 2026-01-01 10:00:00
updated: 2026-01-02 12:00:00
description: Notes from the first Solitude setup.
tags:
  - Hexo
  - Solitude
categories:
  - Blog
cover: /img/covers/hello.jpg
comments: true
---
`)}

## Common fields

- \`title\`: page or post title.
- \`date\`: publish time.
- \`updated\`: last meaningful update time.
- \`description\`: summary used by cards, SEO, and previews.
- \`tags\`: topic labels.
- \`categories\`: broader content grouping.
- \`cover\`: image used by cards and article header.
- \`comments\`: whether comments are enabled for this page.

## Page-specific notes

Feature pages often require a matching layout or data file. Keep the Front Matter focused on page identity, then put repeatable data in \`source/_data\`.
`,
  `
## 用途

Front Matter 是 Markdown 文件顶部的元数据块。Hexo 会先读取它，Solitude 再根据这些值渲染封面、描述、标签、分类、评论和页面级行为。

## 基础示例

${code('md', `
---
title: Hello Solitude
date: 2026-01-01 10:00:00
updated: 2026-01-02 12:00:00
description: 第一次配置 Solitude 的记录。
tags:
  - Hexo
  - Solitude
categories:
  - 博客
cover: /img/covers/hello.jpg
comments: true
---
`)}

## 常见字段

- \`title\`：文章或页面标题。
- \`date\`：发布时间。
- \`updated\`：最后一次有意义的更新时间。
- \`description\`：用于卡片、SEO 和预览摘要。
- \`tags\`：主题标签。
- \`categories\`：更大的内容分组。
- \`cover\`：卡片和文章头图使用的图片。
- \`comments\`：是否为当前页面启用评论。

## 页面专属说明

特色页面通常还需要匹配布局或数据文件。Front Matter 只负责页面身份；可重复的数据建议放进 \`source/_data\`。
`,
);

addPair(
  'content-writing/tags-plugin',
  {
    title: 'Tags Plugin',
    description: 'Use the Solitude tags plugin to write richer Markdown content.',
    icon: 'BadgePlus',
  },
  {
    title: '主题标签',
    description: '使用 Solitude 主题标签插件编写更丰富的 Markdown 内容。',
    icon: 'BadgePlus',
  },
  `
## Purpose

The tags plugin adds theme-aware shortcodes for content that plain Markdown cannot express comfortably. Use it for small visual blocks, not as a replacement for clean article structure.

## Install

<PmInstall name="hexo-solitude-tag" />

## Usage

After installing the plugin, restart Hexo and use the tags documented by the plugin in posts or pages.

${code('markdown', `
{% note info %}
This is a highlighted note.
{% endnote %}
`)}

## Good practice

- Prefer Markdown headings, lists, and tables for ordinary writing.
- Use theme tags when the content needs a special visual treatment.
- Keep tags balanced and avoid nesting complex blocks deeply.
- Test generated pages after upgrading the plugin.
`,
  `
## 用途

主题标签插件提供与 Solitude 视觉风格匹配的短代码，用来表达普通 Markdown 不太方便承载的内容。它适合做少量视觉增强，不应该替代清晰的文章结构。

## 安装

<PmInstall name="hexo-solitude-tag" />

## 使用

安装后重启 Hexo，即可在文章或页面中使用插件提供的标签。

${code('markdown', `
{% note info %}
这是一条高亮信息。
{% endnote %}
`)}

## 使用建议

- 普通写作优先使用 Markdown 标题、列表和表格。
- 只有需要特殊视觉呈现时再使用主题标签。
- 保持标签成对闭合，避免深层嵌套复杂块。
- 插件升级后检查生成页面是否正常。
`,
);

add('features/meta.json', meta('Features', 'BookMarked', ['music', 'brevity', 'about', 'links', 'equipment', 'message', 'recent-comments', 'bangumi', 'gallery']));
add('features/meta.cn.json', meta('特色页面', 'BookMarked', ['music', 'brevity', 'about', 'links', 'equipment', 'message', 'recent-comments', 'bangumi', 'gallery']));

const features = [
  ['music', 'Music Gallery', '音乐馆', 'music.yml', 'music', 'Configure a dedicated music page backed by a data file and optional Meting API settings.', '配置由数据文件和可选 Meting API 支持的音乐馆页面。'],
  ['brevity', 'Micro Essays', '即刻短文', 'brevity.yml', 'essay', 'Create a lightweight page for short thoughts, status updates, and fragments.', '创建用于短想法、状态更新和片段记录的轻量页面。'],
  ['about', 'About Page', '关于页', 'about.yml', 'about', 'Build a rich profile page with personal information, skills, timeline, and custom blocks.', '构建包含个人信息、技能、生涯、时间线和自定义模块的关于页。'],
  ['links', 'Friend Links', '友情链接', 'links.yml', 'links', 'Manage friend links with categories, site metadata, and application guidance.', '使用分类、站点信息和申请说明管理友情链接。'],
  ['equipment', 'Equipment', '我的装备', 'kit.yml', 'kit', 'Show devices, software, desks, or tools you use regularly.', '展示你常用的设备、软件、桌面或工具。'],
  ['message', 'Message Board', '留言板', 'message.yml', 'message', 'Create a message page for visitor notes and lightweight interactions.', '创建供访客留言和轻互动使用的留言板页面。'],
  ['recent-comments', 'Recent Comments', '最近评论', 'recent-comments.yml', 'recentcomments', 'Display recent comment activity as a standalone page.', '以独立页面展示最近评论动态。'],
  ['bangumi', 'Bangumi Page', '追番页面', 'bangumi.yml', 'bangumi', 'Publish anime watching data generated by a Bangumi or Bilibili plugin.', '发布由 Bangumi 或 Bilibili 插件生成的追番数据。'],
  ['gallery', 'Gallery Page', '画廊页面', 'gallery.yml', 'gallery', 'Organize image albums with index pages and album detail pages.', '使用索引页和详情页组织图片相册。'],
];

for (const [slug, enTitle, cnTitle, dataFile, route, enDesc, cnDesc] of features) {
  addPair(
    `features/${slug}`,
    { title: enTitle, description: enDesc },
    { title: cnTitle, description: cnDesc },
    `
## Purpose

${enDesc}

## Create the page

Create a page under \`source/${route}/index.md\` and set a clear title.

${code('md', `
---
title: ${enTitle}
date: 2026-01-01
type: ${route}
---
`)}

## Create the data file

Put repeatable content in \`source/_data/${dataFile}\`.

${code('yaml', `
items:
  - name: Example item
    description: Replace this with your own content.
    link: https://example.com
`)}

## Theme configuration

Enable the page module in the theme configuration when the feature requires a switch.

${code('yaml', `
pages:
  ${route}:
    enable: true
    data: ${dataFile}
`)}

## File structure

<Files>
  <File name="Blog Directory" />
  <File name="source" />
  <File name="_data" />
  <File name="${dataFile}" />
  <File name="${route}" />
  <File name="index.md" />
</Files>

## Field reference

- \`name\`: display name.
- \`description\`: short explanatory text.
- \`link\`: optional external or internal URL.
- \`cover\`: optional image path when the page layout supports covers.
- \`tags\`: optional labels used for grouping or filtering.

<Callout type="success">
Start with one or two items, confirm the page renders, then expand the data file.
</Callout>
`,
    `
## 用途

${cnDesc}

## 创建页面

在 \`source/${route}/index.md\` 下创建页面，并设置清晰标题。

${code('md', `
---
title: ${cnTitle}
date: 2026-01-01
type: ${route}
---
`)}

## 创建数据文件

把可重复内容放进 \`source/_data/${dataFile}\`。

${code('yaml', `
items:
  - name: 示例项目
    description: 替换为你的实际内容。
    link: https://example.com
`)}

## 主题配置

如果该页面需要开关，在主题配置中启用对应模块。

${code('yaml', `
pages:
  ${route}:
    enable: true
    data: ${dataFile}
`)}

## 文件结构

<Files>
  <File name="博客目录" />
  <File name="source" />
  <File name="_data" />
  <File name="${dataFile}" />
  <File name="${route}" />
  <File name="index.md" />
</Files>

## 字段参考

- \`name\`：展示名称。
- \`description\`：简短说明文字。
- \`link\`：可选的外部或内部链接。
- \`cover\`：页面布局支持时使用的封面图片路径。
- \`tags\`：用于分组或筛选的可选标签。

<Callout type="success">
建议先写一两个项目，确认页面能正常渲染，再继续扩展数据文件。
</Callout>
`,
  );
}

add('integrations/meta.json', meta('Integrations', 'Plug', ['search', 'comments']));
add('integrations/search/meta.json', meta('Search', 'Search', ['local-search', 'algolia', 'docsearch']));
add('integrations/comments/meta.json', meta('Comments', 'MessageCirclePlus', ['twikoo', 'waline', 'valine', 'artalk', 'giscus']));
add('integrations/meta.cn.json', meta('集成服务', 'Plug', ['search', 'comments']));
add('integrations/search/meta.cn.json', meta('搜索', 'Search', ['local-search', 'algolia', 'docsearch']));
add('integrations/comments/meta.cn.json', meta('评论系统', 'MessageCirclePlus', ['twikoo', 'waline', 'valine', 'artalk', 'giscus']));

const searchPages = [
  ['local-search', 'Local Search', '本地搜索', 'hexo-generator-search', 'Local search builds an index during Hexo generation and does not require a hosted search service.', '本地搜索在 Hexo 生成阶段构建索引，不依赖托管搜索服务。'],
  ['algolia', 'Algolia Search', 'Algolia 搜索', 'hexo-algolia', 'Algolia is useful for larger sites that need fast hosted search and ranking control.', 'Algolia 适合内容较多、需要托管搜索和排序控制的站点。'],
  ['docsearch', 'DocSearch', 'DocSearch 搜索', '@docsearch/js', 'DocSearch is designed for documentation sites that qualify for Algolia DocSearch crawling.', 'DocSearch 面向符合 Algolia DocSearch 抓取条件的文档站。'],
];

for (const [slug, enTitle, cnTitle, pkg, enDesc, cnDesc] of searchPages) {
  addPair(
    `integrations/search/${slug}`,
    { title: enTitle, description: enDesc },
    { title: cnTitle, description: cnDesc },
    `
## Purpose

${enDesc}

## Install

<PmInstall name="${pkg}" />

## Theme configuration

${code('yaml', `
search:
  enable: true
  type: ${slug}
`)}

## Hexo configuration

${code('yaml', `
search:
  path: search.xml
  field: post
  content: true
`)}

## Verify

- Generate the site and confirm the search index file exists.
- Search for a post title, a tag, and a phrase from the article body.
- Confirm private drafts are not included in the generated index.
`,
    `
## 用途

${cnDesc}

## 安装

<PmInstall name="${pkg}" />

## 主题配置

${code('yaml', `
search:
  enable: true
  type: ${slug}
`)}

## Hexo 配置

${code('yaml', `
search:
  path: search.xml
  field: post
  content: true
`)}

## 验证

- 生成站点并确认搜索索引文件存在。
- 分别搜索文章标题、标签和正文短语。
- 确认私有草稿没有进入生成后的索引。
`,
  );
}

const commentPages = [
  ['twikoo', 'Twikoo', 'Twikoo', 'Twikoo works well when you want a comment system with a self-managed backend or cloud function deployment.', 'Twikoo 适合需要自托管后端或云函数部署的评论系统。'],
  ['waline', 'Waline', 'Waline', 'Waline provides comments with account systems, reactions, and flexible deployment choices.', 'Waline 提供账号、反应和灵活部署能力。'],
  ['valine', 'Valine', 'Valine', 'Valine is a lightweight comment option based on LeanCloud.', 'Valine 是基于 LeanCloud 的轻量评论方案。'],
  ['artalk', 'Artalk', 'Artalk', 'Artalk is a self-hosted comment system with moderation and notification features.', 'Artalk 是带审核和通知能力的自托管评论系统。'],
  ['giscus', 'Giscus', 'Giscus', 'Giscus uses GitHub Discussions and works well for developer-oriented sites.', 'Giscus 使用 GitHub Discussions，适合开发者向站点。'],
];

for (const [slug, enTitle, cnTitle, enDesc, cnDesc] of commentPages) {
  addPair(
    `integrations/comments/${slug}`,
    { title: `${enTitle} Comments`, description: enDesc },
    { title: `${cnTitle} 评论`, description: cnDesc },
    `
## Purpose

${enDesc}

## Backend setup

Create or configure the provider backend first. Keep the provider dashboard open while editing the theme configuration so IDs and domains can be copied exactly.

## Theme configuration

${code('yaml', `
comment:
  enable: true
  use: ${slug}
  ${slug}:
    enable: true
    envId: ''
    serverURL: ''
`)}

## Page behavior

Comments can usually be controlled globally and then overridden by Front Matter.

${code('md', `
---
title: Example Post
comments: true
---
`)}

## Verify

- The comment container appears on article pages.
- The browser console has no provider initialization errors.
- The configured domain matches the deployed site domain.
- Test comments can be created, loaded, and moderated.
`,
    `
## 用途

${cnDesc}

## 配置后端

先创建或配置服务端。编辑主题配置时建议打开服务商后台，确保 ID、域名和服务地址能准确复制。

## 主题配置

${code('yaml', `
comment:
  enable: true
  use: ${slug}
  ${slug}:
    enable: true
    envId: ''
    serverURL: ''
`)}

## 页面行为

评论通常可以先全局开启，再通过 Front Matter 对单篇文章覆盖。

${code('md', `
---
title: 示例文章
comments: true
---
`)}

## 验证

- 文章页能看到评论容器。
- 浏览器控制台没有服务初始化错误。
- 配置的域名与部署域名一致。
- 测试评论可以发布、加载和审核。
`,
  );
}

add('faq/meta.json', meta('FAQ', 'MessageCircleQuestionMark', ['common', 'troubleshooting']));
add('faq/meta.cn.json', meta('常见问题', 'MessageCircleQuestionMark', ['common', 'troubleshooting']));

addPair(
  'faq/common',
  {
    title: 'Common Questions',
    description: 'Answers to frequent Solitude setup and configuration questions.',
  },
  {
    title: '常见问题',
    description: 'Solitude 安装和配置中的高频问题。',
  },
  `
## The theme is not applied

Check that Hexo's root configuration contains \`theme: solitude\`. Then run \`hexo clean\` before generating again.

## Images do not load

Use paths that exist under the generated public site. When an image is stored in \`source/img/avatar.png\`, reference it as \`/img/avatar.png\`.

## A feature page is blank

Confirm both parts exist: the page file under \`source/<page>/index.md\` and the matching data file under \`source/_data\`.

## Search has no results

Regenerate the site and confirm the search index file exists. For hosted search, also check that crawler credentials and index names match the provider dashboard.
`,
  `
## 主题没有生效

检查 Hexo 根配置中是否存在 \`theme: solitude\`。然后运行 \`hexo clean\` 再重新生成。

## 图片无法加载

使用生成后站点中真实存在的路径。如果图片放在 \`source/img/avatar.png\`，引用路径应写成 \`/img/avatar.png\`。

## 特色页面是空白

确认两部分都存在：\`source/<page>/index.md\` 下的页面文件，以及 \`source/_data\` 下对应的数据文件。

## 搜索没有结果

重新生成站点并确认搜索索引文件存在。托管搜索还要检查爬虫凭据和索引名称是否与服务商后台一致。
`,
);

addPair(
  'faq/troubleshooting',
  {
    title: 'Troubleshooting',
    description: 'A practical checklist for build, layout, and integration problems.',
  },
  {
    title: '故障排查',
    description: '构建、布局和集成问题的实用检查清单。',
  },
  `
## Build errors

- Run \`hexo clean\` before generating.
- Check YAML indentation in \`_config.yml\` and \`_config.solitude.yml\`.
- Temporarily disable the last feature you enabled.
- Confirm required plugins are installed in the blog project.

## Layout problems

- Check whether a custom CSS file overrides theme variables.
- Test with a small number of sidebar and homepage modules.
- Make sure image dimensions are reasonable for the layout.

## Integration problems

- Verify provider IDs, domains, and API endpoints.
- Test on the deployed domain when the provider requires domain allowlists.
- Check the browser console and network panel before changing unrelated options.
`,
  `
## 构建错误

- 生成前先运行 \`hexo clean\`。
- 检查 \`_config.yml\` 和 \`_config.solitude.yml\` 的 YAML 缩进。
- 临时关闭最近启用的功能。
- 确认所需插件已经安装在博客项目中。

## 布局问题

- 检查自定义 CSS 是否覆盖了主题变量。
- 先用少量侧边栏和首页模块测试。
- 确认图片尺寸适合当前布局。

## 集成问题

- 核对服务商 ID、域名和 API 地址。
- 如果服务商要求域名白名单，需要在部署域名上测试。
- 修改无关配置前，先查看浏览器控制台和网络请求。
`,
);

await fs.rm(root, { recursive: true, force: true });
for (const [file, content] of files) {
  const target = path.join(root, file);
  await fs.mkdir(path.dirname(target), { recursive: true });
  await fs.writeFile(target, content);
}
await fs.rm(path.join(root, 'index.mdx'), { force: true });
await fs.rm(path.join(root, 'index.cn.mdx'), { force: true });

console.log(`Wrote ${files.size} files to ${root}`);
