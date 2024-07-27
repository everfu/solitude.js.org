---
title: Danmaku Message Board
description: Add a danmaku message board feature to your website
---

# Danmaku Message Board

1. Create a new message board page
    ```bash
    hexo new page message
    ```
2. Modify the source/message/index.md file
    ```markdown
    ---
    title: Message Board
    date: 2021-01-01 00:00:00
    type: message
    ---
    ```
3. Modify the configuration file
    ```yaml
    # Message Board
    # 前置要求：需配置留言板页面
    # Pre-requirements: message board page needs to be configured
    envelope:
      enable: true
      line: 10 # Number of lines to display
      speed: 20 # Playback speed
      hover: true # Pause on mouse hover
      loop: true # Loop playback
      page: message # Message board page
    ```
