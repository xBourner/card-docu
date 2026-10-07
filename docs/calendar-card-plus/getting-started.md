---
title: Getting Started
tags:
  - Setup
hide:
  - tags
---

# Getting Started

**Calendar Card Plus** brings a CarPlay inspired calendar view to your dashboard: several calendars at once, a clean responsive layout and a detailed popup for your upcoming events.

This page gets you from zero to a working card. The flow is identical for every card in this documentation, only the names and repository change.


!!! tip "First time here?"
    Start with [Installation](installation.md) – every card section follows the same order, so you always know where to look.

## Requirements

- Home Assistant **2024.1 or newer**
- A dashboard in **Lovelace**
- [HACS](https://hacs.xyz) – recommended for installation and updates
- **Advanced Mode** in your user profile – only needed when you register the resource manually

## Steps

1. [Install](installation.md) the Calendar Card Plus – HACS is the fastest way.
2. Register the [resource](resources.md) if you installed it manually (with HACS this happens automatically).
3. Open your dashboard, click **Edit**, then **Add Card** and search for **Calendar Card Plus**.
4. Configure it with the visual editor – YAML is optional.
5. Something looks off? Check [Troubleshooting](troubleshooting.md).

<div class="info-grid" markdown="1">
<div class="info-block" markdown="1">
<h3>🍎 CarPlay design</h3>

A sleek, modern calendar view with dynamic, localized calendar icons.

</div>
<div class="info-block" markdown="1">
<h3>📅 Multiple calendars</h3>

Events of several calendar entities are combined without the clutter.

</div>
<div class="info-block" markdown="1">
<h3>🔍 Interactive popup</h3>

Click the card to reveal a detailed, beautifully formatted event list.

</div>
</div>

## Next steps

- [Installation](installation.md)
- [Resources & YAML](resources.md)
- [Configuration](config.md)
- [Troubleshooting](troubleshooting.md)
