---
title: Columns & Layout
---

# Columns & Layout

The card is one row of columns with a shared height. Inside a column, modules are
stacked from top to bottom.

## Card options

| Option | Description |
|--------|-------------|
| **Header** (`header`) | Title of the card |
| **Card Height** (`card_height`) | Height of the whole card, e.g. `600px` or `85vh` |
| **Columns** (`columns`) | The columns, each with a list of `modules` |

Add, remove and reorder columns in the editor – the number of columns follows the list.

---

## Module height

| Option | Description |
|--------|-------------|
| **Flex** (`flex`) | Share of the free height, e.g. `"1"` or `"2"` – a module with `"2"` gets twice the space of one with `"1"` |
| **Height** (`height`) | Fixed height instead of flex, e.g. `200px` |
| **Min Height** (`min_height`) | The module never gets smaller than this |

!!! tip "Hidden modules free their space"
    When a module is hidden – by its [conditions](conditions.md) or because a
    [smart module](smart-modules.md) has nothing to show – the flex modules of that
    column grow into the free space.

---

## YAML Example

```yaml
type: custom:dynamic-grid-card
header: Kitchen
card_height: 600px
columns:
  - modules:
      - card:
          type: tile
          entity: light.kitchen
        height: 120px
      - card:
          type: todo-list
          entity: todo.shopping
        flex: "1"
  - modules:
      - type: smart
        module_type: calendar
        flex: "1"
```
