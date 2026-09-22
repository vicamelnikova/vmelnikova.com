# What William Imoh taught me about AEO, killing your own traffic, and building a GTM agent

*Dev Propulsion Labs · August 2026*

I'm Victoria Melnikova, and I lead marketing at Evil Martians, where all 50 of us write for the blog. So I brought my own list of questions to this episode. William Imoh studied chemical engineering, taught himself to code, and became a developer advocate. Freelancing part-time, he topped out at ten articles a month, so he started Hackmamba to find more engineers who could write and sell.

- YouTube: https://youtu.be/e74sg-W2M30
- Show notes: https://evilmartians.com/events/william-imoh-hackmamba

Hackmamba has one rule it doesn't bend: every writer has an engineering background. William's reason is practical. In developer tools, if you get a fact wrong, a competitor posts it on Twitter "and you're cooked." Every brief spells out who the piece is for and, in his words, why they should give a shit.

## Sell with a strong suggestion

Hackmamba never pitches the client's product inside an article. The product shows up as what William calls a "strong suggestion," and writers are free to discuss competitors as long as they stay objective. Comparison posts go deep, because the reader is often a senior engineer who's been asked to pick a vector database and already knows the basics. So the writers use the product before they write about it.

## AEO is ten years of SEO, compounded

I asked what changed now that everyone optimizes for LLMs. William's answer, which he admitted doesn't help him sell, was: not a lot. He'd asked Matt Biilmann how Netlify gets 30 to 50K signups a day, mostly from ChatGPT and AI referrals. Matt told him they aren't doing anything special. It's ten years of product, brand, community content, SEO, customer stories, and open source work adding up.

> "What we see today as AEO or AI search optimization is as a result of great SEO work."

Hackmamba has gone back to fundamentals: the right keywords, real answers, author authority, clean header hierarchy, even image alt text and filenames, because AI engines crawl images too.

Two things did change. Content written the way Hackmamba wrote in 2021 now reads as AI slop, which William thinks is fair, since that content probably trained the models. So the team leans on strong opinions and expert insight: nothing happened to an AI model at work yesterday. Clients also want everything faster. If GitHub goes down today, the reactive post has to be out tomorrow morning. William still measures AI referrals in plain analytics, because he doesn't find the citation-tracking tools deterministic enough.

## Cut the traffic that will never buy

This was my selfish question. Our blog reaches about half a million engineers a year, but Evil Martians sells to CTOs and technical co-founders. William's clients have the same split between champion and buyer, and his default is to give each one its own channel. The blog goes to the engineer, since it sits close to the product. LinkedIn or X, podcasts, and YouTube go to the buyer, who cares about brand and outcomes.

Hackmamba went through this itself. Most of its traffic came from developers reading posts William had written as a developer, and none of them were going to hire an agency. They cut that content, and traffic tanked. For a while they kept a bit of it around for the numbers, then stopped.

> "And everyone panics when traffic is dropping. But we needed to bite the bullet and say, 'This is just not good traffic.'"

For companies that sell to CTOs, his advice is to skip volume, write compact case studies, and push them on social.

## Distribution starts on day one

For an early-stage team with no blog and no audience, Hackmamba starts strategy, content, distribution, and social engagement at the same time. Each piece gets reworked for Reddit, X, LinkedIn, dev.to, Medium, or Substack, and sometimes for Discord, Telegram, and Slack communities, where admins get touchy about promotion. They never just drop a link. Each channel gets a summary or about 400 words that stand on their own. The target is 30 to 50K organic impressions a month per client. Newsletter sponsorships go through Paved, and they keep four or five influencers for launches instead of a long list.

## Cancel the subscription, then finish the build

Hackmamba used to need Linear, Dropbox Paper, Grammarly, Buffer, Semrush, Surfer SEO, and Google Sheets to ship four articles a month. Plugging Claude into that stack only added one more tool. So William set what he calls a crazy goal, cutting content production from a month to a week without lowering quality, and the team built Boki.

The rule for every module was to cancel the subscription first and finish the build second, so there was no going back. Boki now has a Kanban board, a collaborative editor (William tipped his hat to the Google Docs team, since his writers work from Australia, India, and South America), campaign plans that live next to the content, a social scheduler, a link shortener, and "expert insights": an expert gets an email, opens it, and talks for five minutes while speech-to-text captures it.

Only after all that did they add the agent, built with LangGraph and Mem0, with skills kept in a GitHub repo and an MCP server that pulls from tools like Ahrefs and Gong. His order for anyone building their own: context first, then an orchestrator where the human stays in the loop, then skills, then memory (which barely matters in marketing, since anything three weeks old is stale), then models.

I told him on air that I was sold. The strong suggestion worked on me too.

When I asked what makes him feel great about the work, William said he feels like a shark in water most days, except the days he loses a deal.

> "You don't wish it into existence. You can work it into existence."
