+++
title = "Phonogeneli 0.1"
description = "Max for Live device Phonogeneli 0.1"
date = 2022-11-17
[taxonomies]
tags = ["music", "maxforlive", "ableton"]
categories = ["articles"]
[extra]
featured_image = "phonogeneli 0.1.png"
featured_image_alt = "The Phonogeneli 0.1 audio effect"
+++

I have just released my first Max for Live device called Phonogeneli. It's a quirky tape loop effect and a free download. Check the [manual](#manual) below. The name comes from the Eurorack module that inspired this device called [Phonogene](https://makenoisemusic.com/modules/phonogene-legacy) + li, a suffix used for diminutivization in Swiss German.  
This audio effect is capable to produce micro-sounds, many clicks, delays, and sound on sound.

{{ image_sets(path="content/phonogeneli/phonogeneli 0.1.png", format="webp", op="fit_width", quality=75, alt="Max for Live device Phonogeneli 0.1 in action", caption="Phonogeneli 0.1 in action") }}

## Demo

{{ youtube(id="hAwjpJ3qLZA", start="0") }}

## Manual
### Introduction
Phonogeneli is a tape loop effect inspired by Phonogene by Make Noise.  
It is available for free [here](https://maxforlive.com/library/device/8507/phonogeneli).  
If you like this device and would like to buy me a beer, you can do so [here](https://ko-fi.com/nilsmango).

### Waveform Display
The waveform display of Phonogeneli shows the audio recorded into the 7-second buffer. The blue line shows the value of LFO1, the orange line shows the value of LFO2. The yellow band indicates the loop region.

### Buttons
<kbd>Rec</kbd> starts the recording. It will stop at the end of the buffer or loop.

<kbd>LoopRec</kbd> changes that behavior. If active, recording will not stop at the end of the buffer or loop.

If <kbd>Match</kbd> is active, then <kbd>Rec</kbd> will only record the length of the loop region. Next to <kbd>Match</kbd> is the percentage of how much longer the record length is in relationship to the loop region.

<kbd>Stretch</kbd> activates pitch stretch mode with the corresponding Pitch dial below the button.

<kbd>Direct</kbd> activates direct mode. When active, the Start dial changes won't go through an anti-click ducking. Great if you want to externally modulate or automate the Start dial or if you like a more gritty loop region scrubbing (internal modulation bypasses the ducking).

### Dials
The Mix dial mixes the dry (input) and wet (tape loop) signals. Can be used creatively as what you hear is what gets recorded onto the tape.

The Start dial sets the starting point of the tape loop region.

The Length dial sets the length of the tape loop region.

The Speed dial sets the speed of the tape loop.

The Pitch dial sets the pitch of the tape loop if <kbd>Stretch</kbd> is active.

The Gain dial sets the extra gain of the tape loop signal.

### Modulation Matrix
Row one shows the modulation (unipolar) of the dial by LFO1, and row two by LFO2. Negative values are also accepted.

### LFO's
The functions are:
1. Shape of the LFO waveform. Available Waveforms are: Sine, Saw Up, Saw Down, Triangle, Square, and Random.
2. Time mode toggle. Toggles between Beat Sync and Free Running (Hz).
3. The Rate dial sets the base rate of the LFO expressed in note values or Hz.


### Tips & Tricks
- Adding a limiter might be a good idea. Be aware that you might get a click-fest. Adding a reverb will make this beast an ambient wunderkind.
- Phonogeneli is fully integrated with Ableton Push.
- The audio buffer will not get saved when closing the project.
- Phonogeneli can play itself, which is both dangerous and fun!
- Try automating the <kbd>Rec</kbd> button!

**Known bugs:** if you copy the device sometimes the loop doesn't start. Moving the Start dial will help make the tape loop start again.


## Version & License
Phonogeneli 0.1  
Made by Nils Mango, Biel/Bienne Switzerland 2022 - This work is licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/), except where otherwise noted.
