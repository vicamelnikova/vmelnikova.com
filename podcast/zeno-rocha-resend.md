# What Zeno Rocha taught me about building work so good your heroes want to copy it

*Dev Propulsion Labs · October 2025*

I'm Victoria Melnikova, and I have a personal connection to this episode of Dev Propulsion Labs. I studied Brazilian Portuguese in university and lived in Rio, so sitting down with Zeno, a fellow Brazil lover turned San Francisco founder, felt like a conversation that was always meant to happen.

- YouTube: https://youtu.be/THnXhWL-pA0
- Show notes: https://evilmartians.com/events/zeno-rocha-founder-of-resend-18m-series-a-by-obsessing-over-every-detail

Resend is an email API. That sounds boring, and Zeno would tell you the same thing: nobody wants to deal with email. That's exactly why it's a great business, because once you integrate, you never want to migrate. The way Zeno has built Resend, though, is anything but boring. Every detail of the website, the brand, the handbook, and the open-source strategy is deliberate.

## Cut scope, not quality

I asked Zeno about the tension between perfectionism and speed, and he rejected the premise entirely. You don't have to pick one if you cut scope relentlessly.

> "We're not gonna ship something we're not proud of. We're not gonna ship crap. But we need to ship fast. So how do you do that? Oh, we thought about these four use cases. We're just gonna focus on three of them, or two of them, or one of them if necessary."

The team's north star is wild. When they're about to release something, Zeno asks the designers and engineers who they admire, say Patrick Collison from Stripe or Guillermo Rauch from Vercel. Then the job is to build something so good that when Patrick sees it, he copies the link into the Stripe Slack and says "we should be inspired by this."

The bar is high on purpose: if you're trying to impress your heroes, you'll build something better than you thought possible. I've seen a lot of devtools companies ship fast and ugly, or beautiful and slow. Zeno's way out is to cut the feature list and keep the quality.

## A 20,000-person waitlist built over years

Before Resend launched, they had 20,000 people on the waitlist, and that took years. Zeno created his Twitter account in 2009 and started tweeting in English instead of Portuguese in 2014. His Brazilian friends thought he was being pretentious, but he was already building for an international audience.

Every open-source project he built added to his founder brand, and he still wakes up every morning treating it as a duty to evolve that brand. Most prospects come through the founder, not the company, so Zeno deliberately runs both brands in parallel.

I work with 40+ devtools startups a year, and founder brand is one of the strongest growth levers I see. Most founders either don't invest in it or feel awkward about it. Zeno has been building his for 15 years, so by the time Resend launched, the audience was already there.

## When phishing hit close to home

Resend started as a developer tool, then realized it was really an infrastructure company, and you operate those two very differently. Developer experience became much broader than SDKs and docs: if the app is down or leaking data, nothing else matters.

The tipping point was personal. A devastating flood hit southern Brazil, near where Zeno grew up. One day he logged into Resend and found a phishing email asking for fake donations for that flood, sent by organized spammer gangs using his own platform.

> "I saw that. I was like, wow, this is so low. How come a human being is trying to take advantage of folks that are donating money to a flood."

Now they fight these gangs daily, from hundreds of botched domains to increasingly sophisticated attacks. Resend invested $3M into email security and hired data scientists to build anti-abuse systems.

## Jab, jab, right hook: open source as a launchpad

Resend will never be open source; Zeno decided that from day one. But he knew they needed an open-source component as a launchpad. The master plan had three bullet points: build an open-source project (React Email), establish themselves as email experts, then launch a SaaS around it.

React Email launched in December, and Resend was announced in January. Give, give, give, then ask. The counterintuitive part is that the React Email docs show how to use it with every competitor, SendGrid, Mailgun, and Postmark included, right there on the page alongside Resend.

Zeno says that kind of confidence, promoting competitors in your own docs, builds trust. Instead of converting every open-source user into a paying customer, he wants Resend to stay top of mind, so that when someone finally needs an email provider, it's already in their subconscious.

## Getting to "no" faster

Zeno is a self-described people pleaser, and rejection is hard for him. But he's learned to flip the sales script: instead of trying to move prospects to the next pipeline stage, he now tries to get to "no" as fast as possible.

When you push for rejection, prospects tell you the real blocker, whether it's HIPAA compliance or a missing feature. That lets you move on to the next opportunity instead of wasting weeks on a deal that was never going to close. Zeno applies the same truth-seeking mindset everywhere: paid plans from day one (because GitHub stars don't pay the bills), and AI features launched with minimal scope so the market can tell him whether it's a product or a feature.

His co-founder Bu shares the same zero-ego philosophy and is willing to say in a daily standup: "I wasn't productive today, I watched YouTube videos, but tomorrow I'll make up for it." Zeno says that vulnerability was the only thing he needed to see in a co-founder, because he's watched ego destroy cultures.

When I asked the warm fuzzies question, Zeno was honest. He doesn't feel great most of the time. He's a founder, a dad, and a husband, and he's always dropping the ball somewhere. But then he saw a tweet from a team member in South Africa saying he's never been this excited about work in his life. And Zeno realized: we built this place. Out of nowhere. That's what fills his cup.
