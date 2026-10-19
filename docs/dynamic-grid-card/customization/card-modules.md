---
title: Card Modules
---

# Card Modules

A card module wraps any Lovelace card – built-in or custom. Pick the card in the card
picker of the module editor, then configure it with its own editor.

| Option | Description |
|--------|-------------|
| `card` | The card configuration, exactly as on a dashboard |
| `flex` / `height` / `min_height` | Height of the module, see [Columns & Layout](columns-layout.md) |
| `conditions` | Show the module only in certain states, see [Conditions](conditions.md) |

---

## Presets

The module editor has two presets that fill in a ready card:

| Preset | Card | Extra behaviour |
|--------|------|-----------------|
| **Add Map** | `map` card | – |
| **Add Media Player** | `media-control` card | Only shown while the player is `playing` or `paused` |

---

## YAML Example

```yaml
type: custom:dynamic-grid-card
card_height: 500px
columns:
  - modules:
      - card:
          type: map
          entities:
            - person.anna
        flex: "2"
      - card:
          type: media-control
          entity: media_player.kitchen
        height: 180px
```
