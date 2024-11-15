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

| Property      | Value Type | Explanation                                                                 |
|:-------------:|:----------:|:---------------------------------------------------------------------------:|
| title         | string     | <Badge type="tip" text="Required" /> Page title                             |
| date          | datetime   | <Badge type="tip" text="Required" /> Page creation date                     |
| type          | string     | <Badge type="tip" text="Required" /> Configuration needed for specific pages|
| updated       | datetime   | <Badge type="info" text="Optional" /> Page update date                      |
| desc          | string     | <Badge type="info" text="Optional" /> Page description                      |
| aside         | boolean    | <Badge type="info" text="Optional" /> Enable sidebar (default true)         |
| comment       | boolean    | <Badge type="info" text="Optional" /> Show page comment module (default true)|
| cover         | string     | <Badge type="info" text="Optional" /> URL of the top image of the page      |
| reprint       | boolean    | <Badge type="info" text="Optional" /> Copyright (default is original)       |
| katex         | boolean    | <Badge type="info" text="Optional" /> Show katex (default false)            |
| locate        | string     | <Badge type="info" text="Optional" /> Location of article                   |
| leftend       | string     | <Badge type="info" text="Optional" /> Text on the bottom left of the banner |
| rightend      | string     | <Badge type="info" text="Optional" /> Text on the bottom right of the banner|
| rightbtn      | string     | <Badge type="info" text="Optional" /> Text on the button on the bottom right|
| rightbtnlink  | string     | <Badge type="info" text="Optional" /> Link for the button on the bottom right|
| container     | boolean    | <Badge type="info" text="Optional" /> Enable container (default true)       |

::: warning
If marking optional parameters, you can add them according to your needs, and you don't need to write them all in the Markdown.
:::
