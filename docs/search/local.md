---
title: 本地搜索
description: 使用本地搜索
---

# 本地搜索

## 安装插件

安装 [hexo-generator-searchdb](https://github.com/next-theme/hexo-generator-searchdb) 或者 [hexo-generator-search](https://github.com/PaicHyperionDev/hexo-generator-search) 根据仓库文档添加配置信息到 `_config.yml`

## 主题配置

```yaml
# 搜索
# search
# warning：开启前需要安装搜索插件
# warning: You need to install the search plugin before turning it on
search:
  enable: true
  type: local # 选择local
  # 推荐标签
  # Recommended tags
  tags:
  # - Solitude
  # - Hexo
  algolia:
  # hits:
  # per_page: 6
  local:
    preload: false
    CDN:
```

## 搜索标签

```yaml
tags:
  - Solitude
  - Hexo
```