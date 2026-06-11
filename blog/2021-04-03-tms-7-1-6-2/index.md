---
slug: tms-release-7-1-6-2
title: "The Marvellous Suspender 7.1.6.2 — Localizations, privacy improvements, and more"
date: 2021-04-03T11:04:53+02:00
authors: [gioxx]
tags: [release, tms]
---

Version 7.1.6.2 brings back multilingual support and addresses a series of issues raised by the community since the initial launch.

## What's changed

- **Reduced permissions** — The set of required permissions has been trimmed. Because this change affects the extension manifest, users need to reinstall TMS to benefit from the smaller permission footprint.
- **Analytics removed** — All analytics tracking code has been stripped out. No data is collected or sent anywhere.
- **Deprecated libraries removed** — Code dependencies that were no longer actively maintained have been dropped.
- **Dark mode improvements** — The suspended tab page now renders more reliably in dark mode.
- **Session scroll fix** — Resolved the issue where a tab would jump back to the top of the page when opened from a saved session.
- **Import from TGS** — You can now import session data saved by the original The Great Suspender extension.
- **Localizations restored** — Multiple languages are back, though some translations are still incomplete. Contributions are welcome via [Crowdin](https://crowdin.com/project/tms).

## ⚠️ Things to be aware of

- **Suspended incognito tabs** are closed without recovery during an extension update, because TMS cannot access private browsing sessions.
- Some users have reported issues with Chrome's **Tab Groups** after updating. The team is aware and investigating.

---

*Full changelog on GitHub: [7.1.6.2 release](https://github.com/gioxx/MarvellousSuspender/releases/tag/7.1.6.2)*
