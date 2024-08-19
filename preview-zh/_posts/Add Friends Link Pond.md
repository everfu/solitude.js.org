---
title: 添加友链朋友圈
categories:
  - 教程
tags:
  - Hexo
cover: https://s3.qjqq.cn/47/66c2adf0ecf4d.png!color
abbrlink: d3883050
date: 2024-03-28 08:00:00
recommend: true
update: 2024-03-28 08:00:00
---

{% note 'success simple' %}
在开始之前：从版本1.8.10开始，主题将不再包含朋友链接池。如果您想使用它，请手动添加。

本教程使用Hexo的朋友链接池样式。
{% endnote %}

## 介绍

朋友链接池是一种展示您朋友的链接和他们最新文章的方式，使您的网站更加活跃。

## 教程

1. 使用以下命令创建一个页面：
    ```bash
    hexo new page moments
    ```
2. 将以下内容复制到source/moments/index.md：
```markdown
---
title: 朋友链接池
desc: 最新文章订阅
date: 2024-01-28 21:29:15
type: "banner"
cover: ''
leftend: 使用朋友链接池订阅您朋友的最新文章
---
## 🐟 池塘
<div id="hexo-circle-of-friends-root"></div>
<script>
    let UserConfig = {
        private_api_url: 'http://192.168.31.44:8000/', /* 替换为您的API URL */
        page_turning_number: 12, /* 点击“加载更多”时加载的文章的最大数量，默认为10 */
        error_img: 'https://sdn.geekzu.org/avatar/57d8260dfb55501c37dde588e7c3852c', /* 加载失败时的默认头像URL */
        sort_rule: 'created', /* 首次进入页面的排序规则 */
    };
</script>
   
<style>
    .cf-article-group{
        margin: 0 -8px;
    }   
</style>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/zhheo/JS-Heo@master/mainColor/heoMainColor.css">
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/zhheo/JS-Heo@master/moments5/app.min.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/zhheo/JS-Heo@master/moments5/bundle.js"></script>
```

3. 将private_api_url修改为您的API URL。
4. 使用以下命令重新生成您的网站：
    ```bash
    hexo clean && hexo g
    ```

## 添加钓鱼功能

1. 在moments/index.md的顶部（在front-matter下方）添加以下代码：
```markdown
<div class="title-h2-a">
    <div class="title-h2-a-left">
        <h2 style="padding-top: 0;margin:0.6rem 0 0.6rem;">🎣 钓鱼</h2>
        <a href="javascript:fetchRandomPost();" id="random-post-start" style="transition-duration: 0.3s; transform: rotate(63000deg); opacity: 1;" data-pjax-state="">
            <i class="solitude st-restart-line"></i>
        </a>
    </div>
    <div class="title-h2-a-right">
        <a href="/links/" data-pjax-state="">所有链接</a>
    </div>
</div>
<div id="random-post"></div>

<script>
var fdata = {
    apiurl: "http://192.168.31.44:8000/", /* 替换为您的API URL */
    defaultFish: 100,
    hungryFish: 100,
}
</script>

<script type="text/javascript" src="https://cdn.cbd.int/solitude-source@1.0.5/js/moment/random_post.min.js"></script>
```

2. 在moments/index.md的style标签内添加以下代码：
```css
#random-post {
  min-height: 32px;
  background: var(--efu-card-bg);
  border: var(--style-border-always);
  box-shadow: var(--efu-shadow-border);
  padding: 20px 30px;
  border-radius: 12px;
  margin-top: 8px;
}
.random-friends-post {
  text-decoration: none;
  border-bottom: 2px solid var(--efu-lighttext);
  color: var(--efu-fontcolor);
  font-weight: 700;
  padding: 0 4px;
}
.random-friends-post:hover {
  text-decoration: none;
  border-bottom: 2px solid var(--efu-none);
  color: var(--efu-white);
  background: var(--efu-main);
  border-radius: 4px;
  box-shadow: var(--efu-shadow-main);
}
.random-post-start {
  transition-duration: 0.3s;
}
.random-post-start:hover {
  color: var(--efu-hovertext);
}
#page .title-h2-a {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.5rem;
}
#page .title-h2-a a {
  margin-left: 0.5rem;
  color: var(--efu-secondtext);
  font-weight: 700;
}
#page .title-h2-a a:hover {
  color: var(--efu-main);
}
#page .title-h2-a .title-h2-a-left {
  display: flex;
  align-items: center;
}
#page .title-h2-a .title-h2-a-right {
  font-size: 14px;
  color: var(--efu-secondtext);
}
```

## 完整代码

```markdown
---
title: 朋友链接池
desc: 最新文章订阅
date: 2024-01-28 21:29:15
type: "banner"
cover: ''
leftend: 使用朋友链接池订阅您朋友的最新文章
---

<div class="title-h2-a">
    <div class="title-h2-a-left">
        <h2 style="padding-top: 0;margin:0.6rem 0 0.6rem;">🎣 钓鱼</h2>
        <a href="javascript:fetchRandomPost();" id="random-post-start" style="transition-duration: 0.3s; transform: rotate(63000deg); opacity: 1;" data-pjax-state="">
            <i class="solitude st-restart-line"></i>
        </a>
    </div>
    <div class="title-h2-a-right">
        <a href="/links/" data-pjax-state="">所有链接</a>
    </div>
</div>
<div id="random-post"></div>

<script>
var fdata = {
    apiurl: "http://192.168.31.44:8000/", /* 替换为您的API URL */
    defaultFish: 100,
    hungryFish: 100,
}
</script>

<script type="text/javascript" src="https://cdn.cbd.int/solitude-source@1.0.5/js/moment/random_post.min.js"></script>

## 🐟 池塘

<div id="hexo-circle-of-friends-root"></div>
<script>
    let UserConfig = {
        private_api_url: 'http://192.168.31.44:8000/', /* 替换为您的API URL */
        page_turning_number: 12, /* 点击“加载更多”时加载的文章的最大数量，默认为10 */
        error_img: 'https://sdn.geekzu.org/avatar/57d8260dfb55501c37dde588e7c3852c', /* 加载失败时的默认头像URL */
        sort_rule: 'created' /* 首次进入页面的排序规则 */
    }
</script>
<style>
.cf-article-group {
    margin: 0 -8px;
} 
#random-post {
  min-height: 32px;
  background: var(--efu-card-bg);
  border: var(--style-border-always);
  box-shadow: var(--efu-shadow-border);
  padding: 20px 30px;
  border-radius: 12px;
  margin-top: 8px;
}
.random-friends-post {
  text-decoration: none;
  border-bottom: 2px solid var(--efu-lighttext);
  color: var(--efu-fontcolor);
  font-weight: 700;
  padding: 0 4px;
}
.random-friends-post:hover {
  text-decoration: none;
  border-bottom: 2px solid var(--efu-none);
  color: var(--efu-white);
  background: var(--efu-main);
  border-radius: 4px;
  box-shadow: var(--efu-shadow-main);
}
.random-post-start {
  transition-duration: 0.3s;
}
.random-post-start:hover {
  color: var(--efu-hovertext);
}
#page .title-h2-a {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.5rem;
}
#page .title-h2-a a {
  margin-left: 0.5rem;
  color: var(--efu-secondtext);
  font-weight: 700;
}
#page .title-h2-a a:hover {
  color: var(--efu-main);
}
#page .title-h2-a .title-h2-a-left {
  display: flex;
  align-items: center;
}
#page .title-h2-a .title-h2-a-right {
  font-size: 14px;
  color: var(--efu-secondtext);
}
</style>
```

## 结果

![](https://s3.qjqq.cn/47/66223d41d13b2.webp!color)

