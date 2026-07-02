---
sidebar_position: 3
title: "Backup & Sync"
description: Complete reference for TMS's automatic session backup, multi-device Google Drive sync, restore, and settings backup.
tags:
  - TMS
  - The Marvellous Suspender
  - backup
  - Google Drive
  - sync
---

# Backup & Sync

Open the Backup page from the extension popup or from **Backup** in the left sidebar (shown on every extension page). Not available in Incognito windows.

This page covers three independent features: **automatic session backup**, **restoring a session from a backup file**, and **backing up/restoring your TMS settings**. All three are optional — TMS works fully without ever touching this page, since it also keeps its own [session history](./session-management) locally.

---

## Automatic session backup

### What gets backed up
On each run, TMS backs up your **current session**: every open window, its tabs (original URLs, not the internal suspended-page URL) and Chrome Tab Group assignments — the same data you'd get from an [Export](./session-management#export) in Session Management, just automated and written to a file.

### Enable automatic backup
Toggle **Enable automatic backup**. Once enabled, four settings become available:

| Setting | Description |
|---|---|
| **Device name** *(optional)* | A friendly label for this installation, e.g. "MacBook" or "Work PC". Shown as the group heading when restoring backups from a machine with more than one device. If left empty, the device's internal ID is used instead. |
| **Backup interval** | How often TMS runs a backup: every 15 minutes, 30 minutes, 1, 2, 4, 8 hours, or once a day at a chosen time. |
| **Backup destination** | **Local** (saved to your Downloads folder) or **Google Drive** (see below). |
| **Max backups per device** | How many backup files to keep before older ones are automatically deleted. Default 10, configurable from 2 to 50. |

Click **Backup now** at any time to run a backup immediately, independent of the schedule. To prevent accidental spam, the button (and the "Save settings to Drive" button) is disabled for 30 seconds after each run — a countdown in the status bar shows when it re-enables.

If a backup produces an empty result (no open windows/tabs to save), TMS silently skips it — no empty backup files are created.

### Local backups
Files are written to `Downloads/tms-backups/tms-session-{deviceId}-{timestamp}.json`. The `{deviceId}` is a random 8-character identifier generated once per browser installation and stored locally — it exists purely so that two browsers writing to the same Downloads folder (e.g. Chrome and Brave on the same machine) never overwrite each other's files. Rotation keeps only the newest **Max backups per device** files for *this* installation.

### Google Drive
Click **Connect** under Drive settings to sign in with your Google account (a standard Google OAuth consent screen). TMS requests only the narrow `drive.appdata` scope — see [Permissions](../permissions#new-in-9x-downloads-identity--google-drive) for what that does and does not allow. Once connected you'll see the connected account and the destination folder shown on the page.

Backups on Drive live in a hidden, app-only folder (`appDataFolder`) that never appears in your regular Google Drive file list — this is also why there is no "open in Drive" link for it. Filenames follow the same `tms-session-{deviceId}-{timestamp}.json` pattern as local backups.

#### Multi-device rotation
If you use TMS on more than one machine with the same Google account, each device's backups are rotated **independently** — a lightweight session synced from a laptop with three tabs open will never push out backups from your primary desktop's 40-tab session. This works via a small per-device registry file (`tms-device-{deviceId}.json`) that TMS keeps up to date with the device's friendly name and the time it last backed up.

#### Disconnecting
The **Disconnect** button revokes the OAuth token (`chrome.identity.removeCachedAuthToken` + a call to Google's token-revocation endpoint). Existing backup files on Drive are **not** deleted — only the connection from this browser is removed.

#### If Drive authentication fails
If a scheduled Drive backup fails because the connection expired or was revoked elsewhere, TMS shows a small red badge on the toolbar icon and a banner in the popup. Clicking the banner opens this page so you can reconnect.

### Switching destination from Drive to Local
If you switch the destination from **Google Drive** to **Local**, a dialog offers to import your most recent Drive backup directly into [Saved sessions](./session-management#saved-sessions) — a safety net so you don't lose access to that data just because you stopped using Drive. If Drive was never connected, or has no backups, this dialog is skipped.

---

## Restore from backup

A separate section below the backup settings, independent of whether automatic backup is currently enabled.

### From a local file
Click **Restore from file**, pick a `tms-session-*.json` file (from this machine's Downloads or copied from anywhere else), and TMS imports it as a new entry in [Saved sessions](./session-management#saved-sessions), auto-named from its timestamp (e.g. "Backup 2026-06-24 09:30"). Open Session Management to actually reopen the tabs.

### From Google Drive
Shown only when Drive is connected. The dropdown lists every backup found in your Drive `appDataFolder`, grouped by device name (an `optgroup` per device, plus a "Legacy backups" group for files created before the multi-device format existed). Pick one and click **Import** — same outcome as the local flow: it lands in Saved sessions.

### Browsing/downloading raw Drive files
A collapsible **Drive backup files** panel lists every backup on Drive with its date and size, numbered sequentially. Each row offers:
- **Download** — saves the raw `.json` to your local Downloads folder without importing it
- **Delete** — permanently removes that one backup file from Drive, after a confirmation prompt

---

## Settings backup

Separate from session backup — this saves your TMS *configuration* (all the toggles in [Settings](./settings), the never-suspend list, etc.), not your open tabs.

### Local
- **Export** downloads your current settings as a `.json` file.
- **Import** loads a previously exported settings file and applies it (after confirmation).

### Google Drive
Shown only when Drive is connected.
- **Save settings to Drive** uploads `tms-settings.json` to the same hidden `appDataFolder`. If a settings backup already exists, you're asked to confirm overwriting it — and TMS also keeps one extra safety copy (`tms-settings-prev.json`) of whatever was there before, so a mistaken overwrite is still recoverable.
- **Restore settings from Drive** downloads and applies the current `tms-settings.json`, after confirmation.

The date of the last Drive settings backup is shown next to the section title once one exists.

---

## Related

- [Session management](./session-management) — TMS's always-on local session history, independent of this page
- [Permissions](../permissions#new-in-9x-downloads-identity--google-drive) — exactly what the `downloads` and `identity` permissions and the `drive.appdata` OAuth scope allow
- [Diagnostic page](./diagnostic-page) — shows this device's backup ID and name for troubleshooting
