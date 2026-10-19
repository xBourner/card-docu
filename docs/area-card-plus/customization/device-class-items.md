---
title: Alerts, Covers & Sensors
---

# Alerts, Covers & Sensors

Some domains are split by their **device class** – "2 windows open" says more than
"6 binary sensors on".

| Group | Domain | Shown as | Default device classes |
|-------|--------|----------|------------------------|
| **Alerts** | `binary_sensor` | Chips that only appear while active | `motion`, `window` |
| **Covers** | `cover` | Buttons that appear while open | `garage`, `door`, `gate`, `blind`, `curtain`, `damper`, `awning`, `shutter`, `shade`, `window` |
| **Sensors** | `sensor` | Values next to the name (average of the area) | `temperature`, `humidity` |

!!! tip "Area sensors"
    If you set a temperature or humidity sensor for the area under
    **Settings → Areas, labels & zones**, the card uses that sensor instead of the average.

---

## Editor Settings

| Option | Description |
|--------|-------------|
| **Alert Classes** (`alert_classes`) / **Alert Color** (`alert_color`) | Device classes and color of the alerts |
| **Cover Classes** (`cover_classes`) / **Cover Color** (`cover_color`) | Device classes and color of the covers |
| **Sensor Classes** (`sensor_classes`) / **Sensor Color** (`sensor_color`) | Device classes and color of the sensors |
| **Show Sensor Icons** (`show_sensor_icons`) | Show an icon in front of every sensor value |
| **Wrap Sensor Icons** (`wrap_sensor_icons`) | Let the sensor line wrap instead of cutting it off |

The lists offer the device classes found in the area. Drag them to change the order.

### Per device class customization

| Option | Alerts | Covers | Sensors |
|--------|:------:|:------:|:-------:|
| **Invert** – show while *off* instead of *on* | ✓ | ✓ | ✓ |
| **Icon** | ✓ | ✓ | – |
| **Color** | ✓ | ✓ | ✓ |
| **Tap / Hold / Double Tap Action** | ✓ | ✓ | ✓ |
| **Styles** | ✓ | ✓ | ✓ |
| **Popup Card** | ✓ | ✓ | ✓ |

---

## YAML Example

```yaml
type: custom:area-card-plus
area: living_room
alert_classes: [motion, window, door]
alert_color: red
cover_classes: [shutter]
sensor_classes: [temperature, humidity]
show_sensor_icons: true
customization_alert:
  - type: window
    icon: mdi:window-open-variant
    color: orange
customization_sensor:
  - type: humidity
    color: blue
```
