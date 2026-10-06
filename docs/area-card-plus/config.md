---
tags:
  - Customization
hide:
  - tags
---

# Configuration

Once installed, edit your dashboard, click **Add Card** and search for **Area Card
Plus**. The visual editor guides you through all options – just choose an **Area**
and the card does the rest.

!!! info "Source of truth"
    The tables below describe the most important options. The visual editor always
    shows the complete, up-to-date set of settings for your card version.

## Basic

| Option | Type | Description |
|--------|------|-------------|
| `type` | string | `custom:area-card-plus` (required) |
| `area` | area | The area this card represents (required) |
| `label` | string | Optional label displayed on the card |
| `show_active` | boolean | Only show entities that are currently active |
| `unit_system` | select | Metric / imperial units |
| `category_filter` | list | Restrict the shown categories |

## Appearance

| Option | Type | Description |
|--------|------|-------------|
| `area_name` | text | Override the area name |
| `area_name_color` | color | Color of the area name |
| `area_icon` | icon | Override the area icon |
| `area_icon_color` | color | Color of the area icon |
| `display_type` | select | `icon`, `picture`, `icon & picture`, `camera`, `camera & icon` |
| `layout` | select | `vertical` or `horizontal` (required) |
| `design` | select | `V1` or `V2` design |
| `v2_color` | color | Accent color of the V2 design |
| `mirrored` | boolean | Mirror the layout |
| `theme` | theme | Theme override for this card |

### Camera options

Only visible when `display_type` contains `camera`:

| Option | Type | Description |
|--------|------|-------------|
| `camera_view` | select | `auto` or `live` |
| `camera_mode` | select | `single`, `auto` or `split` |
| `camera_entity` | entity | Camera to show (mode `single`) |
| `camera_auto_interval` | number (1–3600) | Rotation interval in seconds (mode `auto`) |
| `camera_entity_left` / `camera_entity_right` | entity | Both cameras (mode `split`) |

## Actions

| Option | Description |
|--------|-------------|
| `tap_action` | Action on tap (`more-info`, `navigate`, `url`, `perform-action`, `none`) |
| `double_tap_action` | Action on double tap |
| `hold_action` | Action on hold |

## Item classes & colors

Every domain group can be tuned individually:

| Option | Type | Description |
|--------|------|-------------|
| `alert_classes` | list | Device classes shown in the alert group |
| `alert_color` | color | Color of the alert group |
| `cover_classes` | list | Device classes shown as covers |
| `cover_color` | color | Color of the cover group |
| `sensor_classes` | list | Device classes shown as sensors |
| `sensor_color` | color | Color of the sensor group |
| `show_sensor_icons` | boolean | Show icons for sensor entries |
| `wrap_sensor_icons` | boolean | Allow sensor icons to wrap |
| `toggle_domains` | list | Domains rendered with a toggle |
| `domain_color` | color | Color of the toggle domain |
| `customization_alert` / `customization_cover` / `customization_domain` / `customization_sensor` | object | Per-device-class overrides |

### Visibility

| Option | Type | Description |
|--------|------|-------------|
| `hidden_entities` | list | Entities hidden from the card |
| `excluded_entities` | list | Entities excluded from processing |
| `custom_buttons` | list | Extra buttons pinned onto the card (own icon, entity, position, actions) |

## Styles

The `styles` object accepts CSS overrides for individual parts of the card:

```yaml
styles:
  card: "border-radius: 24px;"
  icon: "font-size: 28px;"
  name: "font-weight: 700;"
  domain: "opacity: 0.8;"
  cover: ""
  alert: ""
  sensor: ""
  image: ""
  camera: ""
  sensors: ""
  thermostat:
    heat: "#ff5722"
    cool: "#2196f3"
    standby: "#9e9e9e"
```

Raw CSS strings are also available as `css`, `icon_css`, `name_css`, `domain_css`,
`cover_css`, `alert_css` and `sensor_css`.

## YAML example

```yaml
type: custom:area-card-plus
area: living_room
layout: vertical
design: V2
display_type: picture
show_active: true
tap_action:
  action: more-info
styles:
  card: "border-radius: 20px;"
  icon: "font-size: 26px;"
```

!!! tip "Start visual, finish in YAML"
    Configure everything in the editor first, then switch to YAML – the editor writes
    the exact keys shown above.
