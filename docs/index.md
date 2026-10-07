---
title: Home
hero_title: Card Docs
hero_subtitle: Custom cards for Home Assistant dashboards by xBourner
hero_cta_primary: GETTING STARTED
hero_cta_secondary: "→"
hero_scroll_title: Six cards. One documentation.
hero_scroll_subtitle: Install, configure and customize every card from a single place.
hide:
    - toc
---

<section class="highlights-section">
  <div class="highlights-container">
    <h2 class="highlights-title">Everything for your Home Assistant dashboard</h2>
    <div class="highlights-grid">
      <div class="highlights-item reveal">
        <div class="highlights-icon-wrapper"><span class="highlights-icon">🧩</span></div>
        <div class="highlights-content">
          <h3>One Documentation</h3>
          <p>All cards share the same structure: Home, Installation and Configuration – so you always know where to look.</p>
        </div>
      </div>
      <div class="highlights-item reveal">
        <div class="highlights-icon-wrapper"><span class="highlights-icon">🔧</span></div>
        <div class="highlights-content">
          <h3>GUI Editor Ready</h3>
          <p>Every card ships with a full visual editor – no YAML required, though YAML stays possible for power users.</p>
        </div>
      </div>
      <div class="highlights-item reveal">
        <div class="highlights-icon-wrapper"><span class="highlights-icon">📦</span></div>
        <div class="highlights-content">
          <h3>HACS Installable</h3>
          <p>Install and update all cards via HACS, or drop the JavaScript file into <code>config/www</code> manually.</p>
        </div>
      </div>
      <div class="highlights-item reveal">
        <div class="highlights-icon-wrapper"><span class="highlights-icon">🌍</span></div>
        <div class="highlights-content">
          <h3>Localized &amp; Responsive</h3>
          <p>Cards follow your Home Assistant language and are optimized for phones, tablets and desktops alike.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<div id="cards" class="showcase-container">
  <div class="showcase-item align-center">
    <h1 class="showcase-title reveal">The Cards</h1>
    <p class="showcase-text reveal">
      Pick a card to reach its documentation. Every section contains the same pages,
      so installation and configuration always look familiar.
    </p>
  </div>

  <div class="cards-grid">
    <div class="card-tile reveal" style="transition-delay: 0.05s;">
      <span class="card-tile__icon">🗂️</span>
      <span class="card-badge">Stable</span>
      <h3 class="card-tile__name">Status Card</h3>
      <p class="card-tile__desc">An automatically generated overview of your areas – smart filters, dynamic groups, badge mode and detail popups.</p>
      <div class="card-tile__links">
        <a href="status-card/">Documentation</a>
        <a href="https://github.com/xBourner/status-card">GitHub</a>
      </div>
    </div>

    <div class="card-tile reveal" style="transition-delay: 0.1s;">
      <span class="card-tile__icon">🧭</span>
      <span class="card-badge">Stable</span>
      <h3 class="card-tile__name">Header Position Card</h3>
      <p class="card-tile__desc">Moves the dashboard navigation bar to the bottom – per breakpoint or globally, with iOS safe-area support.</p>
      <div class="card-tile__links">
        <a href="header-position-card/">Documentation</a>
        <a href="https://github.com/xBourner/header-position-card">GitHub</a>
      </div>
    </div>

    <div class="card-tile reveal" style="transition-delay: 0.15s;">
      <span class="card-tile__icon">🏠</span>
      <span class="card-badge">Stable</span>
      <h3 class="card-tile__name">Area Card Plus</h3>
      <p class="card-tile__desc">Unlocks the full potential of Home Assistant areas: entities grouped by domain or device class, with interactive popups.</p>
      <div class="card-tile__links">
        <a href="area-card-plus/">Documentation</a>
        <a href="https://github.com/xBourner/area-card-plus">GitHub</a>
      </div>
    </div>

    <div class="card-tile reveal" style="transition-delay: 0.2s;">
      <span class="card-tile__icon">📅</span>
      <span class="card-badge">Stable</span>
      <h3 class="card-tile__name">Calendar Card Plus</h3>
      <p class="card-tile__desc">An Apple CarPlay inspired calendar widget with multi-calendar support, responsive layouts and a detailed event popup.</p>
      <div class="card-tile__links">
        <a href="calendar-card-plus/">Documentation</a>
        <a href="https://github.com/xBourner/calendar-card-plus">GitHub</a>
      </div>
    </div>

    <div class="card-tile reveal" style="transition-delay: 0.25s;">
      <span class="card-tile__icon">▦</span>
      <span class="card-badge card-badge--wip">Work in progress</span>
      <h3 class="card-tile__name">Dynamic Grid Card</h3>
      <p class="card-tile__desc">A flexible column and module grid that nests any Lovelace card plus smart modules for persons, calendars and security.</p>
      <div class="card-tile__links">
        <a href="dynamic-grid-card/">Documentation</a>
      </div>
    </div>

    <div class="card-tile reveal" style="transition-delay: 0.3s;">
      <span class="card-tile__icon">🖧</span>
      <span class="card-badge card-badge--wip">Prototype</span>
      <h3 class="card-tile__name">Server Card Plus</h3>
      <p class="card-tile__desc">A system monitor overview with auto-detection for Proxmox VE: CPU, RAM, disk temperature and online status per node.</p>
      <div class="card-tile__links">
        <a href="server-card-plus/">Documentation</a>
      </div>
    </div>
  </div>
</div>

<div class="support-section" markdown="1">
<div class="support-grid" markdown="1">

<div class="support-block" markdown="1">
<h2 class="support-heading">New to these cards?</h2>

Start with the shared basics – once you know how one card is installed, all the others work the same way.

-   [:material-rocket-launch:{ .support-link-icon } **Getting Started**](common/index.md){ .support-link }
-   [:material-download:{ .support-link-icon } **Installation**](common/installation.md){ .support-link }
-   [:material-lifebuoy:{ .support-link-icon } **Troubleshooting**](common/troubleshooting.md){ .support-link }

</div>

<div class="support-block" markdown="1">
<h2 class="support-heading">Let's keep in touch</h2>

<ul class="support-links" markdown="1">
  <li markdown="1">[:simple-github:{ .support-link-icon } All projects on **GitHub**](https://github.com/xBourner){ .support-link }</li>
  <li markdown="1">[:simple-discord:{ .support-link-icon } **Discord** community](https://discord.gg/RvwE65hJ){ .support-link }</li>
  <li markdown="1" style="margin-top: 1.5rem;">[:simple-paypal:{ .support-link-icon } **PayPal**](https://www.paypal.me/gibgas123){ .support-link }</li>
  <li markdown="1">[:simple-buymeacoffee:{ .support-link-icon } **Buy Me a Coffee**](https://www.buymeacoffee.com/bourner){ .support-link }</li>
  <li markdown="1">[:simple-githubsponsors:{ .support-link-icon } **GitHub Sponsors**](https://github.com/sponsors/xBourner){ .support-link .support-link-nowrap }</li>

</ul>

</div>

</div>
</div>
