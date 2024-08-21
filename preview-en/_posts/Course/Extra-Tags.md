---
title: Extra Tags
categories:
  - Course
tags:
  - Extra Tags
cover: 'https://i.pinimg.com/originals/7e/e6/81/7ee6814448df12263f09f1e70a8a9ca6.jpg'
abbrlink: 6f2c8cc8
date: 2024-07-30 13:34:49
update: 2024-07-30 13:34:49
---

## Installation

```bash
npm install hexo-solitude-tag
```

## Usage

### Note (Bootstrap)

{% tabs Note %}
<!-- tab Syntax -->

```markdown
{% note class='className' icon='icon' %}
Any content (support inline tags too).
{% endnote %}
```

<!-- endtab -->

<!-- tab Parameters -->

1. 'className': The class name of the
2. 'icon': The icon name (full name, e.g., "fas fa-github").

<!-- endtab -->

<!-- tab Preview -->

> default

{% note 'default' %}

Default note.

{% endnote %}

{% note 'primary' 'fas fa-circle-minus' %}
Primary note with icon.
{% endnote %}

{% note 'success' 'fas fa-circle-check' %}
Success note with icon.
{% endnote %}

{% note 'info' 'fas fa-circle-info' %}
Info note with icon.
{% endnote %}

{% note 'warning' 'fas fa-circle-xmark' %}
Warning note with icon.
{% endnote %}

{% note 'danger' 'fas fa-circle-exclamation' %}
Danger note with icon.
{% endnote %}

> flat

{% note 'default flat' %}
Default note.

{% endnote %}

{% note 'primary flat' 'fas fa-circle-minus' %}
Primary note with icon.
{% endnote %}

{% note 'success flat' 'fas fa-circle-check' %}
Success note with icon.
{% endnote %}

{% note 'info flat' 'fas fa-circle-info' %}
Info note with icon.
{% endnote %}

{% note 'warning flat' 'fas fa-circle-xmark' %}
Warning note with icon.
{% endnote %}

{% note 'danger flat' 'fas fa-circle-exclamation' %}
Danger note with icon.
{% endnote %}

> simple

{% note 'default simple' %}
Default note.

{% endnote %}

{% note 'primary simple' 'fas fa-circle-minus' %}
Primary note with icon.
{% endnote %}

{% note 'success simple' 'fas fa-circle-check' %}
Success note with icon.
{% endnote %}

{% note 'info simple' 'fas fa-circle-info' %}
Info note with icon.
{% endnote %}

{% note 'warning simple' 'fas fa-circle-xmark' %}
Warning note with icon.
{% endnote %}

{% note 'danger simple' 'fas fa-circle-exclamation' %}
Danger note with icon.
{% endnote %}

> modern

{% note 'default modern' %}
Default note.

{% endnote %}

{% note 'primary modern' 'fas fa-circle-minus' %}
Primary note with icon.
{% endnote %}

{% note 'success modern' 'fas fa-circle-check' %}
Success note with icon.
{% endnote %}

{% note 'info modern' 'fas fa-circle-info' %}
Info note with icon.
{% endnote %}

{% note 'warning modern' 'fas fa-circle-xmark' %}
Warning note with icon.
{% endnote %}

{% note 'danger modern' 'fas fa-circle-exclamation' %}
Danger note with icon.
{% endnote %}

<!-- endtab -->

<!-- tab Source -->

```markdown
> default

{% note 'default' %}

Default note.

{% endnote %}

{% note 'primary' 'fas fa-circle-minus' %}
Primary note with icon.
{% endnote %}

{% note 'success' 'fas fa-circle-check' %}
Success note with icon.
{% endnote %}

{% note 'info' 'fas fa-circle-info' %}
Info note with icon.
{% endnote %}

{% note 'warning' 'fas fa-circle-xmark' %}
Warning note with icon.
{% endnote %}

{% note 'danger' 'fas fa-circle-exclamation' %}
Danger note with icon.
{% endnote %}

> flat

{% note 'default flat' %}
Default note.

{% endnote %}

{% note 'primary flat' 'fas fa-circle-minus' %}
Primary note with icon.
{% endnote %}

{% note 'success flat' 'fas fa-circle-check' %}
Success note with icon.
{% endnote %}

{% note 'info flat' 'fas fa-circle-info' %}
Info note with icon.
{% endnote %}

{% note 'warning flat' 'fas fa-circle-xmark' %}
Warning note with icon.
{% endnote %}

{% note 'danger flat' 'fas fa-circle-exclamation' %}
Danger note with icon.
{% endnote %}

> simple

{% note 'default simple' %}
Default note.

{% endnote %}

{% note 'primary simple' 'fas fa-circle-minus' %}
Primary note with icon.
{% endnote %}

{% note 'success simple' 'fas fa-circle-check' %}
Success note with icon.
{% endnote %}

{% note 'info simple' 'fas fa-circle-info' %}
Info note with icon.
{% endnote %}

{% note 'warning simple' 'fas fa-circle-xmark' %}
Warning note with icon.
{% endnote %}

{% note 'danger simple' 'fas fa-circle-exclamation' %}
Danger note with icon.
{% endnote %}

> modern

{% note 'default modern' %}
Default note.

{% endnote %}

{% note 'primary modern' 'fas fa-circle-minus' %}
Primary note with icon.
{% endnote %}

{% note 'success modern' 'fas fa-circle-check' %}
Success note with icon.
{% endnote %}

{% note 'info modern' 'fas fa-circle-info' %}
Info note with icon.
{% endnote %}

{% note 'warning modern' 'fas fa-circle-xmark' %}
Warning note with icon.
{% endnote %}

{% note 'danger modern' 'fas fa-circle-exclamation' %}
Danger note with icon.
{% endnote %}
```

<!-- endtab -->

{% endtabs %}

### Button

{% tabs Button %}
<!-- tab Syntax -->

```markdown
{% button 'icon' 'content' 'url' %}
```

<!-- endtab -->

<!-- tab Parameters -->

1. 'icon': The icon name (full name, e.g., "fas fa-github").
2. 'content': The content of the button.
3. 'url': The URL of the button.

<!-- endtab -->

<!-- tab Preview -->

{% button 'fab fa-github' 'GitHub' 'https://github.com' %}
{% button 'fas fa-home' 'Home' '/' %}
{% button 'fas fa-envelope' 'mailto:o@efu.me' %}
<!-- endtab -->

<!-- tab Source -->

```markdown
{% button 'fab fa-github' 'GitHub' 'https://github.com' %}
{% button 'fas fa-home' 'Home' '/' %}
```

<!-- endtab -->

{% endtabs %}

### Repo

{% tabs repo %}
<!-- tab Syntax -->

```markdown
{% github 'owner/repo' %}
{% gitlab 'projectID' %}
{% gitee 'owner/repo' %}
{% gitea 'server' 'owner/repo' %}
```

<!-- endtab -->

<!-- tab Parameters -->

1. 'owner': The owner of the repository.
2. 'repo': The name of the repository.
3. 'projectID': The ID of the project.
4. 'server': The server address of the repository.

<!-- endtab -->

<!-- tab Preview -->

{% github 'everfu/hexo-theme-solitude' %}
{% gitlab '56198505' %}
{% gitee 'everfu/hexo-theme-solitude' %}

<!-- endtab -->

<!-- tab Source -->

```markdown
{% github 'everfu/hexo-theme-solitude' %}
{% gitlab '56198505' %}
{% gitee 'everfu/hexo-theme-solitude' %}
```

<!-- endtab -->

{% endtabs %}