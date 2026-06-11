---
slug: the-marvellous-suspender-a-look-into-the-future
title: "The Marvellous Suspender: a look into the future"
date: 2022-10-18T00:00:00+01:00
authors: [gioxx]
tags: [news, tms]
---

import heroBanner from './2022-10-18-the-marvellous-suspender-a-look-into-the-future.jpg';

<figure className="full-bleed">
  <img src={heroBanner} alt="Google Chrome" />
  <figcaption>Photo credit: Mitchell Luo</figcaption>
</figure>

2021 was a great year for [The Marvellous Suspender](https://gioxx.org/chromeaddons/the-marvellous-suspender/). Lots of contributions, ideas, bugfixes and even a not-so-healthy dose of Google updates that have put the add-on and all its users in a difficult spot. Today's article, however, is perhaps conclusive unless we find new blood in development and a new starting point to rethink the add-on and bring it into the future, the one necessarily dictated by Google and its [Manifest V3](https://developer.chrome.com/docs/extensions/mv3/intro/).

{/* truncate */}

## January 2024

It is the month set by Google for the removal of all add-ons that make use of Manifest V2, just as reported in the official documentation available at [developer.chrome.com/docs/extensions/mv3/mv2-sunset](https://developer.chrome.com/docs/extensions/mv3/mv2-sunset/).

What does this mean? The Marvellous Suspender is based on a set of functions and commands that are compatible with Manifest V2, if you do not redesign the add-on and migrate all of its code to Manifest V3, **it will be permanently removed from the Chrome Store** and you will no longer be able to install The Marvellous Suspender in the future. Users who use it today would see the component **stop working, thus losing access to suspended tabs** (unless they reactivate all of them before December 31, 2023 and disable The Marvellous Suspender).

Google is talking about an experiment that will result in the deactivation of Manifest V2 already in unstable versions of Chrome (Canary, Dev and Beta versions 112) **starting in January 2023**, and then extending the experiment to the stable version of the browser in **June 2023** (Google Chrome version 115). This translates into possible problems for all users who - at Google's discretion - could be part of such an experiment, going to harm the user experience and tabs suspended by The Marvellous Suspender.

## Is there a Manifest V3 version already in the pipeline?

**No**.

I don't have the right skills to do this, and the team that inherited the development of The Marvellous Suspender (friends and relatives who develop for a living) invested their limited free time in correcting problems and integrating some new features that have been loudly requested by users via GitHub, as well as keeping up-to-date a multilingual localization that has today brought The Marvellous Suspender to speak 16 languages, a great accomplishment of which I am very proud.

However, this does not distract from the fact that without a source code compatible with Manifest V3, **The Marvellous Suspender is doomed to die**.

## Future

The source code for The Marvellous Suspender is [fully available on GitHub](https://github.com/gioxx/MarvellousSuspender). I am here at your complete disposal to continue coordinating the project if needed and to keep the version available [through the Chrome Store](https://go.gioxx.org/download-tms) alive and up-to-date, which I have not done recently so as not to annoy users who have complained about its insistence on updating the add-on when it detects a new version on the Store ([github.com/gioxx/MarvellousSuspender/issues/84](https://github.com/gioxx/MarvellousSuspender/issues/84)). The solution to the problem is already there and integrated into the current code of The Marvellous Suspender, but it is missing some details related to Tab Groups that we wanted to fix before releasing a new version for the Google Chrome Store, thus also pleasing users of the relatively young Chrome feature.

As pointed out in the previous paragraphs, without new blood and capable developers, The Marvellous Suspender is destined to cease to exist, much to the delight of its detractors and the disappointment of all those who have instead made spasmodic use of it to date. Free time is short and capabilities too, the add-on certainly needs to be rethought to meet the directives dictated by Google's Manifest V3, and time moves quickly. To date there is no solution and no financial budget to hire full-time developers to be able to overcome this major hurdle, The Marvellous Suspender is in fact self-funded by myself and the voluntary and free contribution of those who have helped us out over time.

Do you think you can do something to allow the project to survive? **Then I'm looking for you**. I'm willing to take a step back if you want, allowing you to start your project and give it another name if you feel it's appropriate, as well as to monetize it while trying not to violate the privacy of the users who use it, Trust for me is a key factor and should never be betrayed. I could have sold The Marvellous Suspender to the highest bidder over the past few months (and several proposals came in, believe me) but I never wanted to do that, I don't think it's fair.

I really hope you will want to help me in some way, even if only by sharing this post and talking about it with capable and well-intentioned people who could make the difference :-)

:::info 🇮🇹 In italian, please!  
Ti ricordo che l'articolo originale è stato pubblicato - in italiano - sul mio blog, all'indirizzo [gioxx.org/2022/10/18/the-marvellous-suspender-a-look-into-the-future](https://gioxx.org/2022/10/18/the-marvellous-suspender-a-look-into-the-future/)
:::