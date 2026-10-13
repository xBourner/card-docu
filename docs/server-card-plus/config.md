---
tags:
  - Customization
hide:
  - tags
---

# Configuration

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

## Thresholds & colors

These options apply in both modes. In the editor they live in the collapsible
**Thresholds & colours** panel.

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `warn` | number (%) | `75` | Value from which CPU, RAM and disk use the **warning** color |
| `crit` | number (%) | `90` | Value from which CPU, RAM and disk use the **critical** color |
| `color_ok` | color | green | Color below the warning threshold |
| `color_warn` | color | yellow | Color for the warning range |
| `color_crit` | color | red | Color for the critical range |
| `accent` | color | theme primary | Accent color for the icon and labels |

Colors can be a CSS value (`"#03a9f4"`, `"var(--accent-color)"`) or an RGB list
(`[3, 169, 244]`) as produced by the editor's color picker.

## Disk temperatures

With `show_hdd_temp: true` every disk of the **host** is added:

- **Classic / Circles:** one extra bar or ring per disk, labelled with the disk name
- **Rack:** one text line with all temperatures

The temperature scale is fixed: 0–70 °C, **yellow from 45 °C**, **red from 55 °C**.
Guests (VMs, containers) have no disk entities, so nothing is added there.

## Controls

With `show_controls: true` the card shows up to four buttons – only those the
integration provides for that system:

| Button | Action | Confirmation | Enabled when |
|--------|--------|--------------|--------------|
| Start | Starts the machine | – | System is off |
| Reboot | Restarts the machine | Second tap | System is on |
| Shut down | Graceful shutdown | Second tap | System is on |
| Stop | Hard stop, no shutdown | Second tap | System is on |

The first tap on a destructive button turns it red (**Sure?**); a second tap within
four seconds runs the action. The card presses the integration's button entities
(`button.<system>_start` …), so permissions and behaviour are those of the
integration. If no buttons are found, the editor shows a hint.

## Dashboard mode

With `mode: dashboard` all detected systems are rendered as a responsive grid:

| Option | Type | Description |
|--------|------|-------------|
| `hidden_systems` | list | System keys that should not be shown |
| `overrides` | object | Per system key: `title`, `icon`, `warn`, `crit`, `color_ok`, `color_warn`, `color_crit`, `accent` |

In the editor, each system has a **Hide / Show** button and an expandable panel for
its overrides. Values not overridden fall back to the global options.

```yaml
overrides:
  node_pve:
    title: "NAS / Node 01"
    icon: mdi:server
    warn: 70
    crit: 90
    accent: "#03a9f4"
```

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

## Tips

- **System missing in the list?** The card needs a `binary_sensor.<system>_status`
  entity for it – check **Developer Tools → States**.
- **A value shows –** – the sensor is missing, unavailable or not numeric (typical
  for a VM that is turned off).
- **Wrong language?** The card follows your Home Assistant language: German for
  German, English for everything else.
