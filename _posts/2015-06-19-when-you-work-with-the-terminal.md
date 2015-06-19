---
layout: post
title: "When you work with the terminal..."
category: 
tags: [linux, terminal]
---
My work often asks of me to work in the linux terminal, sometimes on my own computer and sometimes on remote servers. Life would be more difficult for me without the following tools/commands/aliases. :-)

## rm to trash
The package "trash-cli" adds an extra command named trash that sends deleted files to trash. This is much more useful than sending the files to oblivion as is the case with rm. I don't like using the trash command though, so instead I rename it as "srm" (aka safe rm). I didn't want to name it rm as it's a bad idea to get too used to being that safe when using rm. 

## Return to previous directory
It is great that this annoyance (accidentally moving out of a directory before you are done working in it) has a simple solution. After using "cd" to change directory, you can return *back* to the previous directory by using 

~~~
alias back="cd -" 
~~~

## Less is more
Using the ["more"](http://unixhelp.ed.ac.uk/CGI/man-cgi?more) command in the terminal allows me to take a look at a text file without opening it in an editor. However, I found that the ["less"](http://www.thegeekstuff.com/2010/02/unix-less-command-10-tips-for-effective-navigation/) command is even better. For one, it allows me to scroll up and down in the document, which more does not. Couple that with

~~~~~ bash
alias more="less" 
~~~~~

The whole idea works pretty well. 


## Open current directory in nautilus from the terminal

Surprisingly, although I have a solution for this, I always forget to use it. Bad habits perhaps. Anyway, what I did was simply define an alias like so

~~~ bash
alias n.="nautilus ."
~~~


*More to be added.* 
 