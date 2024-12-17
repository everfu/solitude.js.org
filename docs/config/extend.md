---
title: Extend Configuration
description: Configuration for Hexo Theme Solitude Extensions.
---

# Extend Configuration

## Footer

:::code-group
```yaml [Upper Icons]
# Bottom row of icons
information:
  left: # Left side icons
    Github: https://github.com/efuo || st-github-line # Name: link || icon
    Mail: mailto:o@efu.me || st-mail-line
  right: # Right side icons
    Bilibili: https://space.bilibili.com/1329819902 || st-bilibili-line
    Douyin: https://v.douyin.com/iJsLc8jt/ || st-douyin-fill
```

```yaml [Bottom Navigation Bar]
# Bottom navigation bar
group: # From left to right
  Navigation:
    Archives: /archives/
    Categories: /categories/
    Tags: /tags/
  Services:
    Alibaba Cloud: https://aliyun.com/
    51la Statistics: https://v6.51.la/
    Baidu Statistics: https://tongji.baidu.com/
  Support:
    Donation Records: /about/
  Agreements:
    Cookies: /cookies/
    User Agreement: /privacy/
    Copyright Agreement: /copyright/
```

```yaml [Others]
# Random links at the bottom
# tip: The links here are displayed randomly, not fixed
# warning: links must be configured before opening
randomlink: false
# Privacy assistant right pop-up window, fill in the path to open
privacy: # /privacy/
# Copyright
license: # /license/
# Footer right link, such as: ICP filing number, public security filing number, etc.
links:
  # In order for the theme to get more support, it is recommended to keep the theme link
  - name: Theme
    url: https://github.com/everfu/hexo-theme-solitude
  - name: Subscribe
    url: /atom.xml
```
:::

::: danger Advice
I hope you can keep the theme link. I once thought about embedding it, but it didn't feel right, so I chose this way. I still hope you can support my work.
:::

## 404 Page

> Custom 404 page

```yaml
# 404 page
errorpage:
  # Image
  img: https://7.isyangs.cn/1/65eb24f94fcbd-1.gif
  # Text
  text: =awa= Page not found
  # Recommended article list
  recommendList: true
```

## Music Capsule

> Music player displayed in the lower left corner, fill in the corresponding playlist id and service provider according to the annotations.

```yaml
# Music capsule
capsule:
  enable: false
  id: 8407304077 # playlist id
  server: netease # Music service provider. netease: Netease Cloud / tencent: Tencent / kugou: Kugou / xiaomi: Xiaomi / baidu: Baidu
  type: playlist # Type of playlist. song: Single / playlist: Playlist / album: Album / artist: Singer
```

::: danger Note
QQ Music has changed its interface and cannot be played.
:::

## Quick Menu

```yaml
keyboard:
  enable: false # Whether to enable keyboard control
  list:
  # name: Key name
  # key: Key
  # func: Function
  # sco: sco built-in method
  # url: Jump link
  #  - name: Disable shortcut function
  #    key: K
  #    func: keyboard
  #  - name: Open console
  #    key: A
  #    sco: showConsole
  #  - name: Play/Pause music
  #    key: M
  #    sco: musicToggle
  #  - name: Open friendly links
  #    key: L
  #    url: /links/
```

## Console Extension

```yaml
# Console extension: Latest comments + Tags + Articles
console_plus: false
```

## Lazy Loading

> After enabling lazy loading, images will be loaded when they enter the visible area, which can reduce the webpage size and improve webpage loading speed.

```yaml
# Lazy loading
lazyload:
  enable: false
  # Loading display image
  placeholder: /img/loading.gif
  # Loading failed display image
  errorimg: /img/error_load.png
```

## Loading Animation

> A page overlay will be displayed during page loading and disappear when loading is complete.

```yaml
# Loading animation
loading:
  # Global loading animation
  fullpage: false
  # Top loading capsule
  pace: true
```

## Code Highlight

> After enabling code highlighting, code blocks will have corresponding language prompts, but it will increase the webpage size. If you don't need this feature, you can disable it.

```yaml
# Enhanced code highlight
highlight:
  enable: true
  limit: 200 # Code line limit
  copy: true # Whether to enable the copy button
  expand: true # Whether to expand by default
  # Code block style
  theme: default # default: Default / mac: Apple terminal
  # Code color
  color: default # default: Default / vscode / solarized-dark / solarized-light / dracula / monokai
```

## Image Lightbox

> Choose between fancybox and mediumZoom. Fancybox must be disabled to enable mediumZoom.

```yaml
# image lightbox
lightbox: true # Whether to enable image lightbox

# fancybox
# https://fancyapps.com/fancybox/
fancybox: true

# mediumZoom
mediumZoom: false
```

## Open Graph

> When enabled, the website will automatically add Open Graph tags for social sharing.

```yaml
# Open Graph
# https://ogp.me/
# https://developers.facebook.com/docs/sharing/webmasters/
Opengraph:
  enable: false
  options:
    # twitter_card:
    # twitter_image:
    # twitter_id:
    # twitter_site:
    # google_plus:
    # fb_admins:
    # fb_app_id:
```

## Word Count

> Requires installation of `hexo-wordcount` plugin.

```yaml
# Word count
wordcount: false
```

## Busuanzi

```yaml
# Access statistics
busuanzi: false
```

## Math Formula

The theme supports **Latex** mathematical formulas. To use mathematical formulas, add the following to the **Front-Matter** of the article.

Install the [hexo-renderer-markdown-it](https://github.com/EmptyDreams/swpp-backends), [@renbaoshuo/markdown-it-katex](https://github.com/renbaoshuo/markdown-it-katex) plugins, and complete the setup with reference to the plugin documentation:

```bash
npm un hexo-renderer-marked --save
npm i hexo-renderer-markdown-it @renbaoshuo/markdown-it-katex
```

Configure and enable the katex support in the configuration file:

```yaml [_config.solitude.yml]
# --------------------------- start ---------------------------
# Katex
# Latex formula support
katex:
  enable: false
  # Whether to load on each page
  per_page: false
  # Whether to enable copy formula
  copytex: false
# --------------------------- end ---------------------------
```

## Site Verification

```yaml
# Site verification
verify_site:
  # - name: google-site-verification
  #   content: xxxxxx
  # - name: baidu-site-verification
  #   content: xxxxxxx
```

## CSS Prefix

```yaml
# CSS prefix
css_prefix: false
```

## Inject

```yaml
# Insert code before </head> and before </body>
extends:
  head: # Insert in head
    # - <script src="https://cdn.bootcdn.net/ajax/libs/pace/1.2.4/pace.min.js"></script>
  body: # Insert in body
```

## PWA

PWA stands for Progressive Web App, which aims to achieve a user experience similar to native apps through various web technologies. By using existing web technologies, such as offline caching and immersive experiences, PWA can bridge the gap between web applications and native applications.

[SWPP Official Documentation & Project Address](https://github.com/EmptyDreams/swpp-backends)

1. Install the plugin
    ```bash
    npm install hexo-swpp swpp-backends --save
    ```
2. Enable theme configuration
    ```yaml
    # PWA
    pwa:
        enable: false
        manifest: /manifest.json # path to manifest.json file
        theme_color: "#006a73" # theme color
        mask_icon: /img/pwa/favicon.ico # mask icon
        apple_touch_icon: /img/pwa/favicon.ico # apple touch icon
        bookmark_icon: /img/pwa/favicon.ico # bookmark icon
        favicon_32_32: /img/pwa/favicon_32.ico # 32x32 icon
        favicon_16_16: /img/pwa/favicon_16.ico # 16x16 icon
    ```
3. Create a `sw-rules.js` file in the root directory and add the following content.

    **Provide an SWPP file**
    ```js
    // SWPP configuration
    module.exports.config = {
      serviceWorker: {
        escape: 0,
        cacheName: 'SolitudeCache',
        debug: false,
      },
      register: {
        onsuccess: undefined,
        onerror: () =>
          console.error('Service Worker registration failed! It may be because your browser does not support this feature!'),
        builder: (root, framework, pluginConfig) => {
          const { onerror, onsuccess } = pluginConfig.register;
          return `
                <script>
                    (() => {
                        const sw = navigator.serviceWorker;
                        const error = ${onerror && onerror.toString()};
                        if (!sw?.register('${new URL(root).pathname}sw.js')
                            ${onsuccess ? `?.then(${onsuccess.toString()})` : ""}
                            ?.catch(error)
                        ) error()
                    })()
                </script>`;
        },
      },
      dom: {
        onsuccess: () => {
          caches
            .match(location.href)
            .then((res) => {
              if (res)
                res.json().then((json) => {
                  utils &&
                    utils.snackbarShow(
                      `Cache refreshed, updated to the latest content of version ${json.global + '.' + json.local}`,
                      false,
                      2000
                    );
                });
              else console.info('Cache not found');
            })
            .catch((error) => console.error('Cache matching error', error));
        },
      },
      json: {
        maxHtml: 15,
        charLimit: 1024,
        merge: [],
        exclude: {
          localhost: [],
          other: [],
        },
      },
      external: {
        timeout: 5000,
        concurrencyLimit: 100,
        js: [],
        stable: [
          /^https:\/\/npm\.elemecdn\.com\/[^/@]+\@[^/@]+\/[^/]+\/[^/]+$/,
          /^https:\/\/cdn\.cbd\.int\/[^/@]+\@[^/@]+\/[^/]+\/[^/]+$/,
          /^https:\/\/cdn\.jsdelivr\.net\/npm\/[^/@]+\@[^/@]+\/[^/]+\/[^/]+$/,
        ],
        replacer: (srcUrl) => {
          if (srcUrl.startsWith('https://cdn.jsdelivr.net/npm/')) {
            const pathname = new URL(srcUrl).pathname;
            return [
              srcUrl,
              `https://cdn.cbd.int/${pathname}`,
              `https://npm.elemecdn.com/${pathname}`,
              `https://fastly.jsdelivr.net/npm/${pathname}`,
            ];
          } else {
            return srcUrl;
          }
        },
      },
    };

    // Cache rules
    module.exports.cacheRules = {
      simple: {
        clean: true,
        search: false,
        match: (url, $eject) =>
          url.host === $eject.domain && ['/404.html'].includes(url.pathname),
      },
      cdn: {
        clean: true,
        match: (url) =>
          [
            'cdn.cbd.int',
            'lf26-cdn-tos.bytecdntp.com',
            'lf6-cdn-tos.bytecdntp.com',
            'lf3-cdn-tos.bytecdntp.com',
            'lf9-cdn-tos.bytecdntp.com',
            'cdn.staticfile.org',
            'npm.elemecdn.com',
          ].includes(url.host) &&
          url.pathname.match(/\.(js|css|woff2|woff|ttf|cur)$/),
      },
    };

    module.exports.getSpareUrls = (srcUrl) => {
      if (srcUrl.startsWith('https://npm.elemecdn.com')) {
        return {
          timeout: 3000,
          list: [
            srcUrl,
            `https://fastly.jsdelivr.net/${new URL(srcUrl).pathname}`,
          ],
        };
      }
    };

    module.exports.ejectValues = (hexo, rules) => {
      return {
        domain: {
          prefix: 'const',
          value: new URL(hexo.config.url).host,
        },
      };
    };

    module.exports.skipRequest = (request) => request.url.startsWith("https://i0.hdslb.com") ||
      request.url.startsWith('https://meting.qjqq.cn') ||
      request.url.startsWith('https://api.i-meto.com');
    ```

4. Create a `manifest.json` file in the `source` folder and add the following content. Here is an example:
  ```json
  {
      "name": "Solitude",
      "short_name": "Solitude",
      "theme_color": "#0E83CD",
      "background_color": "#0E83CDdd",
      "description": "An elegant Hexo theme that supports lazy loading, PWA, Latex, and multiple comment systems.",
      "display": "fullscreen",
      "scope": "/",
      "start_url": "/",
      "lang": "en-US",
      "id": "/",
      "icons": [
        {
          "src": "/img/pwa/favicon_16.png",
          "sizes": "16x16",
          "type": "image/png",
          "purpose": "any"
        },
        {
          "src": "/img/pwa/favicon_16.png",
          "sizes": "16x16",
          "type": "image/png",
          "purpose": "maskable"
        },
        {
          "src": "/img/pwa/favicon_32.png",
          "sizes": "32x32",
          "type": "image/png",
          "purpose": "any"
        },
        {
          "src": "/img/pwa/favicon_32.png",
          "sizes": "32x32",
          "type": "image/png",
          "purpose": "maskable"
        },
        {
          "src": "/img/pwa/favicon.png",
          "sizes": "96x96",
          "type": "image/png",
          "purpose": "maskable"
        }
      ],
      "splash_pages": null
  }
  ```

## CDN

The theme resources have been included in cdnjs, so you can use them with confidence. If you have your own CDN, you can customize the configuration.

```yaml
# Don't modify the following settings unless you know how they work
CDN:
  # The CDN provider of internal scripts
  # option: local/jsdelivr/unpkg/cdnjs/custom
  # Dev version can only choose local.
  internal: local
  # The CDN provider of third party scripts
  # option: jsdelivr/unpkg/cdnjs/custom
  third_party: cdnjs

  # Add version number to url, true or false
  version: true

  # Custom format
  # For example: https://cdn.staticfile.net/${cdnjs_name}/${version}/${min_cdnjs_file}
  custom_format: https://cdn.staticfile.net/${cdnjs_name}/${version}/${min_cdnjs_file}

  option:
    # algolia_search:
    # instantsearch:
    # pjax:
    # twikoo:
    # waline_js:
    # waline_css:
    # sharejs:
    # sharejs_css:
    # katex:
    # katex_copytex:
    # lazyload:
    # aplayer_css:
    # aplayer_js:
    # meting_js:
    # pace_js:
    # swiper_css:
    # swiper_js:
    # busuanzi_js:
    # snackbar_js:
```
