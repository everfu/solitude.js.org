---
title: Music Hall
description: Add Music Hall page
---

# Music Hall

1. Enter the following command in the terminal, it will generate a `music` folder under the `source` folder, which contains the `index.md` file.
    ```shell
    hexo new page music
    ```
2. Replace the content in `index.md` with the following:
    ```markdown
    ---
    title: Music Hall
    date: 2023-12-11 21:36:08
    type: music
    comment: false
    ---
    ```
3. Modify the theme configuration file
    ```yaml
    # -------------------------
    # meeting-api, used for music capsules and music halls in the interface, can customize api, do not move if you don't know.
    meting_api: https://meting.qjqq.cn/?server=:server&type=:type&id=:id&auth=:auth&r=:r #custom api
    # Music hall
    music:
      enable: true
      # Music ID: playlist ID / album ID / singer ID
      id: 1994908354
      # Music service provider. netease: Netease Cloud / tencent: Tencent / kugou: Kugou / xiaomi: Xiaomi / baidu: Baidu
      server: netease
      # Type of playlist. song: Single / playlist: Playlist / album: Album / artist: Singer
      type: playlist
      # Initial volume. 0.8 = 80%, range 0 to 1
      volume: 0.8
      # Whether to enable mutex mode, that is, only one player can play at the same time
      mutex: true
    ```
