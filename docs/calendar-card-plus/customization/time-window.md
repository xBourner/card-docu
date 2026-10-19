---
title: Time Window
---

# Time Window

| Option | Description |
|--------|-------------|
| **Show upcoming events** (`upcoming_events`) | Look ahead. Off: only the rest of today |
| **Days / Hours / Minutes** (`days`, `hours`, `minutes`) | Length of the look-ahead, only shown with upcoming events |
| `max_minutes_until_start` | Look-ahead in minutes if days, hours and minutes are not set |
| **Show Empty Days** (`show_empty_days`) | Add an entry for every day without events |
| **Text for empty days** (`empty_text`) | Text of these entries |

!!! info "How the window is calculated"
    With `days`, `hours` or `minutes` set, the card looks ahead
    `days × 1440 + hours × 60 + minutes` minutes. Without them it uses
    `max_minutes_until_start`, and without that the next **24 hours**.

Empty days don't count towards `max_lines` or the "+N more" number.

---

## YAML Example

```yaml
type: custom:calendar-card-plus
upcoming_events: true
days: 7
show_empty_days: true
empty_text: Nothing planned
```
