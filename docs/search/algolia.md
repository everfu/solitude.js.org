---
title: Algolia 搜索
description: 使用 Algolia 作为搜索引擎
---

# Algolia 搜索

## 安装插件

> 如果你使用 hexo-algoliasearch，请记得配置 fields 参数的 title, permalink 和 content

安装 [hexo-algolia](https://github.com/oncletom/hexo-algolia) 或 [hexo-algoliasearch](https://github.com/LouisBarranqueiro/hexo-algoliasearch) 根据它们的使用文档去做相应的配置。

## 主题配置

```yaml
# 搜索
# search
# warning：开启前需要安装搜索插件
# warning: You need to install the search plugin before turning it on
search:
  enable: true
  type: algolia
  # 推荐标签
  # Recommended tags
  tags:
    # - Solitude
    # - Hexo
  algolia:
    # hits:
    # per_page: 6
```

## 搜索标签

```yaml
tags:
  - Solitude
  - Hexo
```