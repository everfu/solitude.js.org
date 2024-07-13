---
title: 最近评论
description: 定制最近评论显示页面
---

# 最近评论 <Badge text="^1.12.3" type="tip"/>

1. 在cmd面板中输入以下命令，它将在source文件夹下生成 recentcomments 目录，其中包含 index.md ​文件。
    ```shell
    hexo new page recentcomments
    ```

2. 将 index.md ​中的内容替换成以下：
    ```markdown
    ---
    title: 最近评论
    date: 2023-11-01 13:43:20
    type: recentcomments
    cover: ''
    desc: 最近评论
    leftend: ''
    rightend: ''
    ---
    ```
3. 修改配置文件
    ```yaml
    # 最近评论
    # recent comments
    # 前置要求：需配置最近评论页面和评论，否则显示为空
    # Pre-requirements: recent comments page needs to be configured and commented, otherwise it will be displayed as empty
    recent_comments:
      enable: true
      # 评论数
      # Number of comments
      limit: 50 # ⚠️waline 仅支持最大50条评论 / ⚠️waline only supports a maximum of 50 comments
      # 缓存时间
      # Cache time
      cache: 0.2 # 1 = 1天 / 1 = 1 day
      page: /recentcomments/ # 最近评论页面 / recent comments page
      img: /img/recent_c.avif # 中控台显示图片（不填不显示） / image displayed in the console
    ```