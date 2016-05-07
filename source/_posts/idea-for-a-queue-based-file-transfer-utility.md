---
title: Idea for a queue-based File Transfer Utility
tags:
  - >-
    GUI program windows application file transfer utility tool project wxPython
    Python
id: 218
categories:
  - Coding
date: 2013-07-22 21:46:26
---

I got an idea for a program. I could go on about what inspired idea but I think I’ll just bore myself. I’ll just say that it’s out of need, and it’s just sad someone’s not already done it. Here’s the sketch of what’s on my mind:

*   It’s a GUI wrapper over some simple commandline tool (basic DOS commands to start with, might look into Robocopy later).
*   The goal is NOT to achieve a speedy file transfer (like [Teracopy](http://codesector.com/teracopy "Teracopy. A speedy file transfer utility.") for example). The main point is **proper queuing support**.
*   Design should be simple enough for someone to pick it up and start using it immediately. It’s a file transfer utility, not the dashboard on a space shuttle.
*   I want this to be cross-platform someday (at least Windows and Linux), the GUI will simply make use of commandline tools. I’ll start with Windows and once it meets some basic requirements, I’ll perhaps work on a cross-platform version.
*   Tool of the trade: wxPython. 

The features I want to implement first:

*   Cutting/Copying files adds them to a queue (I’m thinking of take over Ctrl+X and Ctrl+C). It’ll basically be like “Enqueue in Winamp”.
*   Before pasting the queue, you can view and edit the queue. Then Ctrl+V or paste will move/copy those file in the order of the queue one after another. Note: I need to investigate parallel file transfers, but for starters, I’ll stick to one file at a time, based on my experience that multiple transfers take more time than the individual transfers combined.
*   As soon as a file is copied or cut, the queue window appears in an always-on-top (non-optional) and transparent (optional) window. 

I’m not the type to plan everything out in the beginning, I like to get out a prototype and chalk out the plan as I go along, even if it means a lot of rework along the way. It’s just how I’m comfortable doing things. So basically, when I’m in the right mood, I’ll draw some mockups and whatnot and start from there but in the meanwhile, I gotta get comfy with wxPython, at least the basics. More updates as they come, no particular ETA.

Peace.