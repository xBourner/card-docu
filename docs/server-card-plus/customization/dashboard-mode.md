---
title: Dashboard Mode
---

# Dashboard Mode

With `mode: dashboard` all detected systems are rendered as a responsive grid:

| Option | Type | Description |
|--------|------|-------------|
| `hidden_systems` | list | System keys that should not be shown |
| `overrides` | object | Per system key: `title`, `icon`, `warn`, `crit`, `color_ok`, `color_warn`, `color_crit`, `accent` |

In the editor, each system has a **Hide / Show** button and an expandable panel for
its overrides. Values not overridden fall back to the global options.

```yaml
overrides:
  node_pve:
    title: "NAS / Node 01"
    icon: mdi:server
    warn: 70
    crit: 90
    accent: "#03a9f4"
```
