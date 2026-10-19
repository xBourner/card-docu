---
title: Styles
---

# Styles

The **Style** tab accepts CSS per part of the card, as a YAML object or as a string.

| Identifier | Part |
|------------|------|
| `card` | Card background and border |
| `icon` | Main area icon |
| `name` | Area name |
| `domain` | Domain buttons (light, switch …) |
| `cover` | Cover buttons |
| `alert` | Alert chips |
| `sensor` | A single sensor value |
| `sensors` | The whole sensor line |
| `image` | Area picture |
| `camera` | Camera view |
| `thermostat` | Colors for `heat`, `cool` and `standby` of the climate icon |

**Animations:** `spin`, `pulse`, `shake`, `blink`, `bounce`

Items have their own styles in their customization: `button`, `icon` and `name`.

---

## YAML Example

```yaml
type: custom:area-card-plus
area: living_room
styles:
  card:
    background-color: rgba(255, 0, 0, 0.1)
    border: none
  icon:
    animation: spin 2s linear infinite
    --mdc-icon-size: 40px
    color: var(--primary-color)
  name: "font-size: 15px;"
  domain: "--mdc-icon-size: 24px;"
  image: "opacity: 0.5;"
  thermostat:
    heat: "#ff5722"
    cool: "#2196f3"
    standby: "#9e9e9e"
customization_domain:
  - type: light
    styles:
      icon: "animation: pulse 2s ease-in-out infinite;"
```
