---
title: "Jarvis-home"
layout: project
date: 2026-05-21
image: "images/jarvis-home.gif"
tags:
  - Jetson Orin Nano
  - Local AI
  - Voice Assistant
  - Edge AI
  - Whisper
  - Gemma
repo_url: "https://github.com/itsMustafamr/Jarvis-home"
---

Jarvis-home is my fully local AI assistant running on NVIDIA Jetson Orin Nano. It combines speech-to-text, LLM reasoning, and text-to-speech with an always-improving on-device pipeline, and I actively push upgrades to it almost every day.

Core stack: Gemma 4 E2B (llama.cpp), whisper.cpp, Piper TTS, and local routing for intents like lights, weather, and vision. The project is designed to stay local-first with zero cloud dependency for assistant interaction.

<!--more-->

**Project Links:** [GitHub](https://github.com/itsMustafamr/Jarvis-home)

**Current Focus and Roadmap:**

- Conversation memory across interaction paths
- Wake word flow ("Hey Jarvis") on-device
- Better multimodal vision path for hardware mode
- Music and utility intents with faster routing

**Image setup note:** If you later want to host the GIF locally, place it at `images/jarvis-home.gif` and update `image:` in this file to:

`image: "images/jarvis-home.gif"`
