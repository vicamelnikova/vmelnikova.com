# What Zeno Rocha taught me about building work so good your heroes want to copy it

*Dev Propulsion Labs · October 2025*

I'm Victoria Melnikova, and I have a personal connection to this episode of Dev Propulsion Labs. I studied Brazilian Portuguese in university. I lived in Rio. So sitting down with Zeno, a fellow Brazil lover turned San Francisco founder, felt like a conversation that was always meant to happen.

- YouTube: https://youtu.be/THnXhWL-pA0
- Show notes: https://evilmartians.com/events/zeno-rocha-founder-of-resend-18m-series-a-by-obsessing-over-every-detail

Resend is an email API. That sounds boring. Zeno would tell you the same thing. Nobody wants to deal with email. And that's exactly why it's a great business. Once you integrate, you never want to migrate. It's sticky by nature. But the way Zeno has built Resend is anything but boring. The website, the brand, the handbook, the open-source strategy. Every single detail is deliberate.

## Cut scope, not quality

Victoria Melnikova asked Zeno about the tension between perfectionism and speed. He rejected the premise entirely. The answer isn't choosing one over the other. It's cutting scope relentlessly.

> "We're not gonna ship something we're not proud of. We're not gonna ship crap. But we need to ship fast. So how do you do that? Oh, we thought about these four use cases. We're just gonna focus on three of them, or two of them, or one of them if necessary."

The team's north star is wild. When they're about to release something, Zeno asks the designers and engineers: who do you admire? Patrick Collison from Stripe. Guillermo Rauch from Vercel. Okay. Now build something so good that when Patrick sees it, he copies the link into the Stripe Slack and says "we should be inspired by this."

That bar is high on purpose. If you're trying to impress your heroes, you'll build something better than you thought possible. I've seen a lot of devtools companies ship fast and ugly, or ship beautiful and slow. Zeno found the third option. Cut the feature list, not the quality.

## A 20,000-person waitlist built over years

Before Resend launched, they had 20,000 people on the waitlist. That didn't happen overnight. Zeno created his Twitter account in 2009. He started tweeting in English instead of Portuguese in 2014. His Brazilian friends thought he was being pretentious. But he was already building for an international audience.

Every open-source project he built was a brick in the founder brand. And he still wakes up every morning treating it as a duty to evolve that brand. Most prospects come through the founder, not the company. Zeno is intentional about both brands running in parallel.

Victoria Melnikova works with 40+ devtools startups a year, and founder brand is consistently one of the most powerful growth levers I see. But most founders either don't invest in it or feel awkward about it. Zeno has been building his for 15 years. By the time Resend launched, the audience was already there.

## When phishing hit close to home

Resend started as a developer tool but realized they were really an infrastructure company. The way you operate those two things is fundamentally different. Developer experience became much broader than SDKs and docs. If the app is down or leaking data, nothing else matters.

The tipping point was personal. There was a devastating flood in southern Brazil, near where Zeno grew up. One day he logged into Resend and found a phishing email targeting fake donations for that flood. Organized spammer gangs, using his own platform.

> "I saw that. I was like, wow, this is so low. How come a human being is trying to take advantage of folks that are donating money to a flood."

Now they fight these gangs daily. Hundreds of botched domains, increasingly sophisticated attacks. Resend invested $3M into email security and hired data scientists to build anti-abuse systems. It's not the glamorous part of building an email API. But it's where the real responsibility lies.

## Jab, jab, right hook: open source as a launchpad

Resend will never be open source. Zeno decided that from day one. But he knew they needed an open-source component as a launchpad. The master plan had three bullet points: build an open-source project (React Email), establish as email experts, then launch a SaaS around it.

React Email launched in December. Resend announced in January. The sequencing was deliberate. Give, give, give, then ask. And here's the counterintuitive part: the React Email docs show how to use it with every competitor. SendGrid, Mailgun, Postmark, all of them. Right there on the page, alongside Resend.

Zeno says that level of confidence, promoting competitors on your own docs, builds trust. The strategy isn't to convert every open-source user into a paying customer. It's to be top of mind so that when someone finally needs an email provider, Resend is already in their subconscious.

## Getting to "no" faster changes everything

Zeno is a self-described people pleaser. Rejection is hard for him. But he's learned to flip the sales script entirely. Instead of trying to move prospects to the next pipeline stage, he now tries to get to "no" as fast as possible.

When you push for rejection, prospects tell you the real blocker. HIPAA compliance, a missing feature, whatever. That lets you move to the next opportunity instead of wasting weeks on a deal that was never going to close. Zeno uses the same truth-seeking mindset everywhere: paid plans from day one (because GitHub stars don't pay the bills), launching AI features with minimal scope to let the market tell him if it's a product or a feature.

His co-founder Bu embodies the same philosophy. Zero ego. Willing to say in a daily standup: "I wasn't productive today, I watched YouTube videos, but tomorrow I'll make up for it." Zeno says that vulnerability was the only thing he needed to see in a co-founder. Because ego destroys cultures, and he's watched it happen.

When Victoria Melnikova asked the warm fuzzies question, Zeno was honest. He doesn't feel great most of the time. He's a founder, a dad, a husband. He's always dropping the ball somewhere. But then he saw a tweet from a team member in South Africa saying he's never been this excited about work in his life. And Zeno realized: we built this place. Out of nowhere. That's the thing that fills the cup.
