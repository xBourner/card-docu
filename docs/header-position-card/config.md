---
tags:
  - Customization
hide:
  - tags
---

# ⚙️ Configuration & Usage

Once the card is installed, edit your dashboard, click **Add Card** and search for
**Header Position Card**. Everything can be done in the visual editor – YAML is
optional.

!!! info "Background card"
    The card is not rendered on your dashboard. It only appears in edit mode and
    applies its styles to the dashboard header in the background.

## Options

Design, breakpoints, global mode and the behaviour of the card are explained in
[Customization](customization/index.md).

## YAML example

If you prefer YAML over the visual editor:

```yaml
type: custom:header-position-card
Style:
  - mobile
  - tablet
  - desktop
  - wide
Design: default
global_mobile: true
global_tablet: false
global_wide: false
```

### All options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `type` | string | – | `custom:header-position-card` (required) |
| `Style` | list | `[]` | Breakpoints: `mobile`, `tablet`, `desktop`, `wide`, `custom`. A single string works too. |
| `Design` | string | `default` | `default` or `minimal` |
| `global_mobile` | boolean | `false` | Apply on all dashboards for the mobile breakpoint |
| `global_tablet` | boolean | `false` | Apply on all dashboards for the tablet breakpoint |
| `global_desktop` | boolean | `false` | Apply on all dashboards for the desktop breakpoint |
| `global_wide` | boolean | `false` | Apply on all dashboards for the wide breakpoint |
| `global_custom` | boolean | `false` | Apply on all dashboards for the custom breakpoint |
| `custom_width` | number | – | Minimum width in px for the `custom` breakpoint |
