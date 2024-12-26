---
title: 友情链接
description: 为你的站点添加友情链接
---

# 友情链接

1. 在终端中输入以下命令，它将在 `source` 文件夹下生成 `links` 文件夹，其中包含 `index.md` ​文件。
    ```bash
    hexo new page links
    ```
2. 将 `index.md` 中的内容替换成以下：
    ```markdown
    ---
    title: 友情链接
    date: 2020-01-01 00:00:00
    type: "links"
    ---
    ```
3. 在 `source` 文件夹下添加 `_data` 文件夹并建立名为 `links.yml` 的文件，下方内容为模版，根据要求进行添加。
    ```yaml
    banner_suffix: 
    swiper: true 
    links:
       - class_name: 推荐 # 分类名称
         descr: 参与本站开发、提供设计灵感、捐助本站的优秀博主 # 分类简介
         type: card  # 显示方式，有两种 card / item
         suffix: 
         link_list:
            - name: 伍十七 # 友链名称
              link: / # 友链地址
              descr: 一个狂热的开源工作者 # 友链简介
              avatar: https://ui.everfu.cn/avatar/20240827172640.png # 显示头像
              topimg: https://ui.everfu.cn/siteshot/202408280110974.png/siteshot # 如果是card模式下，将显示
              tag: 博主
              color: vip
       - class_name: 技术
         descr: 技术知识为主的博客
         type: item
         suffix: 
         link_list:
           - name: isYangs # 友链名称
             link: https://isyangs.cn # 友链地址
             avatar: https://7.isyangs.cn/8/655c9835780a0-8.jpg # 显示头像
             descr: 一个前端Bug构造师的博客 # 友链简介
    ```
4. 打开 `/links/` 页面，查看效果。
