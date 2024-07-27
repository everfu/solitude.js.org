---
title: Frequently Asked Questions
description: Answers to some common questions
---

# Frequently Asked Questions

## Cannot read properties of undefined (reading 'essay_list')

This error occurs when the data file for the "即刻短文" page is not created or opened.

## Cannot find module 'moment'

This error occurs when the 'moment' module is missing. To fix it, run `npm install moment` to install the module.

## Why is the custom font not working even though I have configured it?

Please check if the font is correctly configured and if the font file is properly imported (you need to add the corresponding font import CSS, you can write it in `extends`).

## How can I configure a photo album page like the author's blog?

The author achieved this by using the Tags Plugin's `gallery` feature.

## TypeError: Cannot read properties of null (reading 'utcOffset')

Check if the `timezone` in `_config.yml` is correctly configured.

Example:
```yaml
timezone: Asia/Shanghai
```