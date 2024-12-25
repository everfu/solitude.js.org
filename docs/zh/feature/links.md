---
title: 友情链接
description: 为你的站点添加友情链接
---

# 友情链接

1. 在终端中输入以下命令，它将在 `source` 文件夹下生成 `links` 文件夹，其中包含 `index.md` ​文件。
    ```bash
    hexo new page links
    ```
2. 将 `index.md` 中的内容替换成以下：
    ```markdown
    ---
    title: 友情链接
    date: 2020-01-01 00:00:00
    type: "links"
    ---
    ```
3. 在 `source` 文件夹下添加 `_data` 文件夹并建立名为 `links.yml` 的文件，下方内容为模版，根据要求进行添加。
    ```yaml
    banner_suffix: 
    links:
       - class_name: 推荐 # 分类名称
         descr: 参与本站开发、提供设计灵感、捐助本站的优秀博主 # 分类简介
         type: card  # 显示方式，有两种 card / item
         suffix: 
        link_list:
          - name: Solitude
            link: https://solitude.js.org/zh/
            descr: 简洁、易用、响应式的 Hexo 主题 # 友链简介
            avatar: https://solitude.js.org/persona.svg # 显示头像
            topimg: https://s3.qjqq.cn/47/674c6c6783097.png!color # 如果是卡片模式，则会显示
            tag: Blogger
            color: vip
       - class_name: 技术
         descr: 技术知识为主的博客
         type: item
         suffix: 
         link_list:
           - name: 伍十七 # Link name
             link: https://github.com/everfu # Link address
             avatar: https://github.com/everfu.png # Display avatar
             descr: 一个热爱开源的家伙 # Link description
    ```
4. 打开 `/links/` 页面，查看效果。
