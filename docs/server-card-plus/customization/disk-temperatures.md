---
title: Disk Temperatures
---

# Disk Temperatures

With `show_hdd_temp: true` every disk of the **host** is added:

- **Classic / Circles:** one extra bar or ring per disk, labelled with the disk name
- **Rack:** one text line with all temperatures

The temperature scale is fixed: 0–70 °C, **yellow from 45 °C**, **red from 55 °C**.
Guests (VMs, containers) have no disk entities, so nothing is added there.

---

## YAML Example

```yaml
type: custom:server-card-plus
node: node_pve
design: circles
show_hdd_temp: true
```
