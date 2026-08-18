---
slug: tms-release-8-0-0-0
title: "The Marvellous Suspender 8.0.0.0 - Manifest V3"
date: 2025-07-28T08:00:48+02:00
authors: [gioxx]
tags: [release, tms]
---

The biggest TMS update in years: a complete rewrite to Manifest V3. After a long wait and a lot of work by the community, the extension is now fully compatible with the modern Chrome extension platform.

{/* truncate */}

## What's changed

### Manifest V3 migration
The entire background processing layer has been rewritten as a **service worker** (`background.js`), replacing the persistent background page required by Manifest V2. This brings TMS in line with Google's current extension requirements and ensures continued availability on the Chrome Web Store.

### New and changed permissions
The permission set has been updated to match what Manifest V3 requires and allows:

| Permission | Why |
|---|---|
| `alarms` | Replaces `setTimeout` for scheduling suspension, service workers cannot use timers across restarts |
| `favicon` | Replaces the deprecated `chrome://favicon/*` pattern |
| `scripting` | Replaces content scripts for detecting unsaved forms and scroll position |
| `tabGroups` | Enables saving and restoring tab group assignments |
| `host_permissions` (`http://*/*`, `https://*/*`) | Required for the `scripting` API |

The `cookies` permission has been **removed** (scroll position migration from older versions is no longer needed).

### Other improvements
- Sanity checks added across tab logic to handle edge cases more gracefully
- Tab group data is now included in session recovery storage
- SVG page fix: `document.body` is no longer accessed on SVG tabs, preventing a TypeError
- Various localization updates via Crowdin

### Minimum Chrome version
TMS 8.x requires **Chrome 110 or later**.

---

*Full changelog on GitHub: [8.0.0.0 release](https://github.com/gioxx/MarvellousSuspender/releases/tag/8.0.0.0)*
