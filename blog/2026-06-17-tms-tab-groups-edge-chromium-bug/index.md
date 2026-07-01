---
slug: tms-tab-groups-edge-chromium-bug
title: "TMS & Microsoft Edge: the Chromium tab group regression is hitting Edge users too"
description: "The same Chromium regression that broke suspended tabs inside tab groups on Chrome 149 is now causing issues for Microsoft Edge users as well. Here is what we know and what we are doing about it."
date: 2026-06-17T00:00:00+01:00
authors: [gioxx]
tags: [bug, news, tms, announcement]
---

If you are using **Microsoft Edge** and noticed that your suspended tabs inside **tab groups** disappear or turn into blank New Tab pages after a browser restart, you are running into the same Chromium-level regression that [first appeared in Chrome 149](/blog/tms-tab-groups-chrome-149-bug) — and it is now reaching Edge users too.

<img src="/img/suspendy-guy-oops.webp" alt="Suspendy Guy is not happy about this" style={{float: 'right', margin: '0 0 1rem 1.5rem', width: '180px'}} />

## What happened

Microsoft Edge is built on the Chromium engine, which means it inherits browser-level changes from the upstream Chromium project — including regressions. The change introduced around Chromium 149 that broke the tab group restore behavior for suspended tabs is now making its way into Edge builds.

As a result, Edge users are experiencing the same symptoms Chrome users saw earlier:

- Suspended tabs **inside tab groups** are silently discarded when the browser restarts.
- Tabs **outside tab groups** are not affected and restore correctly.
- The suspended tab URL (`chrome-extension://…` / `extension://…`) is apparently filtered out during session restore when inside a group.

This is tracked in the dedicated GitHub issue **[#374](https://github.com/gioxx/MarvellousSuspender/issues/374)**, opened specifically for Edge. Issue **[#369](https://github.com/gioxx/MarvellousSuspender/issues/369)** — the original Chrome report — has also been reopened because of these lingering effects across the Chromium ecosystem.

## Current status

To be clear about where things stand right now:

- The **browser-side Chromium fix** is [under review](https://chromium-review.googlesource.com/c/chromium/src/+/7933990) but has **not yet landed in Chrome's stable channel** — Chrome 149.0.7827.156 is still affected. The fix is expected sometime this weekend or early next week.
- **Edge will take even longer**, as it follows its own release schedule on top of Chromium's.
- **TMS 8.1.4** addressed the issue for Chrome users at the extension level, but some edge cases are still being investigated (see [#369](https://github.com/gioxx/MarvellousSuspender/issues/369)).
- **TMS 8.1.5** is in active development and specifically targets the Edge regression. A fix has already been tested and looks solid — we expect a release candidate to be ready very soon.

We are not waiting for the browser vendors to ship their fix. We are shipping our own.

:::note[This is not TMS's fault]
We want to be very clear: **this regression was introduced by a change in the Chromium engine**, not by anything TMS did. We are nonetheless doing everything we can to protect your tabs while the browser-side fix works its way through the release pipeline. We are sorry you are caught in the middle of this.
:::

## Temporary workaround

If you lost tabs, the manual recovery steps still apply:

1. Open the tab group that now shows blank New Tab pages.
2. For each empty tab, click the **browser Back button** (top-left arrow) once.
3. The original suspended tab page should reappear.

:::tip[Preventing further losses in the meantime]
Until TMS 8.1.5 is available, consider **unsuspending tabs before restarting** the browser, or temporarily moving important tabs **out of tab groups**.
:::

## What we are doing about it

- **TMS 8.1.5** is coming, with a targeted fix for Edge. Follow [PR #376](https://github.com/gioxx/MarvellousSuspender/pull/376) for progress.
- We are tracking the Edge-specific report in **[issue #374](https://github.com/gioxx/MarvellousSuspender/issues/374)** — follow it for real-time updates.
- Issue **[#369](https://github.com/gioxx/MarvellousSuspender/issues/369)** has been reopened to track lingering issues for Chrome users on TMS 8.1.4 as well.
- The upstream Chromium fix ([chromium-review.googlesource.com](https://chromium-review.googlesource.com/c/chromium/src/+/7933990)) will eventually reach Edge too, but we are not relying on that timeline.

We know how frustrating this is, especially after Chrome users already went through it. Thank you for your patience.

## References / Links

- [TMS & Chrome 149: the original post](/blog/tms-tab-groups-chrome-149-bug)
- [GitHub issue #374 – Edge-specific tab group regression](https://github.com/gioxx/MarvellousSuspender/issues/374)
- [GitHub issue #369 – Original Chrome 149 report (reopened)](https://github.com/gioxx/MarvellousSuspender/issues/369)
- [PR #376 – TMS 8.1.5 Edge fix](https://github.com/gioxx/MarvellousSuspender/pull/376)
- https://chromium-review.googlesource.com/c/chromium/src/+/7933990
