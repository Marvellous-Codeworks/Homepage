---
slug: tms-release-8-1-2
title: "The Marvellous Suspender 8.1.2 - Session export, watermark, and UX fixes"
date: 2025-11-19T15:21:59+01:00
authors: [gioxx, rkodey]
tags: [release, tms]
---

A maintenance release with a handful of quality-of-life improvements to the session management page, the suspended tab watermark, and the update banner.

{/* truncate */}

## What's new and fixed

### Session export filename includes the date
When you export your session from the Session Management page, the downloaded file now includes the current date in its name. This makes it much easier to keep track of multiple backups without manually renaming files.

### Suspended tab version watermark
The suspended tab page now displays the TMS version number as a subtle watermark. This small addition makes it easier to identify which version was running when users share screenshots in bug reports.

### Update banner is now clickable
The "a new version is available" notification banner is now interactive, clicking it takes you directly to the release page instead of requiring you to navigate there manually.

### Session page scroll fix
Links within the Session Management page no longer cause the page to jump back to the top when clicked.

### Whitelist test button refactored
The "Test whitelist" function has been cleaned up internally for more reliable pattern matching.

## Other changes
- Localization updates via Crowdin
- Dependency bump: `js-yaml` patched for a security advisory

---

*Full changelog on GitHub: [v8.1.2 release](https://github.com/gioxx/MarvellousSuspender/releases/tag/v8.1.2)*
