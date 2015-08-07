---
layout: post
title: "A tolerance for the relative entropy?"
category: math, research
tags: [Information theory]
---
This recently came up and I thought the answer was interesting enough to write about.


First, some quick basics. Let us assume that we have two continuous, univariate probability distributions with probability density functions $$p,q$$. Then, the relative entropy (RE) of $$q$$ with respect to $$p$$ is defined as 

$$
R(q|p):=\int_{-\infty}^{\infty}q(x)\log\left(\frac{q(x)}{p(x)}\right)dx.
$$

There's so much to be said about this quantity, it's difficult to start from somewhere. It is also called the [Kullback-Leibler divergence](https://en.wikipedia.org/wiki/Kullback%E2%80%93Leibler_divergence) of $$q$$ given $$p$$. It encodes how much information is lost (on average, since after all it's an expected value) if we use a coding scheme that is optimized for a source with distribution $$q$$, even though the true distribution of our source is $$p$$.

As you can expect, if $$ p=q $$, then there is no loss of information, so the relative entropy should be zero. This is indeed the case, as can be seen by the definition above. In all other instances,

$$
 R(q|p)\geq 0.
$$

We may be tempted to state that $$R$$ could be a metric in the space of probability distributions, but that is simply not true. The RE is neither symmetric, nor does it satisfy the triangle inequality. However, it can still be seen as a distance [[1](https://en.wikipedia.org/wiki/Kullback%E2%80%93Leibler_divergence#Relation_to_metrics)] between probability distributions, plus it is related to some metrics.

## But, when can we say $$p,q$$ are close?

The problem now is this : 

If we look at the relative entropy as if it is a distance between distributions, is there a positive number, say $$\epsilon$$, such that if 

$$R(q\|p)<\epsilon,$$ 

then we can feel satisfied that $$p$$ and $$q$$ are close?
    
To clarify this question, let's look at another example. The infinity norm would be

$$
\|p-q\|:=\sup_{x\in \mathbb{R}}|p(x)-q(x)|.
$$

So, if you give me $$p,q$$ and you tell me what $$p$$ looks like and that $$\|p-q\|<0.1$$, then, **regardless** of what $$q$$ actually is, **I have some certainty towards what it is not**. This is one of the great strengths of the definition of a metric, that we can infer properties of the objects based on distance. This is also the case for the relative entropy, though not in this classical sense. 

## Two univariate Normals enter a bar ...
Let us have $$N(\mu_1,\sigma_1)$$ and $$N(\mu_2, \sigma_2)$$. Since both have a density function, we can calculate the RE explicitly, starting from our definition. A couple of integrations later, we have, 

$$
R(q|p)=\log\left(\frac{\sigma_2}{\sigma_1}\right)+\frac{\sigma_1^2+(\mu_1-\mu_2)^2}{2\sigma_2^2}-1/2.
$$

This formula is very interesting, as it illuminates the kind of information that RE captures about the two distributions. Note that we can make RE arbitrarily small in two ways.

1 Have $$\mu_1=\mu_2$$ and $$\sigma_1=\sigma_2$$.

2 Have $$\mu_1\neq \mu_2$$ and $$\sigma_1,\sigma_2\gg(\mu_1-\mu_2)^2$$.

The first case is expected; If the two distributions are equal, then the RE is zero. But the second is a bit cooler. The two distributions can be different, but in the presence of a lot of variance (i.e a lot of noise), the RE quantifies the loss of information as small. In the example below 

$$
R(q|p)\simeq 10^{-7},
$$

even though the distributions are substantially different.

<img src="https://drive.google.com/uc?export=download&id=0B4JwQ7883JIGUGxwaTFUd2daZjA" alt="Two Normal distributions with large variance but different means">

[Here is a jupyter notebook](https://github.com/kgourgou/blog-RE-tolerance), in case you want to do other experiments.



