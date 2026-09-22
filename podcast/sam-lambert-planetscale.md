# What Sam Lambert taught me about databases that never go down

*Dev Propulsion Labs · October 2025*

I'm Victoria Melnikova, and I recorded this episode of Dev Propulsion Labs on the same day a 12-hour AWS US-East-1 outage knocked millions of websites offline. PlanetScale's customers stayed up. Sam walked into our conversation running on almost no sleep, fresh off an all-night incident watch. And he was grinning.

- YouTube: https://youtu.be/rHkaOoYQQq8
- Show notes: https://evilmartians.com/events/sam-lambert-ceo-of-planetscale-databases-that-never-go-down

PlanetScale's whole pitch is a database that never goes down, and the day we recorded made that case better than any marketing deck could. Sam tweeted a screenshot of one of the largest consumer apps in America running on PlanetScale, all green, while the rest of the internet was melting.

## The day the marketing paid off

I was watching Silicon Valley for the first time when we recorded this, so the timing was perfect: Pied Piper was betting on metal, and here I was interviewing Sam about bare metal inside AWS. He was quick to clarify that PlanetScale still runs inside AWS, on their own metal machines. What protects them is the extreme fault tolerance built into how they operate.

> "It shows like the day the marketing pays off. You have to have days like this to show that you actually are resilient."

Sam calls PlanetScale a "tier-zero database" because of how critical their infrastructure is to the world. Every Slack message goes through a Vitess cluster, and so does every Cash App transaction. The team has published its rules for extreme fault tolerance, and a day like this one is what those rules were written for.

I work with 40+ devtools startups a year, and I almost never see this level of operational confidence. Most companies would have been scrambling. Sam was doing a podcast interview.

## From 750 users to hundreds of thousands

The PlanetScale origin story isn't what most people think. When Sam joined as CPO, the company was essentially a consultancy with about 750 users, supporting companies like Slack and Bloomberg running Vitess on-prem. There was no cloud product and no mass audience.

Sam saw the chance to turn it into a cloud platform. The Vitess team went from very little framework compatibility to near-full compatibility, testing against the CI suites of every major framework. Vitess's user base grew 61,000% in four years, and nine out of ten Vitess maintainers work at PlanetScale.

When the old cloud product was shut down and the new beta launched, they gained more than double those 750 users on day one. Sam hired heavily from GitHub, bringing in people who understood what it means to operate at massive scale, and built a culture of operational excellence from the ground up.

## Why vibe-coded databases are a totally different market

I asked Sam about vibe coding and AI-generated apps, and he drew a line I think more founders need to hear. He loves AI coding and uses it constantly, but he keeps AI-assisted development and vibe coding firmly apart.

> "Within the first hour of a database being used, it will never get used again. So you're seeing these incredible user growth numbers for companies, but the retention is abysmal."

Companies optimizing for vibe-coded databases build systems designed to turn off cheaply. PlanetScale builds databases that run 24/7/365 under extreme load for global applications with no off time, which is a completely different set of constraints. Sam doesn't even understand why people use Postgres for throwaway databases when SQLite would do the job.

The devtools startups I work with feel a real temptation to chase the vibe coding wave for its growth numbers. Sam's point about retention is a useful counterweight: those numbers might not mean what you think.

## Taste and tribal intuition make great founders

Sam has invested in Railway, Graphite, and Fly.io, and he was an early leader at GitHub. So when I asked what makes a successful devtools founder, I expected a technical answer. He said one word: taste.

> "Developers are very tribal. A lot of people think software engineers are the most objective buyers out there. That's not true. It comes down to brand, the chosen language they like. We're not always cold and calculating when we pick things."

He pointed to Guillermo Rauch and the GitHub founders as people who understood their communities so deeply that success was almost inevitable. GitHub's insistence on good technical writing and its focus on enjoyment came from Ruby's culture of caring about the developer experience. Ruby traded off performance for the joy of writing code, and the GitHub founders built that ethos into everything.

I see founder after founder trying to win on benchmarks and feature matrices. Sam's argument is that taste, brand, and community feeling drive adoption. The technical stuff matters, of course, but it's only part of the story.

## "I just don't want to think about my database anymore"

That's the magic phrase Sam hears from customers, and it sums up what PlanetScale is for. Databases are a moving target: as companies grow, the load and the queries change, and someone has to stay ahead of operations. It's constant gardening.

Sam shared stories about Whop and Kick, which started with tiny first bills on a credit card and grew into massive traffic. Kick is now at every sporting event, and Whop is one of the largest consumer apps in America. Both put their databases on PlanetScale from the beginning, so they never hit the database bottleneck that kills so many growing companies.

The alternative is what Sam sees with migration customers: companies that ran out of steam on RDS or Aurora and now face painful online migrations where downtime isn't an option. He picked the hardest part of the market to serve on purpose. PlanetScale is now profitable and growing rapidly, and Sam says he wakes up every day hoping it never ends.

> "I get to wake up and log online. Talk to 60 people that I find inspiring and challenging. They are smart, kind, funny. And we control our own destiny."

That's the warm fuzzy, and after this conversation, I believe him.
