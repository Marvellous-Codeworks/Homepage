---
slug: tms-tab-groups-chrome-149-bug
title: "TMS & Chrome 149: suspended tabs inside tab groups lost after restart"
description: "If you are using Chrome 149 and noticed that your suspended tabs inside tab groups turn into blank New Tab pages after a browser restart, you are not alone — and it is not your fault."
date: 2026-06-11T00:00:00+01:00
authors: [gioxx]
tags: [bug, news, tms, announcement]
---

:::info
**2026-06-12**
- A companion extension — [back-grouped-tabs](https://github.com/Marvellous-Codeworks/back-grouped-tabs) — is now available as a temporary workaround while a proper fix for the Chrome bug is being developed. See the [new section below](#companion-workaround-back-grouped-tabs) for details.

**2026-06-15**
- **TMS 8.1.4** has been submitted to the Chrome Web Store and is currently **pending review**. This version includes a fix for the tab group restore issue.
- The Chrome team is also working on an official browser-side fix: the patch is under review at [chromium-review.googlesource.com](https://chromium-review.googlesource.com/c/chromium/src/+/7933990). It's a race to see who gets there first!

**2026-06-16**
- **TMS 8.1.4 is now live on the [Chrome Web Store](https://chromewebstore.google.com/detail/the-marvellous-suspender/noogafoofpebimajpfpamcfhoaifemoa)**. The tab group restore issue is fixed — update TMS and you are good to go.
- The **back-grouped-tabs** companion workaround is no longer needed. The repository remains available for anyone who still wants it, but you can safely remove the extension.
:::

If you are using Chrome 149 and noticed that your suspended tabs inside **tab groups** turn into blank New Tab pages after a browser restart, you are not alone — and it is not your fault.

<img src="/img/suspendy-guy-oops.png" alt="Suspendy is not happy about this" style={{float: 'right', margin: '0 0 1rem 1.5rem', width: '180px'}} />

## What happened

Starting from **Chrome 149**, a change in the browser's tab group restore engine broke compatibility with suspended tabs managed by TMS. When Chrome restores a session after a restart, it now skips tabs whose URL does not start with `https://` inside tab groups. Since TMS suspended tabs use an internal `chrome-extension://…` URL, they are silently discarded instead of being restored.

Tabs **outside** tab groups are not affected and restore correctly as before.

The issue was [reported by users](https://github.com/gioxx/MarvellousSuspender/issues/369) shortly after Chrome 149 rolled out and confirmed by the TMS team. A member of the **Chrome development team** has acknowledged the problem and [filed an internal bug](https://crbug.com/522338670) to investigate whether the behavior change was intentional or an unintended side effect.

## Temporary workaround

If you lost tabs, there is a way to recover them without restoring a backup:

1. Open the tab group that now shows blank New Tab pages.
2. For each empty tab, click the **browser Back button** (top-left arrow) once.
3. The original suspended tab page should reappear.

This is tedious if you have many tabs, but it beats losing them permanently.

:::tip Preventing further losses in the meantime
Until a fix is available, consider **unsuspending tabs before restarting** Chrome, or temporarily moving important tabs **out of tab groups**.
:::

## What we are doing about it

- **TMS 8.1.4 is now available on the [Chrome Web Store](https://chromewebstore.google.com/detail/the-marvellous-suspender/noogafoofpebimajpfpamcfhoaifemoa).** It addresses the tab group restore issue directly — suspended tabs inside tab groups will no longer be discarded after a browser restart. Update TMS and the problem goes away.
- The Chrome team also had an [official fix under review](https://chromium-review.googlesource.com/c/chromium/src/+/7933990) on the browser side; TMS shipped the fix first.

We know how frustrating data loss is, and we are sorry you hit this. Thank you for your patience while we sort it out.

## Companion workaround: back-grouped-tabs {#companion-workaround-back-grouped-tabs}

:::success Workaround no longer needed
**TMS 8.1.4 is out and fixes the issue natively.** If you have updated TMS, you can safely remove the back-grouped-tabs companion extension. The repository remains available for anyone who still wants to use it.
:::

While the proper fix was in the works, a small companion extension was made available: **[back-grouped-tabs](https://github.com/Marvellous-Codeworks/back-grouped-tabs)**.

It does one thing: when Chrome restores a session and discards suspended tabs inside tab groups, this extension detects the affected tabs and navigates them back so the suspended page reappears — automatically, without you having to click the Back button on each one.

To install it, clone or download the repository and load it as an unpacked extension in Chrome (`chrome://extensions/` → enable Developer Mode → **Load unpacked**). The README covers everything you need to know.

## References / Links

- https://chromium-review.googlesource.com/c/chromium/src/+/7933990
- https://chromium-review.googlesource.com/c/chromium/src/+/7738373

---

*Follow the original issue on GitHub: [#369 – Suspended tabs inside tab groups are lost after browser restart (Chrome 149)](https://github.com/gioxx/MarvellousSuspender/issues/369)*
