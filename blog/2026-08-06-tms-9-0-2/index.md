---
slug: tms-release-9-0-2
title: "The Marvellous Suspender 9.0.2 - Always-suspend list, Drive OAuth fallback, favicon fix"
description: "9.0.2 ships a new always-suspend list, a Google Drive OAuth fallback for Brave and Vivaldi, and a favicon fix, plus a full triage of the issue tracker and a concrete look at what's next."
date: 2026-08-06T00:00:00+01:00
authors: [gioxx]
tags: [release, tms]
---

TMS 9.0.2 is ready: one new list-based feature and a handful of confirmed bug fixes. It'll be submitted for Chrome Web Store review in a few days, not today, I'm taking a short break first for family time and some mental rest, so bear with the wait. The bigger news is behind the scenes anyway: every open issue on the tracker got triaged into an actual plan.

{/* truncate */}

## What's new

### "Always suspend" list
A new list, right next to the whitelist in Settings, of URLs that always suspend after the normal timeout, even past the protections (pinned, audible, unsaved form input) that would otherwise keep a tab open indefinitely. Useful for something like a background Twitch or YouTube tab left playing audio that you still want suspended on schedule. Same matching rules as the whitelist (plain text or `/regex/`). Manual per-tab pauses and global protections (offline, charging, "never suspend") are still respected, this only overrides the passive automatic ones.

Named "always suspend" rather than "blacklist" to avoid the polarity confusion raised in the original request ([#103](https://github.com/gioxx/MarvellousSuspender/issues/103)). It also picked up its own **"Test list"** and **"Suspend matching tabs now"** buttons, mirroring the whitelist's existing test/wake pair, so you can check what matches or force an immediate suspend instead of waiting for the normal timeout.

Speaking of the whitelist: it's now called the **allowlist** everywhere in the UI (tooltips, popup, all 18 locales). Storage key and internal code are untouched, this was a copy pass, not a rename of the feature.

## What's fixed

### Google Drive "Connect account" on Brave and Vivaldi
`chrome.identity.getAuthToken()` doesn't work on either browser, for different reasons: Brave attaches a custom URI scheme Google's backend rejects outright and shows a raw `Error 400: invalid_request` page; Vivaldi disables Google sign-in entirely, so the callback just never fires and the connect flow hangs with no feedback. TMS now falls back to `chrome.identity.launchWebAuthFlow()`, races the original method against a timeout so a Vivaldi-style hang surfaces as a failure instead of hanging forever, and remembers which method worked per install so later calls skip straight to it ([#420](https://github.com/gioxx/MarvellousSuspender/issues/420)).

### Suspended tabs stuck with the default favicon after a restart
The startup check that repairs favicons and titles only ran from events some Chromium builds (notably Brave) never fire after a normal restart, leaving suspended tabs stuck with the generic icon until clicked. A storage-based sentinel now catches this on every service worker wake instead ([#397](https://github.com/gioxx/MarvellousSuspender/issues/397)). Thanks to @pbc-commits for the investigation and root-cause writeup.

### "Allow access to file URLs" toggle missing
Chrome only shows this toggle when the manifest declares `file://` host access, which TMS never did. Added as an optional host permission, on-demand like `downloads`/`identity`, no access granted until you flip it yourself ([#393](https://github.com/gioxx/MarvellousSuspender/issues/393), [#416](https://github.com/gioxx/MarvellousSuspender/issues/416), [#267](https://github.com/gioxx/MarvellousSuspender/issues/267)).

### Suspended page waited on the hotkey label before becoming clickable
Restoring a suspended tab was gated behind a `chrome.commands.getAll()` call to fetch the shortcut-key label for display, purely cosmetic, but slow enough to make the click handler feel unresponsive. The page now becomes interactive first and fills in the hotkey label after ([#320](https://github.com/gioxx/MarvellousSuspender/issues/320)).

### "Claim by default" option
Shortened the option label and moved its explanation into a tooltip instead of a long parenthetical ([#151](https://github.com/gioxx/MarvellousSuspender/issues/151)), then reworded again after that first pass still left it meaningless without opening the tooltip: it's now "Claim tabs suspended by other extensions", says what it does without requiring a hover.

### Manual backup cooldown had a hole in it
The 30-second cooldown after a manual "Backup now" was only ever enforced as a per-page debounce local to the Backup page's own button. The popup has its own "Backup now" menu item, with no cooldown and no shared state with the page, so triggering from both let you fire off backups back-to-back. The cooldown now lives in `gsBackup.performManualBackup()` itself, tracked in session storage so it's enforced no matter which UI triggers it; the popup shows a live countdown and disables the item if a cooldown from the other surface is already running.

### "Always suspend" list showing a literal "undefined"
Ironic given this ships in the same release that introduced the list: upgrading from an install that predates it left the textarea showing the literal word "undefined" instead of being empty, because settings only got backfilled with new defaults on a brand-new install, not on existing ones. Settings now backfill any missing keys on every load, not just first run.

### Locale drift closed
A source-string edit had quietly broken Crowdin's fuzzy match on 7 strings, reverting them to English across all 16 non-English/Italian locales, on top of a handful of genuinely new keys. Both are fixed and locales are back in sync. Added `scripts/check-locales.js` (`npm run check-locales`) so this kind of drift is caught locally before it ships, not the fix itself, but worth having.

## Also in this release
A handful of smaller things that don't need their own section:

- **Bulk-delete Drive backups per device.** The Backup page already grouped Drive files by device when more than one machine backs up to the same account, but clearing out one device's files meant deleting them one by one. A "Delete all" button next to each device's group heading now handles it in one go, with the same confirm-before-delete modal as single-file deletes.
- **Extension description reworded** to match the tone used everywhere else TMS is described: "Free your memory. Suspend the tabs you don't need, right now."
- **The Backup page now shows which Drive OAuth method is active** for the install (`getAuthToken` vs. the `launchWebAuthFlow` fallback from above), as a quiet second line under the "TMS Backups" folder name, mainly useful for support.

## The bigger job: triaging the whole backlog
9.0.2 was the small part of today's work. The real effort went into going through **every open issue on the tracker**, 56 of them, most untouched for months, and sorting each one into an actual plan instead of a flat list.

The outcome: 31 issues now sit in a concrete milestone (9.0.2, 9.0.3, 9.1.0, 9.2.0, or 10.0.0), scoped by what they actually need, a quick fix, a real feature, or a design spike, rather than by how old they are. The remaining 25 are genuinely unclear: duplicates to merge, reports that need reproduction steps, or requests that need a decision before they can be scoped at all, and they'll get worked through the same way.

## The other side of a release: reviews and inbox
Version 9 and its two bugfix releases were rolled out alongside a redesign, changes to permissions, and a new backup feature, and the reviews posted since then on the Chrome Web Store have made it clear that there are a lot of new features to take in all at once in a single update—and, to be honest, we were somewhat expecting this, though perhaps we hadn't factored in the "*unwarranted hostility*" that is often part of the game in the open-source world (and this is certainly no excuse, because respect, empathy, and tact always come first). It's worth examining them carefully, rather than simply highlighting only the positive aspects (which, fortunately, are there as well).

### "Why does it need all these permissions now?"
This was the loudest thread, a run of 1-star reviews within hours of each other listing the new permission prompt verbatim: *"Read and change all your data on all websites," "Read and change your browsing history on all your signed-in devices," "Manage your downloads," "View and manage your tab groups"*. Read cold, with no context, that's a reasonable thing to be alarmed by. One reviewer put it plainly:

> "Now, the app itself is wonderful, but I am fearful about saying yes to so many permissions. [...] Message to the Devs: please provide an explanatory blog post on why you need so many permissions. I will happily update this to 5* if the reasons are convincing".

The post already exists, [the 9.0 permissions FAQ](/blog/tms9-public-permissions-faq), and explains each permission against the feature that needs it (`downloads` for local backup, `identity` for Drive backup, the broad host permissions for the scripting-based form/scroll detection that predates 9.0). The problem is it was never linked from the Chrome Web Store update notes, so nobody hit it unless they went looking, and one reviewer said as much (*"Looks like all the permissions are legitimate. But in the update notice, I didn't see this link"*). That's on us, not on the reviewers: the explanation being technically correct and effectively invisible is the same as not having written it. The CWS listing will link it directly going forward.

### The generative-image backlash
The new suspended-tab illustration set uses AI-generated art, and the reaction has been unambiguous and consistent, from a 1-star review (*"So now I am forced to see garbage genAI images on every suspended tab?"*), to a Chinese-language review calling the new icon 丑爆了 (bluntly, "hideously ugly"), to a calm, direct email from a long-time user asking us to either revert to the old artwork or commission an actual illustrator, because shipping AI art "will make it appear cheap and rushed to the users who don't see all the code and scripts you designed for it". That last framing is the one worth sitting with: it's not really about the pixels, it's about what the choice signals for a project that otherwise puts real engineering effort into every release. This is going back into discussion, no decision made here, but the signal is too consistent across independent channels to wave off as noise.

:::tip[Can you draw better than an AI?]
If you're reading this and use Photoshop (or any other graphics program, it doesn't matter) every day for a living, why not give us a hand? Neither of us is an illustrator, but we needed to give TMS's graphics a fresh look, so we set out to design a mascot that would be visually appealing. We worked on it with the help of AI and came up with a result we hoped you'd like.

If you think you can do better, please contact us! Send an email to [gioxx@marvellouscode.works](mailto:gioxx@marvellouscode.works) and let's talk about it :-)
:::

### "Stop changing the UI"
A smaller but genuine thread: the redesign changed the suspended-tab screen and, more concretely, removed a state cue some users relied on daily, the toolbar icon used to visibly change when a tab was paused from suspension, now you have to click it to check. One review called this out at length, and re-submitted the same text three times over two days, which reads less like spam and more like someone who really wanted it seen. That one is a legitimate regression report, not a taste complaint, and it's going on the backlog to fix, not just to note.

### Real bugs found in the noise
Sorting the sharp tone from the substance, three reports didn't match anything already tracked and got opened as issues today:

- **[#426](https://github.com/gioxx/MarvellousSuspender/issues/426)**: a user reported the extension's settings page and keyboard shortcuts becoming unavailable entirely after updating, no repro yet, but too specific to dismiss.
- **[#427](https://github.com/gioxx/MarvellousSuspender/issues/427)**: automatic local backup apparently writing outside the configured `tms-backups` folder, with filenames drifting to Chrome's own `download.json`, `download.json (1)`, `(2)`... pattern and the configured file-count limit being ignored.
- **[#428](https://github.com/gioxx/MarvellousSuspender/issues/428)**: a report that recent updates broke Gmail's own delete/move actions, symptoms that don't persist until a manual refresh. Needs isolating, but too precise a description to be a red herring.

A fourth pattern, suspended tabs vanishing without a trace after a crash, showed up again in this batch too, but that one's not new: it matches [#396](https://github.com/gioxx/MarvellousSuspender/issues/396) and [#402](https://github.com/gioxx/MarvellousSuspender/issues/402), already on the board.

### On the tone
Some of these criticisms were quite harsh. "Shameful", "crazy", "a terrible, truly terrible change", it's really a lot to read all at once, and a couple of reviews were clearly emotional outbursts rather than concrete reports. That's fine; that's what the reviews section is for, and it doesn't change how the actual bugs mentioned above are handled. But it's also worth stating clearly that the never-out-of-style tactic of posting a barrage of very negative reviews immediately after a release that simultaneously changed permissions, graphics, and the user interface is, in itself, a sign: bundling so many visible changes into a single update has made it much harder for anyone to distinguish at first glance between "this is a real problem" and "this is different, and I don't like the difference".  
Change is always *scary*. This is a lesson on the order of changes to keep in mind for future updates, as well as for this specific case.

## Comments are now open on the KB
Speaking of feedback: every post on the Marvellous Codeworks KB, this one included, now has a comment section right at the bottom. No Chrome Web Store review box, no GitHub account required. If you've got a bug report, a question, or an opinion on any of the above, that's the place for it now, we'll be reading.

## What's next, concretely

- **9.0.3**: right after this release, already-scoped quick wins, default branch rename (`master` to `main`), a favicon-cleanup follow-up, a handful of small long-standing UX requests, plus one item needing a feasibility spike before work starts, a battery/charging-aware suspend timeout.
- **9.1.0**: platform reach, an Edge Add-ons Store listing and Group Policy support for managed deployments, plus standalone improvements: a pause button, staggered session restore (so restoring 40 tabs at once doesn't hammer the browser), and a rework of the YouTube screenshot capture path.
- **9.2.0**: a Session Manager rework, collapsing/reordering windows, deleting a single window without touching the rest, bulk export, plus lifecycle settings like auto-unsuspend on restart, auto-cleanup of old sessions, and an option to disable session tracking entirely.
- **10.0.0**: no near-term date, this is where larger architecture-level changes land, per-tab-group settings is the first candidate.

None of this is set in stone, milestones will keep shifting as issues get re-scoped, but there's now an actual sequence instead of one long undifferentiated backlog.

I wish you all the best on your journey.

*Giovanni*

---

*Full changelog on GitHub: [v9.0.2 release](https://github.com/gioxx/MarvellousSuspender/releases/tag/v9.0.2)*
