---
tags:
  - Customization
hide:
  - tags
---

# Configuration

Once installed, edit your dashboard, click **Add Card** and search for **Calendar
Card Plus**. The visual editor guides you through all options – YAML is optional.

## Events & time window

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `type` | string | – | `custom:calendar-card-plus` (required) |
| `name` | text | – | Title of the card |
| `upcoming_events` | boolean | `true` | Only show events that are still upcoming |
| `days` | number | – | Show events for the next *n* days |
| `hours` | number | – | Add *n* hours to the time window |
| `minutes` | number | – | Add *n* minutes to the time window |
| `max_minutes_until_start` | number | – | Fallback window (in minutes) when no `days`/`hours`/`minutes` is set |
| `exclude_entities` | list | `[]` | Calendar entities to ignore |
| `show_empty_days` | boolean | `false` | Also render days without events |

!!! info "Time window"
    If `days`, `hours` or `minutes` are set, the window is calculated as
    `days × 1440 + hours × 60 + minutes` minutes. Without them the card shows the
    next **24 hours** (or the value of `max_minutes_until_start`).

## Display

| Option | Type | Description |
|--------|------|-------------|
| `show_date` | boolean | Show the date of an event |
| `show_time` | boolean | Show start/end time |
| `show_duration` | boolean | Show the duration of an event |
| `show_location` | boolean | Show the event location |
| `show_divider` | boolean | Divider between events |
| `show_calendar_name` | boolean | Show which calendar an event belongs to |
| `show_add_event` | boolean | Show the "add event" button |
| `show_weekday` | boolean | Show weekday short names |
| `show_weekday_long` | boolean | Use long weekday names |
| `icon_show_weekday` | boolean | Show the weekday inside the day icon |
| `unfold_events` | boolean | Show all events without collapsing |
| `group_by_date` | boolean | Group events per day |
| `group_by_date_and_calendar` | boolean | Group per day *and* calendar |
| `max_lines` | number | Maximum number of visible lines |
| `dark_mode` | boolean | Force the dark styling |
| `calendar_icon_color` | color | Color of the calendar icon |

## Colors

| Option | Type | Description |
|--------|------|-------------|
| `background_color` | color | Background color of the card |
| `calendar_colors` | object | Per calendar entity: icon/event color |
| `calendar_background_colors` | object | Per calendar entity: background color |

```yaml
calendar_colors:
  calendar.family: "#03a9f4"
  calendar.work: "#ff9800"
```

## YAML example

```yaml
type: custom:calendar-card-plus
name: Upcoming
upcoming_events: true
days: 3
hours: 12
show_location: true
show_duration: true
group_by_date: true
exclude_entities:
  - calendar.old_calendar
```

## Tips

- **No events shown?** Check that the calendar entity is not listed in
  `exclude_entities` and that it actually contains upcoming events
  (**Developer Tools → States**).
- **Wrong language?** Date formats and weekday names follow your Home Assistant
  language profile.
