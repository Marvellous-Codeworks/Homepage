---
slug: road-to-tms9-launch
title: "Road to TMS 9: we made it, and it's rolling out Monday"
description: "TMS 9 has cleared Google's review. Starting Monday, August 3rd, the new version begins rolling out on the Chrome Web Store. A look back at the ride, the chats with Rob, the community that showed up, the new site, and what actually changes for you."
date: 2026-07-31T00:00:00+01:00
authors: [gioxx]
tags: [tms, road-to-tms9, release, announcement]
---

import suspendySummer from './suspendy-summer-vacation.webp';

Five weeks ago we opened this series with [a new look for a new era](/blog/road-to-tms9-visual-redesign). Google just cleared [v9.0.0](https://github.com/gioxx/MarvellousSuspender/releases/tag/untagged-ac2f89701b50b29f28e6) for review, and starting **Monday morning, August 3rd**, the rollout to the Chrome Web Store begins. This is the last stop on the road.

<img src={suspendySummer} alt="Suspendy Guy in Hawaiian shirt, sunglasses, and sandals, holding a tropical cocktail" style={{float: 'right', margin: '0 0 1rem 1.5rem', width: '180px'}} />

It's also pushing 40°C outside as we write this, summer in full swing, and yes, 40°C in Italy is exactly as absurd as it sounds. Wherever you are, we hope you get a good stretch of vacation out of it. We won't really be taking one ourselves, but we'll admit to easing off the throttle a little.

{/* truncate */}

## What actually shipped

Session backup and restore, local or Google Drive, on a schedule or on demand, multi-device aware. A Tab Health page that scans your suspended tabs and repairs the Tab Groups restart bug on Chrome, Edge, and Brave with one click. A News feed that pulls straight from this blog into the extension's sidebar. A visual redesign that finally makes every settings page look like it belongs to the same product. A narrower, less scary Google Drive permission. Sixteen languages brought back up to parity after being left behind for who knows how long.

None of that happened in a straight line, and none of it happened alone.

## The chats with Rob

Rob and I don't work in the same office, the same country, or even close to the same timezone half the time. Most of TMS 9 got decided in a chat window, at hours that made sense for neither of us, arguing about whether a permission scope was too aggressive, whether a setting needed a tooltip, whether "Restore from backup" should live under Sessions or Backup. Small questions, but the kind that decide whether an extension feels considered or just shipped.

The Great-er Tab Discarder and The Marvellous Suspender are separate projects with separate codebases, but Marvellous Codeworks only works because there are two of us pulling in the same direction, checking each other's blind spots, and occasionally telling the other one an idea is bad before it ships. TMS 9 is better for it.

## The community that showed up

TMS 9 also has two first-time contributors in the changelog: [@MatrixNeoKozak](https://github.com/MatrixNeoKozak), who refactored the storage layer to drop unnecessary JSON serialization, and [@iGhost](https://github.com/iGhost), who added the option to preserve YouTube playback position on suspend, a small feature, requested and built by someone who actually hit the problem. That is exactly how an open-source project is supposed to grow: not just bug reports, but pull requests from people who decided to fix the thing themselves.

On top of that, sixteen locales got AI-assisted translation passes to close gaps that had been sitting there for versions. They are not perfect. If you read TMS in your language and something sounds off, [Crowdin](https://crowdin.com/project/tms) is open and corrections from native speakers are exactly what closes that gap for good.

## Reporting an issue without a GitHub account

For years, the only way to tell us something was broken was to open a GitHub issue, which meant a GitHub account, which meant a wall a lot of people simply weren't willing to climb over just to report a bug. We kept hearing about problems secondhand, in reviews, in Reddit threads, never where we could actually act on them.

[marvellouscode.works/tms/report](https://marvellouscode.works/tms/report) fixes that. Fill in a form, no sign-up, no account, and it opens a proper GitHub issue on your behalf, correctly labeled, with the fields we actually need to reproduce the problem. You get a status link back to follow along, we get a real, actionable report instead of a one-star review that just says "stopped working."

And on that note: we do read everything, including what shows up directly on the Chrome Web Store. Star ratings, written reviews, support requests left in that little review box, all of it gets read. We keep an eye on GitHub Issues specifically because that is where we actually track and act on things, verifying odd behavior, following up on requests, closing things out once they're fixed, but a review left on the Store is not shouting into a void either.

:::note
The web report form is experimental. It exists to lower the barrier for people who won't create a GitHub account just to tell us something is broken, not to replace GitHub entirely. If it ever gets abused, spam, bad-faith noise, whatever form that takes, it's the first thing we'll turn off, and reporting will go back to being GitHub accounts opening Issues under their own name, full stop.
:::

## A documentation site built from scratch

The old TMS wiki lived on the GitHub repo, half-finished, out of date in places, and honestly not the kind of thing you'd send someone to if you wanted them to actually understand the extension. It's disabled now.

In its place: [kb.marvellouscode.works/docs](/docs/intro), written from the ground up, page by page, for TMS 9 specifically. Every settings page has its own article, Settings, Sessions, Backup, Tab Health, Quick Actions, Keyboard Shortcuts, News, About, explaining what every toggle actually does, not just what it's labeled. There's a dedicated page on [permissions](/docs/TMS/permissions), spelling out why TMS asks for what it asks for, and what changed with the narrower Drive scope in this release. FAQ included. Nothing hidden in a stale wiki page nobody updated since 2019.

We built it, page by page, deciding what actually needed explaining versus what was obvious enough to skip. The `marvellouscode.works` domain has actually been sitting registered for almost a year now, it just took weeks and weeks of actual writing, restructuring, and rewriting to turn it into the site, the docs, and the report flow you can use today.

## Everything changes. Nothing changes.

TMS 9 looks different, is organized differently, backs itself up differently, and speaks more languages correctly than it used to. That is the "everything changes" part, and it took a full rewrite of the settings pages, a new backup system, and a lot of late chats with Rob to get there.

The "nothing changes" part is simpler: TMS still exists to take tabs your browser is hoarding in memory and put them to sleep until you actually need them again. That was true the day [The Great Suspender got rescued](/blog/the-marvellous-suspender-hello-world), it was true through the Manifest V3 rewrite, and it is still true in v9.0.0. Every feature in this release, Tab Health, backups, the redesign, exists to protect that one job, not to replace it.

## Not everyone will love it, and that's fine

We're perfectly aware that not everyone is going to be thrilled with the new look. Change is rarely comfortable, and a redesign this size, new fonts, new colors, new layout on every single page, is exactly the kind of thing some people will need time to get used to, or just won't like at all. That's part of growing a project, it's part of the deal.

We still believe the repaint was necessary, and we think it's only the first big step. There are more ideas in the pipeline, and there are plenty of problems and feature requests already sitting in GitHub Issues that we intend to work through to keep pushing TMS forward. We're listening, we take feedback and constructive criticism seriously, that's the whole point of open source in the first place.

## What's next

Google's review is done, the changelog is final, and the rollout starts Monday morning, August 3rd. Chrome Web Store updates roll out gradually rather than to everyone at once, so don't panic if you don't see v9.0.0 the second you check, it'll reach you within the normal update window. This series is officially done. Thank you for reading along the whole way, for testing feature branches, for opening issues, for the pull requests, and for the patience.

See you on the other side, in v9.0.0.
