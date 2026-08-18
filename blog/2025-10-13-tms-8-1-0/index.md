---
slug: tms-release-8-1-0
title: "The Marvellous Suspender 8.1.0 - Tab Groups, automatic theme, and more"
date: 2025-10-13T08:15:23+02:00
authors: [gioxx, rkodey]
tags: [release, tms]
---

TMS 8.1.0 is a significant feature release. Tab Groups are now a first-class citizen, favicons are more reliable, and the suspended tab page can now follow your OS theme automatically.

{/* truncate */}

## What's new

### Tab Group support
TMS will now **save and restore your Tab Groups** across version upgrades and session save/restore operations. Groups are preserved with their names and colors. This was the most requested feature since the MV3 rewrite.

### Automatic theme
A new **System** option has been added to the theme selector in Settings → General. When selected, the suspended tab page follows your operating system's light/dark preference automatically. The existing Light and Dark options remain.

### More suspend intervals
The "Suspend automatically after" dropdown now includes additional minute-level options, giving more fine-grained control over how quickly inactive tabs are suspended.

### Favicon reliability
Several improvements to favicon fetching and caching make the icon shown on suspended tab pages more consistent, especially in Chromium-based browsers like Vivaldi.

### Session Manager shortcut
A dedicated quick-access button to the Session Management page has been added to the extension popup, so you can reach your saved sessions without opening the full settings.

## Other fixes and changes
- Removed `cookies` permission (no longer needed)
- Fixed `TypeError: undefined` crash in tab queue handling
- Removed leftover `console.log` from the content script
- Added extension icon images to `web_accessible_resources` for Vivaldi compatibility
- Various Crowdin localization updates

---

*Full changelog on GitHub: [v8.1.0 release](https://github.com/gioxx/MarvellousSuspender/releases/tag/v8.1.0)*
