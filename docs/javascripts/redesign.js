// Card Docs redesign: scroll-linked motion for product pages and the card navigation.
// Everything is visible without this script; it only adds motion on top.
(() => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const frame = [];
  const onFrame = (fn) => frame.push(fn);

  // --- Card navigation: hairline once it sticks ---
  const localnav = document.querySelector(".rd-localnav");
  if (localnav) {
    onFrame(() =>
      localnav.classList.toggle("is-stuck", window.scrollY > 0 && localnav.getBoundingClientRect().top <= 0)
    );
  }

  // --- Product hero stage: the framed video opens to the full width while scrolling ---
  const stage = document.querySelector("[data-rd-stage]");
  if (stage) {
    const video = stage.querySelector("video");
    const cards = stage.querySelector(".rd-stage__cards");
    const mobile = window.matchMedia("(max-width: 767px)").matches;
    video.src = mobile ? video.dataset.mobile : video.dataset.desktop;
    if (!reduce) {
      video.autoplay = true;
      // The loop only runs while the stage is on screen
      new IntersectionObserver(([e]) => (e.isIntersecting ? video.play().catch(() => {}) : video.pause())).observe(stage);
    }
    stage.addEventListener("animationend", () => (stage.style.animation = "none"), { once: true });

    if (!reduce) {
      onFrame(() => {
        const r = stage.getBoundingClientRect();
        const vh = window.innerHeight;
        // 0 when the stage top is at 90% of the viewport, 1 when it reaches the top
        const p = clamp((vh * 0.9 - r.top) / (vh * 0.9));
        const ease = 1 - Math.pow(1 - p, 3);
        stage.style.setProperty("--rd-stage-x", `${6 * (1 - ease)}vw`);
        stage.style.setProperty("--rd-stage-r", `${32 * (1 - ease)}px`);
        cards.style.setProperty("--rd-cards-y", `${40 * (1 - ease)}px`);
        cards.style.setProperty("--rd-cards-s", `${0.94 + 0.06 * ease}`);
      });
    }
  }

  const product = document.querySelector(".rd-hero");
  const content = document.querySelector(".md-content__inner");

  // --- Statement: the intro sentence lights up word by word as it scrolls into place ---
  const statement = product && content.querySelector(":scope > h1 + p");
  if (statement && !reduce) {
    const words = [];
    const walk = (node) => {
      for (const child of [...node.childNodes]) {
        if (child.nodeType === Node.TEXT_NODE) {
          const parts = child.textContent.split(/(\s+)/);
          const frag = document.createDocumentFragment();
          for (const part of parts) {
            if (!part.trim()) {
              frag.append(part);
              continue;
            }
            const span = document.createElement("span");
            span.className = "rd-word";
            span.textContent = part;
            words.push(span);
            frag.append(span);
          }
          child.replaceWith(frag);
        } else {
          walk(child);
        }
      }
    };
    walk(statement);
    statement.classList.add("rd-words");
    onFrame(() => {
      const r = statement.getBoundingClientRect();
      const vh = window.innerHeight;
      // Starts when the sentence enters the lower fifth, done when it reaches the middle
      const p = clamp((vh * 0.85 - r.top) / (vh * 0.85 - vh * 0.35));
      const lit = p * words.length;
      words.forEach((w, i) => w.style.setProperty("--rd-word", String(0.18 + 0.82 * clamp(lit - i))));
    });
  }

  // --- Feature tiles: the leading emoji becomes the tile's mark; the dash after the
  //     title is only needed in a running list, so it is hidden (not removed) in a tile ---
  if (product) {
    content.querySelectorAll(":scope > h2 + ul > li").forEach((li) => {
      const first = li.firstChild;
      if (first && first.nodeType === Node.TEXT_NODE) {
        const m = first.textContent.match(/^\s*(\p{Extended_Pictographic}[️‍\p{Extended_Pictographic}]*)\s*/u);
        if (m) {
          const mark = document.createElement("span");
          mark.className = "rd-mark";
          mark.setAttribute("aria-hidden", "true");
          mark.textContent = m[1];
          first.textContent = first.textContent.slice(m[0].length);
          li.prepend(mark);
        }
      }
      const strong = li.querySelector(":scope > strong");
      const after = strong && strong.nextSibling;
      if (after && after.nodeType === Node.TEXT_NODE) {
        const m = after.textContent.match(/^\s*[–—-]\s*/);
        if (m) {
          const dash = document.createElement("span");
          dash.className = "rd-dash";
          dash.textContent = m[0];
          after.textContent = after.textContent.slice(m[0].length);
          strong.after(dash);
        }
      }
    });
  }

  // --- Reveals: each part of a section rises in once, siblings staggered ---
  if (product && !reduce) {
    const groups = [
      ...content.querySelectorAll(":scope > h2, :scope > h3, :scope > .admonition"),
      ...content.querySelectorAll(":scope > h1 + p ~ p:not([align])"),
    ].map((el) => [el]);
    content.querySelectorAll(":scope > h2 + ul").forEach((ul) => groups.push([...ul.children]));
    content.querySelectorAll(":scope > p[align='center']").forEach((p) => groups.push([...p.querySelectorAll("img")]));
    content.querySelectorAll(".info-grid").forEach((g) => groups.push([...g.children]));

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }),
      { rootMargin: "0px 0px -12% 0px" }
    );
    for (const group of groups) {
      group.forEach((el, i) => {
        el.classList.add("rd-reveal");
        el.style.setProperty("--rd-delay", `${Math.min(i, 5) * 70}ms`);
        io.observe(el);
      });
    }
  }

  // --- One rAF loop for every scroll-linked effect ---
  if (!frame.length) return;
  let ticking = false;
  const run = () => {
    ticking = false;
    frame.forEach((fn) => fn());
  };
  const request = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(run);
    }
  };
  window.addEventListener("scroll", request, { passive: true });
  window.addEventListener("resize", request);
  run();
})();
