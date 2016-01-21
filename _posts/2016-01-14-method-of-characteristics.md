# A short intro on the method of characteristics

The following is not super rigorous but should be a good intro to the idea.

First things first, the method of characteristics allows for the study (and, sometimes, the solution) of partial differential equations.

Let us assume that we wish to solve the following [transport equation](https://en.wikipedia.org/wiki/Convection%E2%80%93diffusion_equation).

$$
\begin{align}
u_t(x,t)-u_x(x,t)=1.
\end{align}
$$

By looking hard enough, we can solve it by picking $u(x,t)=(t-x)/2$ (this is easy to verify).

But, suppose that we can't guess the right solution. Assuming that it exists, how can we deduce it? The trick lies in the following observation. The left-hand side of the equation above looks **a lot** like a parameterized derivative of the unknown function $u$. Maybe this is not clear yet, so do read on.

Let us look at the $x\times t$ space. That is, assume that $(x,t)$  those are functions of a parameter $s$, i.e. $(x(s),t(s))$, and $(x,t)$ is a smooth curve. In that case, the chain rule (for functions of two variables) gives

$$
\frac{du}{ds}=u_x\frac{dx}{ds}+u_t\frac{dt}{ds}.
$$

An idea presents itself! What if we pick $x$ and $t$ such that they satisfy the ODEs

$$
\begin{align}
\frac{dx}{ds}&=-1,\\
\frac{dt}{ds}&=1?
\end{align}
$$

Where did those come from? Well, if you compare the equations

$$
\begin{align}
u_x(x,t)\cdot (-1)+u_t(x,t)\cdot(1)&=1,\\
u_x\frac{dx}{ds}+u_t\frac{dt}{ds}&=\frac{du}{ds},
\end{align}
$$

you will see that all we are doing is we are trying to match the coefficients of $u_t,\ u_x$. For other equations, those coefficients could be functions of $t$ or $x$ (for example we could have $u_x-tu_t=1$).

Anyway, by our matching of the coefficients we get

$$
\frac{du}{ds}=u_x\frac{dx}{ds}+u_t\frac{dt}{ds}=-u_x(x,t)+u_t(x,t)=1.
$$

Success! Even though we originally had a PDE in two variables, via this method we found some curves on which the solution satisfies the ODE

$$
\frac{du}{ds}=1
$$

which is simple to solve!. So, on those curves,

$$
u(x(s),t(s))=s+c,
$$

where the constant depends on initial data (and, of course, not on $s$). But let's keep going. We had two ODEs before

$$
\begin{align}
\frac{dx}{ds}&=-1,\\
\frac{dt}{ds}&=1.
\end{align}
$$

Solving them gives

$$
x(s)=-s+c_1,\ t(s)=s+c_2.
$$

Those solutions define the curves on which $u$ satisfies the previous ODE! Notice the constants $c_1,c_2$? Those depend on the initial conditions given (in the form of a curve). Thus it is useful to add an extra parameter to $x,t$, to capture where they are on the initial curve. Let that parameter be $m$. Now  assuming an initial condition $u(m,m)=u(x(0,m),t(0,m))=0$, we have that

$$
\begin{align}
x(0,m)&=c_1=m\\
t(0,m)&=c_2=m
\end{align}
$$

and thus $x(s,m)=m-s,t(s,m)=s+m$. Once more, it is not wrong that $c_1,c_2$ depend on $m$; They are only constants with respect to $s$. Now then our solution on those curves is

$$
u(m-s,s+m)=s.
$$

However, at the end of the day we are searching for a solution in terms of $(x,t)$, not $(s,m)$. But we have two equations with two unknowns, so we can solve for $x,t$! Solving for $s$ from the equations for $x,t$,

$$
\begin{align}
t-x=2s\Rightarrow s=\frac{t-x}{2}.
\end{align}
$$


Therefore,

$$
u(x,t)=\frac{t-x}{2}.
$$

This is the right answer as $u_x=-1/2$ and $u_t=1/2$, which leads to $u_t-u_x=1$. Also, $u(x,x)=u(t,t)=0$.

## Summary

So, what's the point behind the method? The idea is to find a parameterized curve (or a hypersurface, if on more than two variables) such that the PDE "collapses" to an equivalent set of ODEs on the surface. Then we can just solve the ODEs instead of the PDE and still get the solution.
