---
tags:
  - Customization
hide:
  - tags
---

# Configuration

## Basic options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `type` | string | – | `custom:server-card-plus` (required) |
| `title` | text | auto | Own label for the displayed system |
| `node` | text | `auto` | System key to show, `auto` = first detected system |
| `mode` | select | `single` | `single` = one system, `dashboard` = all systems as a grid |
| `icon` | icon | auto | Override the auto-detected icon |
| `show_hdd_temp` | boolean | `false` | Only show the disk temperature as a text line |

## Thresholds & colors

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `warn` | number (%) | – | CPU/RAM value from which the **warning** color is used |
| `crit` | number (%) | – | CPU/RAM value from which the **critical** color is used |
| `accent` | color | – | Accent color for icon, bars and labels |
| `color_ok` | color | green | Color for the OK state |
| `color_warn` | color | orange | Color for the warning state |
| `color_crit` | color | red | Color for the critical state |

## Dashboard mode

When `mode: dashboard` is used, all detected systems are rendered as a grid:

| Option | Type | Description |
|--------|------|-------------|
| `hidden_systems` | list | System keys that should not be shown |
| `overrides` | object | Per system key: `title`, `icon`, `warn`, `crit`, `color_ok`, `color_warn`, `color_crit`, `accent` |

```yaml
overrides:
  pve-node01:
    title: "NAS / Node 01"
    icon: mdi:server
    warn: 70
    crit: 90
    accent: "#03a9f4"
```

## YAML examples

### Single node

```yaml
type: custom:server-card-plus
title: Proxmox pve
node: auto
```

### A specific node with own thresholds

```yaml
type: custom:server-card-plus
title: "Node 01"
node: pve-node01
warn: 60
crit: 85
show_hdd_temp: true
```

### All systems as a grid

```yaml
type: custom:server-card-plus
mode: dashboard
hidden_systems:
  - pve-test
overrides:
  pve-node01:
    title: "Node 01"
    warn: 70
    crit: 90
```

## Troubleshooting

- **No systems detected** – the card needs `binary_sensor.node_<name>_status`
  entities (Proxmox VE integration). Check **Developer Tools → States** for
  `node_`.
- **Wrong entities used** – detection is pattern based. If your integration names
  entities differently, the mapping may miss; this is tracked in the roadmap.
- **German vs. English** – both work: matching is done on `node_` / `disk_`
  prefixes plus `memory|arbeitsspeicher` and `percent|prozent`.
