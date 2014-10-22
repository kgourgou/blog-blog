---
layout: post
title: "Markov chain on complete graph"
category: 
tags: [mathy]
---

Just a problem that I had to solve recently and which I found interesting. 

*Let us have a simple random walk, $$X_n$$, on a complete graph with N vertices. Compute $$E[t^1\|X_0=1]$$.*

Explanations are in order. First of all, here is the complete graph for $$N=3$$, 

<center>
<img src="/images/c3.jpeg" width="300" height="300">
</center>

As you can see, every node is connected with every other. This is the general idea behind complete graphs, that every pair of nodes is connected. Want to see more of them? Click [here](http://mathworld.wolfram.com/CompleteGraph.html).

Then, if we number the nodes $$\{1,2,\ldots,N\}$$ and pick one of them, the random walk moves on the graph by picking a neighbor of our current state with uniform probability. 

Next, I should explain that $$t^1$$ is the random variable that tracks the first return time to state 1, i.e. 

$$t^1=\inf\{n\geq 1:X_n=1\}$$

The situation is as follows. For a complete graph with N vertices, the probability that the process will jump from one vertex to another is $$\frac{1}{N-1}$$, since all of them are connected. As you can imagine, there is a fair amount of movement in this chain, from one vertex to the next, visiting all states over and over.  

However, $$t^1$$ doesn't see any of that movement. In fact, it's not difficult to convince ourselves that for $$t^1$$, the Markov chain on the graph with N vertices is the same as the following, 

<center>
<img src="/images/two_state.png" width="400" height="300">
</center>

That is because, at every step, the Markov chain can either visit 1 with probability $$\frac{1}{N-1}$$ or stay on the rest of the state space with probability $$\frac{N-2}{N-1}$$. Thus, for questions like the one above (and in this **very** special case where we can't really distinguish the states based on their connectivity), we can work with a bird's eye view of the Markov chain, with just two states. 
