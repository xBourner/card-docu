---
tags:
  - Setup
hide:
  - tags
---

# Installation

There are two ways to install the **Header Position Card** in your Home Assistant.
We highly recommend using HACS.

!!! tip "Recommended Method"
    Installation via **HACS** (Home Assistant Community Store) is the best way to keep
    the card up to date.

## Method 1: HACS (Recommended)

[![Open in HACS](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=xBourner&repository=header-position-card&category=plugin)

1. Ensure [HACS](https://hacs.xyz) is installed.
2. Open HACS in Home Assistant.
3. Search for **Header Position Card**, or add this repository
   (`https://github.com/xBourner/header-position-card`) as a Custom Repository under
   the **Dashboard** category.
4. Download and Install.
5. **Clear your browser cache** and refresh (F5) the page.

## Method 2: Manual Install

1. Download the **header-position-card.js** file from the
   [latest release](https://github.com/xBourner/header-position-card/releases).
2. Put **header-position-card.js** into your `config/www` folder.
3. Add a reference to the file in your dashboard:
    - **Using the UI:** Settings → Dashboards → ⋮ (More Options) → Resources →
      Add Resource → URL `/local/header-position-card.js` → type
      **JavaScript Module**.
      *(Enable Advanced Mode in your user profile if the Resources menu is missing.)*
    - **Using YAML:**

    ```yaml
    resources:
      - url: /local/header-position-card.js
        type: module
    ```

## Add the card

Edit your dashboard, click **Add Card** and search for **Header Position Card**.

The card is invisible on the actual dashboard – it only shows up while the dashboard
editor is active, because it purely configures the header position.

Continue with [Configuration](config.md).
