---
title: Calendars & Colors
---

# Calendars & Colors

The card uses every `calendar.*` entity. The **Calendars** section of the editor lists
them all, each with its own settings.

| Option | Description |
|--------|-------------|
| **Show** (`exclude_entities`) | Switch a calendar off to hide its events |
| **Read only** (`read_only_calendars`) | No add, edit or delete for this calendar in the card |
| **Color** (`calendar_colors`) | Color of the icon and accent of this calendar |
| **Background Color** (`calendar_background_colors`) | Background of the events of this calendar |

## Global colors

| Option | Description |
|--------|-------------|
| **Global Color** (`calendar_icon_color`) | Color of all calendar icons |
| **Background Color** (`background_color`) | Background of the card |

Colors can be a color name, a CSS value (`"#03a9f4"`) or an RGB list (`[3, 169, 244]`).

---

## YAML Example

```yaml
type: custom:calendar-card-plus
exclude_entities:
  - calendar.holidays
read_only_calendars:
  - calendar.work
calendar_colors:
  calendar.family: "#03a9f4"
  calendar.work: "#ff9800"
calendar_background_colors:
  calendar.work: "rgba(255, 152, 0, 0.1)"
```
