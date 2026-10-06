---
tags:
  - Customization
hide:
  - tags
---

# Configuration

!!! warning "Development state"
    The option names below reflect the current development version of the card.

## Card options

| Option | Type | Description |
|--------|------|-------------|
| `type` | string | `custom:dynamic-grid-card` (required) |
| `header` | text | Heading of the grid |
| `card_height` | text | Height of the card, e.g. `600px` or `85vh` (default: auto) |
| `columns` | list | List of columns, each with a `modules` list |

```yaml
type: custom:dynamic-grid-card
header: My Dashboard
card_height: 600px
columns:
  - modules: []
  - modules: []
```

## Modules

Every column contains modules. There are two kinds:

| `type` | Purpose |
|--------|---------|
| `card` | Wraps any regular Lovelace card (`card:`) |
| `smart` | A built-in smart module (`module_type:` + `module_config:`) |

### Common module options

| Option | Type | Description |
|--------|------|-------------|
| `type` | `card` \| `smart` | Kind of module |
| `height` | text | Fixed height (e.g. `200px`) |
| `flex` | `1` | Grow to fill the available space |
| `conditions` | list | Show the module only if all conditions match |

Conditions are evaluated against the Home Assistant state machine:

```yaml
conditions:
  - entity: light.kitchen
    state: "on"
  - entity: binary_sensor.door
    state_not: "open"
```

### Card modules

```yaml
- type: card
  card:
    type: entities
    title: Lights
    entities:
      - light.kitchen
      - light.hallway
```

Any Lovelace card type works: `entities`, `tile`, `glance`, `markdown`,
`custom:*`, …

## Smart modules

| `module_type` | Renders |
|---------------|---------|
| `person` | Persons with home/away state |
| `calendar` | Upcoming calendar events |
| `security` | Security devices (doors, windows, cameras) |

### `person`

| Option | Type | Description |
|--------|------|-------------|
| `include_entities` | list | Only show these persons (default: all) |
| `show_only_home` | boolean | Only show persons that are at home |
| `use_grayscale` | boolean | Render persons that are away in grayscale |
| `show_badge` | boolean | Show the state badge |

```yaml
- type: smart
  module_type: person
  module_config:
    show_only_home: true
    show_badge: true
```

### `calendar`

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `include_entities` | list | all | Only show these calendars |
| `show_all` | boolean | `false` | Also show past events |
| `max_minutes_until_start` | number | `60` | Only show events starting within *n* minutes |

```yaml
- type: smart
  module_type: calendar
  module_config:
    max_minutes_until_start: 120
```

### `security`

| Option | Type | Description |
|--------|------|-------------|
| `exclude_groups` | list | Security groups to hide |
| `exclude_entities` | list | Entities to hide |

```yaml
- type: smart
  module_type: security
  module_config:
    exclude_groups:
      - camera
```

## Full example

```yaml
type: custom:dynamic-grid-card
header: Home
card_height: 85vh
columns:
  - modules:
      - type: smart
        module_type: person
        module_config:
          show_only_home: true
          show_badge: true
      - type: card
        card:
          type: glance
          entities:
            - sun.sun
  - modules:
      - type: smart
        module_type: calendar
        module_config:
          max_minutes_until_start: 60
      - type: card
        conditions:
          - entity: light.kitchen
            state: "on"
        card:
          type: tile
          entity: light.kitchen
```

## Editor

The visual editor shows:

1. **Header** and **Card Height** at the top.
2. **Columns Configuration** – add, remove and reorder columns via drag & drop.
3. Per column: add, remove and reorder **modules**, switch between *card* and
   *smart*, edit `module_config`, `height` / `flex` and **conditions**.
