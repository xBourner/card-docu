---
title: Home
---

# Status Card

**Status Card** is a custom card for Home Assistant dashboards that automatically
builds an overview of your areas – active entities only, neatly grouped by domain or
device class, with interactive detail popups.

The card reads the devices and entities you have assigned to your Home Assistant
areas and shows them right away: no daily tweaking and no manual card setup. Just
assign your devices to areas and let the card handle the rest.

!!! info "Main requirement"
    The card is based on your Home Assistant areas. Assign your relevant devices
    and entities to their **areas** beforehand for the card to work.

<p align="center">
  <img width="49%" alt="Status Card light theme" src="./img/status-card-light.png">
&nbsp;
  <img width="49%" alt="Status Card dark theme" src="./img/status-card-dark.png">
</p>

## Features

- 🪄 **Zero-configuration magic** – automatically built from the entities and devices
  assigned to your areas.
- 🔎 **Smart state filtering** – shows only active or "on" entities, with optional
  inverted logic for custom use cases.
- 🧩 **Dynamic grouping** – organizes active entities by their `domain` or
  `device_class`.
- 🧠 **Powerful smart groups** – multi-layered filters by state, domain and more.
- ➕ **Extra & ignored entities** – add missing entities manually or hide specific
  ones you don't want to see.
- 💬 **Interactive detail popups** – tap any group to open a popup rendering the
  entities as interactive Tile Cards.
- 📱 **Fully responsive** – optimized layouts for desktop, tablet and mobile.
- 🌍 **Native localization** – translates into all Home Assistant languages.

## Next steps

- [Installation](installation.md)
- [Configuration](config.md)
- [Customization](customization/index.md)
- [FAQ](faq.md)
- [Projects](projects.md)

<div class="support-section" markdown="1">
<div class="support-grid" markdown="1">

<div class="support-block">
  <h2 class="support-heading">Become a sponsor</h2>
  <p class="support-text">
    By supporting the <strong>Status Card</strong> project, you help ensure its ongoing development and maintenance.
    Together, we can build the best dashboard experience for Home Assistant!
  </p>
  <div class="video-buttons u-btn-group" style="margin-top: 2rem;">
    <a href="https://github.com/sponsors/xBourner" class="u-btn-native u-btn-dark" style="color: hsla(var(--md-hue), 15%, 5%, 1);">
      LEARN MORE
      <div class="label_corner">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="48" fill="none" viewBox="0 0 18 48">
          <path class="btn-path"
            d="M0 0h5.63c7.808 0 13.536 7.337 11.642 14.91l-6.09 24.359A11.527 11.527 0 0 1 0 48V0Z"></path>
        </svg>
      </div>
    </a>
    <a href="https://github.com/sponsors/xBourner" class="u-btn-native u-btn-lime">
      <svg xmlns="http://www.w3.org/2000/svg" width="51" height="48" fill="none" viewBox="0 0 51 48"
        class="btn-shape">
        <path class="btn-path"
          d="M6.728 9.09A12 12 0 0 1 18.369 0H39c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H12.37C4.561 48-1.167 40.663.727 33.09l6-24Z">
        </path>
      </svg>
      <span class="btn-icon">→</span>
    </a>
  </div>
</div>

<div class="support-block" markdown="1">
<h2 class="support-heading">Let's keep in touch</h2>

<ul class="support-links" markdown="1">
  <li markdown="1">[:simple-github:{ .support-link-icon } Status Card on **GitHub**](https://github.com/xBourner/status-card){ .support-link }</li>
  <li markdown="1">[:simple-discord:{ .support-link-icon } Status Card on **Discord**](https://discord.gg/RvwE65hJ){ .support-link }</li>
  <li markdown="1" style="margin-top: 1.5rem;">[:simple-paypal:{ .support-link-icon } Status Card on **PayPal**](https://www.paypal.me/gibgas123){ .support-link }</li>
  <li markdown="1">[:simple-buymeacoffee:{ .support-link-icon } Status Card on **Buy Me a Coffee**](https://www.buymeacoffee.com/bourner){ .support-link }</li>
  <li markdown="1">[:simple-githubsponsors:{ .support-link-icon } Status Card on **GitHub Sponsors**](https://github.com/sponsors/xBourner){ .support-link .support-link-nowrap }</li>
</ul>

</div>

</div>
</div>
