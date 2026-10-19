---
title: Layout
---

# Layout

| Option | Description |
|--------|-------------|
| **Title** (`name`) | Title of the card |
| **Unfold Events** (`unfold_events`) | List the events in the card. Off: compact view with the next event and the number of further events |
| **Max. displayed events** (`max_lines`) | Events in the unfolded card (0 = all), the rest opens in the popup |
| **Show Divider** (`show_divider`) | Line between the events |
| **Group by date** (`group_by_date`) | One group per day |
| **Group by date and calendar** (`group_by_date_and_calendar`) | One group per day and calendar |
| **Show 'Add Event' Button** (`show_add_event`) | Plus button to add an event, see [Events & Popup](events-popup.md) |
| **Dark Mode** (`dark_mode`) | Dark styling of the card |

<p align="center">
  <img width="49%" alt="Compact view" src="https://raw.githubusercontent.com/xBourner/calendar-card-plus/main/.github/images/calendar-card-plus.png">
&nbsp;
  <img width="49%" alt="Popup view" src="https://raw.githubusercontent.com/xBourner/calendar-card-plus/main/.github/images/calendar-card-plus_extended.png">
</p>

---

## YAML Example

```yaml
type: custom:calendar-card-plus
name: This week
unfold_events: true
max_lines: 6
show_divider: true
group_by_date: true
```
