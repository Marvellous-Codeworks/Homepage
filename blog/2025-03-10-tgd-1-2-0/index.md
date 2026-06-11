---
slug: tgd-release-1-2-0
title: "The Great-er Tab Discarder 1.2.0"
date: 2025-03-10T13:51:39Z
authors: [rkodey]
tags: [release, tgd]
---

A round of fixes and a new migration source: Tab Suspender's `park.html` tabs can now be imported, and several popup/context-menu actions that had quietly broken are working again.

## What's changed

- **New:** Migrate `park.html` tabs from **Tab Suspender** — one more extension you can leave behind cleanly
- **Fixed:** "Pause discarding this tab" (previously "Don't discard this tab for now") — the action was not working; also renamed to better reflect what it actually does
- **Fixed:** Several popup and context-menu actions that had stopped working after the Manifest V3 rewrite — options storage code was largely rewritten to address the root cause
- **New:** Tab Groups are now optionally displayed on the Profiler page

---

*Full changelog on GitHub: [v1.2.0 release](https://github.com/rkodey/the-great-er-discarder-er/releases/tag/v1.2.0)*
