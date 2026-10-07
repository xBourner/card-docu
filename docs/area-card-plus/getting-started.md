---
title: Getting Started
tags:
  - Setup
hide:
  - tags
---

# Getting Started

**Area Card Plus** turns a single Home Assistant area into a full featured card: all entities and devices of that area, neatly grouped by domain or device class right out of the box.

This page gets you from zero to a working card. The flow is identical for every card in this documentation, only the names and repository change.


!!! tip "First time here?"
    Start with [Installation](installation.md) – every card section follows the same order, so you always know where to look.

## Requirements

- Home Assistant **2024.1 or newer**
- A dashboard in **Lovelace**
- [HACS](https://hacs.xyz) – recommended for installation and updates
- **Advanced Mode** in your user profile – only needed when you register the resource manually

## Steps

1. [Install](installation.md) the Area Card Plus – HACS is the fastest way.
2. Register the [resource](resources.md) if you installed it manually (with HACS this happens automatically).
3. Open your dashboard, click **Edit**, then **Add Card** and search for **Area Card Plus**.
4. Configure it with the visual editor – YAML is optional.
5. Something looks off? Check [Troubleshooting](troubleshooting.md).

<div class="info-grid" markdown="1">
<div class="info-block" markdown="1">
<h3>🏠 Areas first</h3>

Verify that your entities are correctly assigned to their areas and domains in Home Assistant – the card only shows what belongs to an area.

</div>
<div class="info-block" markdown="1">
<h3>📚 Grouped automatically</h3>

Active entities are organized by <code>domain</code> or <code>device_class</code> with interactive detail popups.

</div>
<div class="info-block" markdown="1">
<h3>🎨 Two designs</h3>

V1 and V2 layouts plus vertical mode let the card match your dashboard style.

</div>
</div>

## Next steps

- [Installation](installation.md)
- [Resources & YAML](resources.md)
- [Configuration](config.md)
- [Troubleshooting](troubleshooting.md)
