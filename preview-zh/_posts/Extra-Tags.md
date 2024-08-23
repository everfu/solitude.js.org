---
title: 主题外置：外挂标签
categories:
  - 教程
tags:
  - 额外标签
cover: 'https://i.pinimg.com/originals/7e/e6/81/7ee6814448df12263f09f1e70a8a9ca6.jpg'
abbrlink: 6f2c8cc8
date: 2024-07-30 13:34:49
update: 2024-07-30 13:34:49
---

## 安装

```bash
npm install hexo-solitude-tag
```

## 使用

### 按钮

{% tabs button %}
<!-- tab 语法 -->

```markdown
{% button 'icon' 'content' 'url' %}
```

<!-- endtab -->

<!-- tab 参数 -->

1. 'icon'：图标名称（完整名称，例如 "fas fa-github"）。
2. 'content'：按钮内容。
3. 'url'：按钮的URL。

<!-- endtab -->

<!-- tab 预览 -->

{% button 'fab fa-github' 'GitHub' 'https://github.com' %}
{% button 'fas fa-home' '主页' '/' %}
{% button 'fas fa-envelope' '发送邮件' 'mailto:o@efu.me' %}
<!-- endtab -->

<!-- tab 源代码 -->

```markdown
{% button 'fab fa-github' 'GitHub' 'https://github.com' %}
{% button 'fas fa-home' '主页' '/' %}
```

<!-- endtab -->

{% endtabs %}

### Repo

{% tabs Repo %}
<!-- tab 语法 -->

```markdown
{% github 'owner/repo' %}
{% gitlab 'projectID' %}
{% gitee 'owner/repo' %}
{% gitea 'server' 'owner/repo' %}
```

<!-- endtab -->

<!-- tab 参数 -->

1. 'owner'：仓库所有者。
2. 'repo'：仓库名称。
3. 'projectID'：项目ID。
4. 'server'：仓库的服务器地址。

<!-- endtab -->

<!-- tab 预览 -->

{% github 'everfu/hexo-theme-solitude' %}
{% gitlab '56198505' %}
{% gitee 'everfu/hexo-theme-solitude' %}

<!-- endtab -->

<!-- tab 源代码 -->

```markdown
{% github 'everfu/hexo-theme-solitude' %}
{% gitlab '56198505' %}
{% gitee 'everfu/hexo-theme-solitude' %}
```

<!-- endtab -->

{% endtabs %}

### Note (BootStrap)

{% tabs Note %}
<!-- tab 语法 -->

```markdown
{% note 'type' 'icon' %}
<!-- 内容 -->
{% endnote %}
```

<!-- endtab -->

<!-- tab 参数 -->

1. 'type'：主题（primary、success、danger、warning、info）,样式（flat、default、simple、modern）。
2. 'icon'：图标名称（完整名称，例如 "fas fa-info-circle"）。

<!-- endtab -->

<!-- tab 预览 -->

{% note 'primary' 'fas fa-info-circle' %}

这是一个主题为 `primary` 的 `Note` 标签。

{% endnote %}

{% note 'success' 'fas fa-check-circle' %}

这是一个主题为 `success` 的 `Note` 标签。

{% endnote %}

{% note 'danger' 'fas fa-times-circle' %}

这是一个主题为 `danger` 的 `Note` 标签。

{% endnote %}

{% note 'warning' 'fas fa-exclamation-circle' %}

这是一个主题为 `warning` 的 `Note` 标签。

{% endnote %}

{% note 'info' 'fas fa-info-circle' %}

这是一个主题为 `info` 的 `Note` 标签。

{% endnote %}

{% note 'flat primary' 'fas fa-info-circle' %}
这是一个主题为 `primary` 的 `Note` 标签。
{% endnote %}

{% note 'default success' 'fas fa-check-circle' %}
这是一个主题为 `success` 的 `Note` 标签。
{% endnote %}

{% note 'simple danger' 'fas fa-times-circle' %}
这是一个主题为 `danger` 的 `Note` 标签。
{% endnote %}

{% note 'modern warning' 'fas fa-exclamation-circle' %}
这是一个主题为 `warning` 的 `Note` 标签。
{% endnote %}

{% note 'flat info' 'fas fa-info-circle' %}
这是一个主题为 `info` 的 `Note` 标签。
{% endnote %}

<!-- endtab -->

<!-- tab 源代码 -->

```markdown
{% note 'primary' 'fas fa-info-circle' %}

这是一个主题为 `primary` 的 `Note` 标签。

{% endnote %}

{% note 'success' 'fas fa-check-circle' %}

这是一个主题为 `success` 的 `Note` 标签。

{% endnote %}

{% note 'danger' 'fas fa-times-circle' %}

这是一个主题为 `danger` 的 `Note` 标签。

{% endnote %}

{% note 'warning' 'fas fa-exclamation-circle' %}

这是一个主题为 `warning` 的 `Note` 标签。

{% endnote %}

{% note 'info' 'fas fa-info-circle' %}

这是一个主题为 `info` 的 `Note` 标签。

{% endnote %}

{% note 'flat primary' 'fas fa-info-circle' %}
这是一个主题为 `primary` 的 `Note` 标签。
{% endnote %}

{% note 'default success' 'fas fa-check-circle' %}
这是一个主题为 `success` 的 `Note` 标签。
{% endnote %}

{% note 'simple danger' 'fas fa-times-circle' %}
这是一个主题为 `danger` 的 `Note` 标签。
{% endnote %}

{% note 'modern warning' 'fas fa-exclamation-circle' %}
这是一个主题为 `warning` 的 `Note` 标签。
{% endnote %}

{% note 'flat info' 'fas fa-info-circle' %}
这是一个主题为 `info` 的 `Note` 标签。
{% endnote %}
```

<!-- endtab -->

{% endtabs %}

### Youtube

{% tabs Youtube %}
<!-- tab 语法 -->

```markdown
{% youtube video_id [type] [cookie] %}
```

<!-- endtab -->

<!-- tab 参数 -->

1. 'video_id'：视频ID。
2. 'type'：视频类型。
3. 'cookie'：是否启用Cookie。

<!-- endtab -->

<!-- tab 预览 -->

{% youtube 'dQw4w9WgXcQ' %}

<!-- endtab -->

<!-- tab 源代码 -->

```markdown
{% youtube 'dQw4w9WgXcQ' %}
```

<!-- endtab -->

{% endtabs %}