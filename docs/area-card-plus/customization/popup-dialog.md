---
title: Popup / Dialog
---

# Popup / Dialog

A tap on the card (with `more-info`) opens the **area popup** with the entities of
the area as tile cards. A tap on a domain, alert, cover or sensor item opens a
**domain popup** with only that domain.

| Option | Description |
|--------|-------------|
| **Columns** (`columns`) | Columns in the popup (1–4) |
| **Ungroup** (`ungroup_areas`) | One list instead of one section per domain |
| **Hide Unavailable** (`hide_unavailable`) | Hide unavailable and unknown entities |
| **Sort** (`popup_sort`) | `name` or `state` (active entities first) |
| **Popup Domains** (`popup_domains`) | Domains in the area popup, in this order – empty means all |
| **Sync with Domains** (`sync_popup_domains`) | Apply the popup domains to domain popups too |
| **Label Filter** (`label`) | Only entities with one of these labels |
| **Extra Entities** (`extra_entities`) | Entities from other areas shown in the popup |

---

## Popup domains and domain popups

`popup_domains` only shapes the **area popup**. A domain popup always shows its whole
domain – a tap on the light button lists every light, even if `light` is not in
`popup_domains`.

Turn on **Sync with Domains** to apply `popup_domains` to domain popups as well. A
domain that is not in the popup domains then gets no button on the card, so you never
open an empty popup.

Like the toggle domains, new domains of the area are added to the popup domains
automatically; the editor remembers deselected ones in `hidden_popup_domains`.

---

## Popup card per item

Every domain, alert, cover and sensor customization has a **Popup** tab. Pick any
card there – it replaces the default tile card for the entities of that item.

---

## YAML Example

```yaml
type: custom:area-card-plus
area: living_room
columns: 3
hide_unavailable: true
popup_sort: state
popup_domains: [light, climate, media_player, sensor]
sync_popup_domains: false
extra_entities:
  - weather.home
customization_domain:
  - type: light
    popup_card:
      type: tile
      features:
        - type: light-brightness
```
