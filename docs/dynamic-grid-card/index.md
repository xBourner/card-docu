---
title: Home
---

# Dynamic Grid Card

<span class="card-badge card-badge--wip">Work in progress</span>

**Dynamic Grid Card** builds a flexible column layout for your dashboard: every
column contains modules, and every module is either a normal Lovelace card or a
built-in *smart module*.

Whenever a group has something to show, the module renders – otherwise it stays
hidden. Tapping a group opens a detail popup with the matching entities.

!!! warning "Status"
    This card is still under active development and is **not published on GitHub /
    HACS yet**. The documentation below reflects the current development state.

## Concepts

<div class="info-grid">
  <div class="info-block">
    <h3>▦ Columns</h3>
    <p>The card is a grid of columns (<code>columns[]</code>). The number of columns is derived automatically from the configuration.</p>
  </div>
  <div class="info-block">
    <h3>🧱 Modules</h3>
    <p>Each column holds a list of modules. A module is either a regular Lovelace card (<code>type: card</code>) or a smart module (<code>type: smart</code>).</p>
  </div>
  <div class="info-block">
    <h3>🧠 Smart modules</h3>
    <p><code>person</code>, <code>calendar</code> and <code>security</code> are built in and render themselves only when they have content.</p>
  </div>
</div>

## Features

- 📐 **Dynamic columns** – one, two or more columns, height either fixed
  (`card_height`) or automatic.
- 🧩 **Nest any card** – every Lovelace card can be placed inside a module.
- 🧠 **Smart modules** – persons (home/away, grayscale, badge), calendars (upcoming
  events) and security sensors (camera/door/window groups).
- 🔀 **Conditions** – show a module only when an entity is (not) in a certain state.
- 💬 **Detail popup** – tap a module to see its entities grouped in a dialog.
- 🖱️ **Visual editor** – columns, modules and conditions are edited via drag & drop
  style dialogs.

## Next steps

- [Installation](installation.md)
- [Configuration](config.md)
