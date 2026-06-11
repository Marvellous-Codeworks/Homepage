---
sidebar_position: 6
title: "Permissions"
description: What permissions The Marvellous Suspender requests and why each one is needed.
id: tms-permissions
tags:
  - TMS
  - The Marvellous Suspender
  - permissions
  - privacy
---

# Permissions

TMS requests only the permissions it genuinely needs to function. This page explains what each permission does and why it is required.

:::info Current version
The permission list below reflects TMS **8.x** (Manifest V3). See the [legacy permissions](#legacy-permissions-pre-800) section for what changed compared to 7.x.
:::

---

## Current permissions (v8.x)

### `tabs`
Grants access to the list of open tabs and their properties (URL, title, active state, pinned state, group membership). This is the core permission that makes suspension possible — without it, TMS cannot read or manipulate tabs.

### `storage` + `unlimitedStorage`
Used to persist your settings, the whitelist, favicon cache, and session data. `unlimitedStorage` removes the default 5 MB cap so that large sessions with many tabs can be saved reliably.

### `history`
When a tab is unsuspended, TMS removes the suspended-page URL from the browser history so you don't see `chrome-extension://…` entries in your history after restoring tabs.

### `contextMenus`
Adds TMS commands to the right-click context menu on tabs (suspend, unsuspend, pause, whitelist). This permission is optional — you can disable the context menu entries in **Settings → General**.

### `alarms`
Manifest V3 extensions cannot use `setTimeout` reliably across service worker restarts. `alarms` provides the scheduling mechanism that TMS uses to check for tabs that have exceeded their configured inactivity timeout.

### `favicon`
Reads the favicon of the page being suspended so it can be displayed on the suspended tab page. This replaces the older (deprecated) `chrome://favicon/*` host permission.

### `scripting`
Allows TMS to run scripts in the context of web pages. Used to:
- Detect unsaved form data before suspending
- Read and store the page's scroll position so it can be restored when you unsuspend

### `tabGroups`
Grants access to Chrome's Tab Groups API. Used to save and restore tab group assignments (name, color, collapsed state) when exporting/importing sessions or upgrading the extension.

### Host permissions (`http://*/*`, `https://*/*`)
Required by the `scripting` permission — Chrome enforces that host permissions must be declared for any page where content scripts will run.

---

## Legacy permissions (pre-8.0.0)

TMS 7.x (Manifest V2) used a different permission model:

| Permission | Status in v8 | Notes |
|---|---|---|
| `tabs` | ✅ Kept | Same purpose |
| `storage` / `unlimitedStorage` | ✅ Kept | Same purpose |
| `history` | ✅ Kept | Same purpose |
| `contextMenus` | ✅ Kept | Same purpose |
| `cookies` | ❌ Removed | Was used to migrate scroll position from even older TGS versions. No longer needed |
| `content_scripts` | ❌ Removed | Replaced by the `scripting` API |
| `alarms` | 🆕 Added | Required for MV3 service worker scheduling |
| `favicon` | 🆕 Added | Replaces deprecated `chrome://favicon/*` |
| `scripting` | 🆕 Added | Replaces content scripts |
| `tabGroups` | 🆕 Added | New feature: Tab Group support |

---

## Privacy

TMS does not collect, transmit, or sell any user data. All storage (settings, session data, favicon cache) is local to your browser profile. The optional Settings Sync feature uses Chrome's built-in sync mechanism and is subject to Google's privacy policy — nothing passes through Marvellous Codeworks servers.

The source code is [publicly available on GitHub](https://github.com/gioxx/MarvellousSuspender) for independent review.
