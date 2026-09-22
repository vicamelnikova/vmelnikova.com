# What Jeff Huber taught me about context engineering and why RAG is brain rot

*Dev Propulsion Labs · September 2025*

I'm Victoria Melnikova, and I recorded this episode of Dev Propulsion Labs at Chroma's office in San Francisco. Jeff hosted me and I hosted him, which was a fun swap. The conversation was as sharp and opinionated as you'd expect from someone who calls most of Twitter "brain rot that's bad for your soul."

- YouTube: https://youtu.be/tec6K0EJ8pE
- Show notes: https://evilmartians.com/events/jeff-huber-co-founder-of-chroma-context-engineering-and-modern-ai-search

Jeff has worked in applied machine learning for about 10 years, since back when nobody called it AI and it was just deep learning. Chroma started from a "there must be a better way" thesis about building production systems with ML. When they launched, most VCs had no idea what embeddings were. Six months later the market caught up, and suddenly it was hilariously obvious.

## RAG is dead, long live the king

I had just been on a call with Saoud from Cline, where we discussed how RAG is dead, so I asked Jeff straight up what's really going on.

His take is a little spicy: RAG never meant anything to anybody, and as a result it meant everything to everybody. Even teams that claim they don't use RAG, like Cline, are literally doing retrieval augmented generation when their agents grep and regex a repo, and Jeff doesn't let that slide.

> "Context engineering is a great phrase and implies the existence of a context engineer, which is literally the job of most AI teams today. Your job is not to fine-tune the model. Your job is to figure out how to engineer the context windows such that the model could be successful."

Jeff frames LLMs as unstructured computing. Classic computers run structured programs, while LLMs run unstructured ones, and the context window is the programming canvas. Put bad stuff in and the model gets distracted. Put good stuff in and it has a fighting chance. That's why search and retrieval stay critical infrastructure, whatever you call them.

## Million-token context windows are a marketing trick

Chroma published a technical report on context rot, showing how models' ability to pay attention and reason degrades as context windows grow. Models are marketed with a million tokens, but real builders don't trust them past about 40,000.

I see companies get seduced by big context window numbers and assume they can dump everything in. Jeff's research shows that doesn't work: you get mugged by reality, and reality is fully complex. Context engineering is about building systems that work 99.9999% of the time instead of seven times out of ten.

## Keep the engine open, monetize the car

I asked Jeff about Chroma's open source strategy, and he gave me the cleanest framework I've heard for commercializing open source. The engine, the database, is 100% open source under Apache 2, with no hidden indexing algorithms and no bait-and-switch on the control plane. Jeff is emphatic about this. Other companies do weird stuff where the data plane is open source but the control plane is closed, and you don't find out until you try to go distributed.

> "The engine is open source. The car sits around the engine. A lot of people just want cars. They want to get in the car, turn the key, go from point A to point B. They don't have to think about the engine."

The car, including auditing, security, auth, collaboration, and data editing, is commercial. This analogy has been on Chroma's about page from day one, and Jeff says it's never caused a problem. I've seen too many open source companies stumble over the "what stays open, what doesn't" question, and Jeff answered it before anyone asked.

## Consensus is a death blow for great products

This was probably my favorite part of the conversation. Jeff believes anything great is built by a small team of opinionated people, and he points to Linux, which is maintained by a small group of highly opinionated people. The desire for consensus feels egalitarian, but in his view it's what kills products.

At Chroma, they hire people with low egos who care more about finding the right answer than proving themselves correct. One of their values is "look for surprises": entering every discussion ready to be wrong. I asked how they keep perfectionism from turning toxic. Jeff's distinction is precise: toxic cultures evolve when people have a strong opinion that they are right, which is different from a strong opinion that they should find the right answer.

They obsess over API design in all-team meetings, and a getter name can go through 18 variants before they settle. It sounds intense, but the low-ego culture keeps it from getting combative.

## Design as a moat you can't copy

Jeff hired a designer early, and not because of any ROI calculation: he couldn't sleep at night if the product looked ugly. I love that honesty. In practice, enough people say "I love the design of your website" that it works as a real competitive advantage.

His reasoning goes like this: great design builds brand, brand is hard to build well, so a strong design culture is a moat that's difficult to copy. Engineers tend to have a blind spot for brand. Jeff doesn't.

When I asked what keeps him motivated, Jeff gave me the most grounded bull case for AI I've heard. Curing cancer is still mostly a pipe dream. The real promise is democratizing services: top-tier education, medical, financial, and legal help for anybody, for pennies, which even current models can do. You build a hammer and you can't control how it's used, but seeing customers use Chroma's technology to make the world more accessible is his warm fuzzy.
