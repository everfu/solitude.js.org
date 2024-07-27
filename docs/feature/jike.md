---
title: Jike Short Essay
description: Add Jike Short Essay page
---

# Jike Short Essay

1. Enter the following command in the terminal, it will generate an essay directory under the source folder, which contains the index.md file.
  ```shell
  hexo new page essay
  ```
2. Replace the content in index.md with the following:
  ```markdown
  ---
  title: Jike Short Essay
  date: 2023-11-01 13:43:20
  type: says
  cover: ""
  desc: Sharing the small joys of life
  leftend: ""
  rightend: ""
  ---
  ```
3. Add a _data folder under the source folder and create a file named essay.yaml. The content below is a template, add according to the requirements.
  ```yaml
  essay_list:
    - content: Video playback test!
    date: 2023-10-31 15:32
    video:
      bilibili: BV1Cv4y1p717
    - content: Music playback test!
    date: 2023-10-31 15:32
    aplayer:
      server: netease
      id: 571340283
    - content: Theme discussion group has been established!
    date: 2023-10-31 15:32
    image:
      - https://7.isyangs.cn/1/65e9de42e32cd-1.png
    link: https://efu.me/
  ```

| Parameter        | Description                                                                                   |
| ---------------- | -------------------------------------------------------------------------------------------- |
| `content`        | Text content                                                                                  |
| `date`           | Publication date, recommended format is 2022/10/26 08:00:00                                   |
| `image`          | Image links, multiple images can be added                                                      |
| `link`           | Link button in the bottom left corner, fill in the URL                                         |
| `aplayer.server` | Music player service provider, options are netease / tencent                                  |
| `aplayer.id`     | Song ID, for example: `https://music.163.com/#/song?id=571340283`, the number after `song?id=` |
| `video.player`   | Native video player, fill in your video link directly                                          |
| `video.bilibili` | Bilibili player, fill in the `BV number`                                                       |