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
  swiper: true 
  links:
     - class_name: Recommended # Category name
     descr: Excellent bloggers who participate in the development of this site, provide design inspiration, and donate to this site # Category description
     type: card  # Display mode, there are two types: card / item
     suffix: 
     link_list:
       - name: Solitude # Link name
       link: https://solitude.js.org # Link address
       descr: A sleek, responsive Hexo theme # Link description
       avatar: https://solitude.js.org/persona.svg # Display avatar
       topimg: https://s3.qjqq.cn/47/674c6c6783097.png!color # If it is in card mode, it will be displayed
       tag: Blogger
       color: vip
     - class_name: Technology
     descr: Blogs mainly focused on technical knowledge
     type: item
     suffix: 
     link_list:
       - name: EverFu # Link name
       link: https://github.com/everfu # Link address
       avatar: https://github.com/everfu.png # Display avatar
       descr: A blog by a frontend bug constructor # Link description
  ```
4. Open the `/links/` page to see the effect.

