---
title: Resources & YAML
tags:
  - Setup
hide:
  - tags
---

# Resources & YAML

HACS registers the resource automatically. After a **manual install** you have to tell Home Assistant where the JavaScript file of the **Header Position Card** lives.

## Register the resource (UI)

1. Go to **Settings → Dashboards**.
2. Open the **⋮ (three dots) menu → Resources**.
3. Click **Add Resource**.

| Field | Value |
|-------|-------|
| URL | `/local/header-position-card.js` |
| Resource type | **JavaScript Module** |

!!! note "Missing Resources menu?"
    Enable **Advanced Mode** in your user profile
    (**Settings → Profile → Advanced Mode**) – otherwise the Resources entry is hidden.

`/local/` is the alias for `<config>/www/`, so `/local/header-position-card.js` points to `<config>/www/header-position-card.js`.

## Register the resource (YAML)

You can also add the resource to your Lovelace configuration:

```yaml
resources:
  - url: /local/header-position-card.js
    type: module
```

!!! danger "Wrong resource type"
    `type: module` is required. If you use `type: js` the card silently fails and Home Assistant will tell you the card type is unknown.

## Add the card to a dashboard

Either use the editor:

1. Open your dashboard and click **Edit**.
2. Click **Add Card**.
3. Search for **Header Position Card** and configure it visually.

…or edit the YAML directly:

```yaml
type: custom:header-position-card
```

## Loading order

Resources are loaded once per browser session. After changing anything:

1. Save the dashboard.
2. Hard refresh the page (**Ctrl/Cmd + Shift + R**) or clear the cache.
3. If the card still does not show up, reload resources via
   **⋮ menu → Reload resources**.
