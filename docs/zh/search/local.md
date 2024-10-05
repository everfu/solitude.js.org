---
title: 本地搜索
description: 使用本地搜索
---

# 本地搜索

## 安装插件

安装 [hexo-generator-searchdb](https://github.com/next-theme/hexo-generator-searchdb) 或者 [hexo-generator-search](https://github.com/PaicHyperionDev/hexo-generator-search) 根据仓库文档添加配置信息到 `_config.yml`

## 主题配置

```yaml
# --------------------------- start ---------------------------
# Search
search:
  enable: false
  # type: 使用的搜索引擎 / search engine
  type: local # local / algolia
  tags:
    # - Solitude
    # - Hexo
  local:
    preload: false
    CDN: # url: search.xml
# --------------------------- end ---------------------------
```

## 搜索标签

```yaml
tags:
  - Solitude
  - Hexo
```