# Solitude Docs

Solitude Docs 是 [hexo-theme-solitude](https://github.com/everfu/hexo-theme-solitude) 主题的配置文档站点。

这里整理了 Solitude 4.0 的安装、升级、主题配置、浏览器扩展 API、内容写作、功能页面、搜索与评论系统集成等说明，帮助用户在 Hexo 博客中配置并使用 Solitude。

## 关于 Solitude

Solitude 是一个面向个人博客的 Hexo 主题，提供安静的阅读体验、清晰的信息层级，以及可按需开启的首页模块、侧边栏、文章页功能、特色页面和第三方服务集成。

- 主题仓库：[everfu/hexo-theme-solitude](https://github.com/everfu/hexo-theme-solitude)
- 示例站点：[Solitude Demo](https://solitude-demo.efu.me/)
- 发布页面：[Releases](https://github.com/everfu/hexo-theme-solitude/releases)
- 4.0 发布说明：[Solitude v4.0.0](https://github.com/everfu/hexo-theme-solitude/releases/tag/v4.0.0)

## 文档内容

本项目的文档内容位于 `content/docs`，包含中英文两个版本：

- `getting-started`：主题介绍、安装与首次运行。
- `getting-started/upgrade-v4`：从 Solitude 3.x 升级到 4.0。
- `configuration/browser-api`：4.0 浏览器扩展 API 与 PJAX 生命周期。
- `content-writing`：文章 Front Matter 与标签插件。
- `features`：关于、友链、音乐馆、留言板等内建页面，以及相册、追番第三方插件集成。
- `integrations`：搜索与评论系统集成，包括本地搜索、Algolia、DocSearch、Twikoo、Waline、Artalk、Giscus、Valine 等。

## 技术栈

本项目是基于 Next.js 与 Fumadocs 构建的文档站。

- Next.js
- React
- Fumadocs UI
- Fumadocs MDX
- TypeScript

## 本地开发

安装依赖：

```bash
pnpm install
```

启动开发服务器：

```bash
pnpm dev
```

默认访问地址：

```text
http://localhost:3000
```

## 常用命令

```bash
pnpm dev          # 启动开发服务器
pnpm build        # 构建生产版本
pnpm start        # 启动生产服务器
pnpm lint         # 运行 ESLint
pnpm types:check  # 生成 Fumadocs/Next 类型并运行 TypeScript 检查
```

## 项目结构

```text
content/docs        文档内容
public              静态资源与文档图片
src/app             Next.js App Router 页面与接口
src/components      页面组件与 MDX 组件
src/lib             站点配置、SEO、数据源与共享工具
source.config.ts    Fumadocs MDX 配置
```

## 说明

这个仓库维护的是 Solitude 主题的文档站，不是主题源码本身。主题问题、功能实现与版本发布请前往 [hexo-theme-solitude](https://github.com/everfu/hexo-theme-solitude) 仓库查看。

## 许可证

本项目基于 GNU General Public License v3.0 授权，详情请查看 [LICENSE](LICENSE)。
