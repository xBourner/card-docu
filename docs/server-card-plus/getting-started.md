---
title: Getting Started
tags:
  - Setup
hide:
  - tags
---

# Getting Started

**Server Card Plus** is a system monitor for the Proxmox VE integration: CPU, RAM,
disk usage and online status for your host, VMs and containers – with three designs
and optional machine controls.

This page gets you from zero to a working card. The flow is identical for every card
in this documentation.

!!! tip "First time here?"
    Start with [Installation](installation.md) – every card section follows the same order, so you always know where to look.

## Requirements

- Home Assistant **2026.3 or newer**
- The **Proxmox VE** integration, set up and providing entities such as
  `binary_sensor.node_<name>_status`
- A dashboard in **Lovelace**
- **Advanced Mode** in your user profile – only needed when you register the resource manually
- For the optional controls: the integration's **button entities** (start, stop,
  reboot, shutdown) must be enabled

## Steps

1. Install the card via HACS or manually as described in [Installation](installation.md).
2. Manual install only: register the [resource](resources.md).
3. Open your dashboard, click **Edit → Add Card** and search for **Server Card Plus**.
4. Pick the mode, design and system in the visual editor – see [Configuration](config.md).
5. Something looks off? Check [Troubleshooting](troubleshooting.md).

<div class="info-grid" markdown="1">
<div class="info-block" markdown="1">
<h3>🔎 Finds everything</h3>

Host, VMs and LXC containers are detected from your entity IDs – German and English
names both work.

</div>
<div class="info-block" markdown="1">
<h3>🎨 Three designs</h3>

Classic bars, circles or a rack-style LED meter – switch any time in the editor.

</div>
<div class="info-block" markdown="1">
<h3>⏯️ Optional controls</h3>

Start, reboot, shut down or stop a machine right from the card, with a confirmation
tap for anything destructive.

</div>
</div>

## Next steps

- [Installation](installation.md)
- [Resources & YAML](resources.md)
- [Configuration](config.md)
- [Troubleshooting](troubleshooting.md)
