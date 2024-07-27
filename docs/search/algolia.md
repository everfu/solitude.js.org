---
title: Algolia Search
description: Using Algolia as a search engine
---

# Algolia Search

## Install Plugin

> If you are using hexo-algoliasearch, remember to configure the fields parameter: title, permalink, and content.

Install [hexo-algolia](https://github.com/oncletom/hexo-algolia) or [hexo-algoliasearch](https://github.com/LouisBarranqueiro/hexo-algoliasearch) and follow their respective documentation for configuration.

## Theme Configuration

```yaml
# Search
# warning: Install the search plugin before enabling it
search:
  enable: true
  type: algolia
  # Recommended tags
  tags:
    # - Solitude
    # - Hexo
  algolia:
    # hits:
    # per_page: 6
```

## Search Tags

```yaml
tags:
  - Solitude
  - Hexo
```
