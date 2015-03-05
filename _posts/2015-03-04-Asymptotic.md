---
layout: post
title: "On the asymptotic equipartition property"
category: 
tags: [Information Theory]
---


# On the asymptotic equipartition property

Most of the discussion below is motivated from the book *Elements of Information Theory* by Thomas M. Cover and Joy A. Thomas.

Let $$X=\{0,1\}$$ be the set of available symbols. Then, I am interested in playing around with sequences of n elements that are made up of the previous alphabet. For example, if $$n=4$$, such sequences may be, 

$$
\begin{align}
0101\\
0001\\
1010\\
\end{align}
$$

The asymptotic equipartition property attempts to distinguish some of those sequences as the "typical" ones. But let me first state the main result. Note that there is nothing special to the set $X$, I just picked it for ease of presentation. What is important is that $$|X|<\infty$$.

#### Asymptotic Equipartition Property
Let $$X_1,X_2,X_3,\ldots, X_n\sim P$$, $$P$$ being some probability mass function and $$X_i$$ are identically and independently distributed. Then, 

$$
-\frac{1}{n}\log(P(X_1,\ldots,X_n))\to H(X),
$$
where $$H(X)$$ is the [entropy rate](http://en.wikipedia.org/wiki/Entropy_rate) of the process. Convergence is in probability! In other words, if we have $$\epsilon_1,\epsilon_2>0$$, then there exists a $$n_0=n_0(\epsilon_1,\epsilon_2)$$ such that if $$n\geq n_0$$, 

$$
P\left\{\left\{(x_1,\ldots,x_n):\left|-\frac{1}{n}\log(P(X_1,\ldots,X_n))-H(X)\right|\geq \epsilon_1\right\}\right\}<\epsilon_2.
$$

Proof of this fact is based on the weak law of large numbers and it's not difficult to imagine. 


