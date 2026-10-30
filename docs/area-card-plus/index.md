---
title: Home
hide:
  - navigation
  - toc
product: Area Card Plus
tagline: "A whole room in one card."
repo: https://github.com/xBourner/area-card-plus
stage:
  - src: img/cards/area/area-single-light.png
    alt: "Area Card Plus in the light theme"
    label: "Light"
    field: light
  - src: img/cards/area/area-single-dark.png
    alt: "Area Card Plus in the dark theme"
    label: "Dark"
    field: dark
  - src: img/cards/area/area-vertical-light.png
    alt: "Area Card Plus in the vertical layout"
    label: "Vertical"
    field: light
  - src: img/cards/area/area-multi-dark-v2.png
    alt: "Area Card Plus in the V2 design"
    label: "V2"
    field: dark
---

# Area Card Plus

**Area Card Plus** is a beautifully engineered custom card for your Home Assistant
dashboard that unlocks the full potential of your Areas.

The default area card always had much more potential – so this card gathers all
entities and devices linked to an area and neatly groups them by domain or device
class right out of the box.

!!! note "Areas first"
    To ensure the card works perfectly, verify that your relevant entities are
    correctly assigned to their areas and domains in Home Assistant.

!!! info "Credit"
    This card is highly influenced by the fantastic
    [Dwains Dashboard](https://github.com/dwainscheeren/dwains-lovelace-dashboard).
    Now you can harness that great idea as a single, versatile card in any of your
    dashboards.

## Features

- 🤖 **Zero-configuration magic** – automatically populated by just selecting an area.
- ✅ **Smart state filtering** – only shows entities that are currently in an "on" or
  active state.
- 📚 **Dynamic grouping** – organizes your active entities by their `domain` or
  `device_class`.
- 🎨 **Multiple designs** – two core designs (V1 & V2) to match your dashboard style.
- 📑 **Interactive detail popups** – tap any group to open a popup rendering the
  entities as interactive Tile Cards.
- 🔧 **Highly customizable** – extensive styling and configuration options directly
  within the UI.
- 🧠 **100% GUI editor ready** – no YAML editing required.
- 📱 **Fully responsive** – optimized layouts for desktop and mobile.
- 🌍 **Native localization** – translates into all Home Assistant languages.

## Next steps

- [Getting Started](getting-started.md)
- [Installation](installation.md)
- [Configuration](config.md)
- [Customization](customization/index.md)
- [FAQ](faq.md)
- [Projects](projects.md)
