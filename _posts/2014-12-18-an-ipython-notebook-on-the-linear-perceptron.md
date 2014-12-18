---
layout: post
title: "An IPython notebook on the linear perceptron."
tags: machine learning, python
---

Here is an [IPython notebook](http://nbviewer.ipython.org/github/kgourgou/Linear-Perceptron/blob/master/Perceptron-Algorithm.ipynb) with an implementation of the linear percepton algorithm. 

Details will follow in another post and I give a general idea of what it does in the notebook but here is what the picture looks like. 

Assuming that you have a set of points and you want to find a line that separates the points into different categories, this algorithm is one way to do this. It picks an initial line and moves it around the space until it finds a good separator of the set. At the end, the result should look like the example below.

<img src="/images/separator.jpg" alt="A picture of a set with a linear separator.">

You can also fork that [notebook on github](https://github.com/kgourgou/Linear-Perceptron).