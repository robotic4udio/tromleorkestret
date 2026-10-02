---
layout: instrument
title: The Aeolynth
tagline: "A wind synth with touch keys that can play chords."
image: '/images/web/inst-aeolynth.jpg'
robotic: false
order: 5
redirect_from:
  - /aeolynth
---
The **Aeolynth** is a synthetic wind instrument. The name combines Aeolus, the Greek god of wind, with “synth”.

<figure>
    <iframe height="9" width="9" src="https://drive.google.com/file/d/1IK87dOY4u5-92FcFDFOUa38Vk8ulZO6Y/preview" allow="autoplay; encrypted-media" frameborder="0" allowfullscreen></iframe>
    <figcaption align="center" style="text-align: center;">Sofie playing the Aeolynth</figcaption>
</figure>

#### How it works
1. **Touch keys**
    - Three octaves of capacitive touch buttons made from furniture nails, read by **MPR101 capacitive touch sensors**.
    - Unlike most wind instruments, the Aeolynth can play **chords**.
2. **Mouthpiece**
    - A salvaged clarinet mouthpiece fitted with an **Adafruit MPRLS** pressure sensor measures how hard the player blows.
    - The pressure controls volume, attack and timbre.
3. **Motion sensor**
    - An [Adafruit BNO055 IMU](https://www.adafruit.com/product/4646) measures roll, pitch and yaw.
    - Moving the instrument controls things like vibrato, glissando and where the sound is placed.
4. **Microcontroller**
    - An **Adafruit ESP32-S3 Feather** reads the keys, the pressure sensor and the IMU.
    - It sends the data as **Open Sound Control (OSC)**.
5. **Sound**
    - The sound comes from our own sound engine, written in **C++** and running on **Bela**.
    - We also use **MaxMSP** and commercial audio software where they do the job better.

![]({{site.baseurl}}/images/web/bygge-023.jpg#wide)
