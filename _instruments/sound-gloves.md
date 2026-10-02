---
layout: instrument
title: Sound Gloves
tagline: "Gloves that control the live effects wirelessly."
image: '/images/web/inst-sound-gloves.jpg'
robotic: false
order: 6
redirect_from:
  - /sound-gloves
---
The **Sound Gloves** are a wearable, wireless controller for changing the sound live.


![SofieGloves]({{site.baseurl}}/images/tromleorkestret/GlovesSofie.png)
*Sofie Playing the Sound Gloves*


### **Hardware**

1. **Sensors**
    - **Push buttons**: one on each finger, for triggering sounds and effects.
    - **IMU sensor**: an [Adafruit BNO055 IMU](https://www.adafruit.com/product/4646) on the back of the hand tracks orientation and acceleration in three dimensions, so tilts, rotations and shakes control the sound.

2. **Microcontroller**
    - An [Adafruit ESP32-S3 Feather](https://www.adafruit.com/product/5477) reads the buttons and the IMU.
    - It sends the data as [Open Sound Control (OSC)](https://www.cnmat.berkeley.edu/opensoundcontrol/).

### **What they control**

1. **Effect chains on [Bela](https://bela.io/products/bela-and-bela-mini/)**
    - The gloves control effect chains with saturation, delay, reverb, distortion and more, running on our embedded [Bela](https://bela.io/products/bela-and-bela-mini/) systems.

2. **[Max4Live](https://www.ableton.com/en/live/max-for-live/)**
    - They also control a [Max4Live](https://www.ableton.com/en/live/max-for-live/) device made for the gloves, with its own effect chain.
    ![SofieGloves]({{site.baseurl}}/images/gloves/M4L-HandFx.png)

### **Parameter space**

Like several of our other instruments, the gloves use the **Parameter Space**:

- The IMU gives control over several parameters at once from the orientation and movement of the hand.
- Settings are saved to hand positions, which builds a landscape of presets.
- Moving the hand interpolates between the presets, so the sound changes smoothly.


<div class="wide">{% include youtube.html id="yolz8VWj9BM" %}</div>

![]({{site.baseurl}}/images/web/bygge-032.jpg#wide)
