---
title: Designs
---

# Designs

Choose the look with **Design** (`design`). It applies to single and dashboard mode.

| Design | Best for |
|--------|----------|
| `classic` | Default. Compact list with a thin bar per value – easy to scan in a column |
| `circles` | Three rings side by side (plus one per disk) – reads well on wide tiles |
| `rack` | Server front panel look. The unlit segments already mark where the warning and critical range begins |

All designs use your theme colors and the colors you configure. Missing or
unavailable values are shown as **–**, never as 0 %.

---

## YAML Example

```yaml
type: custom:server-card-plus
node: auto
design: rack
```
