# What Jeff Huber taught me about context engineering and why RAG is brain rot

*Dev Propulsion Labs · September 2025*

Victoria Melnikova recorded this episode of Dev Propulsion Labs at Chroma's office in the heart of San Francisco. Jeff hosted me, and I hosted him. A fun swap. And the conversation was exactly as sharp and opinionated as you'd expect from someone who calls most of Twitter "brain rot that's bad for your soul."

- YouTube: https://youtu.be/tec6K0EJ8pE
- Show notes: https://evilmartians.com/events/jeff-huber-co-founder-of-chroma-context-engineering-and-modern-ai-search

Jeff has been in applied machine learning for about 10 years, back when nobody called it AI, it was just deep learning. Chroma started from a "there must be a better way" thesis about building production systems with ML. When they launched, most VCs had no idea what embeddings were. Six months later, the entire world shifted, and suddenly it was hilariously obvious. Timing matters.

## RAG is dead, long live the king

I had just been on a call with Saoud from Cline, where we discussed how RAG is dead. So I asked Jeff straight up: what's really going on?

His take is nuanced and a little spicy. RAG never meant anything to anybody, and as a result it meant everything to everybody. Even teams that claim they don't use RAG, like Cline, are literally doing retrieval augmented generation when their agents grep and regex a repo. Jeff doesn't let that slide.

> "Context engineering is a great phrase and implies the existence of a context engineer, which is literally the job of most AI teams today. Your job is not to fine-tune the model. Your job is to figure out how to engineer the context windows such that the model could be successful."

The way Jeff frames it: LLMs are unstructured computing. Classic computers run structured programs. LLMs run unstructured programs, and the context window is the programming canvas. Put bad stuff in and the model gets distracted. Put good stuff in and it has a fighting chance. This is why search and retrieval remain critical infrastructure, no matter what you call it.

## Million-token context windows are a marketing trick

Chroma published a technical report on context rot, showing how models' ability to pay attention and reason degrades as context windows grow. Models are marketed with a million tokens, but real builders don't trust them past about 40,000.

This really resonated with Victoria Melnikova. I see companies getting seduced by the big context window numbers and thinking they can just dump everything in. Jeff's research shows that doesn't work. You get mugged by reality. And reality is fully complex. The job of context engineering is building systems that are reliable not seven times out of ten, but 99.9999% of the time.

## Keep the engine open, monetize the car

Victoria Melnikova asked Jeff about their open-source strategy, and he gave me the cleanest framework I've heard for commercializing open source. The engine, the database, is 100% open source under Apache 2. No gotchas, no hidden indexing algorithms, no bait-and-switch with the control plane. Jeff is emphatic about this. Other companies do weird stuff where the data plane is open source but the control plane is closed, and you don't find out until you try to go distributed.

> "The engine is open source. The car sits around the engine. A lot of people just want cars. They want to get in the car, turn the key, go from point A to point B. They don't have to think about the engine."

The car, including auditing, security, auth, collaboration, and data editing, is commercial. This analogy has been on Chroma's about page from day one. Jeff says there's never been a problem. I've seen too many open-source companies stumble over the "what stays open, what doesn't" question. Jeff answered it before it was even asked.

## Consensus is a death blow for great products

This was probably my favorite part of the conversation. Jeff believes anything great is built by a small team of opinionated people. Not by large teams. Not by consensus. He points to Linux as proof. It's maintained by a small group of highly opinionated people. The desire for consensus feels egalitarian, but it's actually what kills products.

At Chroma, they hire people with low egos who are invested in finding the right answer rather than proving themselves correct. One of their values is "look for surprises," entering every discussion ready to be wrong. I asked how they prevent perfectionism from becoming toxicity. Jeff's distinction is precise: toxic cultures evolve when people have a strong opinion that they are right. That's different from having a strong opinion that they should find the right answer.

They obsess over API design in all-team meetings. Getter names have 18 different variants before they settle. It sounds intense, but the culture of low ego makes it work. It's opinionated without being combative.

## Design as a moat you can't copy

Jeff hired a designer early. Not because of ROI calculations, but because he couldn't sleep at night if the product looked ugly. I love that honesty. In practice, the number of people who say "I love the design of your website" turns out to be high enough that it functions as a real competitive advantage.

His argument is logical: if great design builds brand, and brand is hard to build well, then having a strong design culture becomes a moat that's difficult to replicate. Engineers tend to have a blind spot for brand. Jeff doesn't.

When Victoria Melnikova asked what keeps him motivated, Jeff gave me the most grounded bull case for AI I've heard. Not curing cancer. That's still mostly a pipe dream. The real promise is democratizing services. World-class education, medical, financial, and legal services for anybody, for pennies. Even current models can do this. You build a hammer and you can't control how it's used. But seeing customers use Chroma's technology to make the world more accessible. That's the warm fuzzy.
