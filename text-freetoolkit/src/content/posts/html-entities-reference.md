---
title: "HTML Entities: A Complete Reference Guide"
description: "Learn about HTML entities, when to use them, and a reference table of common characters."
publishDate: "2026-02-04"
category: "Development"
tags: ["html", "entities", "web"]
---

HTML entities are special codes used to display reserved characters and symbols in web pages. Understanding HTML entities is essential for web developers and content creators.

## Why HTML Entities Exist

Certain characters have special meaning in HTML. The < and > characters define HTML tags, the & character starts entity references, and quotation marks define attribute values. To display these characters as text rather than code, you must use HTML entities.

## Entity Syntax

HTML entities can be written in two ways:
- Named entities: &name; (e.g., &amp; for &)
- Numeric entities: &#number; (e.g., &#38; for &)
- Hex entities: &#xhex; (e.g., &#x26; for &)

## Essential HTML Entities

| Character | Named | Numeric | Description |
|---|---|---|---|
| & | &amp; | &#38; | Ampersand |
| < | &lt; | &#60; | Less than |
| > | &gt; | &#62; | Greater than |
| " | &quot; | &#34; | Double quote |
| ' | &apos; | &#39; | Single quote |
| © | &copy; | &#169; | Copyright |
| ® | &reg; | &#174; | Registered |
| ™ | &trade; | &#8482; | Trademark |
| — | &mdash; | &#8212; | Em dash |
| – | &ndash; | &#8211; | En dash |
| • | &bull; | &#8226; | Bullet |
|   | &nbsp; | &#160; | Non-breaking space |

## When to Use HTML Entities

1. Displaying reserved characters (< > & " ')
2. Inserting special symbols not on your keyboard
3. Ensuring correct display across different browsers and encodings
4. Preventing XSS (cross-site scripting) attacks by encoding user input

Use our HTML Encoder/Decoder tool to quickly convert between raw text and HTML entities.