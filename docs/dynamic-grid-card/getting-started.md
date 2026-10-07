---
title: Getting Started
tags:
  - Setup
hide:
  - tags
---

# Getting Started

**Dynamic Grid Card** builds a flexible column layout for your dashboard: every column contains modules, and every module is either a normal Lovelace card or a built-in smart module.

This page gets you from zero to a working card. The flow is identical for every card in this documentation – but note that this card is still under development and is not published on GitHub or HACS yet.


!!! tip "First time here?"
    Start with [Installation](installation.md) – every card section follows the same order, so you always know where to look.

## Requirements

- Home Assistant **2024.1 or newer**
- A dashboard in **Lovelace**
- Node.js and npm – the card is not published on GitHub / HACS yet and has to be built locally
- **Advanced Mode** in your user profile – only needed when you register the resource manually

## Steps

1. Build and deploy the card as described in [Installation](installation.md).
2. Register the [resource](resources.md) – there is no HACS install yet, so this step is required.
3. Open your dashboard, click **Edit**, add a **Manual card** and enter `type: custom:dynamic-grid-card`.
4. Set up your columns and modules – the visual editor takes over once the card is added, YAML stays possible ([Configuration](config.md)).
5. Something looks off? Check [Troubleshooting](troubleshooting.md).

<div class="info-grid" markdown="1">
<div class="info-block" markdown="1">
<h3>▦ Columns</h3>

The card is a grid of columns (<code>columns[]</code>) – the number of columns is derived from the configuration.

</div>
<div class="info-block" markdown="1">
<h3>🧱 Modules</h3>

Each column holds modules: a regular Lovelace card or a smart module (<code>person</code>, <code>calendar</code>, <code>security</code>).

</div>
<div class="info-block" markdown="1">
<h3>⚠️ Work in progress</h3>

No HACS repository and no GitHub release yet – the documentation reflects the current development state.

</div>
</div>

## Next steps

- [Installation](installation.md)
- [Resources & YAML](resources.md)
- [Configuration](config.md)
- [Troubleshooting](troubleshooting.md)
