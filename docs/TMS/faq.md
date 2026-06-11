---
sidebar_position: 2
title: "FAQ"
description: Frequently Asked Questions about The Marvellous Suspender.
hide_title: true
id: faq
tags:
  - FAQ
  - TMS
  - The Marvellous Suspender
  - Marvellous Codeworks
---

# Frequently Asked Questions

## General

### Is The Marvellous Suspender open source?

**Yes.** The code is [publicly available on GitHub](https://github.com/gioxx/MarvellousSuspender) under the GNU General Public License v2.

### Is TMS compatible with Chromium browsers?

The primary distribution channel is the Chrome Web Store. For Chromium-based browsers, installation and policy support varies by browser. We have active users on **Vivaldi**, **Brave**, and **Microsoft Edge**.

### Is TMS free? Does it collect my data?

TMS is completely free, contains no ads, and collects no user data. Everything stays local to your browser profile. See [Permissions](./permissions) for a full breakdown.

### What happened to The Great Suspender?

The Great Suspender was removed from the Chrome Web Store in February 2021 after ownership changed hands and malicious code was discovered in a later version. TMS was created from a clean fork of the last trusted TGS release (7.1.5) to continue the project under active, open-source maintenance.

---

## Installation and updates

### Where do I install TMS?

From the [Chrome Web Store](https://go.gioxx.org/tgs). If you prefer to load it manually, see [Install from source](./tms-install-from-source).

### What version of Chrome do I need?

TMS 8.x requires **Chrome 110 or later**. The extension uses Manifest V3, which is not available in older Chrome versions.

### TMS showed a "new version available" banner even though I already updated. What gives?

This was a bug in 8.1.0 and 8.1.1, fixed in [8.1.1](../../blog/tms-release-8-1-1) and fully resolved in [8.1.2](../../blog/tms-release-8-1-2). Update to the latest version from the Chrome Web Store.

---

## Using TMS

### Some tabs are never suspended even though they have been inactive for a long time. Why?

Several settings can prevent a tab from being suspended automatically:

- The tab is **pinned** and "Don't suspend pinned tabs" is enabled
- The tab is **playing audio**
- The tab is the **active (focused) tab** in its window
- The tab contains **unsaved form data**
- The tab's URL matches an entry in your **whitelist**
- The "Suspend automatically after" timer is set to **Never**
- The device is connected to power and "Only suspend on battery" is enabled
- The device is offline and "Only suspend when connected" is enabled

### A tab I was working on got suspended unexpectedly. How do I prevent this?

The fastest options:
- **Pin the tab** — pinned tabs are excluded from auto-suspension by default.
- **Right-click the tab → TMS → Pause** — pauses auto-suspension for that tab until the next reload.
- **Add the URL to the whitelist** in Settings → Suspend → Never suspend.

### I lost tabs after a browser restart. Can I recover them?

See the [guide for recovering lost tabs](https://github.com/deanoemcke/thegreatsuspender/issues/526) from the original TGS project — the recovery steps still apply.

If you lost tabs that were inside **Chrome Tab Groups** after a Chrome 149 update, see the [dedicated post on this bug](../../blog/tms-tab-groups-chrome-149-bug).

### Can I import sessions from The Great Suspender?

**Yes.** Open the TMS Session Management page (extension popup → Session Manager icon) and use the **Import** function to load a session file exported from TGS.

---

## Permissions and privacy

### Why does TMS need access to all websites (`http://*/*`)?

This is required by Chrome's `scripting` API, which TMS uses to detect unsaved form data and read scroll positions before suspending. Without host permissions, these content scripts cannot run. The permission does not give TMS the ability to read or transmit your browsing data — the full explanation is on the [Permissions](./permissions) page.

### Why does TMS need access to my browsing history?

Only to remove suspended-tab URLs (`chrome-extension://…`) from your history when you restore a tab, so those internal pages don't pollute your history. TMS never reads, uploads, or stores your history.

---

## Contributing and localization

### How can I contribute?

Submit pull requests or bug reports on [GitHub](https://github.com/gioxx/MarvellousSuspender). For new features, open an issue first to discuss the approach before writing code.

### How can I translate TMS into my language?

Translations are managed on [Crowdin](https://crowdin.com/project/tms). If your language is not listed, open a [feature request](https://github.com/gioxx/MarvellousSuspender/issues/) to have it added.
