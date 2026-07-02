---
sidebar_position: 1
title: "Settings reference"
description: Complete reference for all settings available in The Marvellous Suspender.
tags:
  - TMS
  - The Marvellous Suspender
  - settings
  - configuration
---

# Settings reference

Open the TMS settings page from the extension popup or by navigating to `chrome://extensions/` → TMS → **Details** → **Extension options**.

This page (`options.html`) covers general behavior, automatic suspension and the suspended-tab page. Automatic backups and session restore now live on their own dedicated pages — see [Backup & Sync](./backup-sync) and [Session Management](./session-management).

---

## General

### Language
Controls the language used throughout the extension UI. Set to **System** (default) to follow your browser's locale, or pick a specific language from the list.

TMS is already available in more than 15 languages, managed and kept up to date via [Crowdin](https://crowdin.com/project/tms) — see the dropdown in Settings for the current full list.

### Theme
Controls the appearance of the suspended tab page.

| Value | Behavior |
|---|---|
| **System** (default) | Follows your OS light/dark preference automatically |
| **Light** | Always uses the light theme |
| **Dark** | Always uses the dark theme |

### Enable context menu
Adds TMS commands to the browser's right-click context menu on tabs. Disabled in Incognito windows.

### Sync settings across devices
Syncs your TMS configuration via your Google account using Chrome's sync storage. Useful if you use Chrome on multiple computers.

:::note
Sync has a storage size limit. If your never-suspend list is very large, sync may not work reliably. In that case, use [Backup & Sync](./backup-sync#settings-backup) instead — it can save your full settings file to a local file or to Google Drive, with no size restriction.
:::

---

## Suspend

### Suspend automatically after
How long a tab must be inactive before TMS suspends it. Options range from 20 seconds to 2 weeks. Set to **Never** to disable automatic suspension.

### Don't suspend pinned tabs
Pinned tabs are excluded from automatic suspension.

### Don't suspend tabs with unsaved form data
TMS detects whether a tab contains an active form with unsaved input and skips it. Useful for forms that don't auto-save.

### Don't suspend tabs playing audio
Tabs that are currently playing audio (music, video, calls) are excluded.

### Don't suspend the active tab in each window
The currently focused tab in every open window is never suspended automatically.

### Only suspend when connected to the internet
TMS will not suspend tabs when the browser detects no network connection.

### Only suspend when on battery power
Suspension only happens when the device is running on battery, not when plugged in.

### Claim suspended tabs by default
When TMS is updated or reloaded, it automatically takes ownership of any already-suspended tabs it finds. Disable this if you manage multiple suspender extensions and want explicit control.

### Suspend in place of discard (low memory)
When Chrome is about to discard a tab due to memory pressure, TMS intercepts the action and suspends the tab instead (preserving the URL on a TMS page). Discarded tabs are harder to recover than suspended ones.

### Never-suspend list
A list of URL patterns that TMS will never suspend automatically — labeled on the page as "Never suspend tabs with URLs from the following list". One pattern per line. Supports:
- Full URLs: `https://mail.google.com`
- Domain patterns: `google.com` (matches all pages on that domain)
- Regular expressions: `/^https:.*google\.com/`

Use the **Test whitelist** link below the text area to check whether a given URL would be matched, and **Wake whitelisted tabs** to immediately unsuspend any currently-suspended tab in the window that matches an entry you just added.

---

## Suspended Tabs

### Append original URL to suspended tab title
Enabled by default. Appends the original page URL to the browser tab's underlying `document.title` (not the visible text on the suspended page itself) so that Chrome's **Search Tabs** feature (`Ctrl+Shift+A`) can find a suspended tab by typing its hostname, not just its page title.

### Unsuspend automatically when tab is focused
When you switch to a suspended tab, TMS immediately starts loading it without requiring you to click. Convenient if you switch tabs frequently and want seamless restoration.

### Discard tab after suspending
After TMS suspends a tab (converting it to the TMS suspended page), it also tells Chrome to discard the tab from memory. This achieves maximum memory savings but means Chrome must reload the TMS page itself when you switch back to the tab.

### Screen capture on suspended tab page
Controls whether TMS takes a screenshot of the page before suspending it, which is then shown as a preview on the suspended tab page.

| Value | Behavior |
|---|---|
| **Disabled** | No preview image |
| **Visible screen only** | Captures what is currently visible in the viewport |
| **Entire page** | Scrolls and captures the full page content |

### Force screen capture even for tabs with restricted content
By default, TMS skips screen capture for pages that block it (e.g., via CSP or Chrome's internal pages). Enable this to attempt capture anyway. Note: some pages will still produce a blank image.
