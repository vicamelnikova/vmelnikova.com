# What Sam Lambert taught me about databases that never go down

*Dev Propulsion Labs · October 2025*

I'm Victoria Melnikova, and I recorded this episode of Dev Propulsion Labs on the same day a 12-hour AWS US-East-1 outage knocked millions of websites offline. PlanetScale's customers stayed up. Sam walked into our conversation running on almost no sleep, fresh off an all-night incident watch. And he was grinning.

- YouTube: https://youtu.be/rHkaOoYQQq8
- Show notes: https://evilmartians.com/events/sam-lambert-ceo-of-planetscale-databases-that-never-go-down

Here's the thing about PlanetScale: they don't compete on features. They compete on never going down. And on the day we recorded, reality proved the point better than any marketing deck ever could. Sam tweeted a screenshot of one of the largest consumer apps in America running on PlanetScale. All green. The rest of the internet was melting.

## The day the marketing paid off

I was watching Silicon Valley for the first time when we recorded this. The timing was perfect. Pied Piper betting on metal, and here I am interviewing Sam about bare metal inside AWS. He was quick to clarify: PlanetScale still runs inside AWS, on their own metal machines. The moat isn't the hardware. It's extreme fault tolerance baked into how they operate.

> "It shows like the day the marketing pays off. You have to have days like this to show that you actually are resilient."

Sam calls PlanetScale a "tier-zero database" because of how critical their infrastructure is to the world. Every Slack message goes through a Vitess cluster. Every Cash App transaction. That's the scale we're talking about. And the team has published their rules for extreme fault tolerance publicly. So when a day like this hits, it's not a surprise. It's the plan working.

Victoria Melnikova talks to 40+ devtools startups a year, and honestly, this level of operational confidence is something I almost never see. Most companies would be scrambling. Sam was doing a podcast interview.

## From 750 users to hundreds of thousands

The PlanetScale origin story is not what most people think. When Sam joined as CPO, the company was essentially a consultancy with about 750 users, supporting companies like Slack and Bloomberg running Vitess on-prem. That was it. No cloud product. No mass audience.

Sam saw the opportunity to turn it into a cloud platform. The Vitess team went from very little framework compatibility to near-full compatibility, testing against all major framework CI suites. The user base for Vitess grew 61,000% in four years. Nine out of ten Vitess maintainers work at PlanetScale.

When the old cloud product was shut down and the new beta launched, they gained more than double those 750 users on day one. Let me tell you, that kind of momentum doesn't happen by accident. Sam hired heavily from GitHub, brought in people who understood what it means to operate at massive scale, and built a culture of operational excellence from the ground up.

## Why vibe-coded databases are a totally different market

I asked Sam about vibe coding and AI-generated apps, and he drew a sharp line that I think more founders need to hear. He loves AI coding. He uses it constantly. But he's clear about the difference between AI-assisted development and vibe coding.

> "Within the first hour of a database being used, it will never get used again. So you're seeing these incredible user growth numbers for companies, but the retention is abysmal."

Companies optimizing for vibe-coded databases build systems designed to turn off cheaply. PlanetScale builds the opposite: databases designed to run 24/7/365 under extreme load for global applications where there is no off time. Completely different set of constraints. Sam doesn't even understand why people use Postgres for throwaway databases. SQLite would do the job.

In Victoria Melnikova's experience working with devtools startups, this pattern comes up often. There's a real temptation to chase the vibe coding wave for its growth numbers. Sam's perspective is a useful counterweight: those numbers might not mean what you think they mean.

## Taste and tribal intuition make great founders

Sam has invested in Railway, Graphite, and Fly.io. He was an early leader at GitHub. So when I asked what makes a successful devtools founder, I was expecting a technical answer. Instead he said one word: taste.

> "Developers are very tribal. A lot of people think software engineers are the most objective buyers out there. That's not true. It comes down to brand, the chosen language they like. We're not always cold and calculating when we pick things."

He pointed to Guillermo Rauch and the GitHub founders as people who understood their communities so deeply that success was almost inevitable. GitHub's insistence on good technical writing, its focus on enjoyment. All of it came from Ruby's culture of caring about the developer experience. Ruby traded off performance for the joy of writing code. And the founders built that ethos into everything.

This really stuck with me. I see founder after founder trying to win on benchmarks and feature matrices. Sam's argument is that taste, brand, and community feeling are what actually drive adoption. The technical stuff matters, of course. But it's not the whole story.

## "I just don't want to think about my database anymore"

That's the magic phrase Sam hears from customers. And honestly, it captures everything PlanetScale is about. Databases are a moving target. As companies grow, the load changes, the queries change, and someone has to stay ahead of operations. It's constant gardening.

Sam shared stories about Whop and Kick, companies that started with tiny first bills on a credit card and grew into massive traffic. Kick is now at every sporting event. Whop is one of the largest consumer apps in America. Both had the foresight to put their databases on PlanetScale from the beginning, and that meant they never hit the painful database bottleneck that kills so many growing companies.

The alternative is what Sam sees with migration customers, companies that ran out of steam on RDS or Aurora and have to do painful online migrations where downtime is simply not an option. He's picked the hardest area of the market to serve on purpose. And PlanetScale is now profitable, growing rapidly, and Sam says he wakes up every day hoping it never ends.

> "I get to wake up and log online. Talk to 60 people that I find inspiring and challenging. They are smart, kind, funny. And we control our own destiny."

That's the warm fuzzy. And after this conversation on Dev Propulsion Labs, Victoria Melnikova believes him.
