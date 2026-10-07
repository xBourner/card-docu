---
title: Getting Started
tags:
  - Setup
hide:
  - tags
---

# Getting Started

**Server Card Plus** is a system monitor overview with auto-detection for the Proxmox VE integration: CPU, RAM, disk temperature and a green/red online-offline dot per node.

This page gets you from zero to a working card. The flow is identical for every card in this documentation – but the card is an early prototype, so you install it manually.


!!! tip "First time here?"
    Start with [Installation](installation.md) – every card section follows the same order, so you always know where to look.

## Requirements

- Home Assistant **2024.1 or newer**
- A dashboard in **Lovelace**
- The [xBourner/server-card-plus](https://github.com/xBourner/server-card-plus) repository – releases may not be published yet, so plan a manual install
- **Advanced Mode** in your user profile – only needed when you register the resource manually

## Steps

1. Install the card manually as described in [Installation](installation.md).
2. Register the [resource](resources.md) – releases may not be published yet, so do it by hand.
3. Open your dashboard, click **Edit**, add a **Manual card** and enter `type: custom:server-card-plus`.
4. Configure the card in YAML – see [Configuration](config.md).
5. Something looks off? Check [Troubleshooting](troubleshooting.md).

<div class="info-grid" markdown="1">
<div class="info-block" markdown="1">
<h3>🟢 Status dot per node</h3>

Read automatically from <code>binary_sensor.node_&lt;name&gt;_status</code> with CPU and RAM bars plus disk temperature chips.

</div>
<div class="info-block" markdown="1">
<h3>🧠 Auto-detection</h3>

The dropdown and all entities are detected from your entity IDs – German and English names both work.

</div>
<div class="info-block" markdown="1">
<h3>🧪 Early prototype</h3>

Version 0.1.0 – Proxmox VE only for now, System Monitor, Glances and UniFi are on the roadmap.

</div>
</div>

## Next steps

- [Installation](installation.md)
- [Resources & YAML](resources.md)
- [Configuration](config.md)
- [Troubleshooting](troubleshooting.md)
