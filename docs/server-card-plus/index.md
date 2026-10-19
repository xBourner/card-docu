---
title: Home
---

# Server Card Plus

**Server Card Plus** is a custom card for Home Assistant – a **system monitor** for
the Proxmox VE integration. It detects your host, every VM and every LXC container
automatically and shows CPU, RAM, disk usage and online status, optionally with disk
temperatures and buttons to start, reboot, shut down or stop a machine.

!!! info "Status: prototype (v0.3.0)"
    The card currently targets **Proxmox VE**. Further sources (System Monitor,
    Glances, …) are on the roadmap.

## Features

- 🔎 **Auto-detection** – host, VMs (`qemu`) and containers (`lxc`) are found from
  their `binary_sensor.<system>_status` entities, no entity picking needed
- 🎨 **Three designs** – choose in the visual editor:
    - **Classic** – slim bars in the style of Apple widgets
    - **Circles** – progress rings in the style of Apple widgets
    - **Rack** – LED segment meters whose scale shows the warning and critical range
- 🧩 **Single or dashboard mode** – one system per card, or all systems as a grid
  with per-system hiding and overrides
- 🚦 **Thresholds & colors** – warning and critical levels plus colors, globally or
  per system
- 🌡️ **Disk temperatures** – every host disk as its own ring or bar
- ⏯️ **Optional controls** – start, reboot, shut down and stop via the integration's
  button entities; destructive actions need a second tap to confirm
- 🌍 **Language independent** – German and English entity IDs are both detected; the
  card itself follows your Home Assistant language (German or English)
- 🧠 **GUI editor ready** – everything is configurable visually, YAML stays possible

## The designs

| Design | Best for |
|--------|----------|
| `classic` | Default. Compact list with a thin bar per value – easy to scan in a column |
| `circles` | Three rings side by side (plus one per disk) – reads well on wide tiles |
| `rack` | Server front panel look. The unlit segments already mark where the warning and critical range begins |

All designs use your theme colors and the colors you configure. Missing or
unavailable values are shown as **–**, never as 0 %.

## How the auto-detection works

- Every `binary_sensor.node_<name>_status`, `binary_sensor.qemu_<name>_<id>_status`
  and `binary_sensor.lxc_<name>_<id>_status` becomes a **system**.
- The metrics of a system are matched by entity ID prefix
  (`sensor.<system>_…`):
    - **CPU:** `<system>_cpu*`
    - **RAM:** contains `arbeitsspeicher` / `memory` **and** `prozent` / `percent`
    - **Disk usage:** `<system>_prozentsatz_belegter_speicherplatz` / `used_percent`
    - **Disks (host):** `disk_<node>_<disk>_temperatur` / `temperature`, plus size,
      wear and health
    - **Controls:** `button.<system>_start`, `_stop`, `_reboot`, `_shutdown` (or the
      German `_starten`, `_stoppen`, `_neu_starten`, `_herunterfahren`)
- Systems that share a prefix (e.g. `node_pve` and `node_pve_2`) are kept apart.
- Detection only runs again when entities are added or removed, and the card only
  re-renders when one of its own entities changes – cheap even on wall tablets.

## Next steps

- [Getting Started](getting-started.md)
- [Installation](installation.md)
- [Configuration](config.md)
- [Customization](customization/index.md)
- [FAQ](faq.md)
- [Projects](projects.md)
