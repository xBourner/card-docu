---
title: Release Notes
---

# 📰 Release Notes

## v0.3.0

### Initial Release 🎉
**Server Card Plus** is a system monitor card for Home Assistant and the **Proxmox VE** integration. It finds your host, VMs and containers automatically and shows CPU, RAM, disk usage and online status.

Please note that this is a first prototype. Right now the card only supports Proxmox VE - more sources (System Monitor, Glances, ...) are on the roadmap.

### Features 📰 
- **Auto-detection:** Host, VMs (`qemu`) and containers (`lxc`) are found from their `binary_sensor.<system>_status` entities. No need to pick entities by hand.
- **Three Designs:**
  - **Classic** - slim bars in the style of Apple widgets
  - **Circles** - progress rings in the style of Apple widgets
  - **Rack** - LED segment meters, the scale shows where the warning and critical range begins
- **Single or Dashboard Mode:** Show one system per card, or all systems as a grid. In dashboard mode you can hide single systems and override title, icon, thresholds and colors per system.
- **Thresholds & Colors:** Set warning and critical levels and the colors for them, globally or per system.
- **Disk Temperatures:** Every disk of the host can be shown as its own ring or bar.
- **Controls:** Optional buttons to start, reboot, shut down and stop a machine. Reboot, shut down and stop need a second tap to confirm.
- **Language Independent:** German and English entity IDs are both detected. The card itself follows your Home Assistant language (German or English).
- **GUI Editor:** Everything can be set up in the visual editor, YAML is still possible.

```yaml
type: custom:server-card-plus
mode: dashboard
design: circles
show_hdd_temp: true
show_controls: true
warn: 70
crit: 90
```

---

All releases: [GitHub Releases](https://github.com/xBourner/server-card-plus/releases)
