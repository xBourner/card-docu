---
title: Global Mode
---

# Global Mode

By default the header only moves on the dashboard that contains the card. With
**Global Enable** for a breakpoint, it moves on **every** dashboard.

| Option | Breakpoint |
|--------|------------|
| `global_mobile` | mobile |
| `global_tablet` | tablet |
| `global_desktop` | desktop |
| `global_wide` | wide |
| `global_custom` | custom |

!!! warning "Global mode"
    Global mode hooks into Home Assistant's routing and re-applies the styles on every
    navigation. If you switch dashboards frequently, prefer one card with global
    breakpoints enabled instead of one card per dashboard.

---

## YAML Example

```yaml
type: custom:header-position-card
Style: [mobile, tablet]
global_mobile: true
global_tablet: true
```
