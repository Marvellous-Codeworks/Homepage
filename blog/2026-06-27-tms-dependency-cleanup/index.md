---
slug: tms-dependency-cleanup
title: "Under the hood: replacing abandoned libraries in TMS 9"
description: "The next TMS update quietly replaces two aging third-party libraries, one abandoned since 2021, one still stuck on a 2020 release candidate. Here is why it matters and what we are asking the community."
date: 2026-06-27T00:00:00+01:00
authors: [gioxx]
tags: [tms,road-to-tms9]
---

TMS 9 is shaping up to be one of the most significant releases in the extension's history, if you have been following along, you already know about the automatic session backups and the Google Drive integration we covered in the previous posts. But not all of the work that goes into a release shows up in the changelog. Some of the most important changes happen completely out of sight, and this one is a good example of that. We replaced two third-party libraries that had been silently aging inside the extension, and we want to be transparent about what changed and why.

## What is a "third-party library" and why should you care?

TMS is not written from scratch. Like most software, it relies on a handful of external libraries, small pieces of code written by other developers that handle specific tasks so we do not have to reinvent the wheel. These libraries live inside the extension you install, and their health matters: an abandoned library means bugs get no fixes, known vulnerabilities go unpatched, and compatibility with future browser versions is not guaranteed.

Until now, TMS included two such libraries that were overdue for attention.

## db.js: a quietly abandoned dependency

**db.js**, written by Aaron Powell, is a small wrapper around the browser's IndexedDB storage engine. TMS uses IndexedDB to remember your suspended tabs, saved sessions, favicons, and screenshot previews. db.js was responsible for every read, write, and query against that database.

The problem: development on db.js effectively stopped in 2021. The npm package has been frozen at version 0.15.0 for years. No bug fixes, no security patches, no updates for changes in browser behavior. We were shipping dead code, and dead code carries risk.

We replaced db.js with **[idb](https://github.com/jakearchibald/idb)**, the IndexedDB wrapper maintained by Jake Archibald (a Google engineer who literally helped write the browser storage specs). idb is:

- Actively maintained, currently at version 8
- Widely used across the web platform ecosystem
- Lean, well-tested, and licensed under ISC (permissive open source)

From your perspective as a user, **nothing changes**. Your sessions, your suspended tabs, your settings, all of it is stored the same way in IndexedDB. The only difference is that the code that reads and writes your data is now backed by a healthy, modern library instead of an abandoned one.

## html2canvas: from a 2020 release candidate to a stable release

The second change is smaller in scope but still worth mentioning. **html2canvas**, the library TMS uses to generate the screenshot preview shown on suspended tab pages, was pinned at version **1.0.0-rc.7**, a *release candidate* from 2020. We were shipping pre-release software to everyone.

The library's author, Niklas von Hertzen, published the stable **1.4.1** release in 2022. This version includes several rendering fixes, better SVG support, and improved CORS handling. We updated to it.

For users who have the screenshot preview feature enabled in TMS settings, this may result in slightly more accurate previews on complex pages. For everyone else, there is no visible difference.

## An open question for the community: do you use full-page screenshots?

Here is where we need your input.

The screenshot preview in TMS has two modes, configurable in **Settings → Preview**:

- **Viewport**: captures only the visible portion of the page when you suspend it.
- **Full page**: scrolls and renders the entire page content, even below the fold.

html2canvas is the only reason TMS needs to ship a 200 KB library. The **viewport** mode does not actually need it at all, Chrome provides a native API (`chrome.tabs.captureVisibleTab`) that captures the visible area of a tab directly from the extension, with no third-party code required. Full-page screenshots, however, need html2canvas because no native browser API supports them.

So the question is: **do you actually use full-page screenshots?** If the vast majority of users either have previews disabled or use viewport-only mode, we could remove html2canvas entirely in a future release, replacing the viewport capture with the native Chrome API and dropping full-page support. The result would be a smaller, simpler, more maintainable extension.

We have opened a discussion on GitHub for exactly this:

👉 **[Discussion #381, Which screenshot preview mode do you use in TMS?](https://github.com/gioxx/MarvellousSuspender/discussions/381)**

If you have an opinion, whether you love the full-page preview or have never even turned it on, we would genuinely like to hear it. Community input is what drives these decisions.

## Summary

| Library | Before | After | Why |
|---------|--------|-------|-----|
| db.js | 0.15.0 (2021, abandoned) | ❌ Removed | Replaced by idb v8 |
| idb | - | 8.0.3 | Modern IndexedDB wrapper, actively maintained |
| html2canvas | 1.0.0-rc.7 (2020 RC) | 1.4.1 (2022 stable) | Updated; future status depends on community feedback |

These changes will ship in the next TMS release. If you encounter any regressions with session storage, tab history, or screenshot previews after updating, please [open an issue on GitHub](https://github.com/gioxx/MarvellousSuspender/issues).

Thank you for using TMS, and thank you, as always, for the patience you extend to a small team maintaining this project in their free time.
