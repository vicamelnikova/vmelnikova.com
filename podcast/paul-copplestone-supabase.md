# What Paul Copplestone taught me about scaling Supabase to 5M developers with no meetings

*Dev Propulsion Labs · November 2025*

I'm Victoria Melnikova, and I sat down with Paul Copplestone right after Supabase Select, their first-ever user conference. I had a full-on fangirl moment there. I don't think many people get to sit with him like this, so I wasn't going to waste the opportunity.

- YouTube: https://youtu.be/ucyk5Z0u2S4
- Show notes: https://evilmartians.com/events/paul-copplestone-the-next-generation-of-builders

Here is something wild about Supabase: no office, barely any meetings (maybe one per team per week), people in 40 different countries, and they just crossed 5 million developers. Paul isn't following any playbook I've seen in my work with devtools companies. And somehow it's working better than most playbooks do.

## Build for the Fortune 500,000

Every single Supabase customer has come inbound. Every one. They tried outbound once. They literally put a CTO's name on a billboard near John Deere's headquarters. It didn't work. Paul doesn't seem too bothered by that.

He borrowed this phrase from Atlassian: build for the Fortune 500,000, not the Fortune 500. And it governs everything. They haven't raised prices in nearly a decade. They reject FedRAMP and China because the complexity isn't worth the distraction. Early on, they turned away enterprise RFPs from insurance companies and banks. And you know what happened? Many of those companies came back inbound later, when they were ready.

I talk to 40+ devtools startups a year, and honestly, this level of discipline is rare. Most founders can't say no to revenue, especially the enterprise kind. Paul can, because his whole strategy depends on it.

## Hiring ex-founders with beaten-down egos

This one really stuck with me. Paul actively recruits ex-founders. But not the ones who had big exits. He wants the ones who ground it out for years without finding product-market fit. Here's how he put it:

> "By necessity, their ego's been beaten out of them. Anyone who's done this grind... it's probably one of the hardest things in the world to find product-market fit and grind on it for many years. And you can have the best product, the best team, and sometimes just the timing and your luck does not go your way."

These people appreciate "up and to the right" charts in a way that someone from a FAANG company never would. They've seen what failure looks like, so they bring a kind of intensity and gratitude that you can't really teach. And it self-selects: if you're an ex-founder willing to join someone else's company without a title, you've already let go of the thing that would get in the way.

I've seen this pattern across the startups I work with. The strongest teams almost always have people who've been through the fire.

## How Launch Weeks became a thing (by accident)

Every devtools founder I talk to knows about Launch Weeks. Many think Supabase invented them as a deliberate marketing strategy. Nope.

It started during YC. Paul and the team noticed that each launch created a visible bump in their growth. After YC's demo day, which was a great forcing function, they decided to simulate that pressure on their own. Instead of one big launch, they said: let's try to ship something every day for a week. They came up with eight ideas, figuring even if they only shipped three, that's better than one.

They shipped all five. Called it a Launch Week because, well, it was a week. And it worked, so they kept doing it.

What's interesting is that now, at their scale, the external marketing impact isn't even the main point. The real value is internal. It's a forcing function that gets engineers to stop building in a cave and actually tell the world what they've made. Paul uses a "fixed timeline, variable scope" model, and even the small events that draw only 100 people are worth it because engineers get to practice being product-minded. That kaizen philosophy, continuous improvement from the Toyota production system, runs through everything they do.

## Vibe coding is here to stay

On Dev Propulsion Labs, I asked Paul straight up: is the vibe coding bubble going to burst? His answer was more nuanced than most takes in the market.

Supabase became the default database for tools like Bolt.new, and it wasn't through partnerships or outreach. It was years of making the platform extremely integratable. Their API was designed to be consumed by integrations, they settled on Postgres as a standard, and they put their troubleshooting guides on GitHub where LLMs could find them. Before most companies were even thinking about that.

Paul said something that stuck with me: "Luck is a funnel that you try to widen as much as you can." The bolt moment wasn't luck. It was the result of thousands of small decisions that made Supabase the easiest thing for an AI to recommend.

He sees vibe coding as permanent, but evolving. He's already talking to product teams at large enterprises who use these tools for prototyping and velocity. The real question isn't whether vibe coding dies. It's how the prototyping workflow merges with existing enterprise development. That's where the opportunity is.

## From a Singapore hacker house to a 30-year bet

Paul's story is not the typical Silicon Valley narrative. He grew up in New Zealand, didn't know what a startup was, built his first company in Southeast Asia, and met his co-founder Ant in a Singapore hacker house. Seven people building six different companies under one roof.

He showed me an email from 2008 or 2009 where he had described, basically, what Supabase is today. He sent it to some rich tech entrepreneur pitching the idea. The guy shot him down immediately. At that point, Paul didn't even know venture capital existed. He just wanted to build things.

The thesis was contrarian: don't build a new database and try to migrate people (the standard playbook for every database company in the last 20 years). Instead, go after greenfield workloads with the new generation of builders. If you capture them, you earn the right to host the big databases, but only over a 30-year arc. Today, Supabase has launched 10 million databases. Paul said it plainly: "It's ours to lose at this point."

## Product-market fit isn't one moment

I asked Paul about finding product-market fit, expecting a clean origin story. Instead he described it as something that keeps happening in stages.

Three months in, they repositioned from "real-time Postgres" to "open source Firebase alternative." That was the first shift. Then they added auth, and saw organic growth. Then they added things that didn't get much usage on their own, but made people feel like Supabase was a complete product. Each time, the slope of the curve changed.

> "You go to sleep at night and you wake up and things are bigger in the morning."

That's the feeling, he says. And every six months it solidifies a little more. But the idea that PMF is a single binary moment? Not how it works in practice.

## Why I love this conversation

Victoria Melnikova has done 30+ founder interviews on Dev Propulsion Labs at this point, and Paul is one of those founders who operates with unusual patience. No hacks, no outbound, no growth tricks. Just compounding trust with developers over years, combined with a genuine love of solving data problems.

If I had to distill it into one thing, it's this: Supabase treats their community like the product. Not through marketing stunts, but through keeping prices stable for a decade, putting docs on GitHub, hiring people who've been humbled by the grind, and saying no to things that don't fit. Thousands of small decisions that add up to something developers can't easily leave.
