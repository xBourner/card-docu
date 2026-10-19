---
title: Smart Modules
---

# Smart Modules

Smart modules are built into the card. They find their entities on their own and
only render when they have something to show.

```yaml
- type: smart
  module_type: person      # person, calendar or security
  module_config: {}        # options of the module
```

---

## Person

Avatars of the people in your home.

| Option | Description |
|--------|-------------|
| **Show only people at home** (`show_only_home`) | Hide people who are away |
| **Grayscale when away** (`use_grayscale`) | Show people who are away in grayscale |
| **Show status badge** (`show_badge`) | Small home/away badge on the avatar |
| `include_entities` | Only these `person.*` entities (default: all) |

---

## Calendar

Running and upcoming calendar events.

| Option | Default | Description |
|--------|---------|-------------|
| **Show entries even if not running** (`show_all`) | `false` | Show every next event, not only those within the look-ahead |
| `max_minutes_until_start` | `60` | Look-ahead in minutes for upcoming events |
| `include_entities` | all | Only these calendars |

The module is hidden while no event is running or coming up within the look-ahead.

---

## Security

Open locks, doors, windows, motion and safety sensors, grouped. A tap opens a popup
with the entities of each group.

| Group | Entities |
|-------|----------|
| **Locks** | `lock.*` that are `unlocked` or `jammed` |
| **Windows** | `binary_sensor` that is on, device class `window` or `garage_door` |
| **Doors** | `binary_sensor` that is on, device class `door` or `gate` |
| **Motion** | `binary_sensor` that is on, device class `motion`, `moving`, `occupancy`, `presence` or `vibration` |
| **Safety** | `binary_sensor` that is on, device class `safety`, `smoke`, `gas`, `moisture`, `problem` or `tamper` |

| Option | Description |
|--------|-------------|
| `exclude_groups` | Groups to ignore: `lock`, `window`, `door`, `motion`, `safety` |
| `exclude_entities` | Single entities to ignore |

In the editor every group lists its entities with a switch to include or exclude them.

---

## YAML Example

```yaml
type: custom:dynamic-grid-card
card_height: 600px
columns:
  - modules:
      - type: smart
        module_type: person
        module_config:
          use_grayscale: true
          show_badge: true
        height: 110px
      - type: smart
        module_type: calendar
        module_config:
          max_minutes_until_start: 180
        flex: "1"
      - type: smart
        module_type: security
        module_config:
          exclude_groups: [motion]
        flex: "1"
```
