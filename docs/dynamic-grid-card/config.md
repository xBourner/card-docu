---
tags:
  - Customization
hide:
  - tags
---

# ⚙️ Configuration & Usage

Once **Dynamic Grid Card** is installed, you build the grid column by column.

---

## The GUI Editor

1. Open your dashboard and click **Edit Dashboard**.
2. Click **Add Card**.
3. Search for **Dynamic Grid Card**.
4. Set a **Header** and the **Card Height**.
5. Add columns, then add modules to every column – a card, a preset or a smart module.

Columns and modules can be reordered by drag & drop. Every module opens its own
editor for the card, the smart module options, the height and the conditions.

Every part is explained in [Customization](customization/index.md).

---

## YAML Configuration (For Pros)

### Basic Example

```yaml
type: custom:dynamic-grid-card
header: Home
card_height: 600px
columns:
  - modules:
      - card:
          type: weather-forecast
          entity: weather.forecast_home
  - modules:
      - type: smart
        module_type: calendar
```

### Full YAML Settings

```yaml
type: custom:dynamic-grid-card
header: Home                 # title of the card
card_height: 85vh            # height of the whole card, e.g. 600px or 85vh
columns:                     # one entry per column
  - modules:                 # modules of the column, top to bottom
      - card:                # any Lovelace card
          type: media-control
          entity: media_player.living_room
        height: 200px        # fixed height instead of flex
        min_height: 120px    # never smaller than this
        conditions:          # show only if all conditions match
          - entity: media_player.living_room
            state: playing
      - type: smart          # a smart module
        module_type: person  # person, calendar or security
        module_config:       # options of the smart module
          show_only_home: false
          use_grayscale: true
          show_badge: true
        flex: "1"            # share of the free height
  - modules:
      - type: smart
        module_type: calendar
        module_config:
          include_entities: [calendar.family]
          max_minutes_until_start: 120
          show_all: false
        flex: "1"
      - type: smart
        module_type: security
        module_config:
          exclude_groups: [motion]
          exclude_entities: [binary_sensor.garage_window]
        flex: "2"
```
