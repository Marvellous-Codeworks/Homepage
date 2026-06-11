---
slug: tgd-release-1-3-0
title: "The Great-er Tab Discarder 1.3.0 — Suspending tabs"
date: 2025-04-27T19:25:17Z
authors: [rkodey]
tags: [release, tgd]
---

The biggest feature addition in TGD's history: **Suspending tabs** is now a first-class option alongside Discarding. If you've been using TMS alongside TGD, you may find you no longer need both.

## What's changed

### Tab Suspension

TGD can now **Suspend** tabs in addition to Discarding them. Suspending keeps the tab visible with its title and favicon while freeing memory — the difference from Discarding is that the tab shows a dedicated suspended page rather than being silently unloaded by the browser.

- Suspend individual tabs from the extension popup or via keyboard shortcuts
- Switch between automatic Suspending and Discarding in Settings — you choose which behaviour applies to idle tabs

### Customizable suspended tab titles

Suspended tabs can now display a custom **title prefix** to distinguish them visually at a glance. Example prefixes: `💤` `🔴` `🟡` — plus a full range of color options.

### Improved tab migration

The migration UI has been upgraded: you can now view and individually select which eligible tabs to Migrate or Convert, rather than migrating everything at once.

### Tiny Suspender support

`suspend.html` tabs from **Tiny Suspender** can now be migrated to TGD.

### Fixes

- Tab migration logic has been improved to handle different suspended-tab URL formats more robustly, preventing migration loops.

---

*Full changelog on GitHub: [v1.3.0 release](https://github.com/rkodey/the-great-er-discarder-er/releases/tag/v1.3.0)*
