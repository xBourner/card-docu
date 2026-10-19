---
title: Conditions
---

# Conditions

Conditions show a module only while entities have a certain state. All conditions of
a module have to match.

| Option | Description |
|--------|-------------|
| `entity` | The entity to check |
| `state` | The module is shown while the entity has this state |
| `state_not` | The module is shown while the entity does **not** have this state |

A hidden module frees its space for the other flex modules of the column.

---

## YAML Example

```yaml
type: custom:dynamic-grid-card
card_height: 600px
columns:
  - modules:
      - card:
          type: tile
          entity: light.kitchen
        conditions:
          - entity: light.kitchen
            state: "on"
          - entity: binary_sensor.door
            state_not: "on"
      - card:
          type: weather-forecast
          entity: weather.forecast_home
        flex: "1"
```
