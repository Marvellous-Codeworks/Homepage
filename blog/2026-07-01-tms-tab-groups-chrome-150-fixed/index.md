---
slug: tms-tab-groups-chrome-150-fixed
title: "Chrome 150 fixes the Tab Groups bug — and here is what changed in TMS"
description: "Chrome 150.0.7871.47 ships the browser-side fix for the tab group restore regression that broke suspended tabs since version 149. We removed the TMS startup workarounds — but kept the recovery logic where it matters most."
date: 2026-07-01T00:00:00+01:00
authors: [gioxx]
tags: [bug, news, tms, announcement, road-to-tms9]
---

When Chrome 149 introduced a regression that silently discarded suspended tabs inside tab groups on every browser restart, TMS shipped a workaround in [version 8.1.4](/blog/tms-tab-groups-chrome-149-bug). When the same regression reached Microsoft Edge, [we addressed that too](/blog/tms-tab-groups-edge-chromium-bug). We knew from the start that these were stopgap measures — the right fix had to come from the browser itself.

It is now here. **Chrome 150.0.7871.47** ships the browser-side patch for [crbug.com/522338670](https://crbug.com/522338670). Tab groups restore correctly without any intervention from TMS. We have verified this with a clean restart session and multiple group configurations, and everything behaves as expected.

Here is what that means for TMS, and what we decided to do with the workaround code.

{/* truncate */}

## What we removed from the startup path

The TMS 8.1.4 workaround lived entirely in the extension's startup sequence. Every time the browser launched, TMS would:

1. Scan all tabs and cache suspended URLs for grouped tabs as Chrome assigned group IDs.
2. Detect grouped suspended tabs that Chrome marked as discarded before the user could click them.
3. Re-create those tabs in-place, restore their group membership, and remove the broken originals.
4. Handle late `onReplaced` events that fired after the startup window closed (the Chrome and Edge variant of the bug).
5. For Brave — which doesn't fire `onReplaced` at all — match broken `chrome://newtab/` grouped tabs against the last saved session by window order and tab index, then recreate them.

With Chrome 150 restoring grouped tabs correctly, all of this runs for nothing on every single startup. Worse, if Chrome and TMS both try to recreate the same tab, the interaction is unpredictable. So we disabled the entire startup path.

The code is still there, commented out in `gsSession.js` and `background.js`, clearly marked with `// DISABLED FOR TESTING: Chrome 150 Tab Groups fix`. If a future Chrome update regresses this behavior, re-enabling it takes minutes.

## What we kept — and where

<img src="/img/suspendy-guy-doctor.webp" alt="Suspendy Guy: Health" style={{float: 'right', margin: '0 0 1rem 1.5rem', width: '180px'}} />

Disabling startup recovery does not mean abandoning users who hit broken grouped tabs. It means moving the recovery to the right place: **the Tab Health page**.

The Tab Health page (`health.html`) is TMS's existing on-demand diagnostic tool. You open it, click Scan Tabs, and TMS checks your suspended tabs for issues — missing favicons, stale cache entries, tabs that haven't fully loaded. It reports what it finds and offers a targeted action to fix it.

We added a new check to this scan: **grouped tabs in broken state**. The scan now detects two failure modes:

- **Chrome / Edge path** — a grouped suspended tab is in a discarded state. This means Chrome started the session restore but did not complete it correctly, leaving the tab with its suspended URL intact but inactive. TMS can re-create the tab in-place, restore its group, and remove the broken copy — without the user having to click anything manually.
- **Brave path** — a grouped tab is showing `chrome://newtab/` instead of any content. Brave does not fire the `onReplaced` events that Chrome and Edge use, so the broken URL is gone. TMS recovers the suspended URL by matching the tab's position (window order and tab index) against the last saved session.

If the scan finds zero broken grouped tabs — which will be the case for every Chrome 150+ user — it shows `0 ✓` and moves on. If it finds any, a **Repair grouped tab(s)** button appears as the first action, above the existing favicon checks, because a structurally broken tab is a more urgent problem than a missing favicon.

The recovery logic itself is identical to what the startup path used. It is just no longer running automatically on every launch.

## Why this split makes sense

The startup workaround had to be aggressive by design: it ran before the user could interact with any tab, because a single click on a broken grouped tab in Chrome's session restore was enough to lose the suspended URL permanently. That aggression was justified when the bug was active. Now that Chrome fixes it natively, running the same code at startup becomes unnecessary noise — and potentially a source of conflicts if Chrome's own restore logic and TMS's recreate logic both fire on the same tab.

Moving recovery to the health page shifts it from "runs automatically every time, no matter what" to "runs when the user explicitly asks." That is the right model for a workaround that is no longer expected to be needed.

The event-driven handlers — the ones that hooked into `onReplaced` and `onUpdated` during the startup window — cannot be replicated outside the startup context, so those remain commented out in the background script. They are not lost; they are preserved exactly where they need to be if we ever want to reactivate them.

## For Brave and Edge users

The browser-side fix shipped in Chrome 150. Brave and Edge follow their own Chromium release schedules, so the patch may arrive at different times for those browsers.

- **Brave users**: the Brave path in the health page recovery remains active and will work on any Brave version. If you restart Brave and notice grouped tabs showing as new tabs, open the Tab Health page and run a scan.
- **Edge users**: Edge 149+ has shown symptoms of the same regression. Once the Chromium 150 patch reaches Edge's stable channel, you will be in the same position as Chrome users today. Until then, the health page recovery is available if you need it.

We hope the other Chromium-based browsers catch up with this fix quickly. But if they don't, once **TMS 9** is available you will be able to rely on the new Tab Health page recovery to fix broken grouped tabs on demand, without waiting for a browser-side patch.

## Summary

| What | Before (TMS 8.1.4) | After (TMS + Chrome 150) |
|------|-------------------|--------------------------|
| Chrome grouped tab restore | Broken — TMS fixed at startup | Fixed natively by Chrome 150 |
| Startup workaround | Active on every launch | Disabled (code preserved as comments) |
| Manual recovery | Not available | Tab Health page → Scan Tabs |
| Brave recovery | Active at startup | Tab Health page → Scan Tabs |
| Edge recovery | Active at startup (8.1.5+) | Tab Health page → Scan Tabs |

If you are on Chrome 150 and everything is working: nothing to do. If you ever hit broken grouped tabs again — on any browser — open the Tab Health page and let TMS sort it out.

---

*Related posts: [TMS & Chrome 149: the original bug report](/blog/tms-tab-groups-chrome-149-bug) · [TMS & Microsoft Edge: the Chromium regression hits Edge too](/blog/tms-tab-groups-edge-chromium-bug)*

*GitHub issues: [#369](https://github.com/gioxx/MarvellousSuspender/issues/369) · [#374](https://github.com/gioxx/MarvellousSuspender/issues/374)*
