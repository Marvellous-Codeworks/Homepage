---
slug: 2025-06-24-the-marvellous-suspender-v3-migration-volunteer-testers-wanted
title: "The Marvellous Suspender: V3 Migration, volunteer testers wanted! (Updated)"
date: 2025-06-24T00:00:00+01:00
authors: [gioxx, rkodey]
tags: [beta, news, tms]
---

import heroBanner from './2025-06-24-the-marvellous-suspender-v3-migration-volunteer-testers.jpg';

<figure className="full-bleed">
  <img src={heroBanner} alt="Welcome back, TMS users!" />
</figure>

:::info  
The post has been updated! (2025-07-05)
- I have included a note unambiguously stating that you will need to use only the 'src' folder to load the unpackaged extension into Chrome.
- I have changed the links to the repository and the ZIP file to download. **The PR has now been merged with the original repository**!
:::

Had I lost hope? I'll admit it — yeah, pretty much completely.
So you can imagine how thrilled I was when I finally saw a light at the end of that tunnel.

{/* truncate */}

[Rob](https://github.com/rkodey/) is the guy behind [The Great-_er_ Tab Discarder](https://github.com/rkodey/the-great-er-discarder-er), itself a fork of an older, seemingly abandoned project — another extension born out of the need to fix a gap that often makes Chrome unusable in the long run (especially when you're juggling hundreds of open tabs).
When Rob took an interest in TMS and decided to take on the challenge of making it compatible with the more limited Manifest V3, I saw an opportunity. I reached out to him, and together with a third person from Google, we kicked off a group chat to start connecting the dots and try to make the leap.

The result? It's publicly available here: [github.com/gioxx/MarvellousSuspender/pull/253](https://github.com/gioxx/MarvellousSuspender/pull/253) (now merged with the original repository) — a pull request that includes a pretty much rewritten version of TMS for Manifest V3. A 1:1 migration of what's under the hood in the current TMS just isn't possible.

What we need now **is a pool of users willing to test this new version of TMS** — help us figure out what's still missing, what kinds of issues might come up across different environments, systems, and setups, and what needs to be fixed right away before we publish it on the Chrome Web Store.
Only then can we reach all users again and start the (long) journey toward improvements and new features, aiming to finally hit full feature parity — something we're still missing today.

A few quick but essential tips before taking the leap.
If you're thinking of joining the testing community for the new version of TMS, I strongly recommend you:

- **Save the current state of your open tabs in Chrome**.  
TMS (the version currently available) lets you create a full backup, which you can export and keep safe.
- Wake up all your tabs (or pick and choose which ones you want to keep active in the browser — you can always reopen the others later). Try to streamline things as much as you can, so the transition to the new version of TMS is smoother.
- Install the new version of TMS.  
Clone the [repo](https://github.com/gioxx/MarvellousSuspender) to your PC (or [download the full ZIP](https://github.com/gioxx/MarvellousSuspender/archive/refs/heads/master.zip) and extract it), enable Developer Mode in Chrome (<code>chrome://extensions/</code>), then hit the **Load unpacked** button and select the folder where you saved the files from the repo. **You have to load only the src subfolder**. At that point, you'll be running the new version of TMS — compatible with Google's Manifest V3 — and it'll be back to managing your tabs like before.

What you'll see looks familiar — same interface you're used to, nothing seems to have changed. But under the hood, it's a whole different engine.

Just a quick reminder: using the **Load unpacked** option won't overwrite your current TMS installation.
Chrome treats the new Manifest V3-compatible version as a completely separate extension, so there's no need to uninstall your current TMS — both versions can run side by side.

That's why we suggest:
- Keep your current TMS installed, but set the automatic suspension to **Never**.
- Set up the new version to handle tab suspension.

This way, you'll be able — if you want — to wake up your older tabs and suspend them again using the new version.

:::warning  
The current limit for how many tabs the new version of TMS can actively manage at once is 500 (__[Work around Chrome's limit of 500 Alarms](https://github.com/gioxx/MarvellousSuspender/discussions/196#discussioncomment-13539002)__). This shouldn't affect how the extension works — it just means that if you have more than 500 active, unsuspended tabs open in your current session, it might take a bit longer for all of them to be processed and suspended properly.
:::

Thanks a ton to everyone willing to test, break things, and share thoughts — this kind of support is what keeps open source alive and kicking.

:::info 🇮🇹 In italian, please!  
Ti ricordo che l'articolo originale è stato pubblicato - in italiano - sul mio blog, all'indirizzo [gioxx.org/2025/06/24/the-marvellous-suspender-v3-beta](https://gioxx.org/2025/06/24/the-marvellous-suspender-v3-beta/)
:::