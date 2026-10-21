---
title: Release Notes
---

# 📰 Release Notes

## v1.2.0

### New Design 🎨
- **Event Tiles:** Each event is now a tile with a thin border instead of a shadow. The tiles have a bit more space between them and their corner radius follows the radius of your card.
- **Plain Rows:** In compact view or with "Show divider" enabled, events are shown as plain rows without tile borders.
- **"+N more" Indicator:** The number of hidden events is shown next to the title in the card.
- **Popup:** The popup now uses the same event list as the card, so both look the same.

### New Features 📰 
- **Edit Events:** Click an event to edit it directly in the card - title, time, location, description and so on. Calendars that don't support editing still open the more-info dialog like before.
- **Delete Events:** Events can be deleted from the edit dialog. For recurring events you can delete only this event or this and all future events.
- **Read Only Calendars:** New per-calendar switch "Read only" in the editor (`read_only_calendars`). Events of these calendars can't be edited from the card. Calendars that don't support editing are always read only.
- **Text for Empty Days:** New option `empty_text` to set your own text for empty days (shown when "Show empty days" is enabled).

```yaml
type: custom:calendar-card-plus
show_empty_days: true
empty_text: "Nothing planned"
read_only_calendars:
  - calendar.holidays
```

### Fixes 🐞
- **Event Count:** The "+N more" text and the `max_lines` badge no longer count empty days.
- **Date Validation:** Save is disabled if the end of an event is before the start.

### Under the Hood 🔧
- Refactored most of the card code (about 1000 lines less)
- Updated lit and vite, upgraded to TypeScript 7, same build setup as my other cards
- The card version is now logged in the browser console
- New translations for the editor in all supported languages. These are AI generated - if something doesn't make sense, please open an issue or message me on discord.

---

All releases: [GitHub Releases](https://github.com/xBourner/calendar-card-plus/releases)
