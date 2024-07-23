---
title: 我的装备
description: 添加我的装备页面
---

# 我的装备

1. 在终端中输入以下命令，它将在source文件夹下生成equipment目录，其中包含index.md​文件。
    ```shell
    hexo new page equipment
    ```
2. 将index.md​中的内容替换成以下：（按需修改）
    ```markdown
    ---
    title: 我的装备
    date: 2023-11-01 13:14:42
    type: equipment
    cover: ""
    desc: 实物装备推荐
    leftend: 跟 王卓Sco 一起享受科技带来的乐趣
    rightend: ""
    ---
    ```
3. 在 `source/_data/` ​文件夹下建立名为equipment.yaml​的文件，下方内容为模版，根据要求按需添加。
    ```yaml
    - class_name: 生产力
      description: 提升自己生产效率的硬件设备
      equipment_list:
          - name: 群晖 DS920+
            specification: 性价比超高
            description: 很棒的网络存储解决方案以及流媒体传输服务器
            image: https://7.isyangs.cn/1/65eb3d5f8057b-1.png
          - name: iPhone 12 Pro Max
            specification: 海蓝色 / 1TB
            description: 功能强大，外观抢眼，设计耐用。
            image: https://7.isyangs.cn/1/65eb3d70c59d9-1.png
            link: https://support.apple.com/kb/SP832?locale=zh_CN
    - class_name: 出行
      description: 用来出行的实物及设备
      equipment_list:
         - name: AirPods Pro
           specification: 标准版
           description: 可以说是非常强的耳机了，还有好几次固件大幅度更新。apple生态只要有两个设备及以上，必入。
           image: https://7.isyangs.cn/1/65eb3d84dea25-1.png
           link: https://www.apple.com.cn/airpods-pro/
    ```