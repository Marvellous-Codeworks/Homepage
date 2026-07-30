---
sidebar_position: 3
title: "Permissions"
description: What permissions The Marvellous Suspender requests and why each one is needed.
tags:
  - TMS
  - The Marvellous Suspender
  - permissions
  - privacy
---

# Permissions

TMS requests only the permissions it genuinely needs to function. This page explains what each permission does and why it is required.

:::info[Current version]
The permission list below reflects TMS **9.x** (Manifest V3). See the [legacy permissions](#legacy-permissions-pre-800) section for what changed compared to 7.x, and the [changes since 8.x](#new-in-9x-downloads-identity--google-drive) section for what TMS 9 adds on top of 8.x.
:::

---

## Current permissions (v9.x)

### `tabs`
Grants access to the list of open tabs and their properties (URL, title, active state, pinned state, group membership). This is the core permission that makes suspension possible. Without it, TMS cannot read or manipulate tabs.

### `storage` + `unlimitedStorage`
Used to persist your settings, the never-suspend list, favicon cache, and session data. `unlimitedStorage` removes the default 5 MB cap so that large sessions with many tabs can be saved reliably.

### `history`
When a tab is unsuspended, TMS removes the suspended-page URL from the browser history so you don't see `chrome-extension://…` entries in your history after restoring tabs.

### `contextMenus`
Adds TMS commands to the right-click context menu on tabs (suspend, unsuspend, pause, never-suspend list). This permission is optional, you can disable the context menu entries in **Settings → General**.

### `alarms`
Manifest V3 extensions cannot use `setTimeout` reliably across service worker restarts. `alarms` provides the scheduling mechanism that TMS uses to check for tabs that have exceeded their configured inactivity timeout, to run the [automatic backup schedule](./pages/backup-sync), and to periodically refresh the [News](./pages/news-feed) feed.

### `favicon`
Reads the favicon of the page being suspended so it can be displayed on the suspended tab page. This replaces the older (deprecated) `chrome://favicon/*` host permission.

### `scripting`
Allows TMS to run scripts in the context of web pages. Used to:
- Detect unsaved form data before suspending
- Read and store the page's scroll position so it can be restored when you unsuspend

### `tabGroups`
Grants access to Chrome's Tab Groups API. Used to save and restore tab group assignments (name, color, collapsed state) when exporting/importing sessions, restoring backups, or upgrading the extension.

### `downloads`
Used by the [Backup & Sync](./pages/backup-sync) feature to save session backup files (`tms-session-*.json`) to a `tms-backups/` subfolder inside your Downloads folder when the backup destination is set to **Local**, and to track/rotate those files so old backups are cleaned up automatically. TMS never reads the contents of your Downloads folder beyond the files it wrote itself.

### `identity`
Used exclusively by the optional [Google Drive backup destination](./pages/backup-sync#google-drive). It lets TMS obtain an OAuth token via `chrome.identity.getAuthToken()` to authenticate with your Google account. TMS never sees your Google password, the token exchange is handled entirely by Chrome.

### Host permissions (`http://*/*`, `https://*/*`)
Required by the `scripting` permission, Chrome enforces that host permissions must be declared for any page where content scripts will run.

### OAuth scope: `drive.appdata`
Declared in `manifest.json` under `oauth2.scopes`, this is not a Chrome permission but a Google API scope requested when you connect Google Drive. It grants access **only** to a hidden, app-specific folder (`appDataFolder`) that is invisible in the regular Google Drive UI and inaccessible to any other app. TMS cannot see, list, or touch any other file in your Drive. Because `drive.appdata` is a narrow, non-sensitive scope, connecting it does not require Google's OAuth verification process, any Google account can use it without restriction.

---

## New in 9.x: downloads, identity & Google Drive

TMS 9 introduces optional multi-device session backup (see [Backup & Sync](./pages/backup-sync) for full details). This is the only functional area in 9.x that requests new permissions over 8.x:

| Permission / scope | Added for |
|---|---|
| `downloads` | Writing and rotating local backup files in `tms-backups/` |
| `identity` | Authenticating with Google Drive (OAuth token only, no password access) |
| `drive.appdata` (OAuth scope) | Storing backup files in a private, hidden Drive folder |

Both `downloads` and `identity` are declared in the manifest but only become *active* once you enable automatic backups in **Backup & Sync**. If you never enable that feature, TMS requests no Drive authentication and performs no downloads.

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
| `downloads` | 🆕 Added in 9.x | Local session backups |
| `identity` | 🆕 Added in 9.x | Google Drive authentication (backup destination) |

---

## Privacy

TMS does not collect, transmit, or sell any user data. All storage (settings, session data, favicon cache) is local to your browser profile. The optional Settings Sync feature uses Chrome's built-in sync mechanism and is subject to Google's privacy policy, nothing passes through Marvellous Codeworks servers.

The optional [Google Drive backup destination](./pages/backup-sync#google-drive) uploads your session backups directly from your browser to the hidden `appDataFolder` in your own Google Drive, using the narrow `drive.appdata` OAuth scope. Backup files never pass through any Marvellous Codeworks server, the only two parties involved are your browser and Google's Drive API. You can revoke access at any time from the **Backup & Sync** page or from your [Google Account permissions](https://myaccount.google.com/permissions).

The source code is [publicly available on GitHub](https://github.com/gioxx/MarvellousSuspender) for independent review.
