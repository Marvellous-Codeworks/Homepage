---
slug: tms-release-8-1-3
title: "The Marvellous Suspender 8.1.3 - Vivaldi fix"
date: 2025-12-22T09:04:26+01:00
authors: [gioxx, rkodey]
tags: [release, tms]
---

A targeted patch for Vivaldi users who were experiencing crashes related to a browser-specific API inconsistency.

{/* truncate */}

## What's fixed

### Vivaldi `getContexts` workaround
Vivaldi implements a non-standard version of the `chrome.runtime.getContexts` API that was causing TMS to throw an unhandled error. This release adds a workaround that detects and handles the inconsistency, restoring normal operation for Vivaldi users.

:::note
This is the current stable release available on the Chrome Web Store. If you are on Vivaldi and experienced unexpected behavior after the 8.1.2 update, updating to 8.1.3 should resolve it.
:::

---

Special thanks to **@wobondar** for supporting the project! ❤️

*Full changelog on GitHub: [v8.1.3 release](https://github.com/gioxx/MarvellousSuspender/releases/tag/v8.1.3)*
