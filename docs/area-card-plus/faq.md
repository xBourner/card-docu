---
title: FAQ
tags:
  - FAQ
hide:
  - tags
---

# ❓ FAQ

Please read the FAQ before opening an issue. If your question isn't answered here you
can open an issue [here](https://github.com/xBourner/area-card-plus/issues).

!!! info "Attention"
    Issues with a question will be closed with a link to this page.

---

## Why can't I see entities?

Assign the device or entity to the area in Home Assistant. Entities hidden in Home
Assistant, entities in [`hidden_entities`](customization/visibility.md) and entities
removed by the category filter are ignored.

---

## Why is there no button for a domain?

A domain only gets a button if it is selected in **Domains** and has at least one
available entity in the area. With **Sync with Domains** it also has to be one of the
popup domains. See [Domains](customization/domains.md).

---

## I added a new device – does the card pick it up?

Yes. New entities of an existing domain are counted right away. A domain that is new
to the area is added automatically, unless you deselected it before. Cards from older
versions need to be saved once in the editor for this.

---

## Why does the light popup show lights although `light` is not in the popup domains?

Popup domains only apply to the area popup. Turn on **Sync with Domains** to apply
them to domain popups as well – see [Popup / Dialog](customization/popup-dialog.md).

---

## Why are unavailable entities in the popup?

Turn on **Hide Unavailable** in the popup settings.

---

## Where does the temperature come from?

The card uses the temperature and humidity sensor set for the area. Without one it
shows the average of all sensors of that device class in the area.
