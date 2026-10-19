---
title: Custom Buttons
---

# Custom Buttons

Custom buttons add your own button for any entity – also entities from other areas.

| Option | Description |
|--------|-------------|
| **Entity** (`entity`) | Entity of the button |
| **Name** (`name`) | Text under the icon |
| **Icon** (`icon`) | Icon of the button |
| **Use Entity Picture** (`use_entity_picture`) | Show the entity picture instead of the icon |
| **Activate State Color** (`activate_state_color`) | Color the icon by the entity state |
| **Color** (`color`) | Fixed icon color |
| **State** (`state_mode`, `state_value`) | Show the button only if the entity state is (`equal`) or is not (`not_equal`) a value |
| **Tap / Hold / Double Tap Action** | Tap toggles the entity by default |
| **Styles** | Custom CSS for `button`, `icon` and `name` |

---

## Position

| Position | Placement |
|----------|-----------|
| `default` | Next to the domain buttons |
| `top-left`, `top-right`, `bottom-left`, `bottom-right` | Pinned to a corner of the card |
| `custom` | Free placement with `position_top`, `position_right`, `position_bottom`, `position_left` (any CSS length) |

Buttons with the same position and the same **Group** (`position_group`) are placed
next to each other. **Direction** (`position_direction`) lines them up as a `row` or
a `column`.

---

## YAML Example

```yaml
type: custom:area-card-plus
area: hallway
custom_buttons:
  - entity: lock.front_door
    icon: mdi:lock
    activate_state_color: true
    position: top-right
  - entity: person.anna
    use_entity_picture: true
    state_mode: equal
    state_value: home
    position: bottom-left
    position_group: persons
    position_direction: row
```
