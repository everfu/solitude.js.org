---
title: 'Markdown-it'
categories:
        - 课程
tags:
        - Solitude
cover: https://s3.qjqq.cn/47/66c2af346ff5f.png!color
abbrlink: 941787ac
date: 2024-03-28 08:00:00
recommend: true
update: 2024-03-28 08:00:00
---

## 安装

1. 安装插件
                ```bash
                npm un hexo-renderer-marked --save # 卸载默认渲染器
                npm i hexo-renderer-markdown-it # 安装高级渲染器
                ```
2. 添加配置信息
                ```yaml
                markdown:
                                preset: 'default' # 使用MD语法，默认为GFM
                                render:
                                                html: true # 渲染html
                                                xhtmlOut: false
                                                langPrefix: 'language-' # 在代码块中添加类名前缀（指定语言时）
                                                breaks: true
                                                linkify: true # 如果写链接而不是[name](link)，会自动识别为链接并渲染
                                                typographer: true # 替换常见的印刷元素
                                                quotes: '“”‘’' # 替换文章中的"" ''
                                enable_rules:
                                disable_rules:
                                plugins: # 使用插件
                                anchors:
                                                level: 2 # 渲染标题的级别（h1、h2、h3）
                                                collisionSuffix: ''
                                                permalink: true
                                                permalinkClass: 'headerlink'
                                                permalinkSide: 'left'
                                                permalinkSymbol: ''
                                                case: 0
                                                separator: '-'
                                images: # 图片编译
                                                lazyload: true # 是否需要懒加载渲染
                                                prepend_root: false
                                                post_asset: false
                                inline: false
                ```

## 使用Katex

1. 安装插件
                ```bash
                npm i @renbaoshuo/markdown-it-katex --save
                ```
2. 修改Hexo配置文件
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
3. 修改主题配置文件
                ```yaml
                katex:
                                enable: true
                                per_page: true # 是否在每个页面加载
                                copytex: true # 是否启用复制公式
                ```