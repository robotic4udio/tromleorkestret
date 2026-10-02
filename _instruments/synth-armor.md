---
layout: instrument
title: SynthArmor
tagline: "A synthesizer worn on the arm, played with breath, buttons and knobs."
image: '/images/web/bygge-038.jpg'
robotic: false
order: 7
redirect_from:
  - /synth-armor
---
The **SynthArmor** is a synthesizer worn on the arm.
I blow, beatbox, and twist knobs, and it answers with a voice of its own.

<div class="wide">{% include youtube.html id="RqQnMvwpiNk" %}</div>

### **The build**

1. **Arm piece**
   - Built on modified football shin guards.
   - **Buttons and knobs** control pitch, timbre and other sound parameters.

2. **Breath and beatbox**
   - A **flexible tube** runs from the mouth to the instrument.
   - Blowing, humming or beatboxing into the tube drives the synthesizer and shapes tone and dynamics.

3. **Sensors**
   - **IMU sensor**: an [Adafruit BNO055 IMU](https://www.adafruit.com/product/4646) on the arm piece tracks orientation and movement, so tilts, twists and shakes control filters, effects and where the sound is placed.
   - **Microcontroller**: an [Adafruit ESP32-S3 Feather](https://www.adafruit.com/product/5477) reads the sensors and the breath.
   - **Communication**: everything is sent as [Open Sound Control (OSC)](https://www.cnmat.berkeley.edu/opensoundcontrol/).

### **Sound**

1. **DSP on [Bela](https://bela.io/)**
   - The sound runs through our **Bela DSP systems**, with real-time effects such as filters, delay, distortion and reverb, controlled by breath, movement and the knobs.

2. **[MaxMSP](https://cycling74.com/products/max)**
   - Custom Max patches process the sound further.

### **Control**

Like our other instruments, the SynthArmor uses the **Parameter Space**:

- **Breath**: air pressure controls volume, timbre and effects.
- **Movement**: the IMU tracks the arm and controls filters, resonance and sound placement.
- **Buttons and knobs**: presets and live tweaks.


![]({{site.baseurl}}/images/web/bygge-037.jpg#wide)
