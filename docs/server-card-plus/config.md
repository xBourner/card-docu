---
tags:
  - Customization
hide:
  - tags
---

# ⚙️ Configuration & Usage

Once installed, edit your dashboard, click **Add Card** and search for **Server Card
Plus**. The visual editor covers every option – YAML is optional.

## System keys

Every system has a **key** made of its kind and its name from the entity IDs:

| Kind | Example entity | Key |
|------|----------------|-----|
| Host | `binary_sensor.node_pve_status` | `node_pve` |
| VM | `binary_sensor.qemu_haos_101_status` | `qemu_haos_101` |
| Container | `binary_sensor.lxc_adguard_100_status` | `lxc_adguard_100` |

The editor lists all detected systems with their key, so you rarely need to type one.

## Basic options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `type` | string | – | `custom:server-card-plus` (required) |
| `mode` | select | `single` | `single` = one system, `dashboard` = all systems as a grid |
| `design` | select | `classic` | `classic` (bars), `circles` (rings) or `rack` (LED segments) |
| `node` | text | `auto` | System key to show in single mode, `auto` = first detected system |
| `title` | text | auto | Own title in single mode (default: the system name, e.g. *HAOS*) |
| `icon` | icon | auto | Own icon in single mode (default: app icon if known, otherwise by kind) |
| `show_hdd_temp` | boolean | `false` | Show the host's disk temperatures |
| `show_controls` | boolean | `false` | Show start, reboot, shut down and stop buttons |

## More options

Thresholds, colors, disk temperatures, controls and the dashboard mode are explained in
[Customization](customization/index.md).

## YAML examples

### Single system

```yaml
type: custom:server-card-plus
node: auto
design: classic
```

### Host with rings, disk temperatures and controls

```yaml
type: custom:server-card-plus
node: node_pve
design: circles
show_hdd_temp: true
show_controls: true
warn: 60
crit: 85
```

### All systems as a grid

```yaml
type: custom:server-card-plus
mode: dashboard
design: rack
show_controls: true
hidden_systems:
  - lxc_test_200
overrides:
  qemu_haos_101:
    title: "Home Assistant"
    warn: 70
    crit: 90
```
