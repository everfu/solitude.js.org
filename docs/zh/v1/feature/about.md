---
title: 关于
description: 关于页面配置
---

# 关于

1. 在终端中输入以下命令，它将在 `source` 文件夹下生成 `about` 文件夹，其中包含 `index.md`​ 文件。
    ```shell
    hexo new page about
    ```
2. 将 `index.md` 中的内容替换成以下内容：
    ```markdown
    ---
    title: 关于本站
    date: 2023-10-31 22:24:22
    type: about
    ---
    ```
3. 在 `source/_data` 文件夹下建立名为 `about.yml`​ 的文件，下方内容为模版，根据要求按需添加。
    ```yaml
    authorinfo:
      leftTags:
        - 🤖️ 数码科技爱好者
        - 🔍 分享与热心帮助
        - 🏠 智能家居小能手
      rightTags:
        - 脚踏实地行动派 🏃
        - 团队小组发动机 🧱
        - 壮汉人狠话不多 💢
      image: https://7.isyangs.cn/1/65eb27e69bcff-1.png

    title: 关于本站

    contentinfo: # 顶部个人信息展示
      sup: 你好，很高兴认识你👋
      name: 我叫王卓Sco # 名称
      title: 是一名学生、软件工程师、独立开发者、博主 # 介绍
      tip: 追求
      slogan: 源于<br>热爱而去创造
      mask:
        - 优秀的产品
        - 出色的设计
        - 高效的编程
        - 人性化的用户体验

    skills: # 根据需求添加
      title: 技能
      subtitle: 开启创造力
      tags:
        - title: HTML
          icon: https://npm.elemecdn.com/wleelw-blog-abs@1.0.0/img/icon/HTML.png
          color: "#e9572b"
        - title: Javascript
          icon: https://npm.elemecdn.com/wleelw-blog-abs@1.0.0/img/icon/JS.png
          color: "#f7cb4f"
        - title: Kotlin
          icon: https://npm.elemecdn.com/wleelw-blog-abs@1.0.0/img/icon/kotlin-logo.svg
          color: "#ffffff"
        - title: WebPack
          icon: https://npm.elemecdn.com/wleelw-blog-abs@1.0.0/img/icon/webpack.png
          color: "#2e3a41"
        - title: Git
          icon: https://npm.elemecdn.com/wleelw-blog-abs@1.0.0/img/icon/git.png
          color: "#df5b40"
        - title: Docker
          icon: https://npm.elemecdn.com/wleelw-blog-abs@1.0.0/img/icon/webpack.png
          color: "#57b6e6"
        - title: Visual Studio
          icon: https://npm.elemecdn.com/wleelw-blog-abs@1.0.0/img/icon/vs-logo.svg
          color: "#ffffff"

    careers:
      title: 生涯
      subtitle: 无限进步
      items:
        - school: 软件工程
          major: 学习
          color: "#357ef5"
      image: https://7.isyangs.cn/1/65eb2d10ba24d-1.png

    personalities:
      tips: 性格
      title: 执政官
      color: "#56a178"
      type: ESFJ-A
      image: https:/example.com/ESFJ-A.svg
      link: https://www.16personalities.com/
      linkText: 16personalities
      typeLink: https://www.16personalities.com/ch/esfj-人格
      typeName: 执政官
      myphoto: https://7.isyangs.cn/1/65eb2d340cad3-1.png

    motto:
      title: 座右铭
      prefix: 破釜沉舟，
      content: 砥砺前行。
    expertise:
      title: 特长
      prefix: 数学、物理、化学
      specialist: 专家
      content: 学习能力
      level: MAX

    game1:
      title: 爱好游戏
      img: https://7.isyangs.cn/1/65eb2d8954aac-1.png
      icon: fas fa-gamepad
      subtitle: APEX LEGENDS
      tips_left: C位
      tips_right: ID Wleelw

    game2:
      title: 爱好游戏
      img: https://7.isyangs.cn/1/65eb2e0383970-1.png
      subtitle: 精灵与萤火意志
      icon: fas fa-dice-d20
      tips_right: 跑图大师

    likes:
      - type: like-technology
        bg: https://7.isyangs.cn/1/65eb2e3d6616b-1.png
        tips: 关注偏好
        title: 数理化
        subtips: 理工男
      - type: like-music
        bg: https://7.isyangs.cn/1/65eb2e5f85132-1.png
        tips: 音乐偏好
        title: 民谣、古典、轻音乐
        subtips: 跟 王卓Sco 一起欣赏更多音乐
        button: true
        button_text: 更多推荐
        button_link: /music/

    tj: # 统计
      provider: # 值为 51la（51la网站统计）或 baidu（百度统计）
      url: https://v6-widget.51.la/v6/3F15j2vtdTo7PPcN/quote.js # 需要到51la官网注册自行获取 or 自行搭建 Heo 的 百度统计项目，填写访问地址即可
      img: https://7.isyangs.cn/1/65eb2e9109826-1.png # 背景

    oneself: # 按需填写
      location: 中国，湖南省 # 所在位置
      birthYear: 2004 # 生日
      university: 湖南大学 # 毕业学校
      major: 软件工程 # 专业
      occupation: 学生 # 职位
      map: # 你所在位置的地图
        light: https://7.isyangs.cn/1/65eb2ec63a9aa-1.png # 白天
        dark: https://7.isyangs.cn/1/65eb2eedc780e-1.png # 夜晚

    # 自定义
    cause:
      tip: 心路历程
      title: 为什么建站？
      content:
        <br>创建这个站的时候，想要就是能够有一个自己能够<b>积累知识、积累兴趣</b>的地方。和他人分享，会让这些成为积累和沉淀。如果能够帮助到更多的人，帮助更多人解决问题，那一定是非常棒的事情。
        <br>
        与大多数垂直类的技术博客不同，这里的种类会非常的繁杂，有<b>技能的教程干货</b>、有<b>生活上的吐槽和妙招</b>、有<b>话题上的思考和想法</b>。一般我研究什么、发现了什么都会分享在这里。
        <br>
        这些就是创造这个小站的本意，<b>也是我分享生活的方式</b>。有幸能和你相遇在这里，相信我们能共同留下一段美好记忆。
        <br>

    tenyear:
      tips: 十年之约
      title: 一个人的寂寞，一群人的狂欢。
      start: 2023年04月20日
      end: 2033年04月20日

    award:
      enable: true
      description: 感谢赞赏的人，因为你们，让我感受到写博客这件事情能够给你们创造了价值。这会让我在这条路上走得更远。
      tips: 总金额：¥ {sum}，将全部用于博客的维护和更新。 # 必须带 {sum}，否则无法显示总金额
    rewardList: # 底部捐赠
      - name: 悦华
        money: 5
        time: 2023-04-20
      - name: 糕小菜
        money: 6.66
        time: 2023-08-11
        vip: true
      - name: 幕幕
        money: 5
        time: 2023-08-11
      - name: 悦华
        money: 56
        vip: true
        time: 2023-08-25
      - name: 糕小菜
        money: 3.33
        time: 2023-12-24
    ```