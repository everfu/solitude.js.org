---
title: 扩展配置
description: Hexo Theme Solitude 的扩展配置。
---

# 扩展配置

## 中控台

```yaml
# --------------------------- start ---------------------------
# Console
# 控制台
console:
  enable: false
  # Recent comments
  # 最新评论
  recentComment:
    enable: false
    # Cache time 1: 1 day / .5 : half a day
    # 缓存时间 1: 1天 / .5 : 半天
    storage: .2
  card:
    # Tags
    # 标签
    tags: true
    # Archives
    # 归档
    archive: true
# --------------------------- end ---------------------------
```

## 简繁转换

```yaml
# --------------------------- start ---------------------------
translate:
  enable: true
  defaultEncoding: 2 # 1: 默认繁体 2: 默认简体
  translateDelay: 0 # 首次加载翻译迟疑时间
# --------------------------- end ---------------------------

# --------------------------- start ---------------------------
# Right-Sidebar
# 右下角悬停导航栏
rightside:
  enable: false
  percent: false
  hide:
    enable: false
    translate: false
    mode: false
    aside: false
# --------------------------- start --------------------------------
```

## 侧边栏

```yaml
# --------------------------- start ---------------------------
# Right-Sidebar
# 右下角悬停导航栏
rightside:
  enable: false
  percent: false
  hide:
    enable: false
    translate: false
    mode: false
    aside: false
# --------------------------- start ---------------------------
```

## 页脚（Footer）

:::code-group
```yaml [上方图标]
information:
    author: false # url or false
    left:
      # Github: https://github.com/everfu || fab fa-github # Name: link || icon
      # Mail: mailto:o@efu.me || fab fa-envelope
    right:
      # Bilibili: https://space.bilibili.com/1329819902 || fab fa-bilibili
      # Douyin: https://v.douyin.com/iJsLc8jt/ || fab fa-tiktok
```

```yaml [底部导航栏]
# 底部导航栏
# Bottom navigation bar
group: # 从左至右 / From left to right
  导航:
    归档: /archives/
    分类: /categories/
    标签: /tags/
  服务:
    阿里云: https://aliyun.com/
    51la统计: https://v6.51.la/
    百度统计: https://tongji.baidu.com/
  支持:
    打赏记录: /about/
  协议:
    Cookies: /cookies/
    用户协议: /privacy/
    版权协议: /copyright/
```

```yaml [其它]
# 底部随机友链
# Random links at the bottom
# tip：此处的友链是随机显示的，不是固定的
# tip: The links here are displayed randomly, not fixed
# warning: 打开前必须先配置links
# warning: links must be configured before opening
randomlink: false
# 版权
# Copyright
license: # /license/
# 页脚右侧链接，例如：ICP备案号、公安备案号等
# Footer right link, such as: ICP filing number, public security filing number, etc.
links:
  # 为了主题能够得到更多的支持，建议保留主题链接
  # In order for the theme to get more support, it is recommended to keep the theme link
  - name: 主题
    url: https://github.com/everfu/hexo-theme-solitude
  - name: 订阅
    url: /atom.xml
```
:::

::: danger 注意
希望你能够保留主题链接，我曾今也想过将它内置固定，但这样会觉得不太好，所以我选择了这种方式，还是希望你能保留支持我的工作。
:::

## 404 页面

> 自定义 404 页面

```yaml
# --------------------------- start ---------------------------
# 404 page
# 404 页面
errorpage:
  img: /img/404.avif
  text: =awa= Page Not Found # Text
  recommendList: true
# --------------------------- end ---------------------------
```

## Meting API

```yaml
# --------------------------- start ---------------------------
# Meting API
# This part of the content uses metingjs,
# can only use NetEase Cloud Music, QQ Music and other music platforms supported by the mainland China region,
# the subsequent consideration of the use of JSON files to store music information and customize the implementation of the third-party API does not depend on the page.
# Music Page
meting_api: "https://meting.qjqq.cn/?server=:server&type=:type&id=:id&auth=:auth&r=:r" # Custom API
# --------------------------- end ---------------------------
```

## 音乐胶囊

> 显示在左下角的音乐播放器，根据注解填写对应的歌单 id 和服务商。

```yaml
# --------------------------- start ---------------------------
# Capsule music
# 音乐胶囊
capsule:
  enable: false
  # 歌单 ID / 单曲 ID
  id: 8407304077
  # 服务商：netease / qq / xiami / kugou / baidu
  server: netease
  # 类型：playlist / song
  type: playlist
# --------------------------- end ---------------------------
```

::: danger 注意
QQ 音乐近期进行了加密，后续都不再支持 QQ 音乐。
:::

## 快捷菜单

```yaml
# --------------------------- start ---------------------------
# Quick Menu
# Open with shift + ?
# 快捷菜单
# 使用 shift + ? 打开
keyboard:
  enable: false
  list:
    # - name: Close Keyboard
    #   key: K
    #   func: keyboard
    # - name: Open Console
    #   key: A
    #   sco: showConsole
    # - name: Play/Pause Music
    #   key: M
    #   sco: musicToggle
    # - name: Open Links
    #   key: L
    #   url: /links/
# --------------------------- end ---------------------------
```

## 懒加载

> 开启懒加载后，图片会在进入可视区域后加载，可以减少网页体积，提高网页加载速度。

```yaml
# --------------------------- start ---------------------------
# Lazyload
# 图片懒加载
lazyload:
  enable: false
  # post, site
  field: site
  # 加载时替换图
  placeholder: /img/loading.avif
  # 加载失败替换图
  errorimg: /img/error_load.avif
# --------------------------- end ---------------------------
```

## 加载动画

> 在页面加载时会显示一个页面覆盖内容，加载完成消失。

```yaml
# --------------------------- start ---------------------------
# Loading
# 加载
loading:
  # Full screen loading
  # 全屏加载
  fullpage: false
  # Pace loading
  # Pace 加载
  pace: true
# --------------------------- end ---------------------------
```

## 代码高亮

```yaml
# --------------------------- start ---------------------------
# Highlight
# 代码块高亮
highlight:
  enable: true
  # Display the fold button when the number of words exceeds
  # 当超过多少字时显示折叠按钮
  limit: 200
  # Whether to enable the copy button
  # 是否启用复制按钮
  copy: true
  # Whether to expand by default
  # 是否默认展开
  expand: true
  # default: default / mac : apple terminal
  # default: 默认 / mac : 苹果终端
  theme: mac
  # default / solidity / dracula
  color: default
# --------------------------- end ---------------------------
```

## 图片灯箱

> fancybox 和 mediumZoom 二选一，一定要关闭 fancybox 才能开启 mediumZoom

```yaml
# --------------------------- start ---------------------------
# Lightbox
# 图片灯箱
lightbox: false
# warning: Please select any one, but cannot be turned on at the same time.
# 警告: 请任选其一，但不能同时开启。
fancybox: false # fancybox
mediumZoom: false # mediumZoom
# --------------------------- end ---------------------------
```

## 纪念日

```yaml
# --------------------------- start ---------------------------
# Memorial
# Turn the entire site gray on memorable days.
# 在纪念日整个网站变灰
memorial:
  enable: false
  date:
  #  - 7-7
  #  - 9-18
  #  - 12-13 # 国家公祭日
# --------------------------- end ---------------------------
```

## Open graph

> 开启后，网站会自动添加 Open Graph 标签，用于社交分享。

```yaml
# --------------------------- start ---------------------------
# OpenGraph
OpenGraph:
  enable: false
  options:
    # twitter_card:
    # twitter_image:
    # twitter_id:
    # twitter_site:
    # google_plus:
    # fb_admins:
    # fb_app_id:
# --------------------------- end ---------------------------
```

## 字数统计

> 需要安装 `hexo-wordcount` 插件。

```yaml
# --------------------------- start ---------------------------
# Word count
# 字数统计
# warning: Please install the hexo-wordcount plugin first.
# 警告: 请先安装 hexo-wordcount 插件。
wordcount: false
# --------------------------- end ---------------------------
```

## 数学公式

主题支持使用 **LaTeX** 数学公式 当需要使用数学公式时，在文章的 **Front-Matter** 添加 `katex: true`。

安装 [hexo-renderer-markdown-it](https://github.com/EmptyDreams/swpp-backends), [@renbaoshuo/markdown-it-katex](https://github.com/renbaoshuo/markdown-it-katex) 插件，并按照插件文档完成配置：

```bash
npm un hexo-renderer-marked --save
npm i hexo-renderer-markdown-it @renbaoshuo/markdown-it-katex
```

在配置文件配置并启用 KaTeX 支持：

```yaml [_config.solitude.yml]
# --------------------------- start ---------------------------
# KaTeX
# LaTeX formula support
# LaTeX 公式支持
katex:
  enable: false
  # Whether to load on each page
  # 是否在每个页面加载
  per_page: false
  # Whether to enable copy formula
  # 是否启用复制公式
  copytex: false
# --------------------------- end ---------------------------
```

## 站点验证

```yaml
# --------------------------- start ---------------------------
# verification
# 验证
verify_site:
  # - name: google-site-verification
  #   content: xxxxxx
  # - name: baidu-site-verification
  #   content: xxxxxxx
# --------------------------- end ---------------------------
```

## CSS 前缀

```yaml
# --------------------------- start ---------------------------
# verification
# 验证
verify_site:
  # - name: google-site-verification
  #   content: xxxxxx
  # - name: baidu-site-verification
  #   content: xxxxxxx
# --------------------------- end ---------------------------

# --------------------------- start ---------------------------
# CSS Prefix
# CSS 前缀
# When turned on, it will automatically prefix the CSS (to get better browser support), but this will increase the size of the CSS file.
# 开启后会自动给 CSS 加前缀（以获得更好的浏览器支持），但这会增加 CSS 文件的大小。
css_prefix: false
# --------------------------- end ---------------------------
```

## Extend（Inject）

```yaml
# --------------------------- start ---------------------------
# Extend
# 扩展
extends:
  # Insert in head
  # 插入到 head
  head:
  #  - <script src="https://cdn.bootcdn.net/ajax/libs/pace/1.2.4/pace.min.js"></script>

  # Insert in body
  # 插入到 body
  body:
  #  - <script src="https://cdn.bootcdn.net/ajax/libs/pace/1.2.4/pace.min.js"></script>
# --------------------------- end ---------------------------
```

## PWA

PWA 全称为 Progressive Web App，中文译为渐进式 Web APP，其目的是通过各种 Web 技术实现与原生 App 相近的用户体验。纵观现有 Web 应用与原生应用的对比差距，如离线缓存、沉浸式体验等等，可以通过已经实现的 Web 技术去弥补这些差距，最终达到与原生应用相近的用户体验效果。

[SWPP 官方文档 & 项目地址](https://github.com/EmptyDreams/swpp-backends)

1. 安装插件
    ```bash
    npm install hexo-swpp swpp-backends --save
    ```
2. 开启主题配置
    ```yaml
    # --------------------------- start ---------------------------
    # PWA
    # Progressive Web App
    pwa:
      enable: false
      manifest: /manifest.json # manifest.json
      theme_color: "#006a73" # Theme color
      mask_icon: /img/pwa/favicon.png # Mask icon
      apple_touch_icon: /img/pwa/favicon.png # Apple touch icon
      bookmark_icon: /img/pwa/favicon.png # Bookmark icon
      favicon_32_32: /img/pwa/favicon_32.png # 32x32 icon
      favicon_16_16: /img/pwa/favicon_16.png # 16x16 icon
    # --------------------------- end ---------------------------
    ```
3. 在项目根目录新建 `sw-rules.js` 加入以下内容。

    **提供一个 SWPP 文件**
    ```js
    module.exports.config = {
      /** @type {?ServiceWorkerConfig|boolean} */
      serviceWorker: {
        escape: 0,
        cacheName: 'SolitudeCache',
        debug: false,
      },
      register: {
        onsuccess: undefined,
        onerror: () =>
          console.error(
            'Service Worker 注册失败！可能是由于您的浏览器不支持该功能！'
          ),
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
      /** @type {?DomConfig|boolean} */
      dom: {
        /** @type {?VoidFunction} */
        onsuccess: () => {
          caches
            .match(location.href)
            .then((res) => {
              if (res)
                res.json().then((json) => {
                  utils &&
                    utils.snackbarShow(
                      `已刷新缓存，更新为${json.global + '.' + json.local
                      }版本最新内容`,
                      false,
                      2000
                    );
                });
              else console.info('未找到缓存');
            })
            .catch((error) => console.error('缓存匹配出错', error));
        },
      },
      /** @type {?VersionJsonConfig|boolean} */
      json: {
        /** @type {number} */
        maxHtml: 15,
        /** @type {number} */
        charLimit: 1024,
        /** @type {string[]} */
        merge: [],
        exclude: {
          /** @type {RegExp[]} */
          localhost: [],
          /** @type {RegExp[]} */
          other: [],
        },
      },
      /** @type {?ExternalMonitorConfig|boolean} */
      external: {
        /** @type {number} */
        timeout: 5000,
        /** 拉取文件时地并发限制 */
        concurrencyLimit: 100,
        /** @type {({head: string, tail: string}|function(string):string[])[]} */
        js: [],
        /** @type {RegExp[]} */
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

4. 根据需求在 `source` 文件夹下新建 `manifest.json` 文件并增加内容，以下是示例：
    ```json
    {
        "name": "放养平凡",
        "short_name": "BTA",
        "theme_color": "#b00000",
        "background_color": "#b00000dd",
        "description": "世界为你简单",
        "display": "fullscreen",
        "scope": "/",
        "start_url": "/",
        "lang": "zh-CN",
        "id": "/",
        "icons": [
        {
            "src": "pwa/16.ico",
            "sizes": "16x16",
            "type": "image/png",
            "purpose": "any"
        },
        {
            "src": "pwa/16.ico",
            "sizes": "16x16",
            "type": "image/png",
            "purpose": "maskable"
        },
        {
            "src": "pwa/32.ico",
            "sizes": "32x32",
            "type": "image/png",
            "purpose": "any"
        },
        {
            "src": "pwa/32.ico",
            "sizes": "32x32",
            "type": "image/png",
            "purpose": "maskable"
        },
        {
            "src": "pwa/64.ico",
            "sizes": "64x64",
            "type": "image/png",
            "purpose": "any"
        },
        {
            "src": "pwa/64.ico",
            "sizes": "64x64",
            "type": "image/png",
            "purpose": "maskable"
        },
        {
            "src": "pwa/128.ico",
            "sizes": "128x128",
            "type": "image/png",
            "purpose": "any"
        },
        {
            "src": "pwa/128.ico",
            "sizes": "128x128",
            "type": "image/png",
            "purpose": "maskable"
        },
        {
            "src": "pwa/256.ico",
            "sizes": "256x256",
            "type": "image/png",
            "purpose": "any"
        },
        {
            "src": "pwa/256.ico",
            "sizes": "256x256",
            "type": "image/png",
            "purpose": "maskable"
        }
        ],
        "screenshots": [
        {
            "src": "https://assets.btwoa.com/blogbtwoacom.avif",
            "sizes": "1920x1080",
            "type": "image/png",
            "form_factor": "wide",
            "label": "Fullscreen of BTA"
        },
        {
            "src": "https://assets.btwoa.com/darkblogbtwoacom.avif",
            "sizes": "1920x1080",
            "type": "image/png",
            "form_factor": "wide",
            "label": "Fullscreen of BTA"
        }
        ],
        "splash_pages": null
    }
    ```

## CDN

主题资源已经被 cdnjs 收录，所以大家可以放心食用，如果你有自己的 CDN，可以自定义配置。

```yaml
# --------------------------- start ---------------------------
# Do not modify unless necessary
# 非必要请勿修改
CDN:
  internal: local # local / cdnjs / jsdelivr / unpkg / custom
  third_party: cdnjs # cdnjs / jsdelivr / unpkg / custom
  version: true # Whether to use the version number
  custom_format: //open.lightxi.com/cdnjs/ajax/libs/${cdnjs_name}/${version}/${min_cdnjs_file} # Custom format
  # Directly override the default CDN link (highest priority)
  options:
    # algolia_search:
    # instantsearch:
    # pjax:
    # twikoo:
    # waline_js:
    # waline_css:
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
# --------------------------- end ---------------------------
```
