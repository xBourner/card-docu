---
title: FAQ
tags:
  - FAQ
hide:
  - tags
---

# ❓ FAQ

Please read the FAQ before opening an issue. If your question isn't answered here you
can open an issue [here](https://github.com/xBourner/calendar-card-plus/issues).

!!! info "Attention"
    Issues with a question will be closed with a link to this page.

---

## Why can't I see my events?

Check that the calendar is switched on in the **Calendars** section (not in
`exclude_entities`) and that the event lies in the [time window](customization/time-window.md).
Without **Show upcoming events** the card only shows the rest of today.

---

## Why is there no plus button?

Turn on **Show 'Add Event' Button**. The button only appears if at least one calendar
supports creating events and is not read only.

---

## Why can't I edit an event?

The calendar integration has to support editing – see
[Events & Popup](customization/events-popup.md). Read only calendars can't be changed
in the card either.

---

## Why is the date in the wrong language?

Dates, weekdays and relative times follow the language and time format of your Home
Assistant user profile.
