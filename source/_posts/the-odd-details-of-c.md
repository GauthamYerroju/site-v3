---
title: The odd details of C++
tags:
  - C++
  - coding
id: 140
categories:
  - Coding
date: 2011-10-05 22:24:12
---

I’m revisiting C++ with the intention of figuring out the details. This post will contain various little things and questions and pretty much anything. I intend this list to be “something that you won’t typically find in most books”, a list of the details of the C++ language. Not to mention, this page will be changing constantly as I add new information or get answers to questions listed.

Legend:

(?) – Still needs confirmation, some info missing.

And the list begins:

1.  Structured vs. Object oriented programming: Structured programming is task-centric where as object oriented programming is object-centric. For example, in structured approach, when a task is to be performed, we first think of subroutines and then the data structures. In OO approach, we first think of the objects needed to perform the task, then we design the details of the objects and their behaviour. C is a structured language, C++ is an object oriented language.  <li>(?) Default values for data types in C++: When variables are declared and not initialized, what are their values? I believe number types will be set to 0, but it might depend on the compiler. For example, C-Free 4 gave garbage values to int, float and char variables. But when run multiple times, the value for int kept changing but the values for float and char remained the same. Confirm.  <li>(?) String Mutability: Need to explore string mutability, even by using pointers. For example, when I have a char pointer, can I still use it when I change the string length?Also need to explore String class capabilities.  <li>Static variables and functions: Figure out 1.Where static variables can be a.declared b.initialized and experiment on their scope.