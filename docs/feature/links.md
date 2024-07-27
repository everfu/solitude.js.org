---
title: Friendly Links
description: Add friendly links to your site
---

# Friendly Links

1. Enter the following command in the terminal, it will generate a `links` folder under the `source` folder, which contains the `index.md` file.
  ```bash
  hexo new page links
  ```
2. Replace the content in `index.md` with the following:
  ```markdown
  ---
  title: Friendly Links
  date: 2020-01-01 00:00:00
  type: "links"
  ---
  ```
3. Add a `_data` folder under the `source` folder and create a file named `links.yml`. The template for the content is as follows, add according to the requirements.
  ```yaml
  banner_suffix: 
  links:
     - class_name: Recommended # Category name
     descr: Excellent bloggers who participate in the development of this site, provide design inspiration, and donate to this site # Category description
     type: card  # Display mode, there are two types: card / item
     suffix: 
     link_list:
       - name: Efu # Link name
       link: https://www.efu.me # Link address
       descr: An Open Source worker. # Link description
       avatar: https://s3.qjqq.cn/47/660a7ece07609.webp!color # Display avatar
       topimg: https://s3.qjqq.cn/47/660a7ece07609.webp!color # If it is in card mode, it will be displayed
       tag: Blogger
       color: vip
     - class_name: Technology
     descr: Blogs mainly focused on technical knowledge
     type: item
     suffix: 
     link_list:
       - name: isYangs # Link name
       link: https://isyangs.cn # Link address
       avatar: https://7.isyangs.cn/8/655c9835780a0-8.jpg # Display avatar
       descr: A blog by a frontend bug constructor # Link description
  ```
4. Open the `/links/` page to see the effect.

