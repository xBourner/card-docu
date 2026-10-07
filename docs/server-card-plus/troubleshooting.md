---
title: Troubleshooting
tags:
  - Setup
hide:
  - tags
---

# Troubleshooting

Most problems come from a stale browser cache or a missing resource. Work through the checks below before opening an issue about the **Server Card Plus**.

## The card is not listed when I click "Add Card"

1. Verify the resource is registered with `type: module` ([Resources & YAML](resources.md)).
2. Check the file actually exists in `config/www` (manual installs) – the browser console shows a **404** if it does not.
3. Clear the browser cache and refresh (**Ctrl/Cmd + Shift + R**).
4. Confirm you deployed the current release file – releases may not be published yet (see [Installation](installation.md)).

## The card shows "Custom element doesn't exist"

This is always a resource problem:

- The resource URL does not match the file name (case sensitive!).
- The resource type is not **JavaScript Module**.
- The dashboard that displays the card belongs to another Lovelace instance (e.g. a storage mode dashboard) – resources are registered **per dashboard** unless you use a global Lovelace configuration.

## The card loads, but my changes do not appear

| Check | Why |
|-------|-----|
| Browser cache | JavaScript files are cached aggressively – hard refresh or use a private window |
| **⋮ → Reload resources** | Reloads all registered frontend resources without restarting HA |
| Wrong file deployed | Make sure the release file was copied to `config/www`, not a development build |
| CDN / proxy caching | If you run a reverse proxy, purge its cache as well |

## The card shows no data at all

1. Check the YAML for typos – the browser console (**F12 → Console**) shows the exact error.
2. Verify the entity IDs in **Developer Tools → States**.
3. Hard refresh the page (**Ctrl/Cmd + Shift + R**) after every change.

## The status dots stay red or no entities are found

Auto-detection scans your entity IDs: status, CPU and RAM values live below `node_<name>_*`, disk temperatures below `disk_*`. Check the names in **Developer Tools → States** – German and English names both work, but the prefix has to match.

## HACS does not find the card

- Add the repository manually as a **Custom Repository** with category **Dashboard**:
  `https://github.com/xBourner/server-card-plus`
- Make sure you are logged in to GitHub in HACS (**Settings → Devices & Services → HACS**).
- Check whether a release exists – if not, install the file manually (see [Installation](installation.md)).

## Still stuck?

Open an issue in [xBourner/server-card-plus](https://github.com/xBourner/server-card-plus/issues) and include:

- Home Assistant version (**Settings → About**)
- Card version (HACS or release tag)
- Browser and device (e.g. Chrome 126 on Android, Safari on iOS)
- The output of the browser console (F12)
- A screenshot of the problem

!!! info "Questions get closed"
    The card is an early prototype – please read [Getting Started](getting-started.md) and [Configuration](config.md) first. Issues that only ask a question which is answered in the docs will be closed with a link to this page.
