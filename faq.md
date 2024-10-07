---
title: Frequently Asked Questions
description: Answers to some common questions
---

# Frequently Asked Questions

## Cannot read properties of undefined (reading 'essay_list')

This occurs when you've opened the Jike short essay page without creating the Jike short essay data file.

## Cannot find module 'moment'

The 'moment' module is missing. Run `npm install moment` to install it.

## Why doesn't my custom theme font take effect?

Please check if you've correctly configured the font and properly imported the font file (you need to add the corresponding font import CSS yourself, which can be written in the `extends` section).

## How to configure an album page like the one in the author's blog?

The author implemented this using the `gallery` feature of the Tags Plugin.

## TypeError: Cannot read properties of null (reading 'utcOffset')

Check if the `timezone` in `_config.yml` is correctly configured.

Example:
```yaml
timezone: Asia/Shanghai
```
