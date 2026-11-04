# Solitude Docs

Solitude 的 Astro、Hugo 与 Hexo 中英文使用文档。默认进入 Astro，保留旧版链接。

| 版本 | 文档入口 | 主题仓库 | 在线预览 |
| --- | --- | --- | --- |
| Astro | [入门](content/docs/astro/getting-started/introduction.cn.mdx) | [astro-solitude](https://github.com/everfu/astro-solitude) | [演示](https://astro-solitude.efu.me/) |
| Hugo | [入门](content/docs/hugo/getting-started/introduction.cn.mdx) | [hugo-solitude](https://github.com/everfu/hugo-solitude) | [演示](https://hugo-solitude.efu.me/) |
| Hexo | [入门](content/docs/hexo/getting-started/introduction.cn.mdx) | [hexo-theme-solitude](https://github.com/everfu/hexo-theme-solitude) | [演示](https://solitude-demo.efu.me/) |

## 文档内容

按入门、配置、写作、特色页面、集成、部署、迁移与升级、常见问题和参考组织。使用指南保留步骤与完整示例，默认参数集中在参考页。

- `*.mdx`：英文；`*.cn.mdx`：简体中文。
- 每个目录的 `meta.json` / `meta.cn.json` 管理导航。
- 三版配置与组件语法独立，以各主题源码为准。
- `/docs` 默认 Astro；历史无版本路径继续映射到 Hexo。

## 本地开发

使用满足 Next.js 16 要求的 Node.js 与 pnpm。

```sh
pnpm install
pnpm dev
```

默认访问 `http://localhost:3000`，中文入口为 `/cn`。

```sh
pnpm docs:check   # 文档配对、导航、链接、锚点与旧地址
pnpm types:check  # MDX、路由与类型
pnpm lint
pnpm build
pnpm start
```

## 项目结构

| 目录 | 内容 |
| --- | --- |
| `content/docs/{astro,hugo,hexo}` | 三版双语文档 |
| `src/app` | 首页、文档路由、搜索与 AI 接口 |
| `src/lib` | 版本配置、内容源与 SEO |
| `public` | 图片与静态资源 |

设置 `SITE_URL` 生成完整站点地址。AI 问答需要 `AI_GATEWAY_API_KEY` 与 `AI_GATEWAY_MODEL`，检索按当前文档版本过滤。普通搜索无需 AI 配置。

主题问题提交到对应主题仓库；本站负责文档与阅读界面。内容示例来源于各主题仓库；本站基于 [GPL-3.0](LICENSE)。
