# What Anuraag Gutgutia taught me about trust as the only currency in enterprise AI sales

*Dev Propulsion Labs · March 2026*

Anuraag Gutgutia built TrueFoundry from a Meta-inspired ML deployment tool into an enterprise AI gateway now powering Fortune 10 companies. His secret to selling infrastructure when nobody knows you yet? Trust. Not features, not demos, not cold emails. Just trust.

- YouTube: https://youtu.be/N72OThsQaE8
- Show notes: https://evilmartians.com/events/anuraag-gutgutia-truefoundry

## A hedge fund guy walks into AI infrastructure

I'm Victoria Melnikova, and I talk to a lot of devtools founders. Dozens every year. But Anuraag's story caught me off guard. Here's a guy who managed $600 million in algorithmic trading at WorldQuant. Not exactly the typical path to building an enterprise AI platform. But when his co-founders from IIT Kharagpur, who had been at Meta for years, showed him the gap between Meta's internal ML platform (FB Learner) and what everyone else had access to, the opportunity was impossible to ignore.

Meta was five to seven years ahead of the curve. They had been working on what became Llama long before they released it publicly. TrueFoundry's founding idea was simple: bring that FB Learner capability to every company on the planet. What I loved about this origin story is that the co-founders had known each other for 16 years. They shared a dorm room in college. They were captains of competing teams in inter-hostel competitions. That kind of trust between founders, it turns out, became the central theme of everything Anuraag does.

## When your customers rewrite your roadmap

This one really stuck with me. TrueFoundry didn't plan to become an AI gateway company. They started as an ML deployment platform. Then ChatGPT happened, and one of their early enterprise customers, a major US pharma company, asked if they could deploy Llama and other fine-tuned models within their own compute. So TrueFoundry extended the platform.

Then by late 2023, enterprises realized they wouldn't use just one model. They needed OpenAI plus Bedrock plus Anthropic, all managed with access controls, cost limits, failover, and guardrails. So TrueFoundry built an AI gateway. And here's the thing: because they had built TrueFoundry as a software engineering platform from day zero, not an MLOps tool, agents and MCP servers just worked on it without a massive rearchitecting effort.

> "It was never an MLOps platform. It was always a platform that took any code you wrote, Dockerized it, and deployed it. So even if you had to deploy agents, it'll just work."

I see this pattern a lot in my work at Evil Martians, where I advise 40+ devtools startups a year. The companies that survive massive market shifts are the ones who made the right architectural bets early, even if they didn't fully know why those bets mattered yet.

## Trust gets you from zero to enterprise

I asked Anuraag straight up: how did you get your first enterprise customers? Did you cold email? Camp out in San Francisco lobbies? His answer was refreshingly honest. He broke trust-building into layers.

First, founder credibility. Your background, your track record. That gets you from zero to maybe 20% trust. Then comes the vision call, where you show the buyer what the future looks like. Enterprise buyers aren't purchasing today's product. They're buying into your ability to evolve it. That takes you to the next level.

Then there's thought leadership. TrueFoundry ran a podcast called TrueML where they interviewed AI leaders about deployment infrastructure. They wrote deep engineering content on LLM gateways and MCP architecture. They launched TrueFoundry Academy to educate prospects. Anuraag told me they did more than 10 education sessions with a single enterprise, just on MCP servers. None of it was sales. Just enabling.

> "The only exchange currency literally is trust. The biggest part of trust in this era would be being able to go on a call and educate a lot of your customers."

As Victoria Melnikova hosting Dev Propulsion Labs, I hear variations of this from almost every successful enterprise founder. But Anuraag's framing as "exchange currency" is the clearest articulation I've encountered. It's not a nice-to-have. It's the actual mechanism of the deal.

## Surviving the year before your first big deal

Honestly, this part of the conversation hit close to home. Their first enterprise customer took over a year from incorporation. That's a long time when you're burning cash, raising money, and trying to hire. So how did they survive? They mixed it up. While chasing Fortune 1000 logos, they also landed mid-market customers, companies doing $100M to $200M in revenue, within the first six months.

And here's something interesting about product-market timing. When TrueFoundry launched the AI gateway product about two years ago, it signed customers much faster than the deployment platform. Why? Because at first, the gateway was experimental. People used it to switch between models, test things out. It wasn't production-critical. The lower stakes shortened the sales cycle. Today that same gateway is the centerpiece of production for their enterprise customers. But the entry point was low-friction.

> "One big enterprise is equivalent to like 50 seed companies. So the time is worth it, because if you crack a good enterprise, that can actually be the right design partner that can guide you."

That framing from one of their investors is gold. One good enterprise deal doesn't just bring revenue, it brings the insights that make your product enterprise-grade for everyone else.

## The two impossible hires (and why voice agents are next)

I always ask founders about hiring because it tells you so much about where the real bottlenecks are. Anuraag named two roles that are nearly impossible to fill. First: product marketers who genuinely understand developers. Not traditional SaaS marketers who can write a blog post, but people who can speak in architectural and infrastructure terms. Who can explain why an MCP gateway matters to a head of platform engineering.

Second: pre-sales engineers. In AI infrastructure, the product changes every few days. You can't just run a static demo. You need someone who is essentially a platform engineer willing to get on customer calls and explain not just what the product does today, but what the roadmap looks like. Both roles sit at the intersection of deep technical knowledge and business communication. Both are critical for growth. Both are a nightmare to scale.

When I asked Anuraag where new founders should look for opportunities, his answer surprised me: voice agents. About a third of the globe communicates primarily through voice, not text. IVR systems, support calls, sales conversations. TrueFoundry is already seeing Fortune 10 companies power their IVR through the platform. They're expanding infrastructure support beyond LLMs to voice agent workloads. It's a massive, underserved niche.

## The thread that ties it all together

If I had to pull one thread through this entire conversation, it's that Anuraag applies the same principle everywhere: trust. Customers buy because they trust you. Employees stay because they trust the mission. Co-founders survive hard decisions because they've trusted each other for 16 years. Even TrueFoundry's go-to-market is built on educating, not selling.

> "Things go wrong all the time, but as long as that trust is built, people will want to work together with you."

I'm Victoria Melnikova, and this conversation reminded me why I started Dev Propulsion Labs in the first place. The best devtools companies aren't just shipping great products. They're building relationships where the product is almost secondary to the trust they've earned. Anuraag and TrueFoundry are a masterclass in that approach. If you're building enterprise AI infrastructure, or anything that requires someone to bet their production stack on you, listen to this one carefully.
