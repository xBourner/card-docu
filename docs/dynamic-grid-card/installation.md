---
tags:
  - Setup
hide:
  - tags
---

# Installation

!!! warning "Not published yet"
    The Dynamic Grid Card has **no HACS repository and no GitHub release** yet.
    Until then it has to be built locally and copied to your Home Assistant.

## 1. Build the card

```bash
git clone <repository-url> dynamic-grid-card
cd dynamic-grid-card
npm install
npm run build
```

The build output is `dist/dynamic-grid-card.js`.

## 2. Deploy to Home Assistant

Copy the built file into your Home Assistant config:

```
<config>/www/dynamic-grid-card.js
```

## 3. Register the resource

**Settings → Dashboards → ⋮ → Resources → Add Resource**

| Field | Value |
|-------|-------|
| URL | `/local/dynamic-grid-card.js` |
| Type | **JavaScript Module** |

YAML equivalent:

```yaml
resources:
  - url: /local/dynamic-grid-card.js
    type: module
```

!!! note "Advanced Mode"
    The Resources menu is only visible when **Advanced Mode** is enabled in your
    user profile.

## 4. Add the card

Edit your dashboard, click **Add Card**, choose **Manual** and enter:

```yaml
type: custom:dynamic-grid-card
header: My Grid
columns:
  - modules:
      - type: card
        card:
          type: entities
          entities:
            - light.kitchen
```

Continue with [Configuration](config.md).
