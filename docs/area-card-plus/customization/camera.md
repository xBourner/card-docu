---
title: Camera
---

# Camera

With `display_type: camera` or `camera & icon` the card shows a camera of the area
instead of the area picture.

!!! info "Cameras of the area"
    The camera lists in the editor only offer `camera.*` entities assigned to the area.

| Option | Description |
|--------|-------------|
| **Camera View** (`camera_view`) | `auto` (snapshots) or `live` (stream) |
| **Camera Mode** (`camera_mode`) | `single`, `auto` or `split` |
| **Camera** (`camera_entity`) | The camera to show – mode `single` |
| **Interval** (`camera_auto_interval`) | Seconds until the next camera is shown (1–3600) – mode `auto` |
| **Left / Right Camera** (`camera_entity_left`, `camera_entity_right`) | Two cameras side by side – mode `split` |

| Mode | Behaviour |
|------|-----------|
| `single` | One fixed camera |
| `auto` | Rotates through all cameras of the area |
| `split` | Two cameras next to each other |

---

## YAML Example

```yaml
type: custom:area-card-plus
area: garden
display_type: camera & icon
camera_view: live
camera_mode: auto
camera_auto_interval: 15
```
