---
title: Breakpoints
---

# Breakpoints

Choose the viewports where the navbar should snap to the bottom – exactly like the
native visibility options in Home Assistant. You can select multiple options; the
header moves to the bottom on **all** selected breakpoints.

| Breakpoint | Viewport |
|------------|----------|
| `mobile` | up to 767 px |
| `tablet` | 768 px – 1023 px |
| `desktop` | 1024 px – 1279 px |
| `wide` | from 1280 px |
| `custom` | from `custom_width` (your own value) |

Each breakpoint has two toggles:

- **Enable** – activate the new header position for this breakpoint.
- **Global Enable** – also apply it to *every* dashboard, not only the one that
  contains this card.

## Custom width

Only available when the `custom` breakpoint is enabled. Defines the minimum width in
pixels from which the header is moved (`custom_width`).

---

## YAML Example

```yaml
type: custom:header-position-card
Style:
  - mobile
  - custom
custom_width: 1600
```
