---
title: 音乐馆
description: 添加音乐馆页面
---

# 音乐馆

1. 在终端中输入以下命令，它将在 `source` 文件夹下生成 `music` 文件夹，其中包含 `index.md` ​文件。
    ```shell
    hexo new page music
    ```
2. 将 `index.md` ​中的内容替换成以下：
    ```markdown
    ---
    title: 音乐馆
    date: 2023-12-11 21:36:08
    type: music
    comment: false
    ---
    ```
3. 修改主题配置文件
    ```yaml
    # -------------------------
    # meeting-api，用于界面中的音乐胶囊和音乐馆页，可自定义api，不会请勿动。
    # meeting-api, used for music capsules and music halls in the interface, can customize api, do not move if you don't know.
    meting_api: https://meting.qjqq.cn/?server=:server&type=:type&id=:id&auth=:auth&r=:r #自定义api
    # 音乐馆页
    # music hall
    music:
      enable: true
      # 音乐ID：歌单ID / 专辑ID / 歌手ID
      # Music ID: playlist ID / album ID / singer ID
      id: 1994908354
      # 播放列表的服务商。netease：网易云 / tencent：腾讯 / kugou：酷狗 / xiami：小米 / baidu：百度
      # Music service provider. netease: Netease Cloud / tencent: Tencent / kugou: Kugou / xiaomi: Xiaomi / baidu: Baidu
      server: netease
      # 播放列表的类型。song：单曲 / playlist：歌单 / album：专辑 / artist：歌手
      # Type of playlist. song: Single / playlist: Playlist / album: Album / artist: Singer
      type: playlist
      # 初始音量。0.8 = 80%，范围 0 到 1
      # Initial volume. 0.8 = 80%, range 0 to 1
      volume: 0.8
      # 是否开启互斥模式，即同时只能有一个播放器播放
      # Whether to enable mutex mode, that is, only one player can play at the same time
      mutex: true
    ```