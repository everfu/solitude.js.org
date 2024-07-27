---
title: Recent Comments
description: Customize the recent comments display page
---

# Recent Comments <Badge text="^1.12.3" type="tip"/>

1. Enter the following command in the terminal, it will generate a `recentcomments` folder under the `source` folder, which contains the `index.md` file.
    ```shell
    hexo new page recentcomments
    ```

2. Replace the content in `index.md` with the following:
    ```markdown
    ---
    title: Recent Comments
    date: 2023-11-01 13:43:20
    type: recentcomment
    cover: ""
    desc: Recent Comments
    leftend: ""
    rightend: ""
    ---
    ```
3. Modify the configuration file
    ```yaml
    # Recent Comments
    # 前置要求：需配置最近评论页面和评论，否则显示为空
    # Pre-requirements: recent comments page needs to be configured and commented, otherwise it will be displayed as empty
    recent_comments:
      enable: true
      # 评论数
      # Number of comments
      limit: 50 # ⚠️ Waline only supports a maximum of 50 comments
      # 缓存时间
      # Cache time
      cache: 0.2 # Unit: day
      page: /recentcomments/ # recent comments page
      img: /img/recent_c.avif # image displayed in the console (leave empty to hide)
    ```
