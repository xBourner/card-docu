---
tags:
  - Setup
hide:
  - tags
---

# Installation

!!! warning "Prototype"
    Server Card Plus is still an early prototype. Use the manual installation –
    releases may not be published yet.

## Method 1: HACS (as custom repository)

`hacs.json` is included in the repository, so the card can be added as a **Custom
Repository** with the category **Dashboard**:

1. Ensure [HACS](https://hacs.xyz) is installed.
2. Open HACS → **⋮ → Integrations → ⋮ → Custom repositories**.
3. Enter `https://github.com/xBourner/server-card-plus` and choose category
   **Dashboard**.
4. Install the card and clear your browser cache afterwards.

## Method 2: Manual install

1. Take the built file **server-card-plus.js** (release asset or `dist/` of the
   repository).
2. Copy it into your Home Assistant config, e.g.
   `config/www/server-card-plus/server-card-plus.js`.
3. Register the resource:

    | Field | Value |
    |-------|-------|
    | URL | `/local/server-card-plus/server-card-plus.js` |
    | Type | **JavaScript Module** |

    YAML equivalent:

    ```yaml
    resources:
      - url: /local/server-card-plus/server-card-plus.js
        type: module
    ```

`/local/` is the alias for `<config>/www/`. See
[Resources & YAML](../common/resources.md) for details.

## Add the card

Edit your dashboard, click **Add Card** and add a **Manual card** with:

```yaml
type: custom:server-card-plus
title: Proxmox pve
node: auto
```

Continue with [Configuration](config.md).
