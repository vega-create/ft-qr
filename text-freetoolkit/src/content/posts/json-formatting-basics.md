---
title: "JSON Formatting Basics: How to Read and Write JSON"
description: "A beginner-friendly guide to JSON syntax, formatting, and common use cases in web development."
publishDate: "2026-02-05"
category: "Development"
tags: ["json", "formatting", "api"]
---

JSON (JavaScript Object Notation) is the most popular data format for web APIs and configuration files. Understanding JSON is essential for web developers, data analysts, and anyone working with modern applications.

## JSON Syntax

JSON supports six data types:
1. Strings — enclosed in double quotes: "hello"
2. Numbers — integers or decimals: 42 or 3.14
3. Booleans — true or false
4. Null — null
5. Arrays — ordered lists: [1, 2, 3]
6. Objects — key-value pairs: {"key": "value"}

## Formatting Rules

- Keys must be strings in double quotes
- Strings must use double quotes (not single quotes)
- No trailing commas after the last item
- No comments allowed in standard JSON
- Unicode characters are supported

## Common Mistakes

1. Using single quotes instead of double quotes
2. Adding a trailing comma after the last element
3. Including comments (JSON does not support them)
4. Using undefined (use null instead)
5. Forgetting to quote property names

## Working with JSON

In JavaScript, use JSON.parse() to convert a JSON string to an object, and JSON.stringify() to convert an object to a JSON string. The second parameter of JSON.stringify can add formatting.

## Validating JSON

Always validate your JSON before using it. A single missing comma or mismatched bracket can cause parsing errors. Use online validators or our text tools to check your JSON syntax.