---
title: 基础配置
description: Solitude 主题基础配置
---

# 基础配置

## 站点配置

> 修改网站各种资料，例如标题、副标题和邮箱等个人资料。

:::code-group
```yaml [_config.yml]
# Site
title: Efu # 博客标题
subtitle: "" # 博客子标题
description: 小心翼翼的努力并拥有着。 # 博客简介
keywords: Efu # 博客关键词
author: Efu # 博主名称
language: zh-CN # 语言
timezone: Asia/Shanghai # 时区（请自行查询）
```

```yaml [_config.solitude.yml]
# 站点设置
# Site settings
site:
  # Logo
  name:
    # 显示类型 （i_class/text/img）
    # Display type (i_class/text/img)
    class: text
    # 具体内容 例如：solitude st-logo / Efu / /img/logo.png
    # Specific content, for example: solitude st-logo / Efu / /img/logo.png
    custom: Solitude
  # 网页 Icon
  # Web icon
  siteIcon: /img/pwa/favicon.ico
  # 页脚的Logo、加载动画默认的logo
  # Logo in the footer, default logo for loading animation
  icon: /img/pwa/favicon.ico
```
:::

## 导航菜单

:::code-group
```yaml [Group]
# 导航栏左侧
# Left side of the navigation bar
group:
  # 分类名称: 链接地址 || 图标
  # Category name: link address || icon
  项目:
    # 子菜单名称: 链接地址 || 图标
    # Submenu name: link address || icon
    Solitude: https://github.com/everfu/hexo-theme-solitude || https://7.isyangs.cn/1/65eb200ee4dea-1.png
```

```yaml [菜单]
# 导航栏内容
# Navigation bar content
# tip：此部分内容是顶部导航栏中间菜单区域
# tip: This part of the content is the menu area in the middle of the top navigation bar
menu:
  首页: / # 显示名称：路径 / Display name: path
  文库: # 显示名称 / Display name
    文章列表: /archives/ || st-folder-fill # 子菜单名称：路径 || 图标 / Submenu name: path || icon
    全部分类: /categories/ || st-checkbox-multiple-blank-fill
    全部标签: /tags/ || st-price-tag-fill
  友链:
    友链鱼塘: /moments/ || st-wifi-fill
    友情链接: /links/ || st-group-fill
    宝藏博主: javascript:travelling() || st-gift-fill
  我的:
    相册集: /gallery/ || st-image-fill
    装备: /equipment/ || st-laptop-line
    工具箱: /tlink/ || st-tools-fill
    音乐馆: /music/ || st-disc-fill
  关于:
    关于本站: /about/ || st-contacts-fill
```
```yaml [按钮]
# 导航栏右侧按钮
# Button on the right side of the navigation bar
# tip：只需填写true和false即可
# tip: Just fill in true and false
right:
  random: false # 随机文章跳转 true：开启 / false：关闭 : random post jump true: on / false: off
  console: false #控制台 true：开启 / false：关闭 : console true: on / false: off
  # 从左至右
  # From left to right
  custom:
    - name: 开往 - 友链接力 # 显示文字 / Displayed text
      url: https://www.travellings.cn/go.html # 跳转链接 / Jump link
      icon: st-train-line # 图标 / Icon
      onclick: # 点击事件 / Click event
      id: travellings_button # id
```
:::

## 首页顶部

> 开启 **banner** 必须填写 **icon** ，否则会报错。 开启后可在文章的front matter中添加 **recommend: true**，即可在右侧显示置顶文章。

```yaml
# 首页顶部样式
# Home top style
hometop:
  enable: false # 是否打开 / if enable
  # banner display
  banner:
    # 左上角显示大文字
    # Large text displayed in the upper left corner
    # tip：可使用html标签
    # tip: html tags be used
    title: 宁静致远<br>热爱生活
    # 左上角显示小文字
    # Small text displayed in the upper left corner
    url: Hexo Theme Solitude
    # 轮播icon
    # Carousel icon
    # tip: 76x76 size
    icon:
      # HTML: # 名字 / Name
      #   img: https://7.isyangs.cn/34/65f2e42921677-34.png # 图片 / Image
      #   color: "#e9572b" # 背景色 / Background color
      # JS:
      #   img: https://7.isyangs.cn/34/65f2e43ceddda-34.png
      #   color: "#f7cb4f"
      # Docker:
      #   img: https://7.isyangs.cn/34/65f2e45462045-34.png
      #   color: "#57b6e6"
      # Flutter:
      #   img: https://7.isyangs.cn/34/65f2e47acbe98-34.png
      #   color: "#ffffff"
      # WebPack:
      #   img: https://7.isyangs.cn/34/65f2e488bf8ed-34.png
      #   color: "#2e3a41"
      # Git:
      #   img: https://7.isyangs.cn/34/65f2e499066fa-34.png
      #   color: "#df5b40"

  # 左下跳转按钮
  # Banner lower left jump button
  group:
    # 热门: /tags/热门/ || st-fire-fill || linear-gradient(to right,#f65,#ffbf37)
    # 教程: /tags/教程/ || st-book-mark-fill || linear-gradient(to right,#358bff,#15c6ff)
    # 精选: /tags/精选/ || st-star-smile-fill || linear-gradient(to right,#18e7ae,#1eebeb)

  # 右侧置顶列表（在文章的front matter中添加“recommend: true”）
  # Right top list (add "recommend: true" in the front matter of the article)
  recommendList:
    # 左上角显示文字
    # Large text displayed in the upper left corner
    sup: 置顶
    # 左下角大字
    # Large text in the lower left corner
    title: Solitude 主题文档
    # 点击跳转链接
    # Click the jump link
    url: https://solitude.js.org/
    # 显示背景图片
    # Display background image
    img: /img/default.png
    # 阴影颜色
    # Shadow color
    color: none
```

## 首页顶部轮播图

```yaml
# carousel
# 顶部推荐轮播图
# 使用方法：在文章的front matter中添加“recommend: true”
# tip：建议开了这个就不要开hometop，其功能类似
carousel: false
```

## 侧边栏

> Sticky: 跟随，noSticky: 不跟随 Sticky 和 noSticky 的值：about、allInfo、newestPost、flip、newest_comment

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
# 侧边栏个人信息卡片
# Sidebar personal information
card:
  style: 0 # 0: Heo样式 ：1: 设计样式
  # 头像信息
  # Avatar information
  author:
    # 头像
    # Avatar
    img: https://7.isyangs.cn/1/65eb200ee4dea-1.png
    # 表情图片链接
    # Emoticon image link
    # tip: 推荐尺寸 26x26
    # tip: Recommended size 26x26
    sticker: https://7.isyangs.cn/1/65eb22ac6952e-1.png
  # 点击作者名称跳转链接
  # Click the author name to jump link
  url: /about/
  # 背景图片
  # Background image
  background: # https://s3.qjqq.cn/47/663af296b85f4.webp!color # 不设置不会展示（仅样式为1、2时有效）
  # 文案1
  # label1
  # tip：可使用html标签
  # tip: html tags can be used
  content: 分享自己对编程的<b>热爱</b>，对美好生活的<b>向往</b>，对知识海洋<b>探索历程</b>。
  # 文案2
  # label2
  # tip：可使用html标签
  # tip: html tags can be used
  content2: 相信你可以在这里找到对你有用的知识和教程。
  # 个人信息卡片底部的小图标，按照例子填写
  # Small icons at the bottom of the personal information card, fill in according to the example
  # 个人信息卡片顶部按钮的打招呼语句
  # Greeting statement of the button at the top of the personal information card
  sayhello:
    morning: 一日之计在于晨
    noon: 吃饱了才有力气干活
    afternoon: 集中精力，攻克难关
    night: 不要太劳累了，早睡更健康
    goodnight: 睡个好觉，保证精力充沛
  # 个人信息卡片顶部按钮的切换文字
  # Switching text of the button at the top of the personal information card
  sayhello2:
    - 🤖️ 数码科技爱好者
    - 🔍 分享与热心帮助
    - 🏠 智能家居小能手
    - 🔨 设计开发一条龙
    - 🤝 专修交互与设计
    - 🏃 脚踏实地行动派
    - 🧱 团队小组发动机
    - 💢 壮汉人狠话不多
    - 🎮 电竞游戏爱好者
  # 个人信息卡片底部的小图标，按照例子填写
  information:
    Github: https://github.com/efuo || st-github-line # 名称：链接 || 图标 / Name: link || icon
    Bilibili: https://space.bilibili.com/1329819902 || st-bilibili-line
```

```yaml [公众号二维码]
# 二维码
# Official account QR code
flip:
  # 右下角头像
  # Avatar in the lower right corner
  favicon:
  # 正面
  # Front
  face:
  # 鼠标悬停翻转图片
  # Mouse hover flip image
  backface:
  # 背景色：var(--efu-blue) / #000 / rgba(0,0,0,0.5) / linear-gradient(to right,#f65,#ffbf37)
  # Background color: var(--efu-blue) / #000 / rgba(0,0,0,0.5) / linear-gradient(to right,#f65,#ffbf37)
  backcolor: "var(--efu-blue)"
```

```yaml [最新文章]
newest_comment:
  enable: true
  storage: .5 # 缓存时间 1: 1天 / .5 : 半天 / Cache time 1: 1 day .5 : half a day
  limit: 5 # 评论数 / Number of comments
```

```yaml [页面目录]
# 页面目录
# Page directory
toc:
  # 在文章页显示
  # Display on the article page
  post: true
  # 在任意页显示
  # Display on any page
  page: false
  # 开启后不悬停目录有模糊效果
  # After opening, there is a fuzzy effect without hovering over the directory
  vague: true
```

```yaml [文章列表]
# 侧边栏文章列表
# Sidebar article list
tags:
  enable: false
  # 显示标签数量，当高于标签总数时，显示全部标签按钮
  # Display the number of tags, when it is higher than the total number of tags, display all tags button
  limit: 20
  # 高亮显示
  # Highlight
  highlight: false
  # 高亮显示标签列表
  # Highlighted tag list
  list:
    - Solitude-使用
```

```yaml [文章归档]
# 侧边栏归档
# aside archive
archive:
  enable: false
  # 显示类型：month（按月） / year（按年）
  # Display Method: month (by month) / year (by year)
  type: month 
```

```yaml [建站信息]
# 建站信息
# Website information
siteinfo:
  # 文章数
  # Number of articles
  postcount: true
  # 总字数
  # Total number of words
  wordcount: true
  # 访问量
  # Number of visits
  pv: true
  # 访客数
  # Number of visitors
  uv: true
  # 最后更新日期
  # Last update date
  updatetime: true
  # 建站时间
  # Website creation time
  runtimeenable: true
  # 格式：yyyy-MM-dd hh:mm:ss
  # Format: yyyy-MM-dd hh:mm:ss
  runtime: 2023-04-20 00:00:00
```
:::

## 页面配置

```yaml
# 页面默认设置
# page default settings
page:
  error: true # 404页面 / 404 page
  tags: true # 标签页 / Tags page
  categories: true # 分类页 / Categories page
  default: # 默认值 / Default value
    # 默认图片
    # default cover
    # tip：随机数组图片，每次生成的时候都会从中随机抽取一张
    # tip: Random array pictures, each time you generate, you will randomly extract one from them
    cover:
      - /img/default.png # 默认图片 / default cover
```

## 文章配置

```yaml
# 文章页默认设置
# Post default settings
post:
  default:
    # 文章默认图片
    # default cover
    cover:
      # - # 默认图片 / default cover
    # 文章发布默认地址
    # default post locate
    locate: 衡阳
    # 文章默认版权
    # default post copyright
    copyright:
      enable: true
      author:
        url: /about/ # 点击头像跳转地址
        img: # 显示头像，不填写默认显示site_icon
      license: CC BY-NC-SA 4.0
      licenurl: https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh
  # 顶部文章简介
  # Top article introduction
  meta:
    date: false # 发布日期 / Release date
    updated: false # 更新日期 / Update date
    locate: false # 位置 / Location
    wordcount: false # 字数 / Number of words
    readtime: false # 访问 / uv
    pv: false # 浏览量 / pv
    comment: false # 评论数 / Comment count
  # 打赏
  # Reward
  award:
    enable: false
    appreciators: /about # 赞赏记录 / Appreciative records
    title: 感谢您的赞赏。
    desc: 因为有你们的支持，我才体会到写文章的价值。
    list:
      # - name: 支付宝
      #   qcode: https://7.isyangs.cn/34/65f2e5a6d2ef5-34.png
      #   color: var(--efu-blue)
  # 版权中订阅按钮跳转链接，填写地址后开启
  # Subscription button jump link in copyright
  rss: # /atom.xml
  # 文章主题色获取
  # Article theme color acquisition
  covercolor:
    enable: false
    mode: local.md # local.md：本地取色 / api：img2color取色 : local.md: local.md color / api: img2color color
    api: https://api.qjqq.cn/api/Imgcolor?img= # api地址 / api address
    time: 43200000 # api取色间隔（毫秒），默认为12小时 / api color interval (milliseconds), default is 12 hours
```

## 自定义主题

:::code-group

```yaml [自定义配色]
# 自定义配色
# Custom theme color
# 注意：颜色值必须使用引号，如 "#000"，否则可能会导致错误！
# Note: The color value must be enclosed in quotation marks, such as "#000", otherwise it may cause an error!
# --------------------------------------
theme_color:
  dark: "#ffc848" # 暗色模式 / Dark mode
  dark_op: "#f2b94b23" # 暗色模式透明 / Dark mode transparent
  dark_op_deep: "#f2b94bdd" # 暗色模式透明深色 / Dark mode transparent dark
  dark_none: "#f2b94b00" # 暗色模式透明无色 / Dark mode transparent colorless
  light: "#425aef" # 亮色模式 / Light mode
  light_op: "#4259ef23" # 亮色模式透明 / Light mode transparent
  light_op_deep: "#4259efdd" # 亮色模式透明深色 / Light mode transparent dark
  light_none: "#4259ef01" # 亮色模式透明无色 / Light mode transparent colorless
```

```yaml [昼夜切换]
# 主题显示模式调整
# Theme display mode adjustment
# 主题支持三种模式：自动切换、暗色模式、亮色模式
# The theme supports three modes: automatic switching, dark mode, and light mode
# --------------------------------------
display_mode:
  type: auto # auto: 自动切换 / dark: 暗色模式 / light: 亮色模式 / auto: automatic switching / dark: dark mode / light: light mode
  universe: true # 开启后暗色模式下会显示星空背景 / After opening, the dark mode will display the starry sky background
```

```yaml [字体]
# Font 字体
# Font
font:
  font-size: 16px
  code-font-size: 16px
  font-family: 'PingFang SC, Hiragino Sans GB, Microsoft YaHei'
  code-font-family: '"monospace", monospace'
```

```yaml [网站背景]
# 背景图片
# Background image
background:
  enable: false
  opacity: .2
  dark: https://bu.dusays.com/2023/09/29/651685ce667d1.jpg
  light: https://bu.dusays.com/2023/09/29/651685cc18d39.jpg
```

```yaml [诱骗点击]
# 诱骗
# Lure
lure:
  enable: false
  # 跳出
  # Jump out
  jump: 404 Not Found
  # 切回
  # Switch back
  back: ヾ(≧∇≦*)ゝ嘿嘿，上当了吧
```

```yaml [文章过期提醒]
# 文章过期提醒
# Article expiration reminder
expire:
  enable: false
  # 过期时间
  # Expiration time
  time: 30
  position: top # top / bottom
  # 过期提示
  # Expiration prompt
  text_prev: "本文已于"
  text_next: "天前过期，如果内容不符，请联系站长更新。"
```
:::

## 首页文章列表

```yaml
# 首页文章配置信息
# Configure information on the home page
index_post_list:
  direction: column # row / column
  content: 3 # 1: post.description / 2: 自动获取description或截取内容(Automatically get descriptions or screenshots) / 3: 只使用截取内容(Use only screenshots) / false: 不显示内容(No content is displayed)
  length: 500 # 截取内容的长度 : The length of the screenshot content
  cover: both # left: 在左侧 : left / right: 在右侧 : right / both: 两侧 : both
```

## 推荐文章

```yaml
# 文章底部推荐文章
related_post:
  enable: true # 是否开启推荐
  limit: 2 # 推荐文章数量
  date_type: created # 根据创建日期（created）或是更新日期（updated）
```

## 右键菜单

```yaml
# 自定义右键菜单 (Custom Right Menu)
right_menu:
  enable: false
  commentBarrage: false # 是否显示热评开关 / Whether to display the hot comment switch.
  translate: # 翻译功能（仅支持简繁）/ Translation function (Simplified and Traditional Chinese only)
    enable: false
    defaultEncoding: 2 # 1: 默认繁体 2: 默认简体
    translateDelay: 0 # 翻译迟疑时间
  # 自定义菜单项列表
  # Customize the list of menu items.
  custom_list:
    - name: 随机短文
      click: toRandomPost()
      id: menu-randomPost
      class:
      icon: st-signal-tower-fill
    - name: 全部分类
      click: pjax.loadUrl('/categories/')
      id:
      class:
      icon: st-checkbox-multiple-blank-fill
    - name: 全部标签
      click: pjax.loadUrl('/tags/')
      id:
      class:
      icon: st-price-tag-fill
    - name: 赞助主题
      click: window.open('https://afdian.net/a/efu0u0/', '_blank')
      id:
      class:
      icon: st-afdian-line
```