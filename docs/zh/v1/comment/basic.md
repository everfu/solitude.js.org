---
title: 评论基本配置
description: 评论基本配置
---

# 评论基本配置

## 食用

```yaml
# 评论
# comment
comment:
  use: # waline, twikoo, valine, artalk
  commentBarrage: false # 热评开关 / Hot comment switch
  lazyload: false # 懒加载
  count: false # 评论数显示
  avatar: https://cravatar.cn # 热评获取头像的源
  newest_comment: # 最新评论
    enable: false
    storage: .2 # 缓存时间
```

* `use`：使用的评论，这里可以填至多两个评论，不填不会使用评论
* `commentBarrage`：热评开关，开启后开启评论的页面底部右侧会循环出现评论
* `lazyload`：是否使用懒加载，开启后当需要评论时才会加载
* `count`：是否展示评论数，开启后文章页会显示评论数
* `avatar`：热评获取头像的源: gravatar/cravatar 等等
* `newest_comment`：最新评论，开启后中控台会显示最新评论，前提是打开 console_plus