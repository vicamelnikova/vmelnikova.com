# What Anuraag Gutgutia taught me about trust as the only currency in enterprise AI sales

*Dev Propulsion Labs · March 2026*

Anuraag Gutgutia built TrueFoundry from a Meta-inspired ML deployment tool into an enterprise AI gateway that Fortune 10 companies now run on. I asked him how you sell infrastructure when nobody knows you yet, and every answer came back to trust.

- YouTube: https://youtu.be/N72OThsQaE8
- Show notes: https://evilmartians.com/events/anuraag-gutgutia-truefoundry

## A hedge fund guy walks into AI infrastructure

I'm Victoria Melnikova, and I talk to dozens of devtools founders every year, but Anuraag's story still caught me off guard. He used to manage $600 million in algorithmic trading at WorldQuant, which isn't the usual road to an enterprise AI platform. Then his co-founders from IIT Kharagpur, who had been at Meta for years, showed him the gap between Meta's internal ML platform (FB Learner) and what everyone else had access to, and he couldn't ignore it.

Meta was five to seven years ahead of the curve and had been working on what became Llama long before it went public. TrueFoundry's founding idea was to bring that FB Learner capability to every company on the planet. What I loved is how far back the co-founders go: 16 years. They shared a dorm room in college and captained competing teams in inter-hostel competitions. That trust between founders turned out to be the theme of our whole conversation.

## When your customers rewrite your roadmap

TrueFoundry didn't plan to become an AI gateway company. It started as an ML deployment platform. Then ChatGPT happened, and an early enterprise customer, a major US pharma company, asked to deploy Llama and other fine-tuned models on its own compute, so TrueFoundry extended the platform.

By late 2023, enterprises realized they wouldn't use just one model. They needed OpenAI plus Bedrock plus Anthropic, all managed with access controls, cost limits, failover, and guardrails, so TrueFoundry built an AI gateway. Because the team had built it as a software engineering platform from day zero rather than an MLOps tool, agents and MCP servers later ran on it without a big rearchitecture.

> "It was never an MLOps platform. It was always a platform that took any code you wrote, Dockerized it, and deployed it. So even if you had to deploy agents, it'll just work."

I see this a lot at Evil Martians, where I advise 40+ devtools startups a year. The companies that get through big market shifts usually made the right architectural bets early, sometimes before they knew why those bets would matter.

## Trust gets you from zero to enterprise

I asked Anuraag straight up how he got his first enterprise customers. Cold email? Camping out in San Francisco lobbies? Instead, he broke trust-building into layers.

The first layer is founder credibility, meaning your background and track record. That gets you from zero to maybe 20% trust. Next comes the vision call, where you show the buyer what the future looks like, because enterprise buyers are betting on your ability to evolve the product more than on what it does today.

Then there's thought leadership. TrueFoundry ran a podcast called TrueML, where they interviewed AI leaders about deployment infrastructure. They also wrote deep engineering content on LLM gateways and MCP architecture and launched TrueFoundry Academy to educate prospects. Anuraag told me they did more than 10 education sessions with a single enterprise, just on MCP servers, and none of them was a sales pitch.

> "The only exchange currency literally is trust. The biggest part of trust in this era would be being able to go on a call and educate a lot of your customers."

I hear some version of this from almost every enterprise founder on Dev Propulsion Labs, but "exchange currency" is the clearest way anyone has put it to me. In his telling, trust is how the deal actually gets done.

## Surviving the year before your first big deal

Their first enterprise customer took over a year from incorporation. That's a long time to burn cash while raising money and hiring. To get through it, they kept chasing Fortune 1000 logos but also landed mid-market customers, companies doing $100M to $200M in revenue, within the first six months.

Timing mattered too. When TrueFoundry launched the AI gateway about two years ago, it signed customers much faster than the deployment platform had. At first the gateway was experimental: people used it to switch between models and test things out, and nothing in production depended on it. Lower stakes meant a shorter sales cycle. Today that same gateway sits at the center of production for their enterprise customers.

> "One big enterprise is equivalent to like 50 seed companies. So the time is worth it, because if you crack a good enterprise, that can actually be the right design partner that can guide you."

That framing came from one of their investors, and I love it. A good enterprise deal brings revenue, and it also brings the insights that make your product enterprise-grade for everyone else.

## The two impossible hires (and why voice agents are next)

I always ask founders about hiring, because it shows where the real bottlenecks are. Anuraag named two roles that are nearly impossible to fill. The first is product marketers who understand developers: people who can talk architecture and infrastructure and explain to a head of platform engineering why an MCP gateway matters, rather than traditional SaaS marketers who can write a blog post.

The second is pre-sales engineers. In AI infrastructure the product changes every few days, so a static demo won't cut it. You need someone who is basically a platform engineer, willing to get on customer calls and walk through what the product does today and where the roadmap is going. Both roles need deep technical knowledge and business communication in one person, and both are a nightmare to scale.

When I asked where new founders should look for opportunities, his answer surprised me: voice agents. About a third of the globe communicates primarily through voice rather than text, across IVR systems, support calls, and sales conversations. TrueFoundry already has Fortune 10 companies running their IVR through the platform, and it's expanding infrastructure support beyond LLMs to voice agent workloads. To me, that's a big and underserved niche.

## Trust runs through all of it

Anuraag applies the same principle everywhere. Customers buy because they trust you, and employees stay because they trust the mission. His co-founders get through hard decisions on 16 years of trust, and even TrueFoundry's go-to-market runs on education rather than selling.

> "Things go wrong all the time, but as long as that trust is built, people will want to work together with you."

This conversation reminded me why I started Dev Propulsion Labs in the first place. The best devtools companies I know build relationships where the product almost comes second to the trust they've earned, and TrueFoundry is a great example. If you're building enterprise AI infrastructure, or anything where someone has to bet their production stack on you, this one is worth a careful listen.
