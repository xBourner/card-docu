---
title: Controls
---

# Controls

With `show_controls: true` the card shows up to four buttons – only those the
integration provides for that system:

| Button | Action | Confirmation | Enabled when |
|--------|--------|--------------|--------------|
| Start | Starts the machine | – | System is off |
| Reboot | Restarts the machine | Second tap | System is on |
| Shut down | Graceful shutdown | Second tap | System is on |
| Stop | Hard stop, no shutdown | Second tap | System is on |

The first tap on a destructive button turns it red (**Sure?**); a second tap within
four seconds runs the action. The card presses the integration's button entities
(`button.<system>_start` …), so permissions and behaviour are those of the
integration. If no buttons are found, the editor shows a hint.

!!! warning "Real actions"
    The buttons really start and stop your machines. Only enable them on dashboards
    that the right people can see.

---

## YAML Example

```yaml
type: custom:server-card-plus
node: qemu_haos_101
show_controls: true
```
