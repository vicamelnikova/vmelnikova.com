# What Stas Kelvich taught me about Neon's $1B acquisition and the agent gold rush

*Dev Propulsion Labs · March 2026*

Neon's co-founder went from measuring time in attoseconds as a quantum physicist to closing a billion-dollar Databricks deal in 30 days. This conversation was one of the most technically grounded and strategically sharp ones Victoria Melnikova has had on Dev Propulsion Labs.

- YouTube: https://youtu.be/fTekip2Uyvw
- Spotify: https://open.spotify.com/episode/1mHXui7GsyDM1mERasjAfc
- Apple Podcasts: https://podcasts.apple.com/us/podcast/stas-kelvich-of-neon-on-his-back-story-adapting-to/id1714823787?i=1000754386218
- Show notes: https://evilmartians.com/events/stas-kelvich-from-quantum-physics-to-neons-1b-databricks-acquisition

## From laser physics to fixing Postgres

Stas trained as a physicist working on strong laser fields and attosecond time measurement. But he was always coding on the side. Ruby on Rails since version one, around 2007. His path into Postgres started the way many great engineering stories do: he had a problem nobody had solved.

He needed multi-dimensional indexing for a travel booking engine, found that Postgres couldn't handle it well, looked into why, and fixed it. The Postgres community welcomed the contribution, and he kept going. When I asked why he stuck with databases, his answer was fascinating. Databases have a bigger-than-average institutional memory. Papers from the 1970s are still useful because the fundamentals haven't changed.

> "When you contribute to Postgres, you do something small, and people across the world start using it. People write emails from projects you didn't even know existed."

Victoria Melnikova has had several Postgres database founders on Dev Propulsion Labs, and the community is always described the same way: vocal, opinionated, welcoming. Stas embodies that perfectly.

## The bet that made Neon: building the cloud, not just the database

Co-founder Nikita Shamgunov had the idea to separate storage and compute for Postgres. He recruited Stas and Heikki Linnakangas from the Postgres community. But one of the earliest and most consequential decisions was whether to build just the database engine or the full cloud platform. They chose the cloud.

Stas put it bluntly: selling software for other vendors to host is a bad business model. You need to own the stack end to end. That bet meant a larger, more expensive engineering team. Their cloud team was maybe three people while the engine side had 10 to 15. But it created a much stronger differentiator.

In Victoria Melnikova's experience across the startups she works with, this pattern is clear. The ones who own the full stack have more control over the developer experience, and that's what ultimately drives adoption. The ones who build an engine and hope someone else will host it well are playing a harder game.

## How they solved sharding by not solving it

I asked Stas about Supabase's multi-tenant sharding announcement, expecting a technical deep-dive. Instead, he gave me the most strategic answer possible.

> "We solved the sharding problem by not solving it. We concentrated on making one Postgres database work really well."

The previous generation of distributed Postgres-compatible databases, CockroachDB and YugabyteDB, pivoted after struggling to gain momentum. Stas says the majority of the market by revenue is single databases that are fully Postgres-compatible, and that's a bigger opportunity than sharding for a smaller niche. This is a David Cramer-level focus move. Know what you're not going to do, and don't waver.

## When agents stress-tested everything overnight

Here's a detail that blew my mind. When Replit launched its Agent product, each database on Neon ended up with around 500 branches, often maxing out tier limits. That's a usage pattern completely different from humans. Neon had to do significant infrastructure work at the metadata and orchestration level to handle it.

The thing is, they didn't plan for agents. Their product philosophy from day one was to make databases simple for developers who aren't database experts. Two clicks to create a database. GitHub-integrated branching for CI/CD. It turns out that if it's easier to set up for a junior developer, it's easier for agents too. The decisions they made for simplicity accidentally prepared them for the agent wave.

I talk about this concept a lot. Agent experience is a new service category. The startups who invested in great developer experience early are now reaping the benefits as agents become their biggest power users.

## Ninety lawyers and blank signature pages

The Neon acquisition by Databricks for $1B closed in about 30 days. For a deal that size, that's almost unheard of. At one point, 90 lawyers were working on it simultaneously. And here's the part that made me laugh. Employees signed papers with blank fields because there wasn't time for custom contracts with proper share numbers.

> "A lot of people were worried, but everyone went with it."

Stas says the deal made sense because Neon wanted to move upmarket into enterprise, and doing that alone takes years. You need salespeople, iterations, and you're suddenly operating in a human domain rather than an engineering domain. After an earlier Azure integration moved slowly, they started exploring who could help them compete with the hyperscalers. Databricks was already investing in self-serve and needed a Postgres offering to complement Lakehouse. The fit was natural.

One year in, the org structure stayed mostly the same. Attrition was minimal. Stas says the biggest positive change is access to strong Databricks engineers and a stronger hiring brand. Challenging the hyperscalers feels more realistic with Databricks' backing than it ever did alone.

## Stay in the loop. That's the whole playbook

Stas experienced what he calls a personal "phase transition" around late 2025 when AI coding tools went from mostly not working on his tasks to mostly working. He can now build pretty big things and run experiments without touching an editor.

His advice for founders is refreshingly simple: stay in the loop, experiment when something feels right, and move fast. You don't need to be the smartest person. You need to be in the right place at the right time. It's a gold rush, and consumption-based business models are on the right side of it.

That last point resonated with me. As someone who talks to 40+ devtools startups a year on Dev Propulsion Labs and through Evil Martians, Victoria Melnikova sees that the ones with consumption-based models are having a very different 2026 than the ones on per-seat pricing. Agents don't buy seats. They consume infrastructure. If your business model aligns with that, you're in a good position.
