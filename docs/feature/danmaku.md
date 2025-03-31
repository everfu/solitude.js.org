---
title: 弹幕留言板
description: 为您的网站添加弹幕留言板功能
---

# 弹幕留言板

1. 新建留言板页面
    ```bash
    hexo new page message
    ```
2. 修改 source/message/index.md 文件
    ```markdown
    ---
    title: 留言板
    date: 2021-01-01 00:00:00
    type: message
    ---
    ```
3. 修改配置文件
    ```yaml
    # 留言板
    # message board
    # 前置要求：需配置留言板页面
    # Pre-requirements: message board page needs to be configured
    envelope:
      enable: true
      line: 10 # 显示行数
      speed: 20 # 播放速度
      hover: true # 鼠标悬停暂停
      loop: true # 循环播放
      page: message # 留言板页面
    ```