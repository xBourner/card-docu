---
title: Home
---

# Header Position Card

**Header Position Card** is a custom utility card for Home Assistant that lets you
cleanly change the position of the header navigation bar on your dashboards.

By default, Home Assistant locks the navigation header to the top of the screen.
With this card you can move it to the bottom – better reachability on phones and a
much better overall dashboard experience.

*(Shoutout to [javawizard](https://github.com/javawizard/ha-navbar-position) who came
up with the original idea. I applied several modifications and a GUI editor to make it
significantly easier and more robust to work with.)*

<p align="center">
  <img alt="Bottom Navigation Bar" src="https://github.com/user-attachments/assets/4d18ce72-8791-4a8a-99b4-b978b5f5afe2">
</p>

<p align="center">
  <img alt="Navbar Alignment" src="https://github.com/user-attachments/assets/d1347392-0844-457e-9f36-f177f411e76c">
</p>

## Features

- 📱 **Device-specific positioning** – move the header to the bottom only for selected
  viewports (mobile, tablet, desktop, wide or a custom width).
- 🌍 **Global mode** – apply the new header position to *all* dashboards at once
  instead of per dashboard.
- 🍏 **iOS & Android safe areas** – the content top padding follows
  `safe-area-inset-top`, so notches and camera cutouts stay clear.
- 👻 **Invisible helper** – the card never shows up on the dashboard itself, it only
  appears while the editor is active.
- 🧠 **100% GUI editor ready** – configure everything visually, no YAML required.

## How it works

The card sets the HA header to `position: fixed` at the bottom and removes the
top padding Home Assistant reserves for it – so the content starts directly at the
top of the screen. On reset (breakpoint not active any more) all inline styles are
removed again and the stock header returns.

<div class="info-grid">
  <div class="info-block">
    <h3>Default design</h3>
    <p>The classic header, pinned to the bottom edge with a divider line on top instead of below.</p>
  </div>
  <div class="info-block">
    <h3>Minimal (floating)</h3>
    <p>A floating pill that collapses to a round button while you scroll down on mobile.</p>
  </div>
</div>

## Next steps

- [Installation](installation.md)
- [Configuration](config.md)
