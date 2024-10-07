---
title: Tianli GPT
description: Tianli GPT is an article summary generation model created by Heo and Tianli
---

# Tianli GPT

> This feature is only available in mainland China. Availability in other regions is not guaranteed.

Before using, please register at [Post Chat](https://ai.tianli0.top/?InviteID=OZ3Z0V2R) and purchase the exchange at [Heo Store](https://store.zhheo.com/?cid=1&mid=2).
* After purchase, go to the [Management Backend](https://summary.zhheo.com/) -> log in -> click "Add New Website" in the upper right corner & enter the key to bind successfully.
* If you need to debug locally, please add 127.0.0.1:port to the whitelist in the management backend, otherwise it will trigger anti-theft KEY and cannot obtain the summary normally.

```yaml
# Article summary AI
post_ai:
  enable: false
  # Model name displayed on the right
  modelName: GPT 4
  # key
  # See the document for specific acquisition method
  key:
  # Self-introduction
  talk: # I am EfuGPT, a summary generation assistant developed by Efu. EfuGPT writes summaries during static deployment and implements tool-based text summaries translated by EfuCorrection when visitors access. I am only responsible for displaying generated summaries here, you cannot communicate with me directly, but I can answer some preset questions.
  # Random post button
  randomPost: false
  # Report link, do not fill in and do not display
  report: https://efu.me/
  # Bottom tip
  tips: # This content is generated based on the article and has been manually reviewed. It is only used for explanation and summary of the article content
```

::: tip Note
* Please note that this feature requires writing a summary when generating the article, so there will be some time consumption when generating the article.
* Since the summary is generated through requests, there will be some time consumption when generating the article.
:::

## Local AI Summary

Add the following content to the `front-matter` of the article:
```markdown
---
ai_text: I am the custom article summary content
---
```

## Disable AI Summary for a Single Article

```markdown
---
ai: false
---
```
