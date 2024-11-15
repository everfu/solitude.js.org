---
title: Frequently Asked Questions
description: Answers to some common questions
---

# Frequently Asked Questions

## Cannot read properties of undefined (reading 'essay_list')

This error typically occurs when the data file for the "即刻短文" page hasn't been created or opened.

## Cannot find module 'moment'

This error arises when the 'moment' module is missing. To resolve it, execute `npm install moment` to install the module.

## Why isn't the custom font working even though I've configured it?

Ensure that the font is correctly configured and that the font file is properly imported. You need to add the corresponding font import CSS, which can be written in `extends`.

## How can I set up a photo album page like the author's blog?

The author accomplished this by utilizing the Tags Plugin's `gallery` feature.

## TypeError: Cannot read properties of null (reading 'utcOffset')

Verify that the `timezone` in `_config.yml` is correctly configured.

Example: