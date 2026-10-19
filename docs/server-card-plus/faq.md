---
title: FAQ
tags:
  - FAQ
hide:
  - tags
---

# ❓ FAQ

Please read the FAQ before opening an issue. If your question isn't answered here you
can open an issue [here](https://github.com/xBourner/server-card-plus/issues).

!!! info "Attention"
    Issues with a question will be closed with a link to this page.

---

## Which integrations are supported?

The card is built for the **Proxmox VE** integration. Other sources (System Monitor,
Glances, …) are on the roadmap.

---

## Why is a system missing in the list?

The card needs a `binary_sensor.<system>_status` entity for it – check
**Developer Tools → States**. How systems are found is explained on the
[Home](index.md#how-the-auto-detection-works) page.

---

## Why does a value show "–"?

The sensor is missing, unavailable or not numeric – typical for a VM that is turned
off. The card never shows a missing value as 0 %.

---

## Why are there no control buttons?

Turn on **Show controls** and check that the integration provides button entities
for that system – see [Controls](customization/controls.md).

---

## Why is the card in the wrong language?

The card follows your Home Assistant language: German for German, English for
everything else. German and English entity IDs are both detected.
