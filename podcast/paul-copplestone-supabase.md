# What Paul Copplestone taught me about scaling Supabase to 5M developers with no meetings

*Dev Propulsion Labs · November 2025*

I'm Victoria Melnikova, and I sat down with Paul Copplestone right after Supabase Select, their first-ever user conference. I had a full-on fangirl moment there. I don't think many people get to sit with him like this, so I wasn't going to waste the opportunity.

- YouTube: https://youtu.be/ucyk5Z0u2S4
- Show notes: https://evilmartians.com/events/paul-copplestone-the-next-generation-of-builders

Supabase has no office, barely any meetings (maybe one per team per week), people in 40 different countries, and it just crossed 5 million developers. Paul isn't following any playbook I've seen in my work with devtools companies, and it's working better than most playbooks do.

## Build for the Fortune 500,000

Every Supabase customer has come inbound. They tried outbound once and literally put a CTO's name on a billboard near John Deere's headquarters. It didn't work, and Paul doesn't seem too bothered by that.

He borrowed a phrase from Atlassian that governs everything they do: build for the Fortune 500,000, not the Fortune 500. They haven't raised prices in nearly a decade. They reject FedRAMP and China because the complexity isn't worth the distraction. Early on, they turned away enterprise RFPs from insurance companies and banks, and many of those companies came back inbound later, when they were ready.

I talk to 40+ devtools startups a year, and this level of discipline is rare. Most founders can't say no to revenue, especially the enterprise kind. Paul can, because his whole strategy depends on it.

## Hiring ex-founders with beaten-down egos

Paul actively recruits ex-founders, and he wants the ones who ground it out for years without finding product-market fit rather than the ones who had big exits. Here's how he put it:

> "By necessity, their ego's been beaten out of them. Anyone who's done this grind... it's probably one of the hardest things in the world to find product-market fit and grind on it for many years. And you can have the best product, the best team, and sometimes just the timing and your luck does not go your way."

These people appreciate "up and to the right" charts in a way someone from a FAANG company never would. They've seen what failure looks like, and they bring an intensity and gratitude you can't really teach. It also self-selects: if you're an ex-founder willing to join someone else's company without a title, you've already let go of the thing that would get in the way.

I see the same pattern across the startups I work with: the strongest teams almost always have people who've been through the fire.

## How Launch Weeks became a thing (by accident)

Every devtools founder I talk to knows about Launch Weeks, and many think Supabase invented them as a deliberate marketing strategy. Nope.

It started during YC. Paul and the team noticed that each launch created a visible bump in their growth. YC's demo day had been a great forcing function, so afterward they decided to recreate that pressure themselves: instead of one big launch, they'd try to ship something every day for a week. They came up with eight ideas, figuring that even shipping three would beat one.

They shipped all five, called it a Launch Week because it was a week, and kept doing it because it worked.

At their scale today, the external marketing impact isn't even the main point. The real value is internal: it's a forcing function that gets engineers to stop building in a cave and tell the world what they've made. Paul runs it on a "fixed timeline, variable scope" model, and even the small events that draw only 100 people are worth it because engineers get to practice being product-minded. That kaizen philosophy, continuous improvement from the Toyota production system, runs through everything they do.

## Vibe coding is here to stay

I asked Paul straight up: is the vibe coding bubble going to burst? His answer had more layers than most takes I hear.

Supabase became the default database for tools like Bolt.new, and partnerships or outreach had nothing to do with it. It came from years of making the platform extremely integratable. Their API was designed to be consumed by integrations, they settled on Postgres as a standard, and they put their troubleshooting guides on GitHub where LLMs could find them, before most companies were even thinking about that.

Paul said something that stuck with me: "Luck is a funnel that you try to widen as much as you can." The bolt moment came out of thousands of small decisions that made Supabase the most obvious thing for an AI to recommend.

He sees vibe coding as permanent but evolving. He's already talking to product teams at large enterprises who use these tools for prototyping and velocity. The open question, as he sees it, is how the prototyping workflow merges with existing enterprise development, and that's where the opportunity is.

## From a Singapore hacker house to a 30-year bet

Paul's story isn't the typical Silicon Valley one. He grew up in New Zealand, didn't know what a startup was, built his first company in Southeast Asia, and met his co-founder Ant in a Singapore hacker house where seven people were building six different companies under one roof.

He showed me an email from 2008 or 2009 where he'd described, basically, what Supabase is today. He sent it to a rich tech entrepreneur to pitch the idea, and the guy shot him down immediately. Paul didn't even know venture capital existed back then. He just wanted to build things.

The thesis was contrarian. The standard playbook for every database company in the last 20 years has been to build a new database and try to migrate people. Supabase went after greenfield workloads with the new generation of builders instead. If you capture them, you earn the right to host the big databases, but only over a 30-year arc. Today Supabase has launched 10 million databases, and Paul said it plainly: "It's ours to lose at this point."

## Product-market fit isn't one moment

I asked Paul about finding product-market fit, expecting a clean origin story. He described it as something that keeps happening in stages instead.

Three months in, they repositioned from "real-time Postgres" to "open source Firebase alternative." That was the first shift. Then they added auth and saw organic growth. Then they added things that didn't get much usage on their own but made people feel like Supabase was a complete product. Each time, the slope of the curve changed.

> "You go to sleep at night and you wake up and things are bigger in the morning."

That's the feeling, he says, and every six months it solidifies a little more. In practice, PMF doesn't arrive as a single binary moment.

## Why I love this conversation

I've done 30+ founder interviews on Dev Propulsion Labs at this point, and Paul stands out for his unusual patience. No hacks, outbound, or growth tricks, just years of compounding trust with developers and a genuine love of solving data problems.

If I had to boil it down, Supabase treats its community like the product. You see it in prices that have stayed put for a decade, docs on GitHub, hiring people who've been humbled by the grind, and saying no to things that don't fit. Those small decisions add up to something developers can't easily leave.
