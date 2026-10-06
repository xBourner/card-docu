---
title: Resources & YAML
tags:
  - Setup
hide:
  - tags
---

# Resources & YAML

HACS registers the resource automatically. If you installed a card manually you have
to tell Home Assistant where the JavaScript file lives.

## Register the resource (UI)

1. Go to **Settings → Dashboards**.
2. Open the **⋮ (three dots) menu → Resources**.
3. Click **Add Resource**.

| Field | Value |
|-------|-------|
| URL | `/local/<file>.js` |
| Resource type | **JavaScript Module** |

!!! note "Missing Resources menu?"
    Enable **Advanced Mode** in your user profile
    (**Settings → Profile → Advanced Mode**) – otherwise the Resources entry is hidden.

`/local/` is the alias for `<config>/www/`, so `/local/status-card.js` points to
`<config>/www/status-card.js`.

## Register the resource (YAML)

You can also add the resource to your Lovelace configuration:

```yaml
resources:
  - url: /local/status-card.js
    type: module
  - url: /local/header-position-card.js
    type: module
```

!!! danger "Wrong resource type"
    `type: module` is required. If you use `type: js` the card silently fails and
    Home Assistant will tell you the card type is unknown.

## Add the card to a dashboard

Either use the editor:

1. Open your dashboard and click **Edit**.
2. Click **Add Card**.
3. Search for the card name (e.g. *Status Card*) and configure it visually.

…or edit the YAML directly:

```yaml
type: custom:status-card
```

The `type` always follows the pattern `custom:<card-name>`:

| Card | `type` |
|------|--------|
| Status Card | `custom:status-card` |
| Header Position Card | `custom:header-position-card` |
| Area Card Plus | `custom:area-card-plus` |
| Calendar Card Plus | `custom:calendar-card-plus` |
| Dynamic Grid Card | `custom:dynamic-grid-card` |
| Server Card Plus | `custom:server-card-plus` |

## Loading order

Resources are loaded once per browser session. After changing anything:

1. Save the dashboard.
2. Hard refresh the page (**Ctrl/Cmd + Shift + R**) or clear the cache.
3. If a card still does not show up, reload resources via
   **⋮ menu → Reload resources**.
