+++
title = "My Ableton Live Setup for Live Performance"
description = "The ultimate guide to performing completely live with Ableton Live"
date = 2026-07-05
updated = 2026-07-05
[taxonomies]
tags = ["apps", "music", "tap", "project7iii"]
categories = ["articles"]
[extra]
featured_image = "Tap automating ableton live.jpg"
featured_image_alt = "In my opionon the best Ableton Live controller 7III Tap on iPad"
+++

This is my ultimate guide to playing live electronic music with Ableton Live.
The most important thing, even more important than a great controller I would say, are the basics, the live set, then the presets.

## The Basics
I usually record my session, and because I do not want to edit video and sound together later, I use some cameras (if available (I usually have one top view of my controller and one from a bit farther away with myself in the frame to keep it interesting)) with an [automatic scene switching script](https://gist.github.com/nilsmango/58857855454801f4bc642f74dfffdaef) in [OBS](https://obsproject.com). Add cool lightning for beautiful video if possible. To get the sound into OBS and the speakers, I use BlackHole with a Multi Output Device added to Audio-MIDI-Setup. My normal output is the first audio device, the second is BlackHole 2ch, with Drift-Correction. It is very important that the Multi Output Device is using the same sample rate as you use in Ableton!
In Ableton I use that output as output. And in OBS I use it too. Done.

Use a sample rate and buffer size that gives you the best CPU usage. I use 48.0 or 41.0 kHz + 256 (check again).

## The Live Set
I set it up so that I do have a max of 8 tracks and a couple of sends. I prefer having less tracks to not get overwhelmed. I also keep it minimalistic with effects and sends. Speaking of effects: It's better for CPU to use a lot of sends than a lot of effect inside the tracks. I have a couple of master effects on the master and a compressor with sidechain tuned to the kick freq of my drums track (first track for me). Usually followed by another percussion or vocals track (both drum racks), then a base, lead, pad etc.

## The Presets
To be able to get inspired it is important for me to have really good presets ready. Those are your starting or jumping off points, so make a lot of them. I have added them to a folder `Live Sets 26`, with two folders: `Effects`, `Sounds`. Then in  sounds I have the drums (with vocals also), base, acid etc. some name that makes clear what the things might sound inside. I change the sounds in the 8 tracks frequently to get a new input. Presets make or break a live set of course. I usually group my sound or effect, then add at least 8 macros for each preset and also add a couple of snapshots. If you have a good controller it will be able to use those snapshots, and even save new ones. The better my own controller Tap gets, the less important really are those macro controls. But it is still very hand to have them for knowing which parameters are great candidates for automation and modulation etc.  
As my controller gets more deeply integrated with Live (I only use stock live effects and instruments for 99% of the cases)
Drums: do not make them too loud, you can still move them up, have a grouped instrument with volume in each pad. Also drums: I like to add some global effects into each pad indivually, for example I add a send with delay and one with reverb. To get them into a rack in the drum pad you have to be a bit sneaky: Use a modulator, the map it to the send of this pad to the reverb or delay. Voila, individual sends in pads.

## The Ableton Live Controller
7III Tap is my controller of choice, as [I made it especially for performing completely live with Ableton Live](/ableton-push-alternative)

{{ image_sets(path="content/live-performance-setup/Tap automating ableton live.jpg", format="auto", op="fit_width", quality=80, alt="The best Ableton Live controller for me: 7III Tap on iPad", caption="7III Tap with some automation.") }}

You will want a controller that can do all these things (yes, this is of course a list of what my controller Tap can do, so it's clear it fits my needs):
- Play in melodies and drums
- Sequence like a motherf*cker - fast, sturdy, great editing tools
- If possible, have the ability to get a companion that mutates some patterns musically, so you have something dynamic to play with
- get into macros and controls of instruments quickly. Mixer controls and other deeply integrated parameter controls would be optimal
- also have the ability to move to pads in drum racks to edit the instruments and effects for each pad
- modulate those macros, automate them and edit the automation
- trigger scenes and clips
- add and edit follow actions
- mix
- add, remove, move effects, instruments, presets
- all these actions need to be second nature, so you can quickly realize any idea you have, so practice like hell. It should be fun to make music, so make it every day if possible. Short sets are better than no sets.

>Really give Tap a try, it's the [best Ableton Live controller](https://project7iii.com/tap) out there (my opinion, not investment advice).  
>If you do not believe me, check this [comparison page for best Ableton Live Controller 2026](https://project7iii.com/tap/best-ableton-live-controller/) → The overview shows the strengths of Tap vs. Push or other Ableton Live controller apps (and is also totaly unbiased and written by yours truly).


## Global things/direction etc:
I try to keep it very simple and find sounds and ideas, then go off from there. Too many sounds and it gets too complicated. A minimalistic approach is great for creativity.

Ideas for building up
- Aufbau
	- Ein Thema finden. (Baseline, Beat, je nachdem: Melodie, Fläche, Noises, FX, Samples)
	- Diverse Steigerungen des Themas/Beat oder Variation machen.
	- Dann ein Break finden, Auflösung
	- Je nachdem ein Gegenthema/noch eine Variation entwickeln
	- Wieder zurück zum Thema, verschieden Steigerungen wiederholen.
	- Wieder zum Break.
	- Neues Thema mit neuen Synths und Percussion suchen.
	- etwas weg (fade out most), dafür was neues dazu, abwechselnd
	- Ambient anfangen mit schönen melodien, dann erst perc
