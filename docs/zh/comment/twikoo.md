---
title: Twikoo 评论系统
description: Twikoo 是一个简洁、安全、免费的静态网站评论系统，支持在任何静态网站上使用。
---

# Twikoo 评论系统

## 后端部署

[云函数部署](https://twikoo.js.org/backend.html)

> 推荐使用 `netlify` 部署

## 主题配置

```yaml
# Twikoo: https://solitude.js.org/comment/twikoo
twikoo: # https://twikoo.js.org/
  envId: # url: https://twikoo.sondy.top/
  region: # Environment locale, default is ap-shanghai, Tencent cloud environment fill ap-shanghai or ap-guangzhou; Vercel environment do not fill the.
  style: true # Use custom styles when turned on
  accessToken: # AccessToken
  option: # twikoo option
```