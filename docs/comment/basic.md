---
title: Basic Comment Configuration
description: Basic Comment Configuration
---

# Basic Comment Configuration

## Usage

```yaml
# Comment
comment:
  # Which commenting system to use(e.g. waline or waline,twikoo)
  use: # waline, twikoo, valine, artalk, giscus # Up to two comment systems can be turned on at the same time
  # Whether to display the hot comment switch.
  commentBarrage: false
  # Lazy load
  lazyload: false
  # Whether to display the comment count
  count: false
  # PV
  pv: false
  # Avatar
  avatar: https://gravatar.com/avatar
  # Hot comment tips
  hot_tip:
    enable: false
    # Number of hot comments
    count: 3
  # recent comments(⚠️ Comments need to be configured first.)
  newest_comment:
    enable: true
    storage: .5 # Cache time 1: 1 day / .5 : half a day
    limit: 5 # Number of comments
```

* `use`: The comment system to use. You can fill in up to two comment systems here. If left empty, no comment system will be used.
* `commentBarrage`: Hot comment switch. When enabled, comments will appear in a loop at the bottom right of pages with comments enabled.
* `lazyload`: Whether to use lazy loading. When enabled, comments will only be loaded when needed.
* `count`: Whether to display the comment count. When enabled, the article page will show the number of comments.
* `avatar`: The source for fetching avatars for hot comments: gravatar/cravatar, etc.
* `hot_tip`: Hot comment tips. When enabled, it will add hot comment tips to articles on the homepage.
* `newest_comment`: Latest comments. When enabled, the control panel will display the latest comments.
