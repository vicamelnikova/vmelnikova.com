# What José Valim taught me about building a language from curiosity

*Dev Propulsion Labs · June 2025*

José Valim created Elixir not because he saw a market opportunity, but because he wanted to understand how programming languages work. Thirteen years later, Discord, Supabase, Apple, and Toyota run on it. Victoria Melnikova talked to him on Dev Propulsion Labs about why curiosity beats business plans, why he designed Elixir to not need him, and what he's building next with Tidewave.

- YouTube: https://youtu.be/ihn2fuc_ueQ
- Show notes: https://evilmartians.com/events/jose-valim-13-years-of-elixir-and-the-future-of-ai-tooling

## His first prototype was horrible, and that was fine

José didn't set out to create a programming language. He didn't have a CS background. He just wanted to understand how languages work because he thought it would be useful. His first prototype was, in his own words, horrible. He shelved it for eight months.

When he came back to it, he asked his co-founders at Plataformatec if he could work on it part-time -- with the explicit caveat that it might lead to nothing. His philosophy: if the learning and the fun are there regardless of the outcome, the risk is worth taking.

This really stuck with Victoria Melnikova. Having worked with 40+ devtools startups a year, she finds the ones that start from genuine curiosity tend to build something fundamentally different from the ones that start from a market thesis. The market-thesis founders are always looking over their shoulder. The curiosity-driven founders are looking at the problem. José looked at the problem for thirteen years, and it turned into one of the most loved programming languages in the world.

## If all we have is opinions, I prefer mine

José chose to build Elixir on the Erlang VM -- a battle-tested runtime that was nearly four decades old. Not because it was trendy. Because it was the best technical foundation available. He said something that I keep coming back to: chasing adoption leads to bad decisions because adoption is a moving target.

> "If all we have is opinions, I prefer mine."

When Elixir launched around 2012, functional programming was hot. Today it isn't. But the technical decisions still hold up. That's the whole point. Show developers the trade-offs, not a sales pitch. Let them decide for themselves based on real information, not hype cycles.

Victoria Melnikova has seen so many devtools startups chase whatever paradigm is trending on Twitter this month. And you know what happens? They end up rebuilding their foundation every two years. José's approach is the opposite: make the right technical call, build on something battle-tested, and let time prove you right. It takes nerve. But thirteen years of Elixir is proof that it works.

## The only way to compete without Google behind you

When Elixir emerged, Go had Google. Swift had Apple. Rust had Mozilla. José had none of that. So he did the only thing that could work: radical decentralization.

He designed Elixir to be so extensible that communities could take it into web, machine learning, embedded systems, and data processing without depending on him. Today, he has no idea how some of those domains work. And that's the point. His job is to not get in the way.

This is a masterclass in open source strategy. Victoria Melnikova has seen plenty of language creators who want to control everything -- every framework, every library, every direction the community takes. José went the other way entirely. He built the language so well that communities could take ownership of entire verticals. Phoenix, the web framework built by Chris McCord, was a pivotal moment. It didn't just copy ideas from other ecosystems. It asked: what if we leverage everything this technology can actually do?

## When consulting feeds the open source machine

José runs Dashbit, an Elixir development subscription where companies can ask questions about applying Elixir to their specific domains. But here's the thing that makes it brilliant: he doesn't just answer the questions. He updates the documentation instead, so the next person finds the answer already there.

Client questions reveal friction points. Those friction points turn into new open source projects, documentation improvements, or language features. The built-in code formatter, for example, came directly from teams fighting over code style. Instead of letting that argument repeat across every Elixir team forever, he just solved it at the language level.

I love this model because it turns consulting revenue into community infrastructure. Every paid engagement makes the free product better. Every documentation update prevents the same question from being asked again. It's the exact same philosophy Abhi from Mastra described to me: optimize for not having the same conversation twice. But José has been doing it for over a decade.

## Marketing matters, even for programming languages

José knew from his Ruby on Rails background that the "build it and they will come" mindset doesn't work. He actively reached out to developers and CTOs, spoke at events, and attracted influential early adopters like Dave Thomas, who wrote an entire book on Elixir.

This is something I see a lot of technically brilliant founders struggle with. They assume the code speaks for itself. It doesn't. José understood that getting the right people excited early would create a multiplier effect. And it did. Phoenix became the proof point that Elixir could power real web applications, and the community grew from there.

The companies using Elixir today tell the story: Discord, Remote, Supabase, Fly.io, Apple, Toyota, BBC, PepsiCo, Mozilla. That's not a niche language. That's a language that earned its place through technical excellence and smart community building over more than a decade.

## Tidewave: AI tools that understand more than code

José started Tidewave because he saw a gap nobody was filling. AI coding tools live inside the editor and understand code. But development is more than code. If a user experience is broken, pointing at a page element and asking "why is this happening?" is more natural than translating the problem into code terms for an AI.

He wants higher-level tools specific to web development, game engines, and other verticals. He built Tidewave after Anthropic released MCP, which finally gave him the building blocks to do it himself. His vision: developers who work locally deserve the same great experience as cloud-hosted tools like Bolt.new and phoenix.new.

> "If a user experience is broken, pointing at a page element and asking 'why is this happening?' is more natural than translating the problem into code terms for an AI."

Honestly, this is the kind of insight that only comes from someone who has spent thirteen years thinking about developer experience at the deepest level. José isn't chasing the AI trend. He's applying the same curiosity-driven approach that created Elixir to a completely new problem space. And if the last thirteen years are any indication, he's going to build something that lasts.
