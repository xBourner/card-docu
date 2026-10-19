---
tags:
  - Setup
hide:
  - tags
---

# Installation

There are two ways to install **Dynamic Grid Card** in your Home Assistant. We
recommend HACS.

!!! warning "No release yet"
    The card is not in the default HACS store. Add it as a **custom repository** – HACS
    then installs the current version from GitHub.

## Method 1: HACS (custom repository)

[![Open in HACS](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=xBourner&repository=dynamic-grid-card&category=plugin)

1. Ensure [HACS](https://hacs.xyz) is installed.
2. Open HACS, click the three dots in the top right and choose **Custom repositories**.
3. Add `https://github.com/xBourner/dynamic-grid-card` with the type **Dashboard**.
4. Search for **Dynamic Grid Card**, then download and install it.
5. **Clear your browser cache** and refresh (F5) the page.

*(For detailed help on custom repositories, see
[HACS Custom Repositories](https://hacs.xyz/docs/faq/custom_repositories/).)*

## Method 2: Manual Install

1. Download **dynamic-grid-card.js** from the
   [`dist` folder](https://github.com/xBourner/dynamic-grid-card/tree/main/dist) of the
   repository.
2. Put **dynamic-grid-card.js** into your `config/www` folder.
3. Add a reference to the file in your dashboard:
    - **Using the UI:** Settings → Dashboards → ⋮ (More Options) → Resources →
      Add Resource → URL `/local/dynamic-grid-card.js` → type **JavaScript Module**.
      *(Enable Advanced Mode in your user profile if the Resources menu is missing.)*
    - **Using YAML:**

    ```yaml
    resources:
      - url: /local/dynamic-grid-card.js
        type: module
    ```

## Add the card

Edit your dashboard, click **Add Card** and search for **Dynamic Grid Card**. The
visual editor lets you add columns, add modules to each column and edit every module.

Continue with [Configuration](config.md).
