+++
title = "How I Perform Live Electronic Music with Ableton Live"
description = "The ultimate guide to performing completely live with Ableton Live"
date = 2026-07-05
updated = 2026-07-05
[taxonomies]
tags = ["apps", "music", "tap", "project7iii"]
categories = ["articles"]
[extra]
featured_image = "Tap automating ableton live.jpg"
featured_image_alt = "In my opinion, the best Ableton Live controller: 7III Tap on iPad"
+++

This is my ultimate guide to playing live electronic music with Ableton Live.
The most important thing, even more important than a great controller I would say, are the basics, the live set, then the presets.

## The Basics
I usually record my sessions, and because I do not want to sync and edit video and audio later, I do that directly in [OBS](https://obsproject.com), a great piece of software you can also use to livestream. 

I use external cameras if available (if I am on the road, I simply use the webcam in my MacBook). Usually I have one top view of my controller and one from a bit farther away with myself in the frame to keep things visually interesting. To make it even more intersting, I use an [automatic scene switching script](https://gist.github.com/nilsmango/58857855454801f4bc642f74dfffdaef) inside OBS. Add some good lighting if possible, it makes a huge difference for video quality.

To get the sound into both OBS and the speakers, I use [BlackHole](https://existential.audio/blackhole/)) with a Multi-Output Device created in the MacOS app Audio-MIDI-Setup. My normal audio output is the first device, the second is BlackHole 2ch with drift correction enabled.
It is very important that the Multi-Output Device uses the same sample rate as Ableton Live.  
In Ableton, I use that output as my main output. In OBS, I use it as the audio input. Done.

Use a sample rate and buffer size that give you the best CPU performance. I currently use 48 kHz with a buffer size of 256 samples.


## The Live Set
I set things up with a maximum of 8 tracks and a couple of sends. I prefer fewer tracks so I do not get overwhelmed. I also keep effects and routing fairly minimal.  
Speaking of effects: using sends is usually much better for CPU usage than placing lots of effects directly on individual tracks.  
I also have a few master effects on the master channel (for drops and master effects), plus a compressor with sidechain tuned to the kick frequency of my drums track, which is usually track one.  
That is often followed by another percussion or vocal track (both typically drum racks), then bass, lead, pad, and so on.

## The Presets
To stay inspired, it is very important for me to have excellent presets ready. These are your starting points, so make lots of them.

I keep them in a folder called `Live Sets 26`, with two subfolders: `Effects` & `Sounds`  
Inside `Sounds`, I have categories like drums (including chopped vocals), bass, acid, and so on. I name things so it is immediately clear what they might sound like.

I change the sounds in the 8 tracks frequently to get fresh input and new ideas. Presets can absolutely make or break a live set. I usually group a sound or effect, add at least 8 macros to each preset, and also create a couple of snapshots. If you have a good controller, it can use those snapshots and even save new ones. The better my own controller 7III Tap gets, the less important traditional macro control becomes. Still, macros are very useful because they show which parameters are strong candidates for automation and modulation. As Tap becomes more deeply integrated with Live, I rely even more on direct parameter access.

I only use stock Ableton Live effects and instruments in about 99% of cases.

### Drum Tips
Do not make drums too loud. You can always push them up later.  
I recommend a grouped instrument with volume control on each pad.  
I also like adding global effects to individual drum pads, for example delay and reverb sends. To get sends controls inside a drum pad, you need a small workaround: 
1. Add the modulator `Shaper` into the drum pad group 
2. Switch the Shaper to `Manual` mode, 
3. Map the Shaper to the send of that pad to the reverb or delay (I use remote, not modulate)
4. Make the shaper use a liner shaper (or whatever you prefer)
5. Add the `Manual Encoder` to the group macros. 
6. Voilà, individual sends per drum pad.

## The Ableton Live Controller

[7III Tap](https://project7iii.com/tap) is my controller of choice, as [I built it specifically for performing completely live with Ableton Live](/ableton-push-alternative)

{{ image_sets(path="content/live-performance-setup/Tap automating ableton live.jpg", format="auto", op="fit_width", quality=80, alt="The best Ableton Live controller for me: 7III Tap on iPad", caption="7III Tap with some automation.") }}

You want a controller that can do all of this well (yes, this list conveniently describes why Tap fits my needs):

- Play melodies and drums
- Sequence extremely fast, reliably, and with great editing tools
- Ideally have a companion system that can mutate patterns musically, giving you something dynamic to perform with
- Access macros and instrument controls quickly
- Offer mixer controls at the device level and deep parameter integration
- Move into drum rack pads and edit instruments and effects for each pad
- Modulate macros, automate them, and edit that automation
- Trigger scenes and clips
- Add and edit follow actions
- Mix
- Add, remove, and move effects, instruments, and presets

All of these actions need to become second nature so you can immediately realize any idea you have. Practice like hell. Make music a thing you do every day! Even if it is only 10 minutes a day. Short performances are better than no performances at all.

> Really give Tap a try. I think it is the [best Ableton Live controller](https://project7iii.com/tap) out there.  
>  
> If you are not convinced, check this [comparison page for the best Ableton Live controllers in 2026](https://project7iii.com/tap/best-ableton-live-controller/) to see where Tap shines compared to Push and other controller apps.

## Musical Direction and Arrangement

I try to keep things simple. Start with a few strong sounds and a clear idea, then build outward from there. Too many sounds quickly become overwhelming. A minimal approach is often best for creativity.

Here is the general structure I often follow while improvising live:
1. Find a central theme: bassline, beat, melody, pad, noise texture, FX, or sample
2. Build several variations or intensifications of that theme
3. Create a break or moment of release
4. Introduce a counter-theme or new variation if needed
5. Return to the original theme and repeat with different intensities
6. Use another break to reset tension
7. Search for a new theme with fresh synths or percussion
8. Remove elements gradually while introducing new ones
9. Go back to 1.

General ideas:
- Alternate between subtraction and addition to keep movement alive
- For ambient sections, start with beautiful melodies or textures first, then bring in percussion later
- A great live set is often not about adding more. It is about knowing what to remove, when to create tension, and when to release it.
- Just try things and have no fear. Fear is the mind-killer.