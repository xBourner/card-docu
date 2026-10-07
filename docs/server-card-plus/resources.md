---
title: Resources & YAML
tags:
  - Setup
hide:
  - tags
---

# Resources & YAML

There is no HACS install for the **Server Card Plus** yet, so every installation is a manual one and registering the resource is always required. Home Assistant has to be told where the JavaScript file lives.

## Register the resource (UI)

1. Go to **Settings → Dashboards**.
2. Open the **⋮ (three dots) menu → Resources**.
3. Click **Add Resource**.

| Field | Value |
|-------|-------|
| URL | `/local/server-card-plus/server-card-plus.js` |
| Resource type | **JavaScript Module** |

!!! note "Missing Resources menu?"
    Enable **Advanced Mode** in your user profile
    (**Settings → Profile → Advanced Mode**) – otherwise the Resources entry is hidden.

`/local/` is the alias for `<config>/www/`, so `/local/server-card-plus/server-card-plus.js` points to `<config>/www/server-card-plus/server-card-plus.js`.

## Register the resource (YAML)

You can also add the resource to your Lovelace configuration:

```yaml
resources:
  - url: /local/server-card-plus/server-card-plus.js
    type: module
```

!!! danger "Wrong resource type"
    `type: module` is required. If you use `type: js` the card silently fails and Home Assistant will tell you the card type is unknown.

## Add the card to a dashboard

The **Server Card Plus** is added as a **Manual card** – there is no entry in the card picker:

1. Open your dashboard and click **Edit**.
2. Click **Add Card** and choose **Manual**.
3. Enter:

```yaml
type: custom:server-card-plus
```

All available options are described in [Configuration](config.md).

## Loading order

Resources are loaded once per browser session. After changing anything:

1. Save the dashboard.
2. Hard refresh the page (**Ctrl/Cmd + Shift + R**) or clear the cache.
3. If the card still does not show up, reload resources via
   **⋮ menu → Reload resources**.
