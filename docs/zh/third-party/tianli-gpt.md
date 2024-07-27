---
title: Tianli GPT
description: Tianli GPT 是由 Heo 与 Tianli 制作的一个文章摘要生成模型
---

# Tianli GPT

> 此功能仅中国大陆区域可用，其他地区不保证可用性。

使用前请在 [Post Chat](https://ai.tianli0.top/?InviteID=OZ3Z0V2R) 注册，在 [Heo Store](https://store.zhheo.com/?cid=1&mid=2) 购买兑换。
* 购买完成后，进入 [管理后台](https://summary.zhheo.com/)，登录后点击右上角的“添加新网站”，输入密钥即可绑定成功。
* 若需要进行本地调试，请在管理后台将 127.0.0.1:端口 加入白名单，否则会触发防盗 KEY，无法正常获取摘要。

```yaml
# 文章摘要AI
# post abstract AI
post_ai:
  enable: false
  # 右侧显示的模型名称
  # Model name displayed on the right
  modelName: GPT 4
  # key
  # 具体获取方法见文档
  # Specific acquisition method, see the document
  key:
  # 自介
  # talk
  talk: # 我是 Efu 开发的摘要生成助理EfuGPT，EfuGPT在静态部署时进行摘要的撰写，并且在访客访问时通过EfuCorrection转译后的文本摘要实现工具。我在这里只负责已经生成的摘要显示，你无法与我直接沟通，但我可以回答一些预设的问题。
  # 随机文章按钮
  # Random post button
  randomPost: false
  # 举报链接，不填不显示
  # Report link, do not fill in and do not display
  report: https://efu.me/
  # 底部提示
  # Bottom tip
  tips: # 此内容根据文章生成，并经过人工审核，仅用于文章内容的解释与总结
```

::: tip 提示
* 请注意，此功能需要在文章生成时进行摘要的撰写，因此在文章生成时会有一定的耗时。
* 由于摘要是通过请求生成的，因此在文章生成时会有一定的耗时。
:::