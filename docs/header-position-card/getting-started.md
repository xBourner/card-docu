---
title: Getting Started
tags:
  - Setup
hide:
  - tags
---

# Getting Started

**Header Position Card** moves the navigation bar of your dashboard to the bottom – per viewport or for all dashboards at once, with safe-area support for notches and camera cutouts.

This page gets you from zero to a working card. The flow is identical for every card in this documentation, only the names and repository change.


!!! tip "First time here?"
    Start with [Installation](installation.md) – every card section follows the same order, so you always know where to look.

## Requirements

- Home Assistant **2024.1 or newer**
- A dashboard in **Lovelace**
- [HACS](https://hacs.xyz) – recommended for installation and updates
- **Advanced Mode** in your user profile – only needed when you register the resource manually

## Steps

1. [Install](installation.md) the Header Position Card – HACS is the fastest way.
2. Register the [resource](resources.md) if you installed it manually (with HACS this happens automatically).
3. Open your dashboard, click **Edit**, then **Add Card** and search for **Header Position Card**.
4. Configure it with the visual editor – YAML is optional.
5. Something looks off? Check [Troubleshooting](troubleshooting.md).

<div class="info-grid" markdown="1">
<div class="info-block" markdown="1">
<h3>👻 Invisible on the dashboard</h3>

The card never shows up on the dashboard itself – it only appears while the editor is active and purely moves the header.

</div>
<div class="info-block" markdown="1">
<h3>🍏 iOS & Android safe areas</h3>

The content padding follows <code>safe-area-inset-top</code>, so notches and camera cutouts stay clear.

</div>
<div class="info-block" markdown="1">
<h3>🧠 100% GUI editor ready</h3>

Everything is configurable visually – YAML is optional.

</div>
</div>

## Next steps

- [Installation](installation.md)
- [Resources & YAML](resources.md)
- [Configuration](config.md)
- [Troubleshooting](troubleshooting.md)
