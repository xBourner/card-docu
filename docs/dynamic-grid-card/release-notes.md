---
title: Release Notes
---

# 📰 Release Notes

## v0.0.1

### Initial Release 🎉
**Dynamic Grid Card** is a layout card for Home Assistant dashboards, inspired by the Apple CarPlay dashboard. It puts your cards into columns that share the available height. Modules can hide themselves when they have nothing to show, so the other modules grow into the free space.

### Features 📰 
- **CarPlay-style Layout:** Columns of modules in one card with a fixed overall height (e.g. `600px` or `85vh`).
- **Any Card as a Module:** Put any Home Assistant card (built-in or custom) into a column.
- **Dynamic or Fixed Height:** Modules share the free space (`flex`) or use a fixed `height`.
- **Conditional Modules:** Show a module only while an entity has (or doesn't have) a certain state.
- **Presets:** Add a map or a media player with one click. The media player only shows up while it is `playing` or `paused`.
- **Smart Modules:** Ready-made modules that find their entities on their own:
  - **Person** - avatars of the people in your home, optional grayscale when away and a home/away badge
  - **Calendar** - running and upcoming events, hidden when nothing is coming up
  - **Security** - open locks, doors, windows, motion and safety sensors, grouped, with a detail popup
- **GUI Editor:** Build columns and modules in the visual editor, no YAML needed.

```yaml
type: custom:dynamic-grid-card
card_height: 600px
columns:
  - modules:
      - card:
          type: weather-forecast
          entity: weather.forecast_home
        flex: "1"
      - type: smart
        module_type: person
        flex: "1"
  - modules:
      - type: smart
        module_type: calendar
        flex: "1"
      - type: smart
        module_type: security
        flex: "1"
```

---

All releases: [GitHub Releases](https://github.com/xBourner/dynamic-grid-card/releases)
