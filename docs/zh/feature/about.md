---
title: 关于
description: 关于页面配置
---

# 关于

1. 在终端中输入以下命令，它将在 `source` 文件夹下生成一个 `about` 文件夹，其中包含 `index.md` 文件。

  ```shell
  hexo new page about
  ```

2. 将 `index.md` 中的内容替换为以下内容：

  ```markdown
  ---
  title: 关于本站
  date: 2023-10-31 22:24:22
  type: about
  ---
  ```

3. 在 `source/_data` 文件夹中创建一个名为 `about.yml` 的文件，并添加以下内容作为模板。根据需要进行自定义。

  ```yaml authorinfo
  authorinfo:
    leftTags:
      - 🤖️ 技术爱好者 
      - 🔍 分享与帮助
      - 🏠 智能家居爱好者
    rightTags:
      - 脚踏实地行动派 🏃
      - 团队合作者 🧱
      - 坚强而沉默 💢
    image: https://7.isyangs.cn/66/6739c968d0e1f-66.webp
  ```

  `leftTags`: 左侧标签

  `rightTags`: 右侧标签

  `image`: 头像

  ```yaml title
  title: 关于本站
  ```

  `title`: 标题

  ```yaml contentinfo
  contentinfo: # Top personal information display
    sup: 你好，很高兴认识你👋
    name: 我是伍十七 # Name
    title: 学生, 软件工程师, 独立开发者, 博主 # Introduction
    tip: 追求卓越
    slogan: 创造源于激情
    mask:
      - 卓越产品
      - 卓越设计
      - 高效编程
      - 用户友好体验
  ```

  `sup`: 上标

  `name`: 名字

  `title`: 介绍

  `tip`: 提示

  `slogan`: 口号

  ```yaml skills
  skills: # Add as needed
    title: 技能
    subtitle: 解锁创造力
    tags:
      - title: HTML
        img: https://npm.elemecdn.com/wleelw-blog-abs@1.0.0/img/icon/HTML.png  #img 可使用图片
        icon: fab fa-html5  # icon 可使用 Font Awesome 图标 / img 和 icon 属性不应同时使用
        color: "#e9572b"
      - title: Javascript
        img: https://npm.elemecdn.com/wleelw-blog-abs@1.0.0/img/icon/JS.png
        color: "#f7cb4f"
      - title: Kotlin
        img: https://npm.elemecdn.com/wleelw-blog-abs@1.0.0/img/icon/kotlin-logo.svg
        color: "#ffffff"
      - title: WebPack
        img: https://npm.elemecdn.com/wleelw-blog-abs@1.0.0/img/icon/webpack.png
        color: "#2e3a41"
      - title: Git
        img: https://npm.elemecdn.com/wleelw-blog-abs@1.0.0/img/icon/git.png
        color: "#df5b40"
      - title: Docker
        img: https://npm.elemecdn.com/wleelw-blog-abs@1.0.0/img/icon/webpack.png
        color: "#57b6e6"
      - title: Visual Studio
        img: https://npm.elemecdn.com/wleelw-blog-abs@1.0.0/img/icon/vs-logo.svg
        color: "#ffffff"
  ```

  ```yaml careers
  careers:
    title: 经历
    subtitle: 无限进步
    items:
      - school: 软件工程
        major: 学习
        color: "#357ef5"
    image: https://7.isyangs.cn/1/65eb2d10ba24d-1.png
  ```

  ```yaml personalities
  personalities:
    tips: 性格
    title: 执行者
    color: "#56a178"
    type: ESFJ-A
    image: https://www.16personalities.com/static/images/personality-types/avatars/email/large/ENTJ_male.png
    link: https://www.16personalities.com/
    linkText: 16Personalities
    typeLink: https://www.16personalities.com/ch/esfj-人格
    typeName: 执行者
    myphoto: https://7.isyangs.cn/1/65eb2d340cad3-1.png
  ```

  ```yaml motto
  motto:
    title: 座右铭
    prefix: 破釜沉舟，
    content: 勇往直前。
  ```

  `title`: 座右铭

  `prefix`: 破釜沉舟，

  `content`: 勇往直前。

  ```yaml expertise
  expertise:
    title: 专长
    prefix: 数学, 物理, 化学
    specialist: 专家
    content: 学习能力
    level: MAX
  ```

  ```yaml game
  game:
    - title: 游戏爱好
      img: https://7.isyangs.cn/66/6738b3614140c-66.webp
      subtitle: 英雄联盟
      box_shadow: '0 -69px 203px 11px #04120f inset'
      icon_group:
        - https://7.isyangs.cn/66/6738b472ce11f-66.webp
        - https://7.isyangs.cn/66/6738b48045a5b-66.webp
      tips_right: 比尔吉沃特
    - title: 游戏爱好
      img: https://7.isyangs.cn/66/6738b3618ee12-66.webp
      subtitle: 狼人杀
      box_shadow: '0 -69px 203px 11px #415dc9 inset'
      tips_left: ID 1333E3FF
  ```

  ```yaml likes
  likes:
    - type: like-technology
      bg: https://7.isyangs.cn/66/6738b3606d9d3-66.webp
      tips: 兴趣偏好
      title: 数码科技
      subtips: 手机、电脑软硬件
    - type: like-music
      bg: https://7.isyangs.cn/66/6738b36015cb7-66.webp
      tips: 音乐偏好
      title: Hiphop、民谣、华语流行
      subtips: 跟 伍十七 一起欣赏更多音乐
      button: false
      button_text: 更多推荐
      button_link: /music/
  ```

  ```yaml tj
  tj:
    provider: custom # Value can be 51la (51la website statistics) or custom
    url: https://api.everfu.cn/pv/ # Need to register and obtain from the 51la official website or set up your own Baidu statistics project and fill in the access address
    img: https://7.isyangs.cn/1/65eb2e9109826-1.png # Background
  ```

  `provider`: 自定义或者 51la

  `url`: 需要注册并从 51la 官方网站获取或者通过 Zhheo 的 自定义脚本。

  `img`: 背景

  ```yaml oneself
  oneself: # Fill in as needed
    location: 中国, 湖南 # Location
    birthYear: 2004 # Birthday
    university: 江西软件职业技术大学 # Graduated from
    major: 软件工程 # Major
    occupation: 学生 # Occupation
    map: # Map of your location
      light: https://7.isyangs.cn/1/65eb2ec63a9aa-1.png # Daytime
      dark: https://7.isyangs.cn/1/65eb2eedc780e-1.png # Nighttime
  ```

  ```yaml cause
  cause:
    tip: 初衷
    title: 为什么建立这个网站？
    content:
      <br>创建这个网站的初衷是有一个地方可以 <b>积累知识和兴趣</b>。与他人分享可以让这些成为积累和沉淀。如果我能帮助更多的人并解决他们的问题，那就太好了。
      <br>
      与大多数垂直技术博客不同，这里的类别将非常多样，包括 <b>教程和实用知识</b>、<b>生活轶事和建议</b>、<b>各种主题的思考和想法</b>。无论我研究或发现什么，我都会在这里分享。
      <br>
      这是创建这个小网站的初衷，也是 <b>我分享生活的方式</b>。我很幸运在这里遇见你，我相信我们可以一起留下一些美好的回忆。
      <br>
  ```

  ```yaml tenyear
  tenyear:
    tips: 十年之约
    title: 孤独一人，众乐乐。
    start: 2024-04-20
    end: 2034-04-20
  ```

  ```yaml award
  award:
    enable: true
    description: 感谢大家的支持和鼓励。因为你们，我感到写作博客可以为你们创造价值。这将使我在这条路上走得更远。
    tips: '总金额: ¥ {sum}, 将用于博客的维护和更新。'
  rewardList: # Bottom donations
    - name: 悦华
      money: 5
      time: 2023-04-20
      icon: fab fa-weixin
    - name: 糕小菜
      money: 6.66
      time: 2023-08-11
      icon: fab fa-alipay
      vip: true
    - name: 木木
      money: 5
      time: 2023-08-11
      icon: fab fa-weixin
    - name: 悦华
      money: 56
      vip: true
      time: 2023-08-25
      icon: fab fa-weixin
    - name: 糕小菜
      money: 3.33
      time: 2023-12-24
      icon: fab fa-alipay
  ```
