---
title: Visibility
---

# Visibility

Not every entity of an area belongs on the card. The **Hidden Entities** section of
the editor lists every entity of the area by domain (and device class), each with two
switches.

| Option | Effect |
|--------|--------|
| **Hide** (`hidden_entities`) | The entity is ignored completely – no count, no button, no popup |
| **Exclude** (`excluded_entities`) | The entity stays in the popup but is not counted and not switched by the domain button |
| **Category Filter** (`category_filter`) | Ignore `config`, `diagnostic` or `config+diagnostic` entities |

!!! info "Hidden in Home Assistant"
    Entities you hide in Home Assistant itself (entity settings → **Visible** off) are
    always ignored by the card.

!!! tip "Domains disappear too"
    A domain whose entities are all removed by the category filter gets no button, and
    the editor no longer offers it.

---

## YAML Example

```yaml
type: custom:area-card-plus
area: office
category_filter: config+diagnostic
hidden_entities:
  - light.printer_status_led
excluded_entities:
  - switch.server_rack
```
