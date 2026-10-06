---
title: Installation
tags:
  - Setup
hide:
  - tags
---

# Installation

All cards are installed the same way. The only things that change per card are the
**repository**, the **JavaScript file name** and the **resource URL**.

!!! tip "Recommended Method"
    Install via **HACS** (Home Assistant Community Store). This is the easiest way to
    get the card and to keep it up to date.

## Method 1: HACS (Recommended)

1. Ensure [HACS](https://hacs.xyz) is installed.
2. Open HACS in Home Assistant.
3. Search for the card, **or** add its repository as a *Custom Repository* under the
   **Dashboard** category:
   `https://github.com/xBourner/<repository>`
4. Download and install.
5. **Clear your browser cache** and refresh the page (F5).

*(For detailed help on custom repositories, see
[HACS Custom Repositories](https://hacs.xyz/docs/faq/custom_repositories/).)*

## Method 2: Manual Install

1. Download the JavaScript file from the latest release of the card.
2. Copy it into your `config/www` folder.
3. Register it as a resource in your dashboard – see [Resources & YAML](resources.md).

## Card overview

| Card | Repository | Resource URL |
|------|------------|--------------|
| Status Card | [`xBourner/status-card`](https://github.com/xBourner/status-card) | `/local/status-card.js` |
| Header Position Card | [`xBourner/header-position-card`](https://github.com/xBourner/header-position-card) | `/local/header-position-card.js` |
| Area Card Plus | [`xBourner/area-card-plus`](https://github.com/xBourner/area-card-plus) | `/local/area-card-plus.js` |
| Calendar Card Plus | [`xBourner/calendar-card-plus`](https://github.com/xBourner/calendar-card-plus) | `/local/calendar-card-plus.js` |
| Dynamic Grid Card | *not published yet* | `/local/dynamic-grid-card.js` |
| Server Card Plus | *not published yet* | `/local/server-card-plus.js` |

!!! warning "After every update"
    Whenever a card was updated, clear the browser cache (or use a private window)
    and refresh the dashboard. Browsers love to keep old JavaScript files.

## Per-card installation pages

For card specific notes (HACS button, exact steps, screenshots) use the installation
page inside the card section:

- [Status Card – Installation](../status-card/installation.md)
- [Header Position Card – Installation](../header-position-card/installation.md)
- [Area Card Plus – Installation](../area-card-plus/installation.md)
- [Calendar Card Plus – Installation](../calendar-card-plus/installation.md)
- [Dynamic Grid Card – Installation](../dynamic-grid-card/installation.md)
- [Server Card Plus – Installation](../server-card-plus/installation.md)
