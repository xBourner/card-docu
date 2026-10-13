---
title: Resources & YAML
tags:
  - Setup
hide:
  - tags
---

# Resources & YAML

HACS registers the resource automatically. For a **manual install** of the **Server
Card Plus**, Home Assistant has to be told where the JavaScript file lives.

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

1. Open your dashboard and click **Edit**.
2. Click **Add Card** and search for **Server Card Plus**.
3. Configure it in the visual editor.

Or use a **Manual card** with:

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
