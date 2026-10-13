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
4. In HACS, confirm the card is installed and up to date.

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

## "Loading systems…" stays or a system is missing

The card only knows systems that have a status entity:
`binary_sensor.node_<name>_status`, `binary_sensor.qemu_<name>_<id>_status` or
`binary_sensor.lxc_<name>_<id>_status`.

1. Open **Developer Tools → States** and search for `_status`.
2. Make sure the Proxmox VE integration is loaded and the entities are not disabled.
3. German and English entity IDs both work – but the prefix (`node_`, `qemu_`,
   `lxc_`) has to match.

## A value shows "–" instead of a percentage

The sensor behind it is missing, `unavailable` or not numeric. This is normal for a
VM or container that is turned off. If it happens while the system is running, check
the sensor in **Developer Tools → States**.

## "No metrics found for …"

The system was found, but none of its sensors could be matched. Check that entities
like `sensor.<system>_cpu…` exist. If your integration names them differently, open
an issue with a list of the entity IDs (see below).

## The control buttons are missing

- `show_controls` must be enabled (editor: **Show controls**).
- The Proxmox VE integration has to provide **button entities** for that system
  (`button.<system>_start`, `_stop`, `_reboot`, `_shutdown` or the German variants).
  Check **Developer Tools → States** for `button.<system>_` – disabled entities do not
  count. The editor shows a hint if it finds no buttons at all.
- Only buttons that exist are shown, so a system can have fewer than four.

## A control button is greyed out

That is intended: **Start** is disabled while the system is on, **Reboot**,
**Shut down** and **Stop** while it is off. A button is also disabled when its entity
is `unavailable`.

## "Action failed: …"

Home Assistant rejected the button press – the message shows why. Common causes are
missing permissions of the Proxmox user configured in the integration, or a machine
that is locked by a running backup.

## The visual editor does not open or looks broken

1. Make sure you are in **dashboard edit mode**.
2. Update Home Assistant – older releases sometimes break third party editors.
3. Check the browser console (**F12 → Console**) for errors and include them in a bug report.

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
- The entity IDs of the affected system (**Developer Tools → States**)
- A screenshot of the problem

!!! info "Questions get closed"
    Please read [Getting Started](getting-started.md) and [Configuration](config.md) first. Issues that only ask a question which is answered in the docs will be closed with a link to this page.
