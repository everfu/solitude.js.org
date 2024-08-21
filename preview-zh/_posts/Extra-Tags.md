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

### note事项（Bootstrap）

{% tabs note %}
<!-- tab 语法 -->

```markdown
{% note class='className' icon='icon' %}
任何内容（支持内联标签）。
{% endnote %}
```

<!-- endtab -->

<!-- tab 参数 -->

1. 'className'：类名
2. 'icon'：图标名称（完整名称，例如 "fas fa-github"）。

<!-- endtab -->

<!-- tab 预览 -->

> 默认

{% note 'default' %}

默认note事项。

{% endnote %}

{% note 'primary' 'fas fa-circle-minus' %}
带图标的主要note事项。
{% endnote %}

{% note 'success' 'fas fa-circle-check' %}
带图标的成功note事项。
{% endnote %}

{% note 'info' 'fas fa-circle-info' %}
带图标的信息note事项。
{% endnote %}

{% note 'warning' 'fas fa-circle-xmark' %}
带图标的警告note事项。
{% endnote %}

{% note 'danger' 'fas fa-circle-exclamation' %}
带图标的危险note事项。
{% endnote %}

> 平面

{% note 'default flat' %}
默认note事项。

{% endnote %}

{% note 'primary flat' 'fas fa-circle-minus' %}
带图标的主要note事项。
{% endnote %}

{% note 'success flat' 'fas fa-circle-check' %}
带图标的成功note事项。
{% endnote %}

{% note 'info flat' 'fas fa-circle-info' %}
带图标的信息note事项。
{% endnote %}

{% note 'warning flat' 'fas fa-circle-xmark' %}
带图标的警告note事项。
{% endnote %}

{% note 'danger flat' 'fas fa-circle-exclamation' %}
带图标的危险note事项。
{% endnote %}

> 简单

{% note 'default simple' %}
默认note事项。

{% endnote %}

{% note 'primary simple' 'fas fa-circle-minus' %}
带图标的主要note事项。
{% endnote %}

{% note 'success simple' 'fas fa-circle-check' %}
带图标的成功note事项。
{% endnote %}

{% note 'info simple' 'fas fa-circle-info' %}
带图标的信息note事项。
{% endnote %}

{% note 'warning simple' 'fas fa-circle-xmark' %}
带图标的警告note事项。
{% endnote %}

{% note 'danger simple' 'fas fa-circle-exclamation' %}
带图标的危险note事项。
{% endnote %}

> 现代

{% note 'default modern' %}
默认note事项。

{% endnote %}

{% note 'primary modern' 'fas fa-circle-minus' %}
带图标的主要note事项。
{% endnote %}

{% note 'success modern' 'fas fa-circle-check' %}
带图标的成功note事项。
{% endnote %}

{% note 'info modern' 'fas fa-circle-info' %}
带图标的信息note事项。
{% endnote %}

{% note 'warning modern' 'fas fa-circle-xmark' %}
带图标的警告note事项。
{% endnote %}

{% note 'danger modern' 'fas fa-circle-exclamation' %}
带图标的危险note事项。
{% endnote %}

<!-- endtab -->

<!-- tab 源代码 -->

```markdown
> 默认

{% note 'default' %}

默认note事项。

{% endnote %}

{% note 'primary' 'fas fa-circle-minus' %}
带图标的主要note事项。
{% endnote %}

{% note 'success' 'fas fa-circle-check' %}
带图标的成功note事项。
{% endnote %}

{% note 'info' 'fas fa-circle-info' %}
带图标的信息note事项。
{% endnote %}

{% note 'warning' 'fas fa-circle-xmark' %}
带图标的警告note事项。
{% endnote %}

{% note 'danger' 'fas fa-circle-exclamation' %}
带图标的危险note事项。
{% endnote %}

> 平面

{% note 'default flat' %}
默认note事项。

{% endnote %}

{% note 'primary flat' 'fas fa-circle-minus' %}
带图标的主要note事项。
{% endnote %}

{% note 'success flat' 'fas fa-circle-check' %}
带图标的成功note事项。
{% endnote %}

{% note 'info flat' 'fas fa-circle-info' %}
带图标的信息note事项。
{% endnote %}

{% note 'warning flat' 'fas fa-circle-xmark' %}
带图标的警告note事项。
{% endnote %}

{% note 'danger flat' 'fas fa-circle-exclamation' %}
带图标的危险note事项。
{% endnote %}

> 简单

{% note 'default simple' %}
默认note事项。

{% endnote %}

{% note 'primary simple' 'fas fa-circle-minus' %}
带图标的主要note事项。
{% endnote %}

{% note 'success simple' 'fas fa-circle-check' %}
带图标的成功note事项。
{% endnote %}

{% note 'info simple' 'fas fa-circle-info' %}
带图标的信息note事项。
{% endnote %}

{% note 'warning simple' 'fas fa-circle-xmark' %}
带图标的警告note事项。
{% endnote %}

{% note 'danger simple' 'fas fa-circle-exclamation' %}
带图标的危险note事项。
{% endnote %}

> 现代

{% note 'default modern' %}
默认note事项。

{% endnote %}

{% note 'primary modern' 'fas fa-circle-minus' %}
带图标的主要note事项。
{% endnote %}

{% note 'success modern' 'fas fa-circle-check' %}
带图标的成功note事项。
{% endnote %}

{% note 'info modern' 'fas fa-circle-info' %}
带图标的信息note事项。
{% endnote %}

{% note 'warning modern' 'fas fa-circle-xmark' %}
带图标的警告note事项。
{% endnote %}

{% note 'danger modern' 'fas fa-circle-exclamation' %}
带图标的危险note事项。
{% endnote %}

<!-- endtab -->

{% endtabs %}

### 按钮

{% tabs 按钮 %}
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
