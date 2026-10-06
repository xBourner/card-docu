---
title: Troubleshooting
tags:
  - Setup
hide:
  - tags
---

# Troubleshooting

Most problems come from a stale browser cache or a missing resource. Work through the
checks below before opening an issue.

## The card is not listed when I click "Add Card"

1. Verify the resource is registered with `type: module`
   ([Resources & YAML](resources.md)).
2. Check the file actually exists in `config/www` (manual installs) – the browser
   console shows a **404** if it does not.
3. Clear the browser cache and refresh (**Ctrl/Cmd + Shift + R**).
4. In HACS, confirm the card shows up under **Frontend** and is up to date.

## The card shows "Custom element doesn't exist"

This is always a resource problem:

- The resource URL does not match the file name (case sensitive!).
- The resource type is not **JavaScript Module**.
- The dashboard that displays the card belongs to another Lovelace instance
  (e.g. a storage mode dashboard) – resources are registered **per dashboard**
  unless you use a global Lovelace configuration.

## The card loads, but my changes do not appear

| Check | Why |
|-------|-----|
| Browser cache | JavaScript files are cached aggressively – hard refresh or use a private window |
| **⋮ → Reload resources** | Reloads all registered frontend resources without restarting HA |
| Wrong file deployed | Make sure the release file was copied to `config/www`, not a development build |
| CDN / proxy caching | If you run a reverse proxy, purge its cache as well |

## The visual editor does not open or looks broken

1. Make sure you are in **dashboard edit mode**.
2. Update Home Assistant – older releases sometimes break third party editors.
3. Check the browser console (**F12 → Console**) for errors and include them in a
   bug report.

## HACS does not find the card

- Add the repository manually as a **Custom Repository** with category **Dashboard**:
  `https://github.com/xBourner/<repository>`
- Make sure you are logged in to GitHub in HACS (**Settings → Devices & Services → HACS**).

## Still stuck?

Open an issue in the repository of the affected card and include:

- Home Assistant version (**Settings → About**)
- Card version (HACS or release tag)
- Browser and device (e.g. Chrome 126 on Android, Safari on iOS)
- The output of the browser console (F12)
- A screenshot of the problem

!!! info "Questions get closed"
    Please read the FAQ of the card first (Status Card has a
    [dedicated FAQ](../status-card/faq.md)). Issues that only ask a question which is
    answered in the docs will be closed with a link to this page.
