---
tags:
  - Customization
hide:
  - tags
---

# ⚙️ Configuration & Usage

Once **Area Card Plus** is installed, pick an area and the card fills itself.

!!! info "Main requirement"
    The card is based on your Home Assistant areas. Assign your devices and entities
    to their **areas** beforehand – the card only shows what belongs to the area.

---

## The GUI Editor

The visual editor is the easiest way to configure the card. No YAML knowledge is required.

1. Open your dashboard and click **Edit Dashboard**.
2. Click **Add Card**.
3. Search for **Area Card Plus**.
4. Choose an **Area** – everything else is optional.

The editor is split into four tabs:

| Tab | What you set there |
|-----|--------------------|
| **Configuration** | Area, alerts, covers, sensors, domains, custom buttons, popup and hidden entities |
| **Appearance** | Name, icon, display type (icon, picture, camera), layout, design and theme |
| **Actions** | Tap, double tap and hold action of the card |
| **Style** | Custom CSS for every part of the card |

Every feature is explained in [Customization](customization/index.md).

---

## YAML Configuration (For Pros)

The editor writes exactly the keys shown below, so you can configure visually first
and then fine-tune in YAML.

### Basic Example

```yaml
type: custom:area-card-plus
area: living_room
layout: vertical
design: V2
display_type: picture
```

### Full YAML Settings

```yaml
type: custom:area-card-plus
area: living_room            # the area this card represents (required)
area_name: Living Room       # override the area name
area_name_color: blue        # color of the area name
area_icon: mdi:sofa          # override the area icon
area_icon_color: amber       # color of the area icon
display_type: icon & picture # icon, picture, icon & picture, camera, camera & icon
layout: vertical             # vertical or horizontal (required)
design: V2                   # V1 or V2
v2_color: [33, 150, 243]     # accent color of the V2 design (rgb)
mirrored: false              # mirror the layout
theme: optional              # theme for this card
show_active: false           # hide domain buttons without an active entity

# camera (only with display_type camera / camera & icon)
camera_view: auto            # auto or live
camera_mode: single          # single, auto or split
camera_entity: camera.living_room
camera_auto_interval: 10     # seconds between cameras (mode auto)
camera_entity_left: camera.one   # mode split
camera_entity_right: camera.two  # mode split

# actions of the card itself
tap_action:
  action: navigate
  navigation_path: /dashboard-rooms/living-room
double_tap_action:
  action: none
hold_action:
  action: more-info

# alerts, covers and sensors (device classes)
alert_classes: [motion, window]
alert_color: red
cover_classes: [shutter, blind]
cover_color: purple
sensor_classes: [temperature, humidity]
sensor_color: grey
show_sensor_icons: false
wrap_sensor_icons: false

# toggle domains
toggle_domains: [light, switch, fan, climate]
hidden_toggle_domains: [media_player]  # written by the editor: domains you deselected
domain_color: amber

# popup
columns: 4                   # columns in the popup (1-4)
ungroup_areas: false         # one list instead of groups per domain
hide_unavailable: false      # hide unavailable entities in the popup
popup_sort: name             # name or state
popup_domains: [light, switch, sensor]
hidden_popup_domains: []     # written by the editor: domains you deselected
sync_popup_domains: false    # apply popup_domains to domain popups as well
label: [living]              # only show entities with these labels
extra_entities:              # entities from other areas shown in the popup
  - sensor.outdoor_temperature

# visibility
hidden_entities: [light.led_strip]       # ignored completely
excluded_entities: [switch.standby]      # in the popup, but not counted on the card
category_filter: config+diagnostic       # ignore config and/or diagnostic entities

# per item customization
customization_domain:
  - type: light
    icon: mdi:lightbulb-group
    color: amber
    tap_action:
      action: toggle
customization_alert:
  - type: motion
    invert: false
    color: red
customization_cover:
  - type: shutter
    icon: mdi:window-shutter
customization_sensor:
  - type: temperature
    color: orange

custom_buttons:
  - entity: lock.front_door
    icon: mdi:lock
    position: top-right

styles:
  card: "border-radius: 24px;"
  icon: "--mdc-icon-size: 40px;"
```

!!! tip "Start visual, finish in YAML"
    Configure everything in the editor first, then switch to YAML – the editor writes
    the exact keys shown above.
