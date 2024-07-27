---
title: Valine
description: Introduction to Valine Comment System Configuration
---

# Valine Comment System

## Get APP ID, APP Key, and serverURLs

Please log in or register on LeanCloud first, and then click "Create App" in the lower left corner after entering the console:

After creating the app, enter the app you just created, select "Settings > App Credentials" in the lower left corner, and then you will be able to see your APP ID and APP Key.

## Theme Configuration

```yaml
valine:
  appId: your app id # leancloud application app id
  appKey: your app key # leancloud application app key
  serverURLs: your serverURL # This configuration is suitable for domestic custom domain name users, overseas version will be automatically detected (no need to manually fill in)
  avatar: monsterid
  visitor: true # Whether to display visitor statistics
  option: # options list
```

# Custom enjoy

Create a new file `valine.json` in the `_data` folder

```json
{
  "tv_doge": "6ea59c827c414b4a2955fe79e0f6fd3dcd515e24.png",
  "tv_kiss": "a8111ad55953ef5e3be3327ef94eb4a39d535d06.png",
  "tv_laugh": "bb690d4107620f1c15cff29509db529a73aee261.png",
  "tv_goodbye": "180129b8ea851044ce71caf55cc8ce44bd4a4fc8.png",
  "tv_cold": "b9cbc755c2b3ee43be07ca13de84e5b699a3f101.png",
  "tv_angry": "34ba3cd204d5b05fec70ce08fa9fa0dd612409ff.png",
  "tv_rich": "34db290afd2963723c6eb3c4560667db7253a21a.png",
  "tv_cute": "9e55fd9b500ac4b96613539f1ce2f9499e314ed9.png",
  "tv_bleed": "09dd16a7aa59b77baa1155d47484409624470c77.png",
  "tv_dumb": "fe1179ebaa191569b0d31cecafe7a2cd1c951c9d.png",
  "tv_vomit": "9f996894a39e282ccf5e66856af49483f81870f3.png",
  "tv_sleepy": "241ee304e44c0af029adceb294399391e4737ef2.png",
  "tv_evil": "1f0b87f731a671079842116e0991c91c2c88645a.png",
  "tv_boss": "093c1e2c490161aca397afc45573c877cdead616.png",
  "tv_cry": "23269aeb35f99daee28dda129676f6e9ea87934f.png",
  "tv_sad": "d04dba7b5465779e9755d2ab6f0a897b9b33bb77.png",
  "tv_shy": "a37683fb5642fa3ddfc7f4e5525fd13e42a2bdb1.png",
  "tv_awkward": "7cfa62dafc59798a3d3fb262d421eeeff166cfa4.png",
  "tv_smile": "70dc5c7b56f93eb61bddba11e28fb1d18fddcd4c.png",
  "tv_think": "90cf159733e558137ed20aa04d09964436f618a1.png",
  "tv_surprise": "0d15c7e2ee58e935adc6a7193ee042388adc22af.png"
}
