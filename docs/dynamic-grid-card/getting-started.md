---
title: Getting Started
tags:
  - Setup
hide:
  - tags
---

# Getting Started

**Dynamic Grid Card** arranges cards in columns that share the height of the card –
every module is either a normal Lovelace card or a built-in smart module.

This page gets you from zero to a working card. The flow is identical for every card in this documentation, only the names and repository change.


!!! tip "First time here?"
    Start with [Installation](installation.md) – every card section follows the same order, so you always know where to look.

## Requirements

- Home Assistant **2026.3 or newer**
- A dashboard in **Lovelace**
- [HACS](https://hacs.xyz) – the card is installed as a **custom repository**
- **Advanced Mode** in your user profile – only needed when you register the resource manually

## Steps

1. [Install](installation.md) the Dynamic Grid Card as a HACS custom repository.
2. Register the [resource](resources.md) if you installed it manually (with HACS this happens automatically).
3. Open your dashboard, click **Edit**, then **Add Card** and search for **Dynamic Grid Card**.
4. Add columns and modules in the visual editor – YAML is optional.
5. Something looks off? Check [Troubleshooting](troubleshooting.md).

<div class="info-grid" markdown="1">
<div class="info-block" markdown="1">
<h3>▦ Columns</h3>

The card is a row of columns with one shared height – set it with <code>card_height</code>.

</div>
<div class="info-block" markdown="1">
<h3>🧱 Modules</h3>

Each column holds modules: any Lovelace card or a smart module (<code>person</code>, <code>calendar</code>, <code>security</code>). See [Customization](customization/index.md).

</div>
<div class="info-block" markdown="1">
<h3>⚠️ Work in progress</h3>

No release yet – option names may still change until the first version.

</div>
</div>

## Next steps

- [Installation](installation.md)
- [Resources & YAML](resources.md)
- [Configuration](config.md)
- [Customization](customization/index.md)
- [FAQ](faq.md)
- [Troubleshooting](troubleshooting.md)
