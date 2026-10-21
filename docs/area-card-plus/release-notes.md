---
title: Release Notes
---

# 📰 Release Notes

## v1.5.0

### ⚠️ Changed Behaviour
- **Domain Popups:** Domain popups show their whole domain again, `popup_domains` no longer filters them. If you want the old behaviour, enable the new option **Sync with Domains** (`sync_popup_domains: true`).

### New Features 📰 
- **Sync with Domains:** New option `sync_popup_domains` applies `popup_domains` to the domain popups and hides domain icons that would open an empty popup.
- **Auto-detect new Domains:** The editor remembers which domains you deselected. Domains that are new to the area now show up automatically, so you don't have to add them by hand.
- **Smarter Editor:** The editor only offers domains that exist in the area and respects the category filter.

### Fixes 🐞
- **Empty Domains:** Domains without entities (e.g. filtered by category or all unavailable) no longer get an icon.
- **Hide Unavailable:** `extra_entities` in the popup now respect `hide_unavailable`.
- **Customization Styles:** Button, icon and sensor now use their own styles instead of `styles.card` for every slot.
- **Custom Button Label:** Fixed a stray quote in the label style.
- **Popup Card:** Removing the popup card in the item editor is saved again.
- **Custom Buttons Editor:** Uses `ha-button` now, because `mwc-button` no longer exists in HA.
- **Editor Crash:** No crash anymore when `popup_domains` is missing. An empty `popup_domains` means all domains and is no longer narrowed down.
- **Sensor Line:** Empty values are skipped, so you no longer see a stray " - " separator between sensor values.

### Under the Hood 🔧
- Removed dead code and merged duplicated render, action and schema code
- Upgraded to Vite 8 and TypeScript 7, same build setup as my other cards

---

All releases: [GitHub Releases](https://github.com/xBourner/area-card-plus/releases)
