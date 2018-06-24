---
title: 'Virtual Reality App'
tag: 'virtual reality'
client: 'Whole Foods Market & HSUS'
priority: 1
image: '/assets/mockup-atthefork-featured.jpg'
banner: '/assets/mockup-atthefork-banner.png'
excerpt: 'Telling a complex, immersive story about animal welfare with empathy.'
---
- user experience design
- visual design
- user testing

*[At the Fork](http://www.attheforkfilm.com)* is a feature-length documentary made in partnership with **Whole Foods Market** and **the Humane Society of the United States** that explores how farm animals are raised for our consumption.

As part of the impact campaign for the documentary *[At the Fork](https://attheforkfilm.com)*, I worked on a 360-degree **virtual reality app** that lets users immerse themselves in the environments they see in the movie.

# Brief

- **Client**
  - Whole Foods Market & the Humane Society of the United States
- **The Challenge**
  - Tell mainstream audiences a compelling story about the real experiences of farm animals, but don't freak them out.
- **Platforms**
  - iOS, Android
- **My Role**
  - I led the design process of the app, the website, and the VR experience, including research, concept development, aligning stakeholders, information architecture, interaction design, visual design, and quality assurance.

![](https://www.notion.so/file/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F9a34e752-f3d7-44c4-aae2-0e23dff9d140%2Fmockup-atthefork-banner.png)

# Background

In partnership with Whole Foods Market and the Humane Society of the United States, the [creative agency I work for](http://emergentorder.com) produced a feature documentary that explores how farm animals are raised for our consumption; it’s an incredibly nuanced and gorgeous and sensitive film, and that’s what really sets it apart from its competition. It seeks to understand the conditions in which real animals live, *and* the economic pressures that American farmers face.

I worked on two deliverables for the distribution & marketing campaigns: **a website** for the film, and the interaction design for **a 3D virtual reality app** that explored the farms that the filmmakers visited.

[spacer]

# Defining the Problem

![](https://www.notion.so/file/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fdbac0951-ac9f-450c-9f05-ee128ceff7f4%2Fphoto-atthefork-quote.png)

— *Quote relayed to us from a stakeholder interview.*

The purpose of the app was two-fold: our stakeholders wanted the app to serve as a marketing tool for the film by generating buzz, and to increase the social impact of the film, by helping users (and movie-goers) to increase their empathy by seeing the environments "from the animals' perspective."

With a tight timeline, we leaned on existing research done for the film and bootstrapped a few in-house usability tests to get familiar with the obstacles we were facing.

We narrowed the problem down to a few core challenges:

[row][col]

## Anxiety about the material

People don't want to watch animals that are in pain, and they'll avoid media if they think it's going to show them something uncomfortable. *At the Fork* isn’t that kind of movie, but it was a persistently tricky bias that we had to combat from Day 1. If people thought this was one of those movies with grainy, undercover videos of cows being abused, they didn’t want anything to do with it. We knew we'd need to **use design to build trust** with our users as quickly as possible.

[/col][col]

## Headsets aren't intuitive

The transition from 2D to 3D is weird, cumbersome, and confusing for first-time users. Part of the marketing plan involved distributing free Google Cardboards in Whole Foods Markets around the country, with QR codes stamped on them that linked to the app. We expected that **most users would be first-timers,** and we wanted to create a seamless and enjoyable experience, even for VR newbies.

[/col][/row]

[row][col]

## Modular & Directed Storytelling

One of our exective producers wanted to ensure that users who specifically wanted to learn about pigs could jump right to that part of the story. But knowing that many users wouldn’t know what they wanted to see, we also had to make sure that we **provided quick access to a guided story** that would be interesting to everyone.

[/col][col]

## No existing branding

The app wasn't supposed to feel like a Whole Foods or a HSUS product — it needed to be an independent part of the film's brand. We would need to take the film’s poster and transform it into an entire **look and feel that would work across the app, a website, emails, brochures and marketing materials.**

[/col][/row]

![](https://www.notion.so/file/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0b8853d6-71fc-47a0-ace6-7bf2fc70e3dc%2F2018-3-1816-46-18.png)

# Design the Experience, Validate Assumptions

The first information architecture hurdle was organizing content so it was modular, without making our users make the 2D-to-3D switch more than once. We made three key decisions right away:

1. We wanted to encourage people to jump into the “narrative story” first; it was the most compelling and beginner-friendly experience of the 6 videos.
2. Once a user had inserted their phone into the Google Cardboard, we **really didn’t want to make them take it off** until they were done being in VR.
3. Once a user was done with their VR experience, we wanted to nudge them to visit the film's website or **buy it on iTunes.**

[spacer]

[row center][col]

![](https://www.notion.so/file/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F789f66c7-8f1a-4688-ad70-8cec69271634%2FPhotoFeb1653026PM.jpg)

[/col][col]

## Insight

Nodding in response to a question (“Continue?”) worked really well for devices that are strapped to a user’s head. It was a really intuitive and delightful interaction — we had a few users say, "Wow, it knows I'm nodding? That's so cool!" — but it utterly failed as soon as we switched to Google Cardboard. Cardboard is a device that the user has to hold up to their face with their hands, and every single one of our test subjects nodded their head while holding their device perfectly still.

[/col][/row]

[spacer]

After one user test which required users to remove their phone from the Cardboard device to switch to the next experience, then put it back in — everyone agreed this experience was the epitome of "UGH" — we came up with a design solution we called “The Darkroom.” The Darkroom was a VR screen that popped up at the end of any of the 3D experiences and allowed a user to select the next story, or exit the VR experience, simply **by long-staring at a particular button.**

![](https://www.notion.so/file/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2100ef23-a7d9-48b9-b8ce-791ba12d334a%2F2018-3-1816-46-40.png)

Navigating in VR was tricky, mostly because our design had to be **platform-agnostic.** Occulus and other Android headsets have some interesting features that ease navigation, but we knew that for most of our users, this was going to be their very first VR experience, and it would probably be in a Google Cardboard. We tried a number of different gesture-based triggers to help users navigate in VR, but “the long stare” most consistently resulted in easy, understandable navigation.

[spacer]

[row center][col]

## Getting the timing right

For the 2D portion of our design, we prioritized the “Narrative” experience with layering and typography; key calls to action appeared in pop-over layers. We included a hamburger to keep navigation clear and cross-platform, but we prioritized navigation via discovery. You can see the Invision prototype of our early wireframes here:

[/col][col]

<iframe width="100%" height="900px" src="https://invis.io/SA4P9KDKR" frameborder="0" allowfullscreen></iframe>

[/col][/row]

[spacer]

# Visual Design

The film’s movie poster is quirky, fun, and very illustrated; we wanted the website and app to evoke that same playful, charming, and family-friendly aesthetic, without needing use too many custom illustrations, which could have easily consumed our entire budget.

We relied heavily on the poster’s iconic green and blue, and bold geometric typography; we paired it with Bitter, a (free!) font-face that brought a slightly rustic feel to the site, without feeling too gimmicky. We kept the rest of the visual design clean and minimal to focus on the film’s incredible photography.

![](https://www.notion.so/file/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa8fe5dbd-7cca-42f2-b652-6327289a20ff%2F2018-3-1816-47-7.png)

# Outcomes

The app was downloaded over 7,000 times! The movie had one of the largest launches of any documentary, ever, on the crowd-sourced platform Tugg.
