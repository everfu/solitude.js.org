---
title: 评论基本配置
description: 评论基本配置
---

# 评论基本配置

## 使用

```yaml
# Comment
# 评论
comment:
  # Which commenting system to use(e.g. waline or waline,twikoo)
  # 使用哪个评论系统（例如： waline or waline,twikoo）
  use: # waline, twikoo, valine, artalk, giscus # Up to two comment systems can be turned on at the same time
  # Whether to display the hot comment switch.
  # 是否显示热门评论开关
  commentBarrage: false
  # Lazy load
  # 懒加载评论区
  lazyload: false
  # Whether to display the comment count
  # 显示评论数
  count: false
  # PV
  pv: false
  # Avatar
  avatar: https://gravatar.com/avatar
  # Hot comment tips
  # 热评提示
  hot_tip:
    enable: false
    # Number of hot comments
    count: 3
  # recent comments(⚠️ Comments need to be configured first.)
  # 最新评论(⚠️ 需要先配置评论)
  newest_comment:
    enable: true
    storage: .5 # 缓存时间 1: 1天 / .5 : 半天 / Cache time 1: 1 day .5 : half a day
    limit: 5 # 评论数 / Number of comments
```

* `use`：使用的评论，这里可以填至多两个评论，不填不会使用评论
* `commentBarrage`：热评开关，开启后开启评论的页面底部右侧会循环出现评论
* `lazyload`：是否使用懒加载，开启后当需要评论时才会加载
* `count`：是否展示评论数，开启后文章页会显示评论数
* `avatar`：热评获取头像的源: gravatar/cravatar 等等
* `hot_tip`：热评提示，开启后会在首页为文章添加热评提示
* `newest_comment`：最新评论，开启后中控台会显示最新评论