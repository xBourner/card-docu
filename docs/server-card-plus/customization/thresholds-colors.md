---
title: Thresholds & Colors
---

# Thresholds & Colors

These options apply in both modes. In the editor they live in the collapsible
**Thresholds & colours** panel.

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `warn` | number (%) | `75` | Value from which CPU, RAM and disk use the **warning** color |
| `crit` | number (%) | `90` | Value from which CPU, RAM and disk use the **critical** color |
| `color_ok` | color | green | Color below the warning threshold |
| `color_warn` | color | yellow | Color for the warning range |
| `color_crit` | color | red | Color for the critical range |
| `accent` | color | theme primary | Accent color for the icon and labels |

Colors can be a CSS value (`"#03a9f4"`, `"var(--accent-color)"`) or an RGB list
(`[3, 169, 244]`) as produced by the editor's color picker.

---

## YAML Example

```yaml
type: custom:server-card-plus
warn: 60
crit: 85
color_ok: green
color_warn: "#ffc107"
color_crit: [244, 67, 54]
accent: "var(--accent-color)"
```
