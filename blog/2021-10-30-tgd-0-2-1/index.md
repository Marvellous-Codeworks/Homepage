---
slug: tgd-release-0-2-1
title: "The Great-er Tab Discarder 0.2.1"
date: 2021-10-30T21:46:31Z
authors: [rkodey]
tags: [release, tgd]
---

A round of quality-of-life improvements and cleanup: a new bulk-discard command, cleaner options layout, and a leaner codebase.

{/* truncate */}

## What's changed

- **New popup command** to discard all eligible tabs based on current options (no force, respects whitelist and other settings)
- **Discard at startup** option now has its own settings group with clearer visibility
- **New option** to enable links to the browser's built-in Discards page (`chrome://discards`)
- Options tab now switches to an existing tab instead of always opening a new one
- Updated HTML layout with heavier font and tweaked styling for readability
- Standardized and formatted HTML and CSS files
- Removed the `time-grunt` dependency
- Removed nag prompts
- General logging cleanup

---

*Full changelog on GitHub: [v0.2.1 release](https://github.com/rkodey/the-great-er-discarder-er/releases/tag/v0.2.1)*
