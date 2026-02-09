---
title: "QR Code Error Correction: How Damaged Codes Still Work"
description: "QR Code Error Correction: How Damaged Codes Still Work"
publishDate: "2026-02-04"
category: "Guide"
tags: ["error-correction", "technical", "reliability"]
---

One of the most remarkable features of QR codes is their ability to be read even when partially damaged, dirty, or obscured. This reliability comes from built-in error correction using Reed-Solomon codes.

## How Error Correction Works

QR codes use Reed-Solomon error correction, the same mathematical technique used in CDs, DVDs, and deep-space communication. The algorithm adds redundant data to the QR code that allows the scanner to reconstruct missing or corrupted information.

## Error Correction Levels

QR codes offer four error correction levels, each providing different amounts of redundancy.

### Level L (Low) - 7% Recovery
The minimum error correction level. Best for clean, controlled environments where the code will not be damaged. Allows the maximum data capacity.

### Level M (Medium) - 15% Recovery
The default level for most applications. Provides a good balance between data capacity and damage resistance. Suitable for most printed materials.

### Level Q (Quartile) - 25% Recovery
Good for environments where codes may get partially obscured or dirty, such as warehouse labels or outdoor signage.

### Level H (High) - 30% Recovery
The maximum error correction level. Required when placing logos or images in the center of the QR code. Also recommended for industrial applications where damage is likely.

## Practical Implications

With Level H error correction, up to 30% of the QR code can be damaged or covered and it will still scan correctly. This is why you can place a small logo in the center of a QR code and it still works, as long as you do not cover more than the error correction can handle.

## Choosing the Right Level

Use Level L for maximum data in controlled environments. Use Level M for general-purpose applications. Use Level Q or H for outdoor use, industrial applications, or when adding visual elements to the code. Our generator uses Level M by default, providing reliable performance for most use cases.