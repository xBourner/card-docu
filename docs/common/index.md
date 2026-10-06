---
title: Getting Started
tags:
  - Setup
hide:
  - tags
---

# Getting Started

Welcome to the documentation of all **xBourner** custom cards for Home Assistant.
Every card lives in its own section, but all of them share the same structure:

| Page | What you will find |
|------|--------------------|
| **Home** | Feature overview, screenshots and links for the card |
| **Installation** | HACS and manual install steps including the resource URL |
| **Configuration** | Every option, defaults and ready-to-use YAML examples |

!!! tip "First time here?"
    Read [Installation](installation.md) once – the process is identical for every
    card, only the file name and the repository change.

## The cards at a glance

| Card | Repository | What it does |
|------|------------|--------------|
| **Status Card** | [xBourner/status-card](https://github.com/xBourner/status-card) | Automatic area overview with smart filters, groups and popups |
| **Header Position Card** | [xBourner/header-position-card](https://github.com/xBourner/header-position-card) | Moves the dashboard navigation bar to the bottom |
| **Area Card Plus** | [xBourner/area-card-plus](https://github.com/xBourner/area-card-plus) | Full featured area card with domain/device class grouping |
| **Calendar Card Plus** | [xBourner/calendar-card-plus](https://github.com/xBourner/calendar-card-plus) | CarPlay inspired calendar widget with event popup |
| **Dynamic Grid Card** | *not published yet* | Column & module grid for any Lovelace card and smart modules |
| **Server Card Plus** | *not published yet* | System monitor overview with Proxmox VE auto-detection |

## Requirements

- Home Assistant **2024.1 or newer** (older versions may work, but are untested)
- A dashboard in **Lovelace**
- [HACS](https://hacs.xyz) – recommended for installation and updates
- Advanced Mode enabled in your user profile (only needed to add resources manually)

## How to continue

1. [Install](installation.md) the card you want – HACS is the fastest way.
2. Register the [resource](resources.md) if you installed it manually.
3. Open your dashboard, click **Edit**, then **Add Card** and search for the card.
4. Configure it with the visual editor – YAML is optional.
5. Something looks off? Check [Troubleshooting](troubleshooting.md).

<div class="info-grid">
  <div class="info-block">
    <h3>🗂️ Status Card</h3>
    <p>The most extensive card with its own customization section: badge mode, smart groups, persons, filters and popup dialogs.</p>
  </div>
  <div class="info-block">
    <h3>🧭 Header Position Card</h3>
    <p>Purely functional – it is invisible on the dashboard and only appears while you edit it.</p>
  </div>
  <div class="info-block">
    <h3>🧩 All other cards</h3>
    <p>Area, Calendar, Dynamic Grid and Server Card follow the exact same Home / Installation / Configuration layout.</p>
  </div>
</div>
