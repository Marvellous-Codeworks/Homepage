---
slug: tms-release-8-1-1
title: "The Marvellous Suspender 8.1.1 - Update detection fix"
date: 2025-10-20T14:53:38+02:00
authors: [gioxx, rkodey]
tags: [release, tms]
---

A focused patch release that fixes the annoying "new version available" banner showing up repeatedly even after TMS was already up to date.

{/* truncate */}

## What's fixed

### Update banner false positives
An issue introduced in 8.1.0 caused TMS to show the "a newer version is available" notification even when the extension had already been updated to the latest version. This has been resolved: the banner now correctly compares the installed version against the latest release and only appears when an actual update is available.

## Other changes
- Additional internal fixes found during the update-detection review
- Updated package dependencies and ESLint rules

---

*Full changelog on GitHub: [v8.1.1 release](https://github.com/gioxx/MarvellousSuspender/releases/tag/v8.1.1)*
