---
title: Home
---

# Dynamic Grid Card

<span class="card-badge card-badge--wip">Work in progress</span>

**Dynamic Grid Card** is a custom card for Home Assistant dashboards, inspired by the
Apple CarPlay dashboard. It arranges cards in columns that share the available height,
and modules can hide themselves when they have nothing to show – the remaining modules
grow into the free space.

!!! warning "Status"
    The card is on [GitHub](https://github.com/xBourner/dynamic-grid-card) and can be
    installed as a HACS **custom repository**. There is no release yet, so option names
    may still change.

## Concepts

<div class="info-grid">
  <div class="info-block">
    <h3>▦ Columns</h3>
    <p>The card is a row of columns (<code>columns</code>) with one shared height (<code>card_height</code>).</p>
  </div>
  <div class="info-block">
    <h3>🧱 Modules</h3>
    <p>Each column holds a list of modules. A module is any Lovelace card or a smart module.</p>
  </div>
  <div class="info-block">
    <h3>🧠 Smart modules</h3>
    <p><code>person</code>, <code>calendar</code> and <code>security</code> are built in and only render when they have content.</p>
  </div>
</div>

## Features

- 🍎 **CarPlay-style layout** – columns of modules in one card with a fixed overall
  height.
- 🧩 **Any card as a module** – put any Home Assistant card (built-in or custom) into
  a column.
- 📐 **Dynamic or fixed height** – modules share the free space (`flex`) or use a
  fixed `height`.
- 👁️ **Conditional modules** – show a module only while an entity has (or does not
  have) a given state.
- 🧠 **Smart modules** – ready-made modules for people, upcoming calendar events and
  security, with a detail popup.
- 🖱️ **GUI editor** – build columns and modules in the visual editor, no YAML required.

## Next steps

- [Getting Started](getting-started.md)
- [Installation](installation.md)
- [Configuration](config.md)
- [Customization](customization/index.md)
- [FAQ](faq.md)
- [Projects](projects.md)
