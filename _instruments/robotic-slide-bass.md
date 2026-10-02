---
layout: instrument
title: The Robotic Slide Bass
tagline: "A four-string bass played by sliders and picks on motors."
image: '/images/web/inst-robotic-slide-bass.jpg'
robotic: true
order: 1
redirect_from:
  - /robotic-slide-bass
---
The **Robotic Slide Bass** plays the bass in the machine. It has four strings. On each string a slider sets the pitch, and an actuator with a guitar pick plucks it.


## How it works

1. **The slide**
    - A sliding actuator moves along each of the four strings and reaches the right pitch within milliseconds.
    - It can do slides and vibrato, and also fast chromatic runs and jumps that are impossible for a hand.
2. **The picks**
    - Actuators with guitar picks pluck the strings.
3. **The strings**
    - A custom pickup system captures the strings, from very deep bass up into the melodic midrange.
4. **In the open**
    - The mechanics are not hidden, so you can watch the sliders and picks work while it plays.

### Choosing a string

A note can usually be played on more than one string. When a MIDI note arrives via **Open Sound Control (OSC)**, the bass works out which string should play it, using a cost function:

- **Distance**: how far the slider has to travel. Shorter moves mean less delay.
- **Tone**: notes close to the nut sound fuller, so they are preferred.
- **Availability**: a string that is already sounding costs more to interrupt than an idle one.

The string with the lowest cost plays the note. The decision takes less than a millisecond.

### Sound

The signal runs through our **Bela** based DSP system, with real-time effects such as saturation, delay and reverb.
