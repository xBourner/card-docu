---
title: Behaviour
---

# Behaviour

- **Top padding** – Home Assistant reserves `var(--header-height)` of top padding for
  the fixed header. The card removes it, so the content starts at the very top.
- **Safe areas** – the remaining top padding is `max(--safe-area-inset-top,
  env(safe-area-inset-top))`, i.e. exactly the notch or camera cutout height of your
  device – `0px` on devices without one.
- **iOS home indicator** – in the bottom position the card adds half of
  `env(safe-area-inset-bottom)` as bottom padding so the bar stays reachable.
- **Reset** – when no breakpoint matches any more, all inline styles (header and view
  container) are removed and the stock top header returns.
