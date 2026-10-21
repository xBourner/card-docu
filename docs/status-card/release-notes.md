---
title: Release Notes
---

# 📰 Release Notes

## v3.4.0

### ⚠️ Breaking Change
- **`badge_mode` removed:** `badge_mode: true` no longer works. Use `display_mode: badge` instead (on the card and per item).

```yaml
# before
badge_mode: true
# now
display_mode: badge
```

### New Features 📰 
- **Display Mode:** New `display_mode` dropdown on card and item level with three options: `standard`, `badge` and `chip`. Per item settings override the card setting.
- **Chip Mode:** New pill design with the icon on the left and name + state on the right. Scrolls sideways like the other modes, `no_scroll: true` wraps them into rows and `square: true` gives rounded corners instead of a full pill.
- **Styles by Count:** New `styles.count` option for domain, device class and smart group items. Add levels with a `min` value to change `button`, `icon`, `name` or `state` depending on the number shown on the item.

```yaml
customization:
  - type: light
    styles:
      count:
        - min: 3
          icon: "color: orange;"
        - min: 6
          icon: "color: red; animation: pulse 1s infinite;"
```

### Fixes 🐞
- **Popup List Mode:** The popup ignored `list_mode` when it was set on a smart group.
- **Registry Changes:** The card now re-renders when areas, labels or hidden entities change, without the need of a state change.
- **Hide if Empty:** "Hide card if empty" is re-evaluated once the registry data for smart groups is loaded.
- **Item Styles:** `styles.name` and `styles.state` on item level were ignored before - they work now.
- **Popup Shadows:** Card shadows from themes are no longer cut off in the popup (most visible with a single entity).
- **Editor:** Domain options refresh when extra entities are changed.
- **Smart Group Toggle:** Toggling a smart group now uses one service call per domain instead of one per entity.

### Under the Hood 🔧
- Removed dead code and merged duplicated logic in card, popup and editor
- Upgraded to Vite 8 and TypeScript 7, same build setup as my other cards
- Smaller bundle (the whole package.json was bundled before)
- New translations for the display mode in all supported languages. These are AI generated - if something doesn't make sense, please open an issue or message me on discord.

---

All releases: [GitHub Releases](https://github.com/xBourner/status-card/releases)
