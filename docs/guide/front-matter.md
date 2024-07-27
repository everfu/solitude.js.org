---
title: Front Matter
description: Front Matter is a special syntax in Markdown used to define the metadata of a page.
---

# Front Matter

> Front-matter is the section at the top of a Markdown file, separated by `---`, used to specify special values for a page.

:::tabs
== Post Front Matter
```markdown
---
title:
date:
type:
comment:
cover:
katex:
reprint:
locate:
---
```
== Page Front Matter
```markdown
---
title:
date:
updated:
type:
comment:
desc:
cover:
katex:
aside:
---
```
== Instant, Toolbox, My Equipment, Douban Page (Music, Books, Games)
```markdown
---
leftend:
rightend:
rightbtn:
rightbtnlink:
---
```
:::

|     Property     | Value Type | Explanation                                                          |
| :--------------: | :-------- | :------------------------------------------------------------------- |
|      title       | string    | <Badge>Required</Badge> Page title                                   |
|       date       | datetime  | <Badge>Required</Badge> Page creation date                           |
|       type       | string    | <Badge>Required</Badge> Configuration needed for About, Links, Moments, Instant, Toolbox pages |
|     updated      | datetime  | <Badge>Optional</Badge> Page update date                             |
|       desc       | string    | <Badge>Optional</Badge> Page description                             |
|      aside       | boolean   | <Badge>Optional</Badge> Enable sidebar (default true)                |
|     comment      | boolean   | <Badge>Optional</Badge> Show page comment module (default true)      |
|      cover       | string    | <Badge>Optional</Badge> URL of the top image of the page             |
|     reprint      | boolean   | <Badge>Optional</Badge> Copyright (default is original) set to true for reprint |
|      katex       | boolean   | <Badge>Optional</Badge> Show katex (default false)                   |
|      locate      | string    | <Badge>Optional</Badge> Location of article                          |
|     leftend      | string    | <Badge>Optional</Badge> Text on the bottom left of the banner        |
|    rightend      | string    | <Badge>Optional</Badge> Text on the bottom right of the banner       |
|    rightbtn      | string    | <Badge>Optional</Badge> Text on the button on the bottom right of the banner |
|  rightbtnlink    | string    | <Badge>Optional</Badge> Link to be opened when the button on the bottom right of the banner is clicked |
|    container     | boolean   | <Badge>Optional</Badge> Enable container (default true)              |

::: warning Warning
If marking optional parameters, you can add them according to your needs, and you don't need to write them all in the Markdown.
:::

**Custom page with a banner image**

```markdown
---
title: Test
type: banner
container: true
---
```

::: tip Note
If you only need a regular banner effect, you can omit the container property.
:::