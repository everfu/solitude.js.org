---
title: 实用技巧
description: 收集一些使用 Solitude 的实用技巧。
recommend: true
sticky: 1
tags:
  - 实用技巧
categories:
    - 课程
abbrlink: 2135ef16
date: 2024-07-04 00:00:00
not_cover: true
cover: https://s3.qjqq.cn/47/66c2af80073e7.png!color
---

## 文章置顶

在新文章的 `Front-matter` 中添加 `sticky: 1`，其中较高的数字表示较高的置顶优先级。

```markdown
---
title: Solitude: 实用技巧
date: 2024-07-04 00:00:00
description: 收集一些使用 Solitude 的实用技巧。
recommend: true
tags:
  - 网站建设
categories:
  - Solitude
sticky: 1
---
```

## 文章封面尺寸

根据 Heo 的设计，使用尺寸为 `508x225` 的文章封面。

## 使用 Qingjia 的 Busuanzi

```yaml
busuanzi: true
busuanzi_use: 1 # 0: 原版 / 1: Qingjia（其他：其他自定义 busuanzi 平台）
CDN:
  option:
    busuanzi_qj_js: https://pv.lemonso.com/js
```