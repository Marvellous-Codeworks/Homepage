---
slug: tms-release-8-1-4
title: "The Marvellous Suspender 8.1.4 - Tab group restore fix for Chrome 149"
date: 2026-06-16T00:00:00+01:00
authors: [gioxx, rkodey]
tags: [release, tms]
---

A targeted fix release addressing the tab group restore regression introduced by Chrome 149, where suspended tabs inside tab groups were silently discarded after a browser restart.

{/* truncate */}

## What's fixed

### Suspended tabs inside tab groups restored correctly after restart
Starting with Chrome 149, a change in the browser's session restore engine caused tabs with non-`https://` URLs, including TMS suspended tabs, to be skipped when restoring tab groups. This resulted in blank New Tab pages appearing in place of your suspended tabs after every restart.

TMS 8.1.4 works around the Chrome-side behavior and restores suspended tabs inside tab groups correctly again. Tabs outside tab groups were not affected and continue to work as before.

:::note
If you used the [back-grouped-tabs](https://github.com/Marvellous-Codeworks/back-grouped-tabs) companion extension as a temporary workaround, you can safely remove it now that TMS includes a built-in fix.
:::

---

*Full changelog on GitHub: [v8.1.4 release](https://github.com/gioxx/MarvellousSuspender/releases/tag/v8.1.4)*

*Related: [TMS & Chrome 149: suspended tabs inside tab groups lost after restart](/blog/tms-tab-groups-chrome-149-bug)*
