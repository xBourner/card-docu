---
tags:
  - Customization
hide:
  - tags
---

# ⚙️ Configuration & Usage

Once **Calendar Card Plus** is installed, it shows the events of all your calendars
right away – no setup needed.

---

## The GUI Editor

1. Open your dashboard and click **Edit Dashboard**.
2. Click **Add Card**.
3. Search for **Calendar Card Plus**.
4. Adjust the options – every calendar entity is used by default.

The editor has three sections:

| Section | What you set there |
|---------|--------------------|
| **Configuration** | Unfolded view, divider, add button, grouping, time window and empty days |
| **Text & Visibility** | Date, time, duration, location, calendar name, weekday and month |
| **Calendars** | Per calendar: show or hide, read only, color and background color |

Every feature is explained in [Customization](customization/index.md).

---

## YAML Configuration (For Pros)

### Basic Example

```yaml
type: custom:calendar-card-plus
unfold_events: true
upcoming_events: true
days: 3
```

### Full YAML Settings

```yaml
type: custom:calendar-card-plus
name: Upcoming                  # title of the card

# time window
upcoming_events: true           # look ahead; off = only the rest of today
days: 3                         # look-ahead days
hours: 12                       # look-ahead hours
minutes: 0                      # look-ahead minutes
max_minutes_until_start: 1440   # look-ahead in minutes if days/hours/minutes are not set
show_empty_days: false          # show days without events
empty_text: No events           # text for empty days

# layout
unfold_events: true             # list all events instead of the compact view
max_lines: 5                    # max. events in the unfolded card (0 = all)
show_divider: true              # divider between events
group_by_date: false            # one group per day
group_by_date_and_calendar: false  # one group per day and calendar
show_add_event: true            # "add event" button
dark_mode: false                # dark styling of the card

# text & visibility
show_date: true
show_time: true
show_duration: false
show_location: true
show_calendar_name: false
show_weekday: true              # weekday in the event line
show_weekday_long: false        # Monday instead of Mon
icon_show_weekday: false        # icon shows the weekday, the line the month

# colors
calendar_icon_color: red        # color of all calendar icons
background_color: [30, 30, 30]  # card background
calendar_colors:                # per calendar
  calendar.family: "#03a9f4"
  calendar.work: "#ff9800"
calendar_background_colors:
  calendar.work: "rgba(255, 152, 0, 0.1)"

# calendars
exclude_entities:               # calendars that are not shown
  - calendar.holidays
read_only_calendars:            # no add, edit or delete for these
  - calendar.work
```
