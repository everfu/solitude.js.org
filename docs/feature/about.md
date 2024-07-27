---
title: About
description: About page configuration
---

# About

1. Enter the following command in the terminal, it will generate an `about` folder under the `source` folder, which contains the `index.md` file.
  ```shell
  hexo new page about
  ```
2. Replace the content in `index.md` with the following:
  ```markdown
  ---
  title: About This Site
  date: 2023-10-31 22:24:22
  type: about
  ---
  ```
3. Create a file named `about.yml` in the `source/_data` folder, and add the following content as a template. Customize it as needed.
  ```yaml
  authorinfo:
    leftTags:
    - 🤖️ Tech Enthusiast
    - 🔍 Sharing and Helping
    - 🏠 Smart Home Enthusiast
    rightTags:
    - Down-to-earth Action Taker 🏃
    - Team Player 🧱
    - Strong and Silent 💢
    image: https://7.isyangs.cn/1/65eb27e69bcff-1.png

  title: About This Site

  contentinfo: # Top personal information display
    sup: Hello, nice to meet you👋
    name: My name is Wang Zhuo Sco # Name
    title: Student, Software Engineer, Indie Developer, Blogger # Introduction
    tip: Pursuing
    slogan: Creating from<br>Passion
    mask:
    - Excellent Products
    - Outstanding Design
    - Efficient Programming
    - User-friendly Experience

  skills: # Add as needed
    title: Skills
    subtitle: Unlock Creativity
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
    title: Careers
    subtitle: Infinite Progress
    items:
    - school: Software Engineering
      major: Study
      color: "#357ef5"
    image: https://7.isyangs.cn/1/65eb2d10ba24d-1.png

  personalities:
    tips: Personality
    title: Executive
    color: "#56a178"
    type: ESFJ-A
    image: https:/example.com/ESFJ-A.svg
    link: https://www.16personalities.com/
    linkText: 16personalities
    typeLink: https://www.16personalities.com/ch/esfj-人格
    typeName: Executive
    myphoto: https://7.isyangs.cn/1/65eb2d340cad3-1.png

  motto:
    title: Motto
    prefix: Burn the boats,
    content: Forge ahead.
  expertise:
    title: Expertise
    prefix: Mathematics, Physics, Chemistry
    specialist: Expert
    content: Learning Ability
    level: MAX

  game1:
    title: Gaming Hobby
    img: https://7.isyangs.cn/1/65eb2d8954aac-1.png
    icon: fas fa-gamepad
    subtitle: APEX LEGENDS
    tips_left: Position C
    tips_right: ID Wleelw

  game2:
    title: Gaming Hobby
    img: https://7.isyangs.cn/1/65eb2e0383970-1.png
    subtitle: Spirit and Fire Will
    icon: fas fa-dice-d20
    tips_right: Speedrunner

  likes:
    - type: like-technology
    bg: https://7.isyangs.cn/1/65eb2e3d6616b-1.png
    tips: Interest
    title: Science and Technology
    subtips: Science and Engineering Enthusiast
    - type: like-music
    bg: https://7.isyangs.cn/1/65eb2e5f85132-1.png
    tips: Music Preference
    title: Folk, Classical, Easy Listening
    subtips: Enjoy more music with Wang Zhuo Sco
    button: true
    button_text: More Recommendations
    button_link: /music/

  tj: # Statistics
    provider: # Value can be 51la (51la website statistics) or baidu (Baidu statistics)
    url: https://v6-widget.51.la/v6/3F15j2vtdTo7PPcN/quote.js # Need to register and obtain from the 51la official website or set up your own Baidu statistics project and fill in the access address
    img: https://7.isyangs.cn/1/65eb2e9109826-1.png # Background

  oneself: # Fill in as needed
    location: China, Hunan Province # Location
    birthYear: 2004 # Birthday
    university: Hunan University # Graduated from
    major: Software Engineering # Major
    occupation: Student # Occupation
    map: # Map of your location
    light: https://7.isyangs.cn/1/65eb2ec63a9aa-1.png # Daytime
    dark: https://7.isyangs.cn/1/65eb2eedc780e-1.png # Nighttime

  # Custom
  cause:
    tip: Journey
    title: Why Build a Website?
    content:
    <br>When creating this site, the goal was to have a place where I could <b>accumulate knowledge and interests</b>. Sharing with others would allow these to become accumulation and precipitation. If I can help more people and solve their problems, that would be great.
    <br>
    Unlike most vertical technical blogs, the categories here will be very diverse, including <b>tutorials and practical knowledge</b>, <b>life anecdotes and tips</b>, and <b>thoughts and ideas on various topics</b>. Whatever I research or discover, I will share it here.
    <br>
    This is the original intention of creating this small site, and it is also <b>my way of sharing life</b>. I am fortunate to meet you here, and I believe we can leave behind some wonderful memories together.
    <br>

  tenyear:
    tips: Ten-Year Pact
    title: Loneliness of one, Revelry of many.
    start: April 20, 2023
    end: April 20, 2033

  award:
    enable: true
    description: Thanks to the people who appreciate and support me. Because of you, I feel that writing blogs can create value for you. This will allow me to go further on this path.
    tips: Total Amount: ¥ {sum}, will be used for the maintenance and updates of the blog. # Must include {sum}, otherwise the total amount will not be displayed
  rewardList: # Bottom donations
    - name: Yuehua
    money: 5
    time: 2023-04-20
    - name: Gaoxiaocai
    money: 6.66
    time: 2023-08-11
    vip: true
    - name: Mu Mu
    money: 5
    time: 2023-08-11
    - name: Yuehua
    money: 56
    vip: true
    time: 2023-08-25
    - name: Gaoxiaocai
    money: 3.33
    time: 2023-12-24
  ```