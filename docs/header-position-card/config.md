---
tags:
  - Customization
hide:
  - tags
---

# Configuration

Once the card is installed, edit your dashboard, click **Add Card** and search for
**Header Position Card**. Everything can be done in the visual editor – YAML is
optional.

!!! info "Background card"
    The card is not rendered on your dashboard. It only appears in edit mode and
    applies its styles to the dashboard header in the background.

## Settings

### Design

| Value | Effect |
|-------|--------|
| `default` (standard) | The header is pinned to the bottom edge, the divider moves from bottom to top. |
| `minimal` | Floating pill design: rounded toolbar, transparent header background, collapses to a circle while scrolling on mobile. |

### Breakpoints

Choose the viewports where the navbar should snap to the bottom – exactly like the
native visibility options in Home Assistant. You can select multiple options; the
header moves to the bottom on **all** selected breakpoints.

| Breakpoint | Viewport |
|------------|----------|
| `mobile` | up to 767 px |
| `tablet` | 768 px – 1023 px |
| `desktop` | 1024 px – 1279 px |
| `wide` | from 1280 px |
| `custom` | from `custom_width` (your own value) |

Each breakpoint has two toggles:

- **Enable** – activate the new header position for this breakpoint.
- **Global Enable** – also apply it to *every* dashboard, not only the one that
  contains this card.

### Custom width

Only available when the `custom` breakpoint is enabled. Defines the minimum width in
pixels from which the header is moved (`custom_width`).

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

!!! warning "Global mode"
    Global mode hooks into Home Assistant's routing and re-applies the styles on every
    navigation. If you switch dashboards frequently, prefer one card with global
    breakpoints enabled instead of one card per dashboard.

## Behaviour details

- **Top padding** – Home Assistant reserves `var(--header-height)` of top padding for
  the fixed header. The card removes it, so the content starts at the very top.
- **Safe areas** – the remaining top padding is `max(--safe-area-inset-top,
  env(safe-area-inset-top))`, i.e. exactly the notch or camera cutout height of your
  device – `0px` on devices without one.
- **iOS home indicator** – in the bottom position the card adds half of
  `env(safe-area-inset-bottom)` as bottom padding so the bar stays reachable.
- **Reset** – when no breakpoint matches any more, all inline styles (header and view
  container) are removed and the stock top header returns.
