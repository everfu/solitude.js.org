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

### 注意事项（Bootstrap）

{% tabs 注意 %}
<!-- tab 语法 -->

```markdown
{% 注意 class='className' icon='icon' %}
任何内容（支持内联标签）。
{% 结束注意 %}
```

<!-- endtab -->

<!-- tab 参数 -->

1. 'className'：类名
2. 'icon'：图标名称（完整名称，例如 "fas fa-github"）。

<!-- endtab -->

<!-- tab 预览 -->

> 默认

{% 注意 'default' %}

默认注意事项。

{% 结束注意 %}

{% 注意 'primary' 'fas fa-circle-minus' %}
带图标的主要注意事项。
{% 结束注意 %}

{% 注意 'success' 'fas fa-circle-check' %}
带图标的成功注意事项。
{% 结束注意 %}

{% 注意 'info' 'fas fa-circle-info' %}
带图标的信息注意事项。
{% 结束注意 %}

{% 注意 'warning' 'fas fa-circle-xmark' %}
带图标的警告注意事项。
{% 结束注意 %}

{% 注意 'danger' 'fas fa-circle-exclamation' %}
带图标的危险注意事项。
{% 结束注意 %}

> 平面

{% 注意 'default flat' %}
默认注意事项。

{% 结束注意 %}

{% 注意 'primary flat' 'fas fa-circle-minus' %}
带图标的主要注意事项。
{% 结束注意 %}

{% 注意 'success flat' 'fas fa-circle-check' %}
带图标的成功注意事项。
{% 结束注意 %}

{% 注意 'info flat' 'fas fa-circle-info' %}
带图标的信息注意事项。
{% 结束注意 %}

{% 注意 'warning flat' 'fas fa-circle-xmark' %}
带图标的警告注意事项。
{% 结束注意 %}

{% 注意 'danger flat' 'fas fa-circle-exclamation' %}
带图标的危险注意事项。
{% 结束注意 %}

> 简单

{% 注意 'default simple' %}
默认注意事项。

{% 结束注意 %}

{% 注意 'primary simple' 'fas fa-circle-minus' %}
带图标的主要注意事项。
{% 结束注意 %}

{% 注意 'success simple' 'fas fa-circle-check' %}
带图标的成功注意事项。
{% 结束注意 %}

{% 注意 'info simple' 'fas fa-circle-info' %}
带图标的信息注意事项。
{% 结束注意 %}

{% 注意 'warning simple' 'fas fa-circle-xmark' %}
带图标的警告注意事项。
{% 结束注意 %}

{% 注意 'danger simple' 'fas fa-circle-exclamation' %}
带图标的危险注意事项。
{% 结束注意 %}

> 现代

{% 注意 'default modern' %}
默认注意事项。

{% 结束注意 %}

{% 注意 'primary modern' 'fas fa-circle-minus' %}
带图标的主要注意事项。
{% 结束注意 %}

{% 注意 'success modern' 'fas fa-circle-check' %}
带图标的成功注意事项。
{% 结束注意 %}

{% 注意 'info modern' 'fas fa-circle-info' %}
带图标的信息注意事项。
{% 结束注意 %}

{% 注意 'warning modern' 'fas fa-circle-xmark' %}
带图标的警告注意事项。
{% 结束注意 %}

{% 注意 'danger modern' 'fas fa-circle-exclamation' %}
带图标的危险注意事项。
{% 结束注意 %}

<!-- endtab -->

<!-- tab 源代码 -->

```markdown
> 默认

{% 注意 'default' %}

默认注意事项。

{% 结束注意 %}

{% 注意 'primary' 'fas fa-circle-minus' %}
带图标的主要注意事项。
{% 结束注意 %}

{% 注意 'success' 'fas fa-circle-check' %}
带图标的成功注意事项。
{% 结束注意 %}

{% 注意 'info' 'fas fa-circle-info' %}
带图标的信息注意事项。
{% 结束注意 %}

{% 注意 'warning' 'fas fa-circle-xmark' %}
带图标的警告注意事项。
{% 结束注意 %}

{% 注意 'danger' 'fas fa-circle-exclamation' %}
带图标的危险注意事项。
{% 结束注意 %}

> 平面

{% 注意 'default flat' %}
默认注意事项。

{% 结束注意 %}

{% 注意 'primary flat' 'fas fa-circle-minus' %}
带图标的主要注意事项。
{% 结束注意 %}

{% 注意 'success flat' 'fas fa-circle-check' %}
带图标的成功注意事项。
{% 结束注意 %}

{% 注意 'info flat' 'fas fa-circle-info' %}
带图标的信息注意事项。
{% 结束注意 %}

{% 注意 'warning flat' 'fas fa-circle-xmark' %}
带图标的警告注意事项。
{% 结束注意 %}

{% 注意 'danger flat' 'fas fa-circle-exclamation' %}
带图标的危险注意事项。
{% 结束注意 %}

> 简单

{% 注意 'default simple' %}
默认注意事项。

{% 结束注意 %}

{% 注意 'primary simple' 'fas fa-circle-minus' %}
带图标的主要注意事项。
{% 结束注意 %}

{% 注意 'success simple' 'fas fa-circle-check' %}
带图标的成功注意事项。
{% 结束注意 %}

{% 注意 'info simple' 'fas fa-circle-info' %}
带图标的信息注意事项。
{% 结束注意 %}

{% 注意 'warning simple' 'fas fa-circle-xmark' %}
带图标的警告注意事项。
{% 结束注意 %}

{% 注意 'danger simple' 'fas fa-circle-exclamation' %}
带图标的危险注意事项。
{% 结束注意 %}

> 现代

{% 注意 'default modern' %}
默认注意事项。

{% 结束注意 %}

{% 注意 'primary modern' 'fas fa-circle-minus' %}
带图标的主要注意事项。
{% 结束注意 %}

{% 注意 'success modern' 'fas fa-circle-check' %}
带图标的成功注意事项。
{% 结束注意 %}

{% 注意 'info modern' 'fas fa-circle-info' %}
带图标的信息注意事项。
{% 结束注意 %}

{% 注意 'warning modern' 'fas fa-circle-xmark' %}
带图标的警告注意事项。
{% 结束注意 %}

{% 注意 'danger modern' 'fas fa-circle-exclamation' %}
带图标的危险注意事项。
{% 结束注意 %}

<!-- endtab -->

{% endtabs %}

### 按钮

{% tabs 按钮 %}
<!-- tab 语法 -->

```markdown
{% 按钮 'icon' 'content' 'url' %}
```

<!-- endtab -->

<!-- tab 参数 -->

1. 'icon'：图标名称（完整名称，例如 "fas fa-github"）。
2. 'content'：按钮内容。
3. 'url'：按钮的URL。

<!-- endtab -->

<!-- tab 预览 -->

{% 按钮 'fab fa-github' 'GitHub' 'https://github.com' %}
{% 按钮 'fas fa-home' '主页' '/' %}
{% 按钮 'fas fa-envelope' '发送邮件' 'mailto:o@efu.me' %}
<!-- endtab -->

<!-- tab 源代码 -->

```markdown
{% 按钮 'fab fa-github' 'GitHub' 'https://github.com' %}
{% 按钮 'fas fa-home' '主页' '/' %}
```

<!-- endtab -->

{% endtabs %}

### 仓库

{% tabs 仓库 %}
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
