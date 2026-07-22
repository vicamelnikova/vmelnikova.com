# What Harjot Gill taught me about going viral in Japan and building guardrails for AI code

*Dev Propulsion Labs · February 2026*

I'm Victoria Melnikova, and I visited CodeRabbit's SF office to talk with their CEO about something I've been thinking about a lot: as AI writes more and more code, who's checking that code? Turns out, that's a billion-dollar question.

- YouTube: https://youtu.be/B7CRwockaa8
- Spotify: https://open.spotify.com/episode/3YYST3PYeEUWJNgAxTR1dV
- Apple Podcasts: https://podcasts.apple.com/us/podcast/harjot-gill-of-coderabbit-on-ai-growth-going-viral/id1714823787?i=1000751083775
- Show notes: https://evilmartians.com/events/harjot-gill-of-coderabbit-plg-and-enterprise

## Code generation is everywhere, but who reviews the AI's work?

On Dev Propulsion Labs, Victoria Melnikova talks to founders a lot about how engineers are conservative buyers. They don't like letting go of control. And code review is one of those things where control really matters. So when Harjot told me CodeRabbit's thesis, it clicked immediately: as the volume of AI-generated code explodes, code review becomes the bottleneck. Not code generation. Review.

> "The bottlenecks are going to shift towards understanding the code changes that the AI is making for you. Code reviews will become a bottleneck, and that's what CodeRabbit does the best."

His analogy is Datadog. Just like Amazon had CloudWatch and GCP had Stackdriver, but Datadog became the standalone monitoring category. CodeRabbit is betting that AI code review will be a standalone category too. Even if Cursor and Claude Code get better at generation, the guardrails have to be centralized. Organizations need a consistent quality gate. That logic is hard to argue with.

## Going viral in Japan, and that's how they knew

This is one of my favorite go-to-market stories. CodeRabbit didn't do design partners. They didn't do webinars. They didn't follow any of the traditional B2B SaaS playbooks. Instead, the product went viral in Japan. Of all places.

If you go to zen.dev, there are 50+ articles written by end users about CodeRabbit. None of it was orchestrated. Harjot says that organic pull, people discovering and writing about the product without being asked, gave them the confidence to build a real company around it.

> "What we saw was a lot of people pulling the product versus us having to push. We didn't have any design partners, but just the pull in the market was so strong."

Victoria Melnikova has seen this pattern before. Some of the most successful devtools she's encountered had early traction in unexpected markets like Japan, Eastern Europe, and Brazil. When developers in a market you didn't target start writing blog posts about your product, that's the strongest signal you can get.

## Free for open source, but not for the reasons you'd think

CodeRabbit is free for open source projects, and Harjot was refreshingly honest about why. Yes, it's giving back. He personally sponsors smaller projects they depend on, like AST Grep, back when it had less than 2,000 stars. But the real value is twofold.

First, discovery. Developers at enterprises find CodeRabbit through the open source projects they contribute to. TRPC, OpenShift, Linux Foundation projects, NVIDIA. They all use CodeRabbit. It's advertising that actually provides value to the community. Way better than Google ads.

Second, and this is the clever part, the feedback loop. Because open source data is public, CodeRabbit can train, fine-tune, and adjust their harness on real-world code reviews. When launching new models, they roll them out to open source first, get constant feedback, then push to paid users. The open source community is essentially their R&D playground.

## The old startup playbooks are dead

Here's the thing that really resonated with me. Harjot said the strategies that worked in his previous two startups, like booths at AWS events, enterprise expos, and traditional content marketing, haven't yielded much success for CodeRabbit. They spent hundreds of thousands on it. Instead, what works is influencer marketing, YouTube collaborations with creators like Fireship, consumer-style GTM, and even station takeovers in Penn Station.

Victoria Melnikova has been seeing this across the devtools startups she works with at Evil Martians. The go-to-market motion for developer tools has fundamentally changed. The way people discover products is different. The way they buy is different. If you're still running a 2020 playbook, you're falling behind.

Harjot also made a point that stuck with me: the old debate about "wrapper vs. real product" is settled. Value accrues up the stack. The lower-level layers get commoditized. The application layer, the agentic harness, the UX, the human-AI interface, that's where the real value is. CodeRabbit made a deliberate decision to be a pure applied AI company, not to train their own models. In hindsight, that was exactly right.

## Revenue doubling every few months, and still not enough people

The numbers are wild. CodeRabbit went from bootstrapped to $1M ARR with no seed round, then a $16M Series A, then a $60M Series B less than a year later. They're now more than double their B-stage revenue and halfway to their C. Revenue is doubling every few months.

And yet, they're still hiring to keep up with demand. They're at about 150 employees. Deals fall through the cracks because there aren't enough people to handle the inbound. People tweet about bad support. It's the best kind of problem to have, but it's still a problem.

Harjot described CodeRabbit like an F1 car. You're going to crash from time to time, but you have to think like a racing driver, not someone on a steady street. The hiring bar is curiosity and work ethic over domain experience, because in a space moving this fast, past experience doesn't always translate.

## If you're thinking about starting a company, now is the time

Harjot's advice to founders was clear and urgent: now is the best time to start a company. This is his third startup, and he's never seen anything like the current moment. Even low-hanging ideas are becoming massive in terms of revenue growth. But the bar will get higher. The window won't stay open forever.

His specific recommendation: go after B2B enterprise workflows. Complex surface areas where you can bring AI into legal, healthcare, or specific development workflows. Those moats will last longer than consumer-side products, where ChatGPT vacuums up ideas quickly. Code review was one of those enterprise workflows. CodeRabbit understood it deeply from Harjot's previous experience in infrastructure, and they were able to bring that taste and knowledge into the AI era before anyone else.
