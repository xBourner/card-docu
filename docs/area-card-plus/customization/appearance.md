---
title: Appearance
---

# Appearance

The **Appearance** tab sets how the card looks as a whole.

| Option | Description |
|--------|-------------|
| **Area Name** (`area_name`) | Override the name of the area |
| **Area Name Color** (`area_name_color`) | Color of the name |
| **Area Icon** (`area_icon`) | Override the icon of the area |
| **Area Icon Color** (`area_icon_color`) | Color of the icon |
| **Display Type** (`display_type`) | `icon`, `picture`, `icon & picture`, `camera` or `camera & icon` |
| **Mirrored** (`mirrored`) | Mirror the layout |
| **Layout** (`layout`) | `vertical` or `horizontal` |
| **Design** (`design`) | `V1` (classic) or `V2` (colored header band) |
| **V2 Color** (`v2_color`) | Accent color of the V2 design, only shown for V2 |
| **Theme** (`theme`) | Theme used for this card only |

!!! tip "Picture"
    `picture` uses the picture you set for the area under
    **Settings → Areas, labels & zones**. Without an area picture only the icon is shown.

The camera display types are explained in [Camera](camera.md).

---

## Designs

| Design | Look |
|--------|------|
| `V1` | Classic area card: name and icon on the card background, items around it |
| `V2` | Name on a colored band, items below – color set with `v2_color` |

<p align="center">
  <img width="49%" alt="V1 Design" src="https://raw.githubusercontent.com/xbourner/area-card-plus/main/.github/img/area-multi-light.png">
&nbsp;
  <img width="49%" alt="V2 Design" src="https://raw.githubusercontent.com/xbourner/area-card-plus/main/.github/img/area-multi-light-v2.png">
</p>

---

## YAML Example

```yaml
type: custom:area-card-plus
area: kitchen
area_name: Kitchen
area_icon: mdi:stove
area_icon_color: orange
display_type: icon & picture
layout: horizontal
design: V2
v2_color: [255, 152, 0]
mirrored: false
```
