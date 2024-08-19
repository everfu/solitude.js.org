---
title: Practical tips
description: Gather some practical tips for using Solitude.
recommend: true
sticky: 1
tags:
  - Practical
categories:
    - Course
abbrlink: 2135ef16
date: 2024-07-04 00:00:00
not_cover: true
cover: https://i.pinimg.com/originals/56/95/a3/5695a314bd8dd47de77c224aa3e05601.jpg
---

## Article Sticky

Add `sticky: 1` to the `Front-matter` of a new article, where a higher number indicates a higher priority for being sticky.

```markdown
---
title: Solitude: Practical Tips
date: 2024-07-04 00:00:00
description: Gather some practical tips for using Solitude.
recommend: true
tags:
  - Website Building
categories:
  - Solitude
sticky: 1
---
```

## Article Cover Size

According to Heo's design, use the size `508x225` for article covers.

## Using Qingjia's Busuanzi

```yaml
busuanzi: true
busuanzi_use: 1 # 0: Original / 1: Qingjia (other: other custom busuanzi platforms)
CDN:
  option:
    busuanzi_qj_js: https://pv.lemonso.com/js
```