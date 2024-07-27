---
title: Local Search
description: Using local search
---

# Local Search

## Install Plugin

Install [hexo-generator-searchdb](https://github.com/next-theme/hexo-generator-searchdb) or [hexo-generator-search](https://github.com/PaicHyperionDev/hexo-generator-search) and add configuration information to `_config.yml` according to the repository documentation.

## Theme Configuration

```yaml
# Search
# warning: You need to install the search plugin before turning it on
search:
  enable: true
  type: local # Choose local
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

## Search Tags

```yaml
tags:
  - Solitude
  - Hexo
```
