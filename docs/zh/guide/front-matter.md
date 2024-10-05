---
title: Front Matter
description: Front Matter 是 Markdown 的一种特殊语法，用于定义页面的元数据。
---

# Front Matter

## Front Matter 是什么？

Front Matter 是 Markdown 的一种特殊语法，用于定义页面的元数据。

## 主题可使用的 Front Matter 属性

::: tip 提示
不需要在页面中全部添加，有些属性是必须的，有些是可选的。
:::

|     属性     | 值类型   | 解释                                                                 |
| :----------: | :------- | :------------------------------------------------------------------- |
|    title     | string   | <Badge>必需</Badge> 页面标题                                         |
|     date     | datetime | <Badge>必需</Badge> 页面创建日期                                     |
|     type     | string   | <Badge>必需</Badge> 关于、友情链接、朋友圈、即刻、工具箱页面需要配置 |
|   updated    | datetime | <Badge>可选</Badge> 页面更新日期                                     |
|     desc     | string   | <Badge>可选</Badge> 页面描述                                         |
|   description| string   | <Badge>可选</Badge> 页面描述                                         |
|    aside     | boolean  | <Badge>可选</Badge> 是否开启侧边栏（默认true）                       |
|   comment    | boolean  | <Badge>可选</Badge> 显示页面评论模块(默认 true)                      |
|    cover     | string   | <Badge>可选</Badge> 页面顶部图片URL                                  |
|   reprint    | boolean  | <Badge>可选</Badge> 版权（默认为原创）为true时为转载                 |
|    katex     | boolean  | <Badge>可选</Badge> 显示 katex(默认 false)                           |
|    locate    | string   | <Badge>可选</Badge> 文章创作地点                                     |
|   leftend    | string   | <Badge>可选</Badge> banner底部左侧文字                               |
|   rightend   | string   | <Badge>可选</Badge> banner底部右侧文字                               |
|   rightbtn   | string   | <Badge>可选</Badge> banner底部右侧按钮文字                           |
| rightbtnlink | string   | <Badge>可选</Badge> banner底部右侧按钮跳转链接                       |
|  container   | boolean  | <Badge>可选</Badge> 是否开启容器（默认true）                         |
|  author      | string   | <Badge>可选</Badge> 文章作者                                         |
|  avatar      | string   | <Badge>可选</Badge> 文章作者头像URL                                  |

**自定义拥有 banner 图的页面**

```markdown
---
title: 测试
type: banner
container: true
---
```

::: tip 注意
如果只需要普通的实现 banner 效果，可以不写 container 属性
:::