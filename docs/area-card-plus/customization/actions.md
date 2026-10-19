---
title: Actions
---

# Actions

The **Actions** tab defines what happens when you tap the card itself. Items on the
card have their own actions, see [Domains](domains.md) and
[Alerts, Covers & Sensors](device-class-items.md).

| Option | Description |
|--------|-------------|
| **Tap Action** (`tap_action`) | Action on tap |
| **Double Tap Action** (`double_tap_action`) | Action on double tap |
| **Hold Action** (`hold_action`) | Action on hold |

Available actions: `more-info` (opens the area popup), `navigate`, `url`,
`perform-action` and `none`.

!!! tip "Room dashboards"
    `navigate` to a subview per room turns the card into a room tile for your dashboard.

---

## YAML Example

```yaml
type: custom:area-card-plus
area: bedroom
tap_action:
  action: navigate
  navigation_path: /home/bedroom
hold_action:
  action: more-info
```
