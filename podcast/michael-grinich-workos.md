# What Michael Grinich taught me about building invisible infrastructure

*Dev Propulsion Labs · November 2025*

Michael Grinich built WorkOS into the plumbing behind OpenAI, Cursor, Anthropic, and Vercel. I'm Victoria Melnikova, and I sat down with him on Dev Propulsion Labs to find out why the best product is one nobody notices, why he fired his entire marketing team, and why AI companies need enterprise readiness sooner than any startups before them.

- YouTube: https://youtu.be/yiGutRWdiAg
- Show notes: https://evilmartians.com/events/michael-grinich-founder-of-workos-the-plumbing-behind-openai-and-cursor

## The perfect storm nobody planned for

WorkOS isn't a new company. Michael started building it almost seven years ago, and yet in 2025 he found himself at the center of every major AI business. I asked him straight up why, and he gave me three reasons.

First, AI companies are all B2B software companies. They sell a different product, but it's still business software for other companies. Second, they grow upmarket insanely fast: Slack and Dropbox waited five to seven years before going after enterprise, and AI companies do it within six to twelve months. Third, AI products touch so much sensitive data that security scrutiny is off the charts. You can tell someone not to put secrets in Figma, but an AI product only works if you connect it to everything.

> "Not only do these products grow faster into the enterprise, not only do they do it sooner in their lifecycle, they're also scrutinized by security and IT much more heavily. That has created this perfect storm where they all need what we've built very fast."

I work with 40+ devtools startups a year, and I see this pattern constantly. The buyer is the same as before, but the road to enterprise got so short that companies need SSO, permissions, and compliance on day one. WorkOS had spent seven years building exactly that, so when AI companies came looking, the infrastructure was already there.

## Cross the enterprise chasm or die trying

In 2019, Michael gave a talk at GitHub called "Crossing the Enterprise Chasm," and it became the thesis of the whole company. Companies that make it across the gap between early adopters and enterprise customers win the whole market. The ones that don't get acquired or fade away.

He used Trello as the cautionary tale. Trello was amazing for small teams (I ran my first projects on it), but it never figured out how to sell to larger organizations and ended up absorbed by Atlassian instead of becoming the next Slack or GitHub. GitHub, meanwhile, captured enterprise, and that sticky revenue fueled years of growth and innovation.

> "Companies that cross the chasm end up winning the whole market. The revenue is really sticky, the customers stay around, they expand, and it lets you continue to innovate."

WorkOS exists to shrink that chasm so companies can cross it in weeks instead of years. The CTO of Webflow integrated SSO over a single weekend. I see the same thing with the startups I work with: the ones that move upmarket early are the ones that end up on top.

## The day he fired his whole marketing team

Michael once hired an entire marketing team built for enterprise sales, then realized WorkOS was actually a developer-led company. The skill sets were completely different. He compared it to hiring firmware engineers when you actually need web engineers.

He gave them good severance and they went to good places, but it was an expensive lesson. Product-market fit at WorkOS came from developer experience and the enterprise readiness story, and sales methodology had little to do with it.

> "Most salespeople join after companies have product market fit. They've actually never seen a company pre-PMF. There's no need for a CRO at a company that's pre-PMF. So they just don't know how to see it."

He used a restaurant analogy I loved: it's like someone telling you the menu design is really important, and you're asking, what about the food? Shouldn't the food be good first? For Michael, the product comes first and the sales methodology comes later.

## Hire plumbers, not prima donnas

Michael told me something that changed how I think about infrastructure companies. Plumbing, he said, has saved more lives than any other technology ever made, more than medicine or transportation. It's what lets cities exist, and yet nobody builds monuments to plumbers.

So WorkOS hires people who find deep satisfaction in invisible work: the lighting crew rather than the prima donnas on stage, people who get a kick out of watching other companies succeed on the platform. When the best compliment an infrastructure company can get is that customers forget it exists, that hiring filter matters more than almost anything.

I've seen a lot of startups struggle with this. They hire people who want the spotlight, whether that's conference talks or Twitter followers. If you're building plumbing, you need people who are happy when the show runs perfectly and nobody thinks about the lighting. Michael has built that culture from day one, and you can see it in how WorkOS operates: distributed since before COVID, with people staying for years and institutional knowledge compounding.

## Talk to users: the algorithm that burns out bad ideas

Michael said something about founders and users that made me laugh out loud: engineers exhaust every other possibility before talking to customers. Building is fun, it's a creative flow state, and users ruin it with feedback.

But no product design survives contact with the market, so at WorkOS every new feature starts with user conversations. If a team presents a design doc without having talked to users, they're sent back: go talk to five or ten companies and come back next week.

> "If you force yourself to constantly talk to users, it's this algorithm that will burn out the bad ideas and let you converge to the good ones. You will find the good ideas if you go talk to people."

WorkOS built in stealth for the first two years, but Michael was talking to users the entire time. There was no public signup, yet it was never a secret: he was yelling about it from the mountaintops, getting investors to introduce him to people, and meeting founders everywhere. When they launched on Hacker News in March 2020, right in the middle of COVID lockdowns, the comments were overwhelmingly positive. People said they'd had to build this before and never wanted to do it again.

## Perfection is when the product disappears

I ended by asking Michael what makes him feel great about his work, and his answer was the most quietly powerful thing I've heard on Dev Propulsion Labs. He doesn't want to be the firework that burns bright and everyone sees. He wants to be the small, continued push in the background that makes things a little bit nicer for everyone.

> "Perfection in a product is not something that you pay attention to. Perfection is when it disappears into the background. The best cello is the one that becomes part of the body, part of the musician. The cello and human are the same thing."

What fills his cup is being a very small part of Cursor's journey to a billion-dollar run rate, Anthropic's growth, or Webflow scaling from $5M to $200M in revenue. When someone asked if he'd ever sell the company, he said never in a million years. After an hour with him, I believe it. Michael has a surfer-calm energy that comes from knowing exactly what wave he's riding.
