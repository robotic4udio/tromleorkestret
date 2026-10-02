---
layout: instrument
title: The Sonimba
tagline: "A kalimba with pickups, sensors and live processing."
image: '/images/web/inst-sonimba.jpg'
robotic: false
order: 9
redirect_from:
  - /sonimba
---
The **Sonimba** is a kalimba rebuilt with pickups, sensors and real-time audio processing.


### **The build**
1. **The kalimba**
    - It started as an ordinary kalimba, which was taken apart and put together again in a new form.
    - **Pickups**: a custom pickup system captures the metal tines. The signal goes into an embedded DSP platform built on **Bela.io**.
2. **Sensors and controls**
    - **IMU sensor**: an **Adafruit BNO055** tracks orientation and acceleration in three dimensions, so tilting, rotating and shaking the instrument changes the sound.
    - **Trill bar**: a touch sensor that tracks up to five fingers, each one its own control point.
    - **Potentiometers**: for effect amount, layer blend and modulation speed.
    - **Pushbuttons**: for loops, effects and the reversers.

### **Audio processing**

1. **Looper**
    - Records, overdubs and plays back, controlled with the pushbuttons.
2. **Granular engine**
    - Captures live audio into a buffer.
    - Each finger on the trill bar is an independent playhead that scrubs through the buffer.
    - The IMU controls grain size, playback speed, pitch and jitter.
3. **Effects**
    - Saturation and bitcrush, distortion, filters, tape-delay emulation, flanger, phaser, chorus and reverb.
4. **Reversers**
    - Incoming audio is recorded continuously, so it can be played backwards at any moment.
    - The reversed audio can be pitch-shifted. Octaves work best.

### **Parameter space**
1. **Setting it up**
    - The parameters for effects and granular synthesis are adjusted from a computer via **Open Sound Control (OSC)**.
2. **Tilt to save**
    - When a setting sounds good, the Sonimba is tilted to any position and the setting is saved there as a preset.
    - This builds a landscape of presets, each tied to an orientation of the instrument.
3. **Playing it**
    - While playing, the IMU tracks the orientation and the sound interpolates between the saved presets, so it changes smoothly as the instrument is tilted or rotated.
