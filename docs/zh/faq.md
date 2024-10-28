---
title: 常见问题
description: 一些常见问题的解答
---

# 常见问题

## Cannot read properties of undefined (reading 'essay_list')

未创建即刻短文数据文件并打开了即刻短文页面。

## Cannot find module 'moment'

缺少 `moment` 模块，运行 `npm install moment` 安装即可。

## 为什么我自定义了主题字体，但没有生效？

请检查是否正确配置了字体，以及是否正确引入了字体文件（需要自行添加相应字体引入 CSS，你可以写到 `extends` 中）。

## 如何配置出像作者博客中的相册页面？

作者通过使用 Tags Plugin 的 `gallery` 实现。

## TypeError: Cannot read properties of null (reading 'utcOffset')

检查 `_config.yml` 的 `timezone` 是否正确配置。

示例：
```yaml
timezone: Asia/Shanghai
```

## 新建页面时发现报错，识别不到数据

检查新建的 `.yaml` 文件是否为源文件，不要使用 `win` 直接新建，请在编辑器中创建。