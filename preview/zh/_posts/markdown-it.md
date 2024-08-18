---
title: 'Markdown-it'
categories:
    - Course
tags:
    - Solitude
cover: https://i.pinimg.com/originals/16/be/14/16be148bd464a841f14d30c955270e9d.jpg
abbrlink: 941787ac
date: 2024-03-28 08:00:00
recommend: true
update: 2024-03-28 08:00:00
---

## Installation

1. Install the plugin
        ```bash
        npm un hexo-renderer-marked --save # Uninstall the default renderer
        npm i hexo-renderer-markdown-it # Install the advanced renderer
        ```
2. Add configuration information
        ```yaml
        markdown:
                preset: 'default' # Use the MD syntax, default to GFM
                render:
                        html: true # Render html
                        xhtmlOut: false
                        langPrefix: 'language-' # Add prefix to the class name in code blocks (when specifying language).
                        breaks: true
                        linkify: true # If you write a link instead of [name](link), it will be automatically recognized as a link and rendered.
                        typographer: true # Replace common printing elements.
                        quotes: '“”‘’' # Replace "" '' in the article
                enable_rules:
                disable_rules:
                plugins: # Use plugins
                anchors:
                        level: 2 # Render the level of headings (h1, h2, h3)
                        collisionSuffix: ''
                        permalink: true
                        permalinkClass: 'headerlink'
                        permalinkSide: 'left'
                        permalinkSymbol: ''
                        case: 0
                        separator: '-'
                images: # Compilation of images
                        lazyload: true # Whether lazyload rendering is needed
                        prepend_root: false
                        post_asset: false
                inline: false
        ```

## Using Katex

1. Install the plugin
        ```bash
        npm i @renbaoshuo/markdown-it-katex --save
        ```
2. Modify the Hexo configuration file
        ```yaml
        markdown:
                preset: 'default'
                render:
                        html: true
                        xhtmlOut: false
                        langPrefix: 'language-'
                        breaks: true
                        linkify: true
                        typographer: true
                        quotes: '“”‘’'
                enable_rules:
                disable_rules:
                plugins:
                +    - '@renbaoshuo/markdown-it-katex'
                anchors:
                        level: 2
                        collisionSuffix: ''
                        permalink: true
                        permalinkClass: 'headerlink'
                        permalinkSide: 'left'
                        permalinkSymbol: ''
                        case: 0
                        separator: '-'
                images:
                        lazyload: true
                        prepend_root: false
                        post_asset: false
                inline: false
        ```
3. Modify the theme configuration file
        ```yaml
        katex:
                enable: true
                per_page: true # Whether to load on each page
                copytex: true # Whether to enable copy formula
        ```