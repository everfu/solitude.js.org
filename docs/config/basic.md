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
title: 伍拾柒 # 博客标题
subtitle: "" # 博客子标题
description: 小心翼翼的努力并拥有着。 # 博客简介
keywords: 伍拾柒 # 博客关键词
author: 伍拾柒 # 博主名称
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
    # 具体内容 例如：solitude st-logo / 伍拾柒 / /img/logo.png
    # Specific content, for example: solitude st-logo / 伍拾柒 / /img/logo.png
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

```yaml
hometop:
  enable: false
  banner:
    title: 分享技术<br >与科技生活 # 大字
    desc:
      一个热爱生活的人 # 小字
      # - 我只是一个普通的程序员
      # - 但我有一个不平凡的梦想
      # - 我希望能够改变世界
    icon:
      # HTML: # name
      #   img: https://i.postimg.cc/vBWVnY8q/html.png # url
      #   color: "#e9572b" # color
      # JS:
      #   img: https://i.postimg.cc/3N10Ltv2/js.png
      #   color: "#f7cb4f"
      # Docker:
      #   img: https://i.postimg.cc/8Pk6Fg24/docker.png
      #   color: "#57b6e6"
      # Flutter:
      #   img: https://i.postimg.cc/hPC7T3gB/flutter.png
      #   color: "#ffffff"
      # WebPack:
      #   img: https://i.postimg.cc/dVLZBmtT/webpack.png
      #   color: "#2e3a41"
      # Git:
      #   img: https://i.postimg.cc/nhgjwjCS/git.png
      #   color: "#df5b40"
  group:
    # 热门: /tags/Fire/ || fas fa-fire || linear-gradient(to right,#f65,#ffbf37)
  recommendList:
    enable: true
    sup: 置顶
    title: Solitude 官方文档
    url: https://solitude.js.org/
    img: /img/default.avif
    color: "none"
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
my_card:
  author:
    img: /img/logo.png # url
    sticker: # url, 24x24 size
  # 介绍 / Introduction
  description: 只有迎风，风筝才能飞得更高。
  # 内容 / Content
  content: # 这是我的博客 / This is my Blog
  state:
    morning: ✨ 早上好，新的一天开始了
    noon: 🍲 午餐时间
    afternoon: 🌞 下午好
    night: 早点休息
    goodnight: 晚安 😴
  witty_words:
    # - 你可以的
    # - 你一定可以的
    # - 祝你好运，陌生人
  # social
  # 社交信息图标
  information:
  #  Github: https://github.com/everfu || fab fa-github # Name: link || icon
  #  Bilibili: https://space.bilibili.com/1329819902 || fab fa-bilibili
```

```yaml [页面目录]
toc:
  post: true
  page: false
  vague: true
```

```yaml [标签]
tags:
  enable: false
  limit: 20 # Number of tags displayed
  # Highlighted tags
  highlight_list:
    # - Hexo
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
siteinfo:
  # Number of articles
  # 文章数量
  postcount: true
  # Total number of words
  # 总字数
  wordcount: false
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
  runtime: "2023-04-20 00:00:00"
```

:::

## 页面配置

```yaml
# 页面默认设置
page:
  # 404 页面
  error: true
  # 标签页面
  tags: true
  # 分类页面
  categories: true
  # list: 排序列表 / 1: 跟随首页列表
  archives: 0
  # 默认值
  default:
    # 未设置封面时的默认图片
    cover:
      # - /img/default.png # 默认图片 / default cover
```

## 文章配置

```yaml
# Post default settings
# 文章默认设置
post:
  default:
    # Default image when no cover is set
    # 未设置封面时的默认图片
    cover:
      # -  # 默认图片 / default cover
    # Location
    # 位置
    locate: China
    # Copyright
    # 版权
    copyright:
      enable: true
      author: /img/logo.png # url
      # License
      # 许可证
      license: CC BY-NC-SA 4.0
      # License link
      # 许可证链接
      licenurl: https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans
  # Article Local AI
  # 文章本地AI
  ai:
    enable: false
    modelName: 小七 GPT
  # Article meta information
  # 文章元信息
  meta:
    # Release date
    # 发布日期
    date: false
    # Update date
    # 更新日期
    updated: false
    # Location
    # 位置
    locate: false
    # Number of words
    # 字数
    wordcount: false
    # uv
    readtime: false
    # pv
    pv: false
    # Comment count
    # 评论数
    comment: false
  # Reward
  # 打赏
  award:
    enable: false
    appreciators: /about/ # Reward page
    # Reward Title
    # 打赏标题
    title: # Thanks for your appreciation. / 感谢您的赞赏
    desc: # Because of your support, I realize the value of writing articles. / 由于您的支持，我才能够实现写作的价值。
    # Reward list
    # 打赏列表
    list:
      # - name: Github Sponsor
      #   qcode: https://s3.qjqq.cn/47/661ba900c4bc1.webp!color
      #   url: https://github.com/sponsors/everfu
      #   color: var(--efu-black)

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
  rss: # /atom.xml
  # Article reading progress
  # 文章封面取色
  covercolor:
    enable: false
    # local: local color / api: api color / ave: oss average color
    mode: local
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
```

## 自定义主题

:::code-group

```yaml [自定义配色]
theme_color:
  dark: "#ffc848" # dark
  light: "#425AEF" # light
```

```yaml [显示模式]
display_mode:
  # auto: automatic switching(Recognize the current theme mode of the device) / dark: dark mode / light: light mode
  # auto: 自动切换（识别设备当前主题模式） / dark: 深色模式 / light: 浅色模式
  type: auto
  # After opening, the dark mode will display the starry sky background
  # 开启后深色模式会显示星空背景
  universe: false
```

```yaml [字体]
font:
  font-size: 16px
  code-font-size: 16px
  # Global font
  # 全局字体
  font-family: "PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif"
  # Code font
  # 代码字体
  code-font-family: '"monospace", monospace'
```

```yaml [网站背景]
background:
  enable: false
  opacity: .2
  dark: https://i.pinimg.com/originals/d8/b3/9d/d8b39d12b653810db452c437211aeb2e.png
  light: https://i.pinimg.com/originals/93/57/38/935738ed9657b296c2ef0ebd2151eb66.jpg
```

```yaml [Lure]
# 当用户退出页面时，修改标题
lure:
  enable: false
  jump: 404 Not Found
  back: ヾ(≧∇≦*)ゝHey, hey, you fell for it.
```

```yaml [文章过期提醒]
# 文章过期提醒
expire:
  enable: false
  # 过期时间
  time: 30
  position: top # top / bottom
  # 过期提示
  text_prev: "本文已于"
  text_next: "天前过期，如果内容不符，请联系站长更新。"
```

:::

## 首页文章列表

```yaml
index_post_list:
  direction: column # row / column
  column: 2 # 2: 2 columns 3: 3 columns
  cover: both
```

## 推荐文章

```yaml
related_post:
  enable: false
  limit: 2
  # created: release date / updated: update date
  # created: 发布日期 / updated: 更新日期
  date_type: created
```

## 右键菜单

```yaml
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
```

## 复制

```yaml
copy:
  enable: false
  # 复制后链接版权信息
  copyright:
    enable: false
    # 复制文字时超过多少字数显示
    limit: 50
```
