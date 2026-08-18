---
slug: tgd-release-1-4-0
title: "The Great-er Tab Discarder 1.4.0"
date: 2025-06-03T04:12:02Z
authors: [rkodey]
tags: [release, tgd]
---

A polished release focused on the suspended-tab experience: favicon dimming, flexible restore options, popup improvements, and automatic options saving, plus a fix for suspended tabs that Chrome was blocking on direct load.

{/* truncate */}

## What's changed

### Suspended tab options

Three new options for how suspended tabs look and behave:

- **Favicon dimming**: the favicon of a suspended tab is visually dimmed to distinguish it from active tabs at a glance
- **Restore by clicking anywhere on the page**: no need to click a specific button; clicking anywhere on the suspended page resumes it
- **Restore by Reload**: reloading the tab (keyboard shortcut or browser button) unsuspends it

### Bug fixes

- **Fixed:** Suspended tabs being blocked by Chrome when opened directly. For example, by a session restore tool
- **Fixed:** Suspended tab favicons not loading on initial browser launch. Note: favicons must be in the browser cache to display correctly until a local favicon cache is implemented in a future release.

### Popup improvements

The main extension popup now shows more at a glance:

- Count of **Discarded** and **Suspended** tabs currently open
- Assigned **keyboard shortcuts** for quick reference

### Options saving

Options are now **saved automatically** as you change them. The Save and Cancel buttons have been removed.

### Internals

Background code now uses ES modules for easier future integration and maintenance.

---

*Full changelog on GitHub: [v1.4.0 release](https://github.com/rkodey/the-great-er-discarder-er/releases/tag/v1.4.0)*
