---
title: Valine
description: Valine 评论系统配置介绍
---

# Valine 评论系统

## 获取 APP ID、APP Key 与 serverURLs

请先登录或注册 LeanCloud, 进入控制台后点击左下角创建应用：

应用创建好以后，进入刚刚创建的应用，选择左下角的`设置>应用凭证`，然后就能看到你的 APP ID 和 APP Key 了。

## 主题配置

```yaml
valine:
  appId: your app id # leancloud application app id
  appKey: your app key # leancloud application app key
  serverURLs: your serverURL # This configuration is suitable for domestic custom domain name users, overseas version will be automatically detected (no need to manually fill in)
  avatar: monsterid
  visitor: true # 是否显示访问统计
  option: # options list
```

# 自定义 enjoy

在 `_data` 文件夹下新建文件 `valine.json`

```json
{
  "tv_doge": "6ea59c827c414b4a2955fe79e0f6fd3dcd515e24.png",
  "tv_亲亲": "a8111ad55953ef5e3be3327ef94eb4a39d535d06.png",
  "tv_偷笑": "bb690d4107620f1c15cff29509db529a73aee261.png",
  "tv_再见": "180129b8ea851044ce71caf55cc8ce44bd4a4fc8.png",
  "tv_冷漠": "b9cbc755c2b3ee43be07ca13de84e5b699a3f101.png",
  "tv_发怒": "34ba3cd204d5b05fec70ce08fa9fa0dd612409ff.png",
  "tv_发财": "34db290afd2963723c6eb3c4560667db7253a21a.png",
  "tv_可爱": "9e55fd9b500ac4b96613539f1ce2f9499e314ed9.png",
  "tv_吐血": "09dd16a7aa59b77baa1155d47484409624470c77.png",
  "tv_呆": "fe1179ebaa191569b0d31cecafe7a2cd1c951c9d.png",
  "tv_呕吐": "9f996894a39e282ccf5e66856af49483f81870f3.png",
  "tv_困": "241ee304e44c0af029adceb294399391e4737ef2.png",
  "tv_坏笑": "1f0b87f731a671079842116e0991c91c2c88645a.png",
  "tv_大佬": "093c1e2c490161aca397afc45573c877cdead616.png",
  "tv_大哭": "23269aeb35f99daee28dda129676f6e9ea87934f.png",
  "tv_委屈": "d04dba7b5465779e9755d2ab6f0a897b9b33bb77.png",
  "tv_害羞": "a37683fb5642fa3ddfc7f4e5525fd13e42a2bdb1.png",
  "tv_尴尬": "7cfa62dafc59798a3d3fb262d421eeeff166cfa4.png",
  "tv_微笑": "70dc5c7b56f93eb61bddba11e28fb1d18fddcd4c.png",
  "tv_思考": "90cf159733e558137ed20aa04d09964436f618a1.png",
  "tv_惊吓": "0d15c7e2ee58e935adc6a7193ee042388adc22af.png"
}
```