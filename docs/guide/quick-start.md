---
title: 快速开始
description: 快速开始使用 Hexo Theme Solitude
---

# 安装

## 搭建 Hexo

如果你还没有 Hexo 博客，请按照 [Hexo 官方文档](https://hexo.io/zh-cn/docs/) 进行安装、建站。

## 作者的话

> *请仔细阅读文档，主题的使用在文档中都能找到，请先查找文档，`不要浪费他人时间`。*

请注意 `_config.solitude.yml` 中的配置优先级大于主题的 `_config.yml` ，所以更新主题后需要比对主题文件夹中的 `theme/solitude/_config.yml` 文件内容，一般在 [release](https://github.com/everfu/hexo-theme-solitude/releases) 的说明里会特别提示或给出配置文件版本对比 diff，同步修改原配置文件即可。

本指南并未包含所有配置的说明，但几乎每个配置在主题配置中都有注释，你可以结合指南和注释一起参考使用。

此外，本指南仅包含主题范围内的使用说明。如果涉及到 Hexo 的使用或 Hexo 插件的使用，请参阅它们各自的文档。

若发现主题有 Bug 或者想要新增功能，请在 [issues](https://github.com/everfu/Hexo-theme-solitude/issues) 留言，使用上的问题请在 [Discussions](https://github.com/orgs/everfu/discussions) 中提问。


## 主题安装

:::tabs key=install
== GitHub
:::code-group
```bash [稳定版]
git clone -b main https://github.com/everfu/hexo-theme-solitude.git themes/solitude
```

```bash [开发版]
git clone -b dev https://github.com/everfu/hexo-theme-solitude.git themes/solitude
```

```bash [升级方法]
git pull
```
== Gitee
:::code-group
```bash [稳定版]
git clone -b main https://gitee.com/everfu/hexo-theme-solitude themes/solitude
```

```bash [开发版]
git clone -b dev https://gitee.com/everfu/hexo-theme-solitude themes/solitude
```

```bash [升级方法]
git pull
```
== npm
:::code-group
```bash [稳定版]
npm install hexo-theme-solitude
```

```bash [升级方法]
npm update hexo-theme-solitude
```
:::

## 应用主题

修改 hexo 根目录配置文件 `_config.yml`，把主题改为 `solitude`。​

```yaml [_config.yml]
theme: solitude
```

## 安装依赖

主题使用了 `Pug` 与 `Stylus`，需要额外安装各自的渲染器。

```shell [Terminal]
npm install hexo-renderer-pug hexo-renderer-stylus --save
```

## 语言配置

修改站点配置文件 `_config.yml`（不是主题配置文件）。

支持语言：`en` (美式英文) 、 `zh-CN` (简体中文)、`zh-TW` (繁体中文)

```yaml [_config.yml]
language: zh-CN # 语言
```

## 本地启动
```shell [Terminal]
hexo server
```

::: danger 使用注意
如果遇到展示缓存问题，可以尝试 `hexo clean` 清除缓存再次启动。
:::

## 优化配置

在博客根目录运行以下命令，将主题的配置文件复制到根目录，以便更好地配置主题。

:::tabs
== Git
:::code-group
```bash [Mac/Linux]
cp -rf ./themes/solitude/_config.yml ./_config.solitude.yml
```

```bash [Windows]
copy .\themes\solitude\_config.yml .\_config.solitude.yml
```
== npm
:::code-group
```bash [Mac/Linux]
cp -rf ./node_modules/hexo-theme-solitude/_config.yml ./_config.solitude.yml
```

```bash [Windows]
copy .\node_modules\hexo-theme-solitude\_config.yml .\_config.solitude.yml
```
:::

::: info 提示
- 根目录的 `_config.solitude.yml` 的配置都是高优先级，因此，渲染时会优先采用此文件的配置项内容。
- 在更新主题时可能会存在配置变更，请注意更新说明，可能需要手动对 `_config.solitude.yml` 同步修改。
- 想查看覆盖配置有没有生效，可以通过 `hexo generate --debug` 查看命令行输出。
:::

---
## 视频教程

如果无法通过文档成功配置，这里有视频 [Solitude 主题使用教程](https://space.bilibili.com/1329819902/channel/seriesdetail?sid=3761808)。

## 版本号释义

本项目的版本号为 `X.Y.Z` 格式，但与常见的 [语义化版本号规范](https://semver.org/lang/zh-CN/) 有部分区别，具体释义如下：

- `X`：产品层面的重新设计，包含重大框架重构，会涉及大范围功能变更与配置变更，更新前必须阅读相关文档

- `Y`：包含中大型新功能，及无法向下兼容的功能变更与配置变更，更新该版本号可能会需要修改配置或者移除一些原功能

- `Z`：不仅包含 BUG 修复、小型新功能，还会包含可以向下兼容的原功能更新与配置变更，原则上更新该版本号无需额外动作