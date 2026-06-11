---
slug: tgd-release-1-2-2
title: "The Great-er Tab Discarder 1.2.2"
date: 2025-03-18T03:44:07Z
authors: [rkodey]
tags: [release, tgd]
---

A targeted fix for a regression in "Discard at startup" that caused tabs to be discarded during browser idle worker restarts — not just on actual browser startup.

## What's changed

- **Fixed:** "Discard at startup" (again) — the previous fix in 1.2.1 did not cover the case where Chrome restarts idle service workers in the background. Tabs were being discarded unexpectedly as a result.

---

*Full changelog on GitHub: [v1.2.2 release](https://github.com/rkodey/the-great-er-discarder-er/releases/tag/v1.2.2)*
