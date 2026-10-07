---
title: Getting Started
tags:
  - Setup
hide:
  - tags
---

# Getting Started

**Status Card** builds a complete, always up-to-date overview of your dashboard from the entities and devices in your Home Assistant areas – automatically filtered, grouped and ready to use without daily tweaks.

This page gets you from zero to a working card. The flow is identical for every card in this documentation, only the names and repository change.


!!! tip "First time here?"
    Start with [Installation](installation.md) – every card section follows the same order, so you always know where to look.

## Requirements

- Home Assistant **2024.1 or newer**
- A dashboard in **Lovelace**
- [HACS](https://hacs.xyz) – recommended for installation and updates
- **Advanced Mode** in your user profile – only needed when you register the resource manually

## Steps

1. [Install](installation.md) the Status Card – HACS is the fastest way.
2. Register the [resource](resources.md) if you installed it manually (with HACS this happens automatically).
3. Open your dashboard, click **Edit**, then **Add Card** and search for **Status Card**.
4. Configure it with the visual editor – YAML is optional.
5. Something looks off? Check [Troubleshooting](troubleshooting.md).

<div class="info-grid" markdown="1">
<div class="info-block" markdown="1">
<h3>🗂️ Areas first</h3>

The card reads the entities assigned to your Home Assistant areas – assign your devices and entities to areas before you start.

</div>
<div class="info-block" markdown="1">
<h3>🧩 Deep customization</h3>

Badge mode, smart groups, persons, filters, styles and popup dialogs are documented in the [Customization](customization/index.md) section.

</div>
<div class="info-block" markdown="1">
<h3>❓ Questions?</h3>

The [FAQ](faq.md) answers the most common issues – please read it before opening an issue.

</div>
</div>

## Next steps

- [Installation](installation.md)
- [Resources & YAML](resources.md)
- [Configuration](config.md)
- [Customization](customization/index.md)
- [FAQ](faq.md)
- [Troubleshooting](troubleshooting.md)
