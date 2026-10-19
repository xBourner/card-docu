---
title: Text & Visibility
---

# Text & Visibility

Choose which details every event shows.

| Option | Description |
|--------|-------------|
| `show_date` | Date of the event |
| **Show Time** (`show_time`) | Start and end time |
| **Show Duration** (`show_duration`) | Duration of the event |
| **Show Location** (`show_location`) | Location of the event |
| `show_calendar_name` | Name of the calendar |
| **Show Weekday** (`show_weekday`) | Add the weekday to the event line |
| **Use long weekday** (`show_weekday_long`) | `Monday` instead of `Mon` |
| **Swap Month and Weekday** (`icon_show_weekday`) | The calendar icon shows the weekday and the event line the month (`Show Month`, `Use long month`) |

!!! info "Language"
    Dates, weekdays, months and relative times ("in 2 hours") follow your Home
    Assistant language and time format.

---

## YAML Example

```yaml
type: custom:calendar-card-plus
show_date: true
show_time: true
show_duration: true
show_location: true
show_weekday: true
show_weekday_long: true
```
