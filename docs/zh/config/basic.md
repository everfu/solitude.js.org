---
title: 基础配置
description: Solitude 主题基础配置
---

# 基础配置

## 站点配置

修改网站各种资料，例如标题、副标题和邮箱等个人资料。

:::code-group
```yaml [_config.yml]
# Site
title: 伍十七 # 网站标题
subtitle: '' # 副标题
description: '伍十七的博客' # 网站描述
keywords: 'everfu, 伍十七' # 网站关键字
author: 伍十七 # 网站作者
language: zh-CN # 网站语言
timezone: 'Asia/Shanghai' # 时区
```

```yaml [_config.solitude.yml]
# --------------------------- start ---------------------------
# Site information
# 网站信息
site:
  name:
    class: text # text / i_class / img
    custom: 伍十七 # Solitude / fas fa-ghost / /img/pwa/favicon.ico
  icon: https://ui.everfu.cn/c625e37b3cf9054d92a52ec04ce8abf0.png/avatar # Site icon / 网站图标
# --------------------------- end ---------------------------
```
:::

## 导航菜单

:::code-group
```yaml [导航栏]
# --------------------------- start ---------------------------
# Navigation bar
# 导航栏
nav:
  # Left Box
  # 左侧盒子
  group:
    我的:
      个人主页: https://everfu.cn || https://ui.everfu.cn/c625e37b3cf9054d92a52ec04ce8abf0.png/avatar
    # 项目:
    #   Solitude: https://github.com/everfu/hexo-theme-solitude || https://ui.everfu.cn/cover/202408301243345.webp/avatar
  # Menu
  # 菜单
  menu:
    # 首页: / # name: link
    文库: # name
      全部文章: /archives/ || fas fa-folder-closed # item name: link || icon
      分类列表: /categories/ || fas fa-clone
      标签列表: /tags/ || fas fa-tags
    友链:
      文章矩阵: https://summary.zhheo.com/static/matrix-posts.html || fas fa-wifi
      友情链接: /links/ || fas fa-user-group
      宝藏博主: javascript:travelling() || fas fa-gift
    我的:
      我的装备: /equipment/ || fas fa-tools
      # 在线工具: /tlink/ || fas fa-toolbox
      关于本站: /about/ || fas fa-user
  # Right button
  # 右侧按钮
  right:
    random: false # Random article / 随机文章按钮
    custom:
      # - name: 开往 # name
      #   url: https://www.travellings.cn/go.html # Jump link
      #   icon: fas fa-train # Icon
      #   onclick: # Click event
      #   id: travellings_button # id
# --------------------------- end ---------------------------
```
:::

## 首页顶部

开启后可在文章的front matter中添加 `recommend: true` ，即可在右侧显示置顶文章。

```yaml
# --------------------------- start ---------------------------
# Home Top Banner
# 首页顶部
hometop:
  enable: true
  banner:
    title: 宁静致远<br> 热爱生活
    url: 开发、设计、制作、运维
    icon:
      Nodejs:
        img: https://ui.everfu.cn/cover/20240827172946.png/cover
        color: "#242938"
      Vue:
        img: https://ui.everfu.cn/cover/20240827173146.png/cover
        color: "#242938"
      React:
        img: https://ui.everfu.cn/avatar/20240827172839.png/cover
        color: "#242938"
      HTML:
        img: https://ui.everfu.cn/cover/20240827173208.png/cover
        color: "#e34c26"
      CSS:
        img: https://ui.everfu.cn/cover/20240827173227.png/cover
        color: "#0277BD"
      JavaScript:
        img: https://ui.everfu.cn/cover/20240827173248.png/cover
        color: "#EFDB50"
  group:
    # 热门: /tags/Fire/ || fas fa-fire || linear-gradient(to right,#f65,#ffbf37)
  recommendList:
    sup: 置顶
    title: Solitude 官方文档
    url: https://solitude.js.org/
    img: https://ui.everfu.cn/cover/20240827173743.png/cover
    color: "none"
# --------------------------- end ---------------------------
```

## 首页顶部轮播图

在文章的front matter中添加 `recommend: true` ，即可在右侧显示置顶文章。

```yaml
# tip：建议开了这个就不要开hometop，其功能类似
carousel: false
```

## 侧边栏

> Sticky: 跟随，noSticky: 不跟随 Sticky 和 noSticky 的值：about、allInfo、newestPost、flip

```yaml
home: # 在主页显示的侧边栏信息
  noSticky: about
  Sticky: allInfo
post: # 在文章页显示的侧边栏信息
  noSticky: about
  Sticky: newestPost
page: # 在页面中显示的侧边栏信息
  noSticky: about
  Sticky: newestPost,allInfo
```
position: 确定侧边栏在哪一侧
```yaml
position: 1 # left(0): 左侧 / right(1):右侧
```

:::code-group
```yaml [个人信息卡片]
# --------------------------- start ---------------------------
# Information card
# 信息卡
card:
  style: 0 # 0: default 1: style 1 2: style 2
  author:
    img: https://ui.everfu.cn/avatar/20240827172640.png/banner
    url: https://everfu.cn # link / 点击头像跳转链接
  background: # https://s3.qjqq.cn/47/663af296b85f4.webp!color # Background image(Invalid if style is 0)
  # Content(Invalid if style is 0)
  # 内容(Style 0 无效)
  content: 这是我分享自己写作的一个平台 # 这是我的博客 / This is my Blog
  content2: 我是一个热爱开源的小子 # 一个热爱生活的人 / A person who loves life
  # Style 2 is invalid
  # Style 2 无效
  sayhello:
    morning: ✨ 早上好，新的一天开始了
    noon: 中午饭时间
    afternoon: 下午茶时间 ☕️
    night: 不要熬夜哦
    goodnight: 晚安，早点休息
  # Style 2 is invalid, Triggered when sayhello is clicked.
  # Style 2 无效, 点击 sayhello 时触发
  sayhello2:
    - 你可以的
    - 相信你可以的
    - 你一定可以的
  # social
  # 社交信息图标
  information:
    Github: https://github.com/everfu || fab fa-github # Name: link || icon
    Bilibili: https://space.bilibili.com/1329819902 || fab fa-bilibili
# --------------------------- end ---------------------------
```

```yaml [公众号二维码]
# --------------------------- start ---------------------------
# Sidebar QR code component
# 侧边栏二维码组件
flip:
  favicon: # url (favicon)
  face: # url (QR code)
  backface: # url (QR code)
  backcolor: "var(--efu-blue)" # Background color
# --------------------------- end ---------------------------
```

```yaml [页面目录]
# --------------------------- start ---------------------------
# article table of contents
# 文章目录
toc:
  post: true
  page: false
  vague: true
# --------------------------- end ---------------------------
```

```yaml [文章列表]
# --------------------------- start ---------------------------
# Tags
# 标签
tags:
  enable: true
  limit: 20 # Number of tags displayed
  # Highlighted tags
  highlight_list:
    # - hexo
# --------------------------- end ---------------------------
```

```yaml [文章归档]
# --------------------------- start ---------------------------
# Archive
# 归档
archive:
  enable: false
  type: "month" # month: by month / year: by year
# --------------------------- end ---------------------------
```

```yaml [建站信息]
# --------------------------- start ---------------------------
# Site Info
# 网站信息
siteinfo:
  # Number of articles
  # 文章数量
  postcount: true
  # Total number of words
  # 总字数
  wordcount: true
  # PV
  pv: true
  # UV
  uv: true
  # Last update date
  # 最后更新日期
  updatetime: true
  # Website creation time
  # 网站创建时间
  runtimeenable: true
  # Format: yyyy-MM-dd hh-mm-ss
  # 格式: yyyy-MM-dd hh-mm-ss
  runtime: "2024-08-24 00:00:00"
# --------------------------- end ---------------------------
```
:::

## 页面配置

```yaml
# --------------------------- start ---------------------------
# Page default settings
# 页面默认设置
page:
  # 404 page
  # 404 页面
  error: true
  # Tags page
  # 标签页面
  tags: true
  # Categories page
  # 分类页面
  categories: true
  # list: Sort List / 1: Follow HomeList
  # list: 排序列表 / 1: 跟随首页列表
  archives: 0
  # Default value
  # 默认值
  default:
    # Default image when no cover is set
    # 未设置封面时的默认图片
    cover:
      # - /img/default.png # 默认图片 / default cover
# --------------------------- end ---------------------------
```

## 文章配置

```yaml
# --------------------------- start ---------------------------
# Post default settings
# 文章默认设置
post:
  default:
    # The cover of the article is displayed
    # 文章封面显示
    top_cover: true
    # Default image when no cover is set
    # 未设置封面时的默认图片
    cover:
      # -  # 默认图片 / default cover
    # Location
    # 位置
    locate: 南昌
    # Copyright
    # 版权
    copyright:
      enable: true
      author:
        url: https://everfu.cn # Author link
        # Default use site.icon
        # 默认使用 site.icon
        img: https://ui.everfu.cn/avatar/20240827172640.png/banner
      # License
      # 许可证
      license: CC BY-NC-SA 4.0
      # License link
      # 许可证链接
      licenurl: https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh
  # Article meta information
  # 文章元信息
  meta:
    # Release date
    # 发布日期
    date: true
    # Update date
    # 更新日期
    updated: true
    # Location
    # 位置
    locate: true
    # Number of words
    # 字数
    wordcount: true
    # uv
    readtime: true
    # pv
    pv: true
    # Comment count
    # 评论数
    comment: true
  # Reward
  # 打赏
  award:
    enable: true
    appreciators: /about/ # Reward page
    # Reward Title
    # 打赏标题
    title: 感谢您的赞赏
    desc: 由于您的支持，我才能够实现写作的价值。
    # Reward list
    # 打赏列表
    list:
      # - name: Github Sponsor
      #   qcode: https://s3.qjqq.cn/47/661ba900c4bc1.webp!color
      #   url: https://github.com/sponsors/everfu
      #   color: var(--efu-black)
      - name: 微信
        qcode: https://ui.everfu.cn/avatar/202408291335398.png/cover
        url: https://s3.qjqq.cn/47/663742bac8e52.webp!color
        color: var(--efu-green)
      - name: 支付宝
        qcode: https://ui.everfu.cn/avatar/202408291338530.png/cover
        url: https://s3.qjqq.cn/47/66d00a4c7107d.png!color
        color: var(--efu-blue)

  # Share icon
  # 分享图标
  share:
    enable: false
    list:
      # - qq
      # - weibo
      # - twitter
      # - facebook
      # - telegram
      # - whatsapp
      # - linkedin
      # - link
      # - qrcode
  rss: /atom.xml
  # Article reading progress
  # 文章封面取色
  covercolor:
    enable: true
    # local: local color / api: api color / ave: oss covercolor
    mode: ave
    # api address / api 地址
    api: https://api.qjqq.cn/api/Imgcolor?img=
    # Storage / 缓存时间
    time: 43200000
  footer:
    enable: false
    desc: # Articles from Ever Fu. / 文章来自 Ever Fu # description
    button: # Button
      enable: true
      name: # Learn more / 了解更多
      url: /about/
# --------------------------- end ---------------------------
```

## 自定义主题

:::code-group

```yaml [自定义配色]
# --------------------------- start ---------------------------
# Custom Theme Color
theme_color:
  dark: "#8eaccd" # dark
  light: "#ff8080" # light
# --------------------------- end ---------------------------
```

```yaml [昼夜切换]
# --------------------------- start ---------------------------
# display mode
# 显示模式
display_mode:
  # auto: automatic switching(Recognize the current theme mode of the device) / dark: dark mode / light: light mode
  # auto: 自动切换（识别设备当前主题模式） / dark: 深色模式 / light: 浅色模式
  type: auto
  # After opening, the dark mode will display the starry sky background
  # 开启后深色模式会显示星空背景
  universe: false
# --------------------------- end ---------------------------
```

```yaml [字体]
# --------------------------- start ---------------------------
# Font
# 字体
font:
  font-size: 16px
  code-font-size: 16px
  # Global font
  # 全局字体
  font-family: "PingFang SC, Hiragino Sans GB, Microsoft YaHei"
  # Code font
  # 代码字体
  code-font-family: '"monospace", monospace'
# --------------------------- end ---------------------------
```

```yaml [网站背景]
# --------------------------- start ---------------------------
# Background
# 背景图片
background:
  enable: false
  opacity: .2
  dark: https://i.pinimg.com/originals/d8/b3/9d/d8b39d12b653810db452c437211aeb2e.png
  light: https://i.pinimg.com/originals/93/57/38/935738ed9657b296c2ef0ebd2151eb66.jpg
# --------------------------- end ---------------------------
```

```yaml [诱骗点击]
# --------------------------- start ---------------------------
# Lure
# When the user exits the page, modify the title
# 当用户退出页面时，修改标题
lure:
  enable: false
  jump: 404 Not Found
  back: ヾ(≧∇≦*)ゝHey, hey, you fell for it.
# --------------------------- end ---------------------------
```

```yaml [文章过期提醒]
# --------------------------- start ---------------------------
# Article expiration
# 文章过期
expire:
  enable: false
  time: 30 # days
  position: top # top / bottom
  text_prev: "This article expired "
  text_next: " day ago, if the content does not match, please contact the webmaster to update it."
# --------------------------- end ---------------------------
```
:::

## 首页文章列表

```yaml
# --------------------------- start ---------------------------
# Home page article configuration information
# 首页文章配置信息
index_post_list:
  direction: column # row / column
  column: 2 # 2: 2 columns 3: 3 columns
  cover: both
# --------------------------- end ---------------------------
```

## 推荐文章

```yaml
# --------------------------- start ---------------------------
# Related articles
# 相关文章
related_post:
  enable: false
  limit: 2
  # created: release date / updated: update date
  # created: 发布日期 / updated: 更新日期
  date_type: created
# --------------------------- end ---------------------------
```

## 右键菜单

```yaml
# --------------------------- start ---------------------------
# Custom right menu
# 自定义右键菜单
right_menu:
  enable: false
  # Whether to display the hot comment switch.
  # 是否显示热门评论开关
  commentBarrage: false
  # Whether to display the browser's context menu when hold Ctrl key.
  # 是否在按住 Ctrl 键时显示浏览器右键菜单
  ctrlOriginalMenu: false
  # Simplified and Traditional Chinese translation.
  # 简繁体转换
  translate: false
  # Custom list
  # 自定义列表
  custom_list:
    # - name: 随机文章
    #   click: toRandomPost()
    #   id: menu-randomPost
    #   class:
    #   icon: fas fa-tower-broadcast
    # - name: 全部分类
    #   click: pjax.loadUrl('/categories/') # External links with window.open, pjax can not request cross-domain content.
    #   id:
    #   class:
    #   icon: fas fa-clone
    # - name: 全部标签
    #   click: pjax.loadUrl('/tags/')
    #   id:
    #   class:
    #   icon: fas fa-tags
# --------------------------- end ---------------------------
```

## 复制

```yaml
# --------------------------- start ---------------------------
# Copy
#  information
# 复制信息
copy:
  enable: false
  # Turn on Link copyright information after copying.
  # 复制后链接版权信息
  copyright:
    enable: false
    # Display when the number of words copied exceeds
    # 复制文字时超过多少字数显示
    limit: 50
# --------------------------- end ---------------------------
```

## Mermaid

> Mermaid 是一个用于生成流程图、序列图、甘特图等的 JavaScript 库。

```yaml
# --------------------------- start ---------------------------
# Mermaid
mermaid: false
# --------------------------- end ---------------------------
```

## Chartjs

> Chart.js 是一个简单的 JavaScript 图表库。

```yaml
# --------------------------- start ---------------------------
# Chart.js
chart: false
# --------------------------- end ---------------------------
```

## Typeit

> TypeIt 是一个简单的 JavaScript 类型动画库。

```yaml
# --------------------------- start ---------------------------
# typeit
typeit: false
# --------------------------- end ---------------------------
```