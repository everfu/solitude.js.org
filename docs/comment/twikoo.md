---
title: Twikoo Comment System
description: Twikoo is a simple, secure, and free comment system for static websites, supporting use on any static site.
---

# Twikoo Comment System

## Backend Deployment

[Cloud Function Deployment](https://twikoo.js.org/backend.html)

> Recommended to deploy using `netlify`

## Theme Configuration

```yaml
# Twikoo: https://solitude.js.org/comment/twikoo
twikoo: # https://twikoo.js.org/
  envId: # url: https://twikoo.sondy.top/
  region: # Environment locale, default is ap-shanghai, Tencent cloud environment fill ap-shanghai or ap-guangzhou; Vercel environment do not fill the.
  style: true # Use custom styles when turned on
  accessToken: # AccessToken
  option: # twikoo option
```