# What Abhi Aiyer taught me about making moves in AI tooling

*Dev Propulsion Labs · December 2025*

Victoria Melnikova sat down with Abhi Aiyer on his birthday on Dev Propulsion Labs to talk about how Mastra bet everything on TypeScript for AI agents, turned a free book into a viral growth engine, and raised their seed round exclusively from builders. He's blunt, funny, and has zero patience for "that's cool" feedback. This conversation was a ride.

- YouTube: https://youtu.be/ORARUuQ-I9I
- Show notes: https://evilmartians.com/events/abhi-aiyer-co-founder-of-mastra-typescript-for-ai-agents-and-making-moves

## When "that's cool" means go away

Before Mastra became Mastra, it was an N8N-style visual agent builder. Abhi and his co-founders showed it to friends and enemies. (He insists you have to ask your enemies too.) Everyone said: "Oh, that's interesting. That's cool."

That's not what you want to hear. Abhi was distraught. Because "that's cool" is the polite version of "go away." It's like getting a thumbs-up reaction to your message when someone couldn't be bothered to type three letters.

> "If they just say 'that's cool,' that really just means go away. You want actual feedback. Like they hate it, or look where you're going."

So he sat with it. Why did they hate it? Nobody gave real feedback, so he had to reverse-engineer it himself. And the answer was clear: every developer they talked to wanted full control of the code. They didn't want drag-and-drop. They wanted TypeScript, full code, full control. Mastra pivoted, and it worked. Victoria Melnikova has seen this pattern across the startups she works with. The lukewarm response is the most dangerous one because it feels like something, but it's nothing.

## Python was just making HTTP calls the whole time

I asked Abhi straight up: why TypeScript for AI? His answer made me laugh. He looked at what Python developers were actually doing with AI and realized there was no magic. No special ML libraries doing the heavy lifting. Just HTTP calls to OpenAI.

> "I look into all this stuff and it's like, you're making an HTTP call to OpenAI. This doesn't need to be anything special. JavaScript developers already do HTTP calls. And we have better packages for a lot of stuff."

The Mastra team had been TypeScript builders their entire careers. And as of the week before our conversation, TypeScript became the most popular language on GitHub. The bet is paying off. Abhi's point is that every web developer using React will soon be building agents without even thinking about it. Python's dominance in AI is a historical artifact from the data science era, not a technical necessity for the agent era. Here's the thing: when the underlying technology is just API calls, the framework that fits your existing workflow wins.

## The book that did what marketing couldn't

Mastra's co-founder Sam wrote a free book on the principles of AI engineering. Let me tell you, this thing went viral. People who don't even use JavaScript are liking the book. Enterprise leads discover it at conferences through guerrilla marketing and enter the funnel from there. Meanwhile, developers find the framework first and use the book as supplementary education.

It's a two-sided growth engine. The book brings in enterprise leads from the top. The framework pulls in developers from the bottom. And the second book, Patterns, covers recipes for assembling the building blocks. Once you have all the Lego pieces, you need to figure out how to put them together.

I saw the books myself at TED AI in San Francisco. Not a typical developer conference. Stacks of Mastra books just sitting there. That's smart distribution. Education-first marketing is something Victoria Melnikova has been watching closely across the devtools space, and Mastra is one of the best examples I've seen of doing it right. They also run weekly livestreams on Mondays and workshops on Thursdays. It's relentless, and it works.

## 120 builders on the cap table, zero accidents

When the Mastra co-founders sat down to write why they were starting a company, the answers were hilariously honest. Abhi: work with friends and make moves. One co-founder: become the richest guy in South Dakota. (He's not there yet.)

They decided every investor should be a builder. If you've never written a line of code, don't talk to them. The result was a coalition round with 120+ builder-investors, including Paul Graham. Their cap table reflects a deliberate choice, not luck.

> "We thought we should raise all of our money from builders. If you didn't write a lick of code in your life, you shouldn't talk to us or give us money or anything."

I found this fascinating. Most startups take whatever money they can get. Mastra filtered aggressively for cultural fit on the investor side. And when Abhi hires, he does the same thing: building genuine friendships over time, not pitching jobs. His team of 18 includes people he's known for years across multiple companies. He's even hired their brothers. The whole culture is built on pre-existing trust networks, with Abhi as the connector node.

## Write the docs so you never have to talk about it again

Abhi hates writing documentation. He said it plainly. But he reframed it in a way that stuck with me: every good doc page is one less person who has to talk to you about anything. One less GitHub issue. One less management cycle of being mad about the same thing.

> "Just fix the docs so they never have to talk to you about it. Optimize for not talking to people. That's what I do."

The Mastra community roasts their docs constantly on Discord. And instead of getting defensive, Abhi takes it as actionable work. Docs and guides are treated as equal priority to bug fixes. When multiple people complain about the same thing, that's a signal to fix it permanently so you never have to discuss it again. Honestly, this is the most pragmatic approach to documentation I've heard from a founder. It's not about making docs because you love writing. It's about making docs because you love not having the same conversation over and over.

## YC's last slide made him laugh out loud

Abhi went into YC as a skeptic from LA who didn't think San Francisco mattered. His dev tools cohort was all "old people" -- 30+, with kids. They put all the adults together, and that turned out to be a strength: more life experience, less ego, deep friendships that outlasted the program.

On the last day of YC, they showed a slide: 99.99% of successful companies are in the Bay Area. Abhi started laughing out loud. People looked at him. He was laughing because it confirmed exactly what he'd come to believe during the batch. They brainwashed him, he said. But not really.

> "I started laughing. I laughed out loud and the people around me looked. I was like, I'm sorry. I just laughed because I was right. They didn't tell us specifically. But that is exactly what you see."

The principle that ties everything together at Mastra is something Abhi learned from Brad Flora at YC: generosity breeds luck. If you meet anyone from Mastra and ask for help, they'll help. No strings attached. Co-founder Shane personally emails users to check in. When I told Abhi that Shane reached out to us at Evil Martians because we were using Mastra, he just nodded. That's how they operate. The sarcasm is real, but so is the generosity. As someone who talks to dozens of devtools founders every year, Victoria Melnikova finds that in a dev tools ecosystem that can feel transactional, that generosity makes all the difference.
