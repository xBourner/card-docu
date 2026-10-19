---
title: FAQ
tags:
  - FAQ
hide:
  - tags
---

# ❓ FAQ

Please read the FAQ before opening an issue. If your question isn't answered here you
can open an issue [here](https://github.com/xBourner/header-position-card/issues).

---

## Why can't I see the card on my dashboard?

That is intended – the card is invisible and only shows up in edit mode. It moves the
header in the background.

---

## Why does the header only move on one dashboard?

Without global mode the card only works on the dashboard it is placed on. Turn on
**Global Enable** for your breakpoints, see [Global Mode](customization/global-mode.md).

---

## Why is the header at the top again on my tablet?

The header only moves on the selected [breakpoints](customization/breakpoints.md).
Add `tablet` (or a `custom` width) to `Style`.

---

## Is my content hidden behind the notch or the iOS home bar?

No – the card keeps the safe areas of your device free, see
[Behaviour](customization/behaviour.md).
