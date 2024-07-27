---
title: 即刻短文
description: 添加即刻短文页面
---

# 即刻短文

1. 在终端中输入以下命令，它将在source文件夹下生成 essay 目录，其中包含 index.md ​文件。
    ```shell
    hexo new page essay
    ```
2. 将 index.md 中的内容替换成以下：
    ```markdown
    ---
    title: 即刻短文
    date: 2023-11-01 13:43:20
    type: says
    cover: ""
    desc: 分享生活的小确幸
    leftend: ""
    rightend: ""
    ---
    ```
3. 在source文件夹下添加 _data 文件夹并建立名为 essay.yaml 的文件，下方内容为模版，根据要求进行添加。
    ```yaml
    essay_list:
      - content: 视频播放测试！
        date: 2023-10-31 15:32
        video:
          bilibili: BV1Cv4y1p717
      - content: 音乐播放测试！
        date: 2023-10-31 15:32
        aplayer:
          server: netease
          id: 571340283
      - content: 主题交流群已建立！
        date: 2023-10-31 15:32
        image:
          - https://7.isyangs.cn/1/65e9de42e32cd-1.png
        link: https://efu.me/
    ```

| 参数             | 释义                                                                                 |
| ---------------- | ------------------------------------------------------------------------------------ |
| `content`        | 文字内容                                                                             |
| `date`           | 发布日期，格式建议为 2022/10/26 08:00:00                                             |
| `image`          | 图片链接, 可填写多张图片                                                             |
| `link`           | 左下角链接按钮，填写 URL                                                             |
| `aplayer.server` | 音乐播放器的服务商，可选netease / tencent                                            |
| `aplayer.id`     | 单曲 id，例如：`https://music.163.com/#/song?id=571340283`，`song?id=` 后的数字即 id |
| `video.player`   | 原生视频播放器，直接填写你的视频直链即可                                             |
| `video.bilibili` | 哔哩哔哩播放器，填写 `BV号` 即可                                                     |