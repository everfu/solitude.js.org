---
title: Front Matter
description: Front Matter 是 Markdown 的一种特殊语法，用于定义页面的元数据。
---

# Front Matter

> Front-matter 是 markdown 文件最上方以 --- 分隔的区域，用于指定页面的特殊值。

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
== 即刻、工具箱、我的装备、豆瓣页（音乐、图书、游戏）
```markdown
---
leftend:
rightend:
rightbtn:
rightbtnlink:
---
```
:::

|      属性      | 值类型      | 解释                           |
|:------------:|:---------|:-----------------------------|
|    title     | string   | 【必需】页面标题                     |
|     date     | datetime | 【必需】页面创建日期                   |
|     type     | string   | 【必需】关于、友情链接、朋友圈、即刻、工具箱页面需要配置 |
|   updated    | datetime | 【可选】页面更新日期                   |
|     desc     | string   | 【可选】页面描述                     |
|    aside     | boolean  | 【可选】是否开启侧边栏（默认true）          |
|   comment    | boolean  | 【可选】显示页面评论模块(默认 true)        |
|    cover     | string   | 【可选】页面顶部图片URL                |
|   reprint    | boolean  | 【可选】版权（默认为原创）为true时为转载       |
|    katex     | boolean  | 【可选】显示 katex(默认 false)       |
|    locate    | string   | 【可选】文章创作地点                   |
|   leftend    | string   | 【可选】banner底部左侧文字             |
|   rightend   | string   | 【可选】banner底部右侧文字             |
|   rightbtn   | string   | 【可选】banner底部右侧按钮文字           |
| rightbtnlink | string   | 【可选】banner底部右侧按钮跳转链接         |
| container    | boolean  | 【可选】是否开启容器（默认true）           |

::: warning 警告
如果标注可选的参数，可根据自己需要添加，不用全部都写在 markdown 里
:::

**自定义拥有 banner 图的页面**

```markdown
---
title: 测试
type: banner
container: true
---
```
`注意：如果只需要普通的实现 banner 效果，可以不写 container 属性`