---
title: FAQ
tags:
  - FAQ
hide:
  - tags
---

# ❓ FAQ

Please read the FAQ before opening an issue. If your question isn't answered here you
can open an issue [here](https://github.com/xBourner/dynamic-grid-card/issues).

---

## Why can't I find the card in HACS?

The card is not in the default HACS store yet. Add
`https://github.com/xBourner/dynamic-grid-card` as a **custom repository** of type
**Dashboard**, see [Installation](installation.md).

---

## Why does a module not appear?

Smart modules only render when they have content – e.g. the calendar module only
while an event is running or starts within `max_minutes_until_start`. Card modules
are hidden while their [conditions](customization/conditions.md) don't match, and the
media player preset only shows while the player is playing or paused.

---

## Why do my modules not fill the card?

Set a `card_height` and give the modules a `flex` value. Modules with a fixed `height`
don't grow. See [Columns & Layout](customization/columns-layout.md).

---

## Can I use custom cards as modules?

Yes. Every card that works on a dashboard works as a module, including other
`custom:` cards.
