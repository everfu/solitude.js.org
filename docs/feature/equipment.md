---
title: My Equipment
description: Add My Equipment page
---

# My Equipment

1. Enter the following command in the terminal, it will generate an equipment directory under the source folder, which includes the index.md file.
  ```shell
  hexo new page equipment
  ```
2. Replace the content in index.md with the following: (modify as needed)
  ```markdown
  ---
  title: My Equipment
  date: 2023-11-01 13:14:42
  type: equipment
  cover: ""
  desc: Recommendations for physical equipment
  leftend: Enjoy the fun of technology with Wang Zhuo Sco
  rightend: ""
  ---
  ```
3. Create a file named equipment.yaml in the `source/_data/` folder, with the following template content. Add as required.
  ```yaml
  - class_name: Productivity
    description: Hardware devices to improve personal productivity
    equipment_list:
      - name: Synology DS920+
      specification: Great value for money
      description: Excellent network storage solution and media streaming server
      image: https://7.isyangs.cn/1/65eb3d5f8057b-1.png
      - name: iPhone 12 Pro Max
      specification: Pacific Blue / 1TB
      description: Powerful functionality, eye-catching design, and durable.
      image: https://7.isyangs.cn/1/65eb3d70c59d9-1.png
      link: https://support.apple.com/kb/SP832?locale=en_US
  - class_name: Travel
    description: Physical items and devices for travel
    equipment_list:
     - name: AirPods Pro
       specification: Standard Edition
       description: These are very powerful headphones, with several significant firmware updates. A must-have for the Apple ecosystem with two or more devices.
       image: https://7.isyangs.cn/1/65eb3d84dea25-1.png
       link: https://www.apple.com/airpods-pro/
  ```