---
title: Basic Configuration
description: Configuration Basics for the Solitude Theme
---

# Basic Configuration

## Site Configuration

Here, you can modify various aspects of your website, such as the title, subtitle, and email.

:::code-group
```yaml [_config.yml]
# Site
title: Efu # title
subtitle: '' # subtitle
description: 'Carefully strive and possess.' # description
keywords: 'everfu, Efu' # keywords
author: Efu # author
language: en-US # language
timezone: 'Asia/Shanghai' # tz
```

```yaml [_config.solitude.yml]
# --------------------------- start ---------------------------
# Site information
# 网站信息
site:
  name:
    class: text # text / i_class / img
    custom: Solitude # Solitude / fas fa-ghost / /img/pwa/favicon.ico
  icon: /img/pwa/favicon.ico # Site icon / 网站图标
# --------------------------- end ---------------------------
```
:::

## Navigation Menu

:::code-group
```yaml [Group]
group:
  # Category name: link address || icon
  Projects:
    # Submenu name: link address || icon
    Solitude: https://github.com/everfu/hexo-theme-solitude || https://7.isyangs.cn/1/65eb200ee4dea-1.png
```

```yaml [Menu]
menu:
  Home: / # Display name: path
  Article: # Display name
    Archives: /archives/ || fas fa-folder-closed # Submenu name: path || icon
    Categories: /categories/ || fas fa-clone
    Tags: /tags/ || fas fa-tags
  Friends:
    Moments: /moments/ || fas fa-wifi
    Links: /links/ || fas fa-user-group
    Treasure: javascript:travelling() || fas fa-gift
  Myself:
    Equipment: /equipment/ || fas fa-laptop
    Toolbox: /tlink/ || fas fa-toolbox
    Music: /music/ || fas fa-music
  About:
    About Us: /about/ || fas fa-user
```
```yaml [Button]
right:
  random: false # random post jump
  custom:
    - name: 开往 - 友链接力 # text
      url: https://www.travellings.cn/go.html # Jump link
      icon: fas fa-train # Icon
      onclick: # Click event
      id: travellings_button # id
```
:::

## Top of Homepage

If enabled, you can add **recommend: true** in the front matter of an article to display it on the right side.

```yaml
hometop:
  enable: false
  banner:
    # tip: HTML tags can be used
    title: Peaceful and Far-reaching<br>Love Life # title
    url: Hexo Theme Solitude # small text
    # Carousel icon
    # tip: 76x76 size
    icon:
    #  HTML:
    #    img: https://i.postimg.cc/vBWVnY8q/html.png
    #    color: "#e9572b"
    #  JS:
    #    img: https://i.postimg.cc/3N10Ltv2/js.png
    #    color: "#f7cb4f"
    #  Docker:
    #    img: https://i.postimg.cc/8Pk6Fg24/docker.png
    #    color: "#57b6e6"
    #  Flutter:
    #    img: https://i.postimg.cc/hPC7T3gB/flutter.png
    #    color: "#ffffff"
    #  WebPack:
    #    img: https://i.postimg.cc/dVLZBmtT/webpack.png
    #    color: "#2e3a41"
    #  Git:
    #    img: https://i.postimg.cc/nhgjwjCS/git.png
    #    color: "#df5b40"

  group:
  #  Fire: /tags/Fire/ || fas fa-fire || linear-gradient(to right, #f65, #ffbf37)
  #  Course: /tags/Course/ || fas fa-book || linear-gradient(to right, #358bff, #15c6ff)
  #  Curation: /tags/Curation/ || fas fa-star || linear-gradient(to right, #18e7ae, #1eebeb)

  # Right top list (add "recommend: true" in the front matter of the article)
  recommendList:
    sup: Top # top
    title: Solitude Documentation
    url: https://solitude.js.org/ # click link
    img: /img/default.avif # background image
    color: none # shadow color
```

## Homepage Carousel

Add `recommend: true` to the front matter of the article to display the top article on the right side.

```yaml
carousel: false # Add "recommend: true" in the front matter of an article
```

## Sidebar

> Sticky: Follow, noSticky: Do not follow. Values for Sticky and noSticky: about、allInfo、newestPost、flip

```yaml
home: # Sidebar information displayed on the homepage
  noSticky: about
  Sticky: allInfo
post: # Sidebar information displayed on the article page
  noSticky: about
  Sticky: newestPost
page: # Sidebar information displayed on the page
  noSticky: about
  Sticky: newestPost,allInfo
```
position: Determine which side the sidebar is on
```yaml
position: 1 # left(0): left / right(1): right
```

:::code-group
```yaml [Personal Information Card]
card:
  style: 0 # 0 / 1 / 2
  author:
    img: https://github.com/everfu.png # avatar
    # Emoticon image link
    # tip: Recommended size 26x26
    sticker: https://7.isyangs.cn/1/65eb22ac6952e-1.png # Leave blank to hide
  url: /about/
  background: # https://s3.qjqq.cn/47/663af296b85f4.webp!color # Leave blank to not display (only valid for styles 1 and 2)
  # label1
  # tip: HTML tags can be used
  content: Share my <b>passion</b> for programming, my <b>aspiration</b> for a better life, and my <b>journey</b> of exploring the ocean of knowledge.
  # label2
  # tip: HTML tags can be used
  content2: I believe you can find useful knowledge and tutorials here.
  # Small icons at the bottom of the personal information card, fill in according to the example
  # Greeting statement of the button at the top of the personal information card
  sayhello: # Not valid for style 2
    morning: ✨ Good morning. It's a new day
    noon: It's time for a midday break
    afternoon: Tea time. 🍵
    night: early bedtime
    goodnight: Good night 😴
  sayhello2: # Not valid for style 2
    - You'll make it.
    - You're gonna make it.
    - Good luck, stranger.
  # Small icons at the bottom of the personal information card, fill in according to the example
  information: # Do not exceed 4 for style 1
    Github: https://github.com/everfu || fab fa-github
    Bilibili: https://space.bilibili.com/1329819902 || fab fa-bilibili
```

```yaml [Official Account QR Code]
flip:
  favicon: # png
  face: 
  backface:
  backcolor: "var(--efu-blue)" # var(--efu-blue) / #000 / rgba(0,0,0,0.5) / linear-gradient(to right,#f65,#ffbf37)
```

```yaml [Newest Comments]
newest_comment:
  enable: true
  storage: .5 # Cache time 1: 1 day / .5 : half a day
  limit: 5 # Number of comments
```

```yaml [Page Table of Contents]
# Page Table of Contents
toc:
  # Display on the article page
  post: true
  # Display on any page
  page: false
  # Fuzzy effect when the directory is not hovered over
  vague: true
```

```yaml [Article List]
# Sidebar article list
tags:
  enable: false
  # Display the number of tags, when it is higher than the total number of tags, display all tags button
  limit: 20
  # Highlight
  highlight: false
  # Highlighted tag list
  list:
    - Solitude-Usage
```

```yaml [Article Archive]
# Sidebar archive
archive:
  enable: false
  # Display Method: month (by month) / year (by year)
  type: month 
```

```yaml [Website Information]
# Website information
siteinfo:
  # Number of articles
  postcount: true
  # Total number of words
  wordcount: true
  # Number of visits
  pv: true
  # Number of visitors
  uv: true
  # Last update date
  updatetime: true
  # Website creation time
  runtimeenable: true
  # Format: yyyy-MM-dd hh:mm:ss
  runtime: 2023-04-20 00:00:00
```
:::

## Page Configuration

```yaml
page:
  error: true # 404 page
  tags: true # Tags page
  categories: true # Categories page
  default: # Default value
    # Default cover
    cover:
      - /img/default.png # default cover
```

## Post Configuration

```yaml
# Default settings for the post page
post:
  default:
    # Default cover
    cover:
      # - # default cover
    # Default post locate
    locate: Hengyang
    # Default post copyright
    copyright:
      enable: true
      author:
        url: /about/ # Click on the avatar to jump to the address
        img: # Display avatar, leave blank to display site_icon by default
      license: CC BY-NC-SA 4.0
      licenurl: https://creativecommons.org/licenses/by-nc-sa/4.0/
  # Top article introduction
  meta:
    date: false # Release date
    updated: false # Update date
    locate: false # Location
    wordcount: false # Number of words
    readtime: false # uv
    pv: false # Page views
    comment: false # Number of comments
  # Reward
  award:
    enable: false
    appreciators: /about # Appreciative records
    title: Thank you for your support.
    desc: Because of your support, I realize the value of writing articles.
    list:
      # - name: Alipay
      #   qcode: https://7.isyangs.cn/34/65f2e5a6d2ef5-34.png
      #   color: var(--efu-blue)
  # Subscription button jump link in copyright, enable after filling in the address
  rss: # /atom.xml
  # Article theme color acquisition
  covercolor:
    enable: false
    mode: local # local: local color / api: img2color color
    api: https://api.qjqq.cn/api/Imgcolor?img= # api address
    time: 43200000 # api color interval (milliseconds), default is 12 hours
```

## Custom Theme

:::code-group

```yaml [Custom Colors]
# Custom theme color
# Note: The color value must be enclosed in quotation marks, such as "#000", otherwise it may cause an error!
# --------------------------------------
theme_color:
  dark: "#ffc848" # Dark mode
  dark_op: "#f2b94b23" # Dark mode transparent
  dark_op_deep: "#f2b94bdd" # Dark mode transparent dark
  dark_none: "#f2b94b00" # Dark mode transparent colorless
  light: "#425aef" # Light mode
  light_op: "#4259ef23" # Light mode transparent
  light_op_deep: "#4259efdd" # Light mode transparent dark
  light_none: "#4259ef01" # Light mode transparent colorless
```

```yaml [DarkMode]
# Theme display mode adjustment
# The theme supports three modes: automatic switching, dark mode, and light mode
# --------------------------------------
display_mode:
  type: auto # auto: automatic switching / dark: dark mode / light: light mode
  universe: true # After opening, the dark mode will display the starry sky background
```

```yaml [Fonts]
# Font
font:
  font-size: 16px
  code-font-size: 16px
  font-family: 'PingFang SC, Hiragino Sans GB, Microsoft YaHei'
  code-font-family: '"monospace", monospace'
```

```yaml [Background]
background:
  enable: false
  opacity: .2
  dark: https://bu.dusays.com/2023/09/29/651685ce667d1.jpg
  light: https://bu.dusays.com/2023/09/29/651685cc18d39.jpg
```

```yaml [Click Bait]
# Lure
lure:
  enable: false
  # Jump out
  jump: 404 Not Found
  # Switch back
  back: ヾ(≧∇≦*)ゝHehe, you've been fooled
```

```yaml [Article Expiration Reminder]
# Article expiration reminder
expire:
  enable: false
  # Expiration time
  time: 30
  position: top # top / bottom
  # Expiration prompt
  text_prev: "This article expired"
  text_next: "days ago. If the content is not correct, please contact the webmaster for an update."
```
:::

## Homepage Article List

```yaml
# Homepage article configuration information
index_post_list:
  direction: column # row / column
  content: 3 # 1: post.description / 2: Automatically get descriptions or screenshots / 3: Use only screenshots / false: No content is displayed
  length: 500 # Length of the screenshot content
  cover: both # left: on the left / right: on the right / both: on both sides
```

## Related Posts

```yaml
# Related posts at the bottom of the article
related_post:
  enable: true # Whether to enable recommendations
  limit: 2 # Number of recommended articles
  date_type: created # Based on creation date (created) or update date (updated)
```

## Right-click Menu

```yaml
right_menu:
  enable: true
  custom_list:
    - name: Random
      click: toRandomPost()
      id: menu-randomPost
      class:
      icon: fas fa-random
    - name: Categories
      click: pjax.loadUrl('/categories/') # Use window.open for external links, pjax cannot request cross-domain content
      id:
      class:
      icon: fas fa-clone
    - name: Tags
      click: pjax.loadUrl('/tags/')
      id:
      class:
      icon: fas fa-tags
```
