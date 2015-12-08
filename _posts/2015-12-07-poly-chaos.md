---
layout: post
title: "Polynomial Chaos expansions and Moments of the solution"
category: 
tags: [math]
---

[toc]

Those are personal notes that I thought I would share, in the hope they will be useful to somebody. Exercise caution; I skip over some of the details and some parts need re-writing. :-)

## Setup
Let us assume that we have a parametric function $u$ that depends on some parameters. We have a *Bayesian* perspective for those parameters. That is, each one of them follows some probability distribution. This is the usual uncertainty quantification (UQ) perspective; If $u$ is a parametric model, then there will always be some uncertainty associated with the parameters as a result of the components of the modeling process. 

One way to study those uncertainties and their effect is to express $u$ with an expansion that separates the random from the deterministic components. The idea is similar to using Fourier series to decompose periodic functions. That is, we find an appropriate basis in an $L^2$ space and write the function as an expansion with respect to that basis. 

## Introduction to spectral expansions

Here's a (formal) representation[^1] of a function $u$ by its' random and deterministic components. 

$$u(t,x,Q)=\sum_{k=0}^{\infty}u_{k}(t,x)\psi_{k}(Q).$$

The use of this expansion is justified in an $L^2$ space via the Cameron-Martin theorem[^1].

Above we have the following : 

1. $Q=[Q_{1}(\omega),\ldots,Q_{p}(\omega)]$ : independent parameters. Density of Q : $p_{Q}(q)$ : joint density of the $Q_{i}(\omega)$.

2. $u_{k}(x,t)$ : unknown deterministic coefficients (to be found).

3. $\psi_{k}(Q)$ : orthogonal polynomials that form a basis for the random component.

It is assumed that the parameters $Q_i$ are **independent** and that we know the individual densities. To build this expansion, we need to first choose a collection of basis functions. 

### Picking the right basis

What is the right basis of functions here? To pick them, we will define an inner product with respect to the joint probability $p_Q(q)$, 

$$
(f,g)=\int f(q)g(q)p_{Q}(q)dq.
$$

So now, we can use the inner product to build our basis.

$$
\begin{align*}
\mathbb{E}[\psi_{0}(\cdot)]&=1,\\
\mathbb{E}[\psi_{k}(\cdot)\psi_{j}(\cdot)]&=\int \psi_{k}(q)\psi_{j}(q)p_{Q}(q)dq=\delta_{kj}\gamma_{k}.
\end{align*}
$$

Here $\delta_{kj}$ is just a Dirac symbol, equal to 1 if $k=j$ and 0 in every other case.

For example, if $Q=Q_1\sim N(0,1)$, 

$$
\begin{align*}
\mathbb{E}[\psi_{k}(\cdot)\psi_{j}(\cdot)]&=\frac{1}{\sqrt{2\pi}}\int \psi_{k}(q)\psi_{j}(q)e^{-q^2/2}dq=\gamma_{k}\delta_{kj}
\end{align*}
$$

The weight function $e^{-x^2/2}$ corresponds to the (probabilists') Hermite polynomials[^2]. $\gamma_k$ is just a normalization constant. 

Now we can compute the coefficients of the expansion above in the usual fashion, that is by projecting $u(t,x,Q)$ on those polynomials (same as in the Fourier case). 

Then, we truncate the expansion, keeping only the first $K$ terms,

$$
u^{K}(t,x,Q)=\sum_{k=0}^{K}u_{k}(t,x)\psi_{k}(Q).
$$

Thus, if $u^K\simeq u$, we can use $u^K$ to calculate various quantities of interest, such as the expected value of $u$, the variance, etc.

## Calculating Quantities of Interest

For the **expected value**, 

$$
\mathbb{E}[u^K(t,x,\cdot)]=\mathbb{E}\left[\sum_{k=0}^{K}u_{k}(t,x)\psi_{k}(\cdot)\right]=u_0(t,x).
$$

So, the calculation of the expected value does not depend on when we do the truncation (that is, on $K$). This is true because 

$$
\mathbb{E}[\psi_k]=(\psi_k,1)=(\psi_k,\psi_0)=0.
$$

Next is the **variance** of $u^K$. 

$$
\begin{align*}
var(u^K(t,x,\cdot))&=\mathbb{E}\left[\left(u^k(t,x,\cdot)-\mathbb{E}[u^K(t,x,\cdot)]\right)^2\right]\\
&=\mathbb{E}\left[\left(\sum_{k=1}^{K}u_{k}(x,t)\psi_{k}(\cdot )\right)^2\right]\\
&=\sum_{k=1}^{K}u_{k}^2(x,t)\gamma_k.
\end{align*}
$$

The last line uses the orthogonality of the basis.

One thing to note is the dependence on $K$. So, our variance estimate's accuracy depends on when we do the truncation. 

$$
\begin{align*}
\mathrm{var}(u^K(t,x,\cdot))=\sum_{k=1}^{K}u_{k}^2(x,t)\gamma_k.
\end{align*}
$$

## A simple example 

To see how this process works, here's an application to a simple example. This is motivated by the slightly more complicated cases found in Branicki & Majda[^3].

We are interested in the following IVP :

$$
\begin{align*}
\frac{du(t,Q)}{dt}&=-a(Q)u,\ t\in [0,\infty),\\
u(0,Q)&=b.
\end{align*}
$$
The spin is that the parameter $Q$ is normally distributed, for example $Q\sim N(0,1)$. Also, for the sake of the problem, $a(Q)=\hat{a}+\sigma\cdot Q$, $\hat{a}>0$. Also $\sigma$ is fixed. Finally, $b$ is deterministic (but it could very well be random in other cases).

What is nice about this? The IVP is simple enough to have an explicit solution. 

$$
u(t,Q)=e^{-(\hat{a}+\sigma Q)t}b.
$$

And, by having an explicit description of it, we can also get moments of $u$. 

$$
\begin{align*}
\mathbb{E}[u(t,\cdot)]&=\int_{\mathbb{R}}u(t,q)\cdot \frac{e^{-q^2/2}}{\sqrt{2\pi}}dq\\
&=be^{-\hat{a}t}e^{\sigma^2t^2/2}.
\end{align*}
$$

$$
\begin{align*}
\mathrm{var}(u(t,\cdot))&=\mathbb{E}[u^2(t,\cdot)]-\mathbb{E}[u(t,\cdot)]^2\\
&=e^{-2\hat{a}t}b^2\left( e^{2\sigma^2t^2}-e^{-\sigma^2t^2}\right).
\end{align*}
$$

Both the expected value and the variance **scale** as $e^{t^2}$. 

## Applying the spectral expansion

Truncating the expansion of u : 

$$
u^{K}(t,x,Q)=\sum_{k=0}^{K}u_{k}(t,x)\psi_{k}(Q).
$$

We can also express $a,b$ in terms of our orthogonal basis. Then,

$$
\begin{align*}
a(Q)&=a_0\cdot 1 + a_1 \cdot Q,\\
b &= b_0\cdot 1.
\end{align*}
$$
where $a_0=\hat{a}$, $a_1=\sigma$ (remember that $\psi_{0}(q)=1,\psi_{1}(q)=q$).

Using the expansions above (for $u,a,b$), we can write the following system of differential equations[^4]

$$
\begin{align*}
\frac{d\vec{u}(t)}{dt}&=A\vec{u},\\
\vec{u}(0)&=\vec{b}=(b,0,\ldots,0)^T.
\end{align*}
$$

The solution of this system will provide us with the terms in the expansion of $u^K$, so we will have an approximation to $u$. Here $A$ is a $(K+1)\times (K+1)$ matrix and tridiagonal. Here's what $A$ looks like. 


$$
A=
\begin{pmatrix}
-\hat{a}& -\sigma& & & \\
-\sigma& -\hat{a}& -2\sigma& &\\
& -\sigma& -\hat{a}& -3\sigma& &\\
& & \ddots& \ddots& \ddots&\\
& & & & -K\sigma\\
& & & -\sigma& -\hat{a}& 
\end{pmatrix}.
$$

### How would statistics of the solution of the system scale?

Next, I will split $A$ to $U,L$, $K+1\times K+1$ matrices[^5] such that,

$$
\begin{align*}
U&=\text{U is diagonalizable, $U=PDP^{-1}$ for appropriate $D, P$}\\
L&=\text{L is nilpotent, i.e $L^N=0$ for some $N\leq K+1$.}
\end{align*}
$$

Then, the solution of our problem is $\vec{u}(t)=e^{At}\vec{u}(0)=e^{Ut}e^{Lt}\vec{u}(0)$. This can also be written as

$$
\begin{align*}
\vec{u}(t)=Pe^{Dt}P^{-1}(I+Lt+\ldots L^{K+1}t^{K+1})\vec{u}(0)
\end{align*}
$$

by using the properties of the matrix exponential and the matrices $U,L$.

Therefore, again by the properties of the two matrices, we can state that

$$
u_k(t)\simeq e_{k}(t)p_{k}(t)
$$

where $e_k(t)$ scales as an exponential and $p_k(t)$ scales as a polynomial.

As a consequence of our small calculation, we see that for $t\gg 1$

$$
var(u^K(t,\cdot))=\sum_{k=1}^{K} u_k^2(t)k!\simeq {e^{2ct}}t^{2(K+1)}.
$$

However, earlier we showed that

$$
var(u(t,\cdot))=e^{-2\hat{a}t}b^2\left( e^{2\sigma^2t^2}-e^{-\sigma^2t^2}\right)\simeq e^{t^2}.
$$

##Conclusion 
The variance of the truncated expansion cannot match the variance of the exact solution for large times $t$. We could slightly aleviate this problem by adding more terms in the expansion (that is, allowing $K$ to become larger). To do this, we need to solve a larger linear system. 

This is not a critique of polynomial chaos in general, just a small note on the limitations of it. Branicki & Majda[^3] has a more complete discussion.

--------------------

[^1]: Convergence is in $L^2$ sense, see Cameron-Martin theorem. Also this [paper](https://www.tu-chemnitz.de/mathematik/numa/PubArchive/genpc_m2an.pdf).

[^2]:The difference with the well-known Hermite polynomials is a normalization constant due to the small difference of the weight function from $e^{-x^2}$.

[^3]: [Fundamental Limitations of Polynomial Chaos for UncertaintyQuantication in Systems with Intermittent Instabilities](https://www.math.nyu.edu/faculty/majda/pdfFiles/CMS%20Fundamental%20branick%201-2012.pdf), M. Branicki and A.J. Majda. 

[^4]: See [Galerkin Projection](https://en.wikipedia.org/wiki/Galerkin_method).

[^5]:This decomposition is called *Jordan-Chevalley* and is very useful when computing exponentials of matrices because if $U,L$ exist, then they commute. That is, $UL-LU=0$.
