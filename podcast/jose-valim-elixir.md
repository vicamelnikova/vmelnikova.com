# What José Valim taught me about building a language from curiosity

*Dev Propulsion Labs · June 2025*

José Valim created Elixir because he wanted to understand how programming languages work. Thirteen years later, Discord, Supabase, Apple, and Toyota run on it. I'm Victoria Melnikova, and I talked to him on Dev Propulsion Labs about why curiosity beats business plans, why he designed Elixir to not need him, and what he's building next with Tidewave.

- YouTube: https://youtu.be/ihn2fuc_ueQ
- Show notes: https://evilmartians.com/events/jose-valim-13-years-of-elixir-and-the-future-of-ai-tooling

## His first prototype was horrible, and that was fine

José didn't set out to create a programming language, and he didn't have a CS background. He just wanted to understand how languages work because he thought it would be useful. His first prototype was, in his own words, horrible, and he shelved it for eight months.

When he came back to it, he asked his co-founders at Plataformatec if he could work on it part-time, with the explicit caveat that it might lead to nothing. His reasoning was that if the learning and the fun are there regardless of the outcome, the risk is worth taking.

I work with 40+ devtools startups a year. The ones that start from genuine curiosity tend to build something very different from the ones that start from a market thesis. Market-thesis founders are always looking over their shoulder, while curiosity-driven founders look at the problem. José looked at the problem for thirteen years, and it turned into one of the most loved programming languages in the world.

## If all we have is opinions, I prefer mine

José built Elixir on the Erlang VM, a battle-tested runtime that was nearly four decades old, because it was the best technical foundation available. He said something I keep coming back to: chasing adoption leads to bad decisions because adoption is a moving target.

> "If all we have is opinions, I prefer mine."

When Elixir launched around 2012, functional programming was hot. It isn't today, and the technical decisions still hold up. José's approach is to show developers the trade-offs and let them decide for themselves based on real information instead of hype cycles.

I've seen so many devtools startups chase whatever is trending on Twitter this month. They end up rebuilding their foundation every two years. José built on something battle-tested and let time prove him right. That takes nerve, and thirteen years of Elixir show it works.

## The only way to compete without Google behind you

When Elixir emerged, Go had Google, Swift had Apple, and Rust had Mozilla. José had none of that, so he bet on radical decentralization.

He designed Elixir to be so extensible that communities could take it into web, machine learning, embedded systems, and data processing without depending on him. Today he has no idea how some of those domains work, and that's by design: his job is to not get in the way.

I've seen plenty of language creators who want to control every framework, every library, and every direction the community takes. José built the language well enough that communities could own entire verticals. Phoenix, the web framework built by Chris McCord, was a turning point. Instead of copying ideas from other ecosystems, it asked what it would look like to use everything this technology can actually do.

## When consulting feeds the open source machine

José runs Dashbit, an Elixir development subscription where companies can ask questions about applying Elixir to their specific domains. The clever part is what he does with a question: he updates the documentation instead of only answering it, so the next person finds the answer already there.

Client questions reveal friction points, and those turn into new open source projects, documentation improvements, or language features. The built-in code formatter came directly from teams fighting over code style. Instead of letting that argument repeat across every Elixir team forever, he solved it at the language level.

I love this model because it turns consulting revenue into community infrastructure. Every paid engagement makes the free product better. Abhi from Mastra described the same philosophy to me, optimizing for not having the same conversation twice, but José has been doing it for over a decade.

## Marketing matters, even for programming languages

José knew from his Ruby on Rails background that the "build it and they will come" mindset doesn't work. He actively reached out to developers and CTOs, spoke at events, and attracted influential early adopters like Dave Thomas, who wrote an entire book on Elixir.

I see a lot of technically brilliant founders struggle with this, because they assume the code speaks for itself. José understood that getting the right people excited early would create a multiplier effect. It did. Phoenix became the proof point that Elixir could power real web applications, and the community grew from there.

Look at who uses Elixir today: Discord, Remote, Supabase, Fly.io, Apple, Toyota, BBC, PepsiCo, and Mozilla. Elixir earned that list with sound technical decisions and over a decade of community building.

## Tidewave: AI tools that understand more than code

José started Tidewave because he saw a gap nobody was filling. AI coding tools live inside the editor and understand code, but development is more than code.

He wants higher-level tools specific to web development, game engines, and other verticals. He built Tidewave after Anthropic released MCP, which finally gave him the building blocks to do it himself. His goal is for developers who work locally to get the same great experience as cloud-hosted tools like bolt.new and phoenix.new.

> "If a user experience is broken, pointing at a page element and asking 'why is this happening?' is more natural than translating the problem into code terms for an AI."

José is bringing the curiosity that created Elixir to a completely new problem, and if the last thirteen years are any indication, he's going to build something that lasts.
