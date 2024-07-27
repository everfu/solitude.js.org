---
title: Quick Start
description: Quick Start using Hexo Theme Solitude
---

# Installation

## Setting up Hexo

If you don't have a Hexo blog yet, please follow the [Hexo official documentation](https://hexo.io/docs/) for installation and site creation.

## Author's Note

> *Please read the documentation carefully. The usage of the theme can be found in the documentation. `Do not waste others' time`.*

Please note that the configuration in `_config.solitude.yml` takes precedence over the theme's `_config.yml`. So, after updating the theme, compare the content of the `theme/solitude/_config.yml` file with the original configuration file. Usually, the release notes will provide specific instructions or a diff of the configuration file versions. Make the necessary changes to the original configuration file accordingly.

This guide does not cover all configuration explanations, but almost every configuration has comments in the theme configuration. You can refer to both the guide and the comments for usage reference.

In addition, this guide only includes instructions within the scope of the theme. If it involves the usage of Hexo or Hexo plugins, please refer to their respective documentation.

If you find any bugs in the theme or want to add new features, please leave a message in the [issues](https://github.com/everfu/Hexo-theme-solitude/issues). For usage-related questions, please ask in the [Discussions](https://github.com/orgs/everfu/discussions).

## Theme Installation

:::tabs key=install
== GitHub
:::code-group
```bash [Stable]
git clone -b main https://github.com/everfu/hexo-theme-solitude.git themes/solitude
```

```bash [Dev]
git clone -b dev https://github.com/everfu/hexo-theme-solitude.git themes/solitude
```

```bash [Upgrade]
git pull
```
== Gitee
:::code-group
```bash [Stable]
git clone -b main https://gitee.com/everfu/hexo-theme-solitude themes/solitude
```

```bash [Dev]
git clone -b dev https://gitee.com/everfu/hexo-theme-solitude themes/solitude
```

```bash [Upgrade]
git pull
```
== npm
:::code-group
```bash [Stable]
npm install hexo-theme-solitude
```

```bash [Upgrade]
npm update hexo-theme-solitude
```
:::

## Applying the Theme

Modify the root configuration file `_config.yml` of Hexo and change the theme to `solitude`.

```yaml [_config.yml]
theme: solitude
```

## Installing Dependencies

The theme uses `Pug` and `Stylus` and requires installing their respective renderers.

```shell [Terminal]
npm install hexo-renderer-pug hexo-renderer-stylus --save
```

## Language Configuration

Modify the site configuration file `_config.yml` (not the theme configuration file).

Supported languages: `en` (American English), `zh-CN` (Simplified Chinese), `zh-TW` (Traditional Chinese)

```yaml [_config.yml]
language: zh-CN # Language
```

## Local Server Start
```shell [Terminal]
hexo server
```

::: danger Usage Note
If you encounter display caching issues, you can try `hexo clean` to clear the cache and start again.
:::

## Optimization Configuration

Run the following command in the blog's root directory to copy the theme's configuration file to the root directory for better theme configuration.

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

::: info Tip
- The configuration in the root directory's `_config.solitude.yml` takes precedence. Therefore, the content of this file's configuration items will be used during rendering.
- When updating the theme, there may be configuration changes. Please pay attention to the update instructions, as you may need to manually modify `_config.solitude.yml`.
- To check if the overridden configuration has taken effect, you can use `hexo generate --debug` to view the command line output.
:::

---
## Video Tutorial

If you are unable to successfully configure using the documentation, there is a video tutorial available: [Solitude Theme Usage Tutorial](https://space.bilibili.com/1329819902/channel/seriesdetail?sid=3761808).

## Version Number Explanation

The version number of this project is in the format `X.Y.Z`, but it has some differences from the common [Semantic Versioning Specification](https://semver.org/). The specific explanations are as follows:

- `X`: Redesign at the product level, including major framework refactoring, significant functional changes, and configuration changes. Please read the relevant documentation before updating.

- `Y`: Contains medium to large new features and non-backward compatible functional changes and configuration changes. Updating this version may require modifying configurations or removing some original features.

- `Z`: Includes bug fixes, small new features, and backward-compatible updates to original features and configuration changes. In principle, updating this version does not require any additional actions.
