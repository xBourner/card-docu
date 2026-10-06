---
title: Home
---

# Server Card Plus

**Server Card Plus** is a custom card for Home Assistant – a **system monitor
overview** with **auto-detection** for the Proxmox VE integration: CPU, RAM, disk
temperature and a green/red online-offline dot per node.

!!! info "Status: early prototype (v0.1.0)"
    The card currently targets **Proxmox VE**. Further integrations
    (System Monitor, Glances, UniFi, …) are on the roadmap.

## Features

- 🟢/🔴 **Status dot per node** – automatically read from
  `binary_sensor.node_<name>_status`
- 📋 **Dropdown with all detected systems** – the list is built automatically from
  your entities
- 🧠 **CPU & RAM bars** – with warning and critical colors
- 🌡️ **Disk temperature chips** including S.M.A.R.T. health
- 🖥️ **VM / LXC / updates line** per node
- 🌍 **Language independent detection** – matches on `node_` / `disk_` prefixes, not
  on translated words, so German and English entity IDs both work

## How the auto-detection works

- `discoverSystems()` scans all `binary_sensor.node_<name>_status` entities and fills
  the dropdown.
- `detectEntities(node, …)` assigns entities by pattern:
    - **CPU:** `node_<n>_cpu*`
    - **RAM:** contains `arbeitsspeicher` / `memory` **and** `prozent` / `percent`
    - **Disk temperature:** `disk_<n>_*_temperatur` / `temperature`, size, wear and
      health the same way

The detection engine lives in its own file so it can be unit tested without a
browser; the build bundles everything into **one single JavaScript file**, so only
one resource has to be registered.

## Next steps

- [Installation](installation.md)
- [Configuration](config.md)
