# What Stas Kelvich taught me about Neon's $1B acquisition and the agent gold rush

*Dev Propulsion Labs · March 2026*

Neon's co-founder Stas Kelvich went from measuring time in attoseconds as a quantum physicist to closing a billion-dollar Databricks deal in 30 days. It's one of the most technical conversations I've had on Dev Propulsion Labs, and one of the sharpest on strategy.

- YouTube: https://youtu.be/fTekip2Uyvw
- Spotify: https://open.spotify.com/episode/1mHXui7GsyDM1mERasjAfc
- Apple Podcasts: https://podcasts.apple.com/us/podcast/stas-kelvich-of-neon-on-his-back-story-adapting-to/id1714823787?i=1000754386218
- Show notes: https://evilmartians.com/events/stas-kelvich-from-quantum-physics-to-neons-1b-databricks-acquisition

## From laser physics to fixing Postgres

Stas trained as a physicist working on strong laser fields and attosecond time measurement, but he was always coding on the side, including Ruby on Rails since version one, around 2007. His path into Postgres started with a problem nobody had solved.

He needed multi-dimensional indexing for a travel booking engine, found that Postgres couldn't handle it well, looked into why, and fixed it. The Postgres community welcomed the contribution, and he kept going. When I asked why he stuck with databases, he said they have a bigger-than-average institutional memory. Papers from the 1970s are still useful because the fundamentals haven't changed.

> "When you contribute to Postgres, you do something small, and people across the world start using it. People write emails from projects you didn't even know existed."

I've had several Postgres founders on Dev Propulsion Labs, and they all describe the community the same way: vocal, opinionated, and welcoming. Stas fits right in.

## The bet that made Neon: building the cloud, not just the database

Co-founder Nikita Shamgunov had the idea to separate storage and compute for Postgres. He recruited Stas and Heikki Linnakangas from the Postgres community. But one of the earliest and most consequential decisions was whether to build just the database engine or the full cloud platform. They chose the cloud.

Stas put it bluntly: selling software for other vendors to host is a bad business model, and you need to own the stack end to end. The bet meant a larger, more expensive engineering team. Their cloud team was maybe three people while the engine side had 10 to 15, but owning the cloud gave Neon a much stronger differentiator.

I see the same thing across the startups I work with. The ones that own the full stack control the developer experience, and that's what drives adoption. Building an engine and hoping someone else hosts it well is a harder game.

## How they solved sharding by not solving it

I asked Stas about Supabase's multi-tenant sharding announcement, expecting a technical deep-dive. I got a strategy answer instead.

> "We solved the sharding problem by not solving it. We concentrated on making one Postgres database work really well."

The previous generation of distributed Postgres-compatible databases, CockroachDB and YugabyteDB, pivoted after struggling to gain momentum. Stas says the majority of the market by revenue is single databases that are fully Postgres-compatible, and that's a bigger opportunity than sharding for a smaller niche. It's a David Cramer-level focus move: decide what you're not going to do, and stick to it.

## When agents stress-tested everything overnight

This detail blew my mind: when Replit launched its Agent product, each database on Neon ended up with around 500 branches, often maxing out tier limits. Humans never used Neon that way. Neon had to do significant infrastructure work at the metadata and orchestration level to handle it.

They didn't plan for agents. From day one, Neon's product philosophy was to make databases usable by developers who aren't database experts, with two clicks to create a database and GitHub-integrated branching for CI/CD. Whatever is quicker for a junior developer to set up turns out to be quicker for agents too, so those decisions prepared Neon for agents by accident.

I talk about agent experience a lot, because I think it's a new service category. Startups that invested in developer experience early are now getting paid back as agents become their biggest power users.

## Ninety lawyers and blank signature pages

Databricks' $1B acquisition of Neon closed in about 30 days, which is almost unheard of for a deal that size. At one point, 90 lawyers were working on it at once. The part that made me laugh: employees signed papers with blank fields because there wasn't time for custom contracts with proper share numbers.

> "A lot of people were worried, but everyone went with it."

Stas says the deal made sense because Neon wanted to move upmarket into enterprise, and doing that alone takes years. You need salespeople, iterations, and you're suddenly operating in a human domain rather than an engineering domain. After an earlier Azure integration moved slowly, they started exploring who could help them compete with the hyperscalers. Databricks was already investing in self-serve and needed a Postgres offering to complement Lakehouse, so the two fit.

One year in, the org structure has stayed mostly the same and attrition has been minimal. Stas says the biggest positive change is access to strong Databricks engineers and a stronger hiring brand. With Databricks behind them, challenging the hyperscalers looks a lot more realistic than it did when Neon was on its own.

## Stay in the loop and move fast

Stas experienced what he calls a personal "phase transition" around late 2025 when AI coding tools stopped mostly failing on his tasks and started mostly working. He can now build pretty big things and run experiments without touching an editor.

His advice for founders: stay in the loop, experiment when something feels right, and move fast. You don't need to be the smartest person, just in the right place at the right time. It's a gold rush, and consumption-based business models are on the right side of it.

I work with 40+ devtools startups a year, and the ones with consumption-based models are having a very different 2026 from the ones on per-seat pricing. Agents don't buy seats, they consume infrastructure, and a business model that charges for consumption is in a good position.
