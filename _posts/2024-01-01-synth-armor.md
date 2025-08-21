---
layout: post
title:  SynthArmor
description: 
image:  '/images/byggefestival2025/Byggefestival_Tromleorkestret_038_photo_by_Pato_Soto.jpg'
tags:   [Instrument, Synth, Work]
featured: false
---

Meet the **SynthArmor**: part synthesizer, part exoskeleton.
I blow, beatbox, and twist knobs — it answers with a voice of its own.

### **Key Features and Design**

1. **Arm-Mounted Interface**  
   - Constructed on modified football shin guards, the SynthArmor wraps the arm like futuristic armor.  
   - A set of **buttons and knobs** allow precise control over pitch, timbre, and sound parameters.  

2. **Breath and Beatbox Input**  
   - A **flexible tube** connects the performer’s breath directly to the instrument.  
   - Blowing, humming, or beatboxing into the tube controls the synthesizer engine, shaping tone and dynamics in real time.  

3. **Integrated Sensors**  
   - **IMU Sensor**: Mounted on the arm piece, the [Adafruit BNO055 IMU](https://www.adafruit.com/product/4646) tracks orientation and movement. Tilts, twists, and shakes become expressive sound controls, modulating filters, effects, and spatialization.  
   - **Microcontroller**: Powered by the [Adafruit ESP32-S3 Feather](https://www.adafruit.com/product/5477), which processes sensor and breath data.  
   - **Communication Protocol**: All data is transmitted via [Open Sound Control (OSC)](https://www.cnmat.berkeley.edu/opensoundcontrol/), ensuring low-latency performance and seamless integration with Tromleorkestret’s ecosystem.  

### **Real-Time Sound Control**

1. **DSP on [Bela](https://bela.io/)**  
   - The SynthArmor integrates with Tromleorkestret’s **Bela DSP systems**, shaping sound through real-time effects such as filters, delay, distortion, and reverb.  
   - Breath, gesture, and knob movements dynamically modulate these effects, producing a direct dialogue between performer and machine.  

2. **Integration with [MaxMSP](https://cycling74.com/products/max)**  
   - The instrument communicates with custom-built Max patches, expanding its ability to warp and process sound in expressive and experimental ways.  

### **Expressive Control**

Like Tromleorkestret’s other instruments, the SynthArmor connects seamlessly to the **Parameter Space**, offering multidimensional and intuitive sound control:

- **Breath as a Driver**: Air pressure translates into volume, timbre, and effect modulation.  
- **Gesture Mapping**: The IMU tracks arm movements, unlocking fluid control of filters, resonance, and sound placement.  
- **Physical Interaction**: Buttons and knobs provide tactile access to presets and live tweaks.  
- **Fluid Integration**: The performer moves effortlessly between organic breath tones and futuristic synthesized landscapes.  


![]({{site.baseurl}}/images/byggefestival2025/Byggefestival_Tromleorkestret_037_photo_by_Pato_Soto.jpg#wide)
