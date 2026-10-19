---
title: Domains
---

# Domains

Domain items are the round buttons of the card – one per domain, with the number of
entities that are on. A tap toggles the whole domain in the area.

| Domain | Toggle action (something on) | Toggle action (all off) |
|--------|------------------------------|--------------------------|
| **Light** | `turn_off` | `turn_on` |
| **Switch** | `turn_off` | `turn_on` |
| **Fan** | `turn_off` | `turn_on` |
| **Media Player** | `media_pause` | `media_play` |
| **Lock** | `lock` | `unlock` |
| **Vacuum** | `stop` | `start` |
| **Cover** | `turn_off` | `turn_on` |
| **Script** | `turn_off` | `turn_on` |
| **Scene** | `turn_off` | `turn_on` |
| **Climate** | see [Climate](#climate) | |

---

## Which domains are shown

| Option | Description |
|--------|-------------|
| **Domains** (`toggle_domains`) | Domains shown as buttons, in this order |
| **Domain Color** (`domain_color`) | Color of all domain icons that are on |

- The editor only offers domains that exist in the area. A domain without entities –
  or whose entities are all unavailable or removed by the
  [category filter](visibility.md) – never gets a button.
- **New domains appear automatically.** The editor remembers which domains you
  deselected (`hidden_toggle_domains`). A domain that is new to the area, e.g. your
  first fan, is added to the card on its own; deselected domains stay hidden.
- Without `toggle_domains` the card shows every toggle domain of the area except
  `scene` and `script` – those have to be picked explicitly.
- `show_active: true` hides buttons while none of their entities is on.

!!! info "Older configurations"
    Cards saved before automatic detection keep their fixed domain list. Open the card
    in the editor and save it once to switch to automatic detection.

---

## Editor Settings (per domain customization)

Click the pencil next to a domain to customize it.

| Option | Description |
|--------|-------------|
| **Icon** | Change the icon of the domain |
| **Color** | Change the icon color |
| **Tap / Hold / Double Tap Action** | Tap toggles the domain by default, `more-info` opens the domain popup |
| **Styles** | Custom CSS for `button`, `icon` and `name` |
| **Popup Card** | Card shown in the popup for this domain, see [Popup / Dialog](popup-dialog.md) |

### Climate

`climate` has two extra options:

| Option | Description |
|--------|-------------|
| **Display Mode** (`display_mode`) | `text` (temperature line), `icon` (button) or `text_icon` (both) |
| **Show Set Temperature** (`show_set_temperature`) | Color the icon by heating or cooling, with the `styles.thermostat` colors |

---

## YAML Example

```yaml
type: custom:area-card-plus
area: living_room
toggle_domains:
  - light
  - switch
  - climate
domain_color: amber
customization_domain:
  - type: light
    icon: mdi:lightbulb-group
    tap_action:
      action: toggle
    hold_action:
      action: more-info
  - type: climate
    display_mode: text_icon
    show_set_temperature: true
```
