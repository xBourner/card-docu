---
title: Events & Popup
---

# Events & Popup

## Popup with all events

In the compact view – or when more events exist than `max_lines` allows – a tap opens
a popup with every event of the time window.

## Add, edit and delete events

| Action | How |
|--------|-----|
| **Add** | Turn on `show_add_event` and tap the plus button |
| **Edit** | Tap an event of a calendar that supports editing |
| **Delete** | Delete button in the edit popup – for recurring events this one or all following |

The popup has the calendar, a title, start, end, an all-day switch, a repeat option
(new events), location and description. Saving is not possible while the end is before
the start.

!!! info "Which calendars can be changed"
    Only calendars whose integration supports creating, editing or deleting events
    (e.g. Local Calendar, CalDAV, Google). Events of other calendars and of
    [read only calendars](calendars.md) open the normal more-info dialog.

---

## YAML Example

```yaml
type: custom:calendar-card-plus
show_add_event: true
read_only_calendars:
  - calendar.holidays
```
