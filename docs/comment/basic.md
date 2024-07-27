---
title: Basic Comment Configuration
description: Basic Comment Configuration
---

# Basic Comment Configuration

## Usage

```yaml
# Comment
comment:
  use: # waline, twikoo, valine, artalk
  commentBarrage: false # Hot comment switch
  lazyload: false # Lazy loading
  count: false # Display comment count
  avatar: https://cravatar.cn # Source for fetching avatars for hot comments
  newest_comment: # Newest comments
    enable: false
    storage: .2 # Cache time
```

* `use`: The comment system to use. You can specify up to two comment systems here. Leave it blank if you don't want to use any comment system.
* `commentBarrage`: Enable the hot comment barrage. When enabled, the comments will appear in a loop at the bottom right of the page.
* `lazyload`: Enable lazy loading. When enabled, the comments will only be loaded when needed.
* `count`: Display the comment count. When enabled, the number of comments will be shown on the article page.
* `avatar`: Source for fetching avatars for hot comments, such as gravatar or cravatar.
* `newest_comment`: Enable the display of newest comments in the console. Requires console_plus to be enabled.
