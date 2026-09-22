# What Harjot Gill taught me about going viral in Japan and building guardrails for AI code

*Dev Propulsion Labs · February 2026*

I'm Victoria Melnikova, and I visited CodeRabbit's SF office to talk with their CEO, Harjot Gill, about something I've been thinking about a lot: as AI writes more and more code, who's checking that code?

- YouTube: https://youtu.be/B7CRwockaa8
- Spotify: https://open.spotify.com/episode/3YYST3PYeEUWJNgAxTR1dV
- Apple Podcasts: https://podcasts.apple.com/us/podcast/harjot-gill-of-coderabbit-on-ai-growth-going-viral/id1714823787?i=1000751083775
- Show notes: https://evilmartians.com/events/harjot-gill-of-coderabbit-plg-and-enterprise

## Code generation is everywhere, but who reviews the AI's work?

On Dev Propulsion Labs, I talk with founders a lot about how engineers are conservative buyers who don't like letting go of control, and code review is exactly where control matters. So CodeRabbit's thesis clicked for me right away: as the volume of AI-generated code explodes, code review becomes the bottleneck instead of code generation.

> "The bottlenecks are going to shift towards understanding the code changes that the AI is making for you. Code reviews will become a bottleneck, and that's what CodeRabbit does the best."

His analogy is Datadog. Amazon had CloudWatch and GCP had Stackdriver, and Datadog still became the standalone monitoring category. CodeRabbit is betting that AI code review will be a standalone category too. Even as Cursor and Claude Code get better at generation, organizations need one consistent quality gate, so the guardrails have to be centralized. I find that hard to argue with.

## Going viral in Japan, and that's how they knew

This is one of my favorite go-to-market stories. CodeRabbit skipped design partners, webinars, and the rest of the traditional B2B SaaS playbook. Instead, the product went viral in Japan, of all places.

On zen.dev, end users have written 50+ articles about CodeRabbit, and none of it was orchestrated. Harjot says that organic pull, people discovering and writing about the product without being asked, gave them the confidence to build a real company around it.

> "What we saw was a lot of people pulling the product versus us having to push. We didn't have any design partners, but just the pull in the market was so strong."

I've seen this before. Some of the most successful devtools I know got early traction in unexpected markets like Japan, Eastern Europe, and Brazil. When developers in a market you never targeted start writing blog posts about your product, that's about the strongest signal you can get.

## Why CodeRabbit is free for open source

CodeRabbit is free for open source projects, and Harjot was candid about why. Part of it is giving back: he personally sponsors smaller projects they depend on, like AST Grep back when it had less than 2,000 stars. The business value comes in two parts.

The first is discovery. Developers at enterprises find CodeRabbit through the open source projects they contribute to, and TRPC, OpenShift, Linux Foundation projects, and NVIDIA all use it. That's advertising the community actually gets something from, which beats Google ads by a mile.

The second, and the clever part, is the feedback loop. Open source data is public, so CodeRabbit can train, fine-tune, and adjust its harness on real-world code reviews. New models roll out to open source first, collect feedback there, and only then go to paid users, which makes open source their R&D playground.

## The old startup playbooks stopped working

Harjot said the strategies that worked at his previous two startups, like booths at AWS events, enterprise expos, and traditional content marketing, haven't done much for CodeRabbit, even after they spent hundreds of thousands on them. What works instead is influencer marketing, YouTube collaborations with creators like Fireship, consumer-style GTM, and even station takeovers in Penn Station.

I've been seeing the same shift across the devtools startups I work with at Evil Martians. Developers discover and buy products differently now, and if you're still running a 2020 playbook, you're falling behind.

Harjot also thinks the old debate about "wrapper vs. real product" is settled. The lower-level layers get commoditized, and value accrues up the stack: in the application layer, the agentic harness, the UX, and the human-AI interface. CodeRabbit deliberately chose to be a pure applied AI company instead of training its own models, and in hindsight that was the right call.

## Revenue doubling every few months, and still not enough people

The numbers are wild. CodeRabbit bootstrapped to $1M ARR with no seed round, then raised a $16M Series A and a $60M Series B less than a year later. They're now at more than double their B-stage revenue and halfway to their C, with revenue doubling every few months.

They're still hiring to keep up with demand. At about 150 employees, deals fall through the cracks because there aren't enough people to handle the inbound, and people tweet about bad support. It's the best kind of problem to have, but it's still a problem.

Harjot compares CodeRabbit to an F1 car: you're going to crash now and then, and you have to think like a racing driver rather than someone on a steady street. The hiring bar is curiosity and work ethic over domain experience, because in a space moving this fast, past experience doesn't always translate.

## If you're thinking about starting a company, now is the time

Harjot's advice to founders is that now is the best time to start a company. This is his third startup, and he's never seen a moment like this one. Even low-hanging ideas are turning into massive revenue growth, but the bar will get higher.

Specifically, he'd go after B2B enterprise workflows: complex surface areas where you can bring AI into legal, healthcare, or specific development work. Those moats will last longer than consumer products, where ChatGPT vacuums up ideas quickly. Code review was one of those workflows. Harjot knew it deeply from his previous work in infrastructure, and CodeRabbit brought that taste and knowledge into the AI era before anyone else.
