"use client";

import { useEffect, useRef } from "react";

const SECTION_IDS = ["hero", "problem", "features", "how-it-works", "about", "waitlist", "footer"];

export function SnapScroll() {
  const isScrolling = useRef(false);
  const currentIndex = useRef(0);

  useEffect(() => {
    const container = document.getElementById("snap-container");
    if (!container) return;

    // Determine current section from scroll position
    const updateIndex = () => {
      const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
      const scrollTop = container.scrollTop;
      const maxScroll = container.scrollHeight - container.clientHeight;

      // If we're at (or very close to) the bottom, we're on the footer
      if (maxScroll - scrollTop < 4 && sections.some((s) => s.id === "footer")) {
        currentIndex.current = SECTION_IDS.indexOf("footer");
        return;
      }

      const viewportH = container.clientHeight;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].id === "footer") continue;
        if (sections[i].offsetTop <= scrollTop + viewportH * 0.3) {
          currentIndex.current = i;
          break;
        }
      }
    };

    // Manual smooth scroll — browser's smooth scrollTo silently fails when
    // target exceeds max, so we animate manually.
    const animateScrollTo = (toY: number, durationMs = 600) => {
      const startY = container.scrollTop;
      const maxY = container.scrollHeight - container.clientHeight;
      const endY = Math.max(0, Math.min(toY, maxY));
      const startTime = performance.now();
      const ease = (t: number) => 1 - Math.pow(1 - t, 3); // easeOutCubic

      const step = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(1, elapsed / durationMs);
        container.scrollTop = startY + (endY - startY) * ease(progress);
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const scrollTo = (index: number) => {
      const clamped = Math.max(0, Math.min(index, SECTION_IDS.length - 1));
      const target = document.getElementById(SECTION_IDS[clamped]);
      if (!target || isScrolling.current) return;

      isScrolling.current = true;
      currentIndex.current = clamped;

      if (SECTION_IDS[clamped] === "footer") {
        // Scroll to the max (bottom) so the footer is fully visible
        animateScrollTo(container.scrollHeight);
      } else {
        animateScrollTo(target.offsetTop);
      }

      // Unlock after animation completes
      setTimeout(() => {
        isScrolling.current = false;
        updateIndex();
      }, 700);
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();

      if (isScrolling.current) return;

      // Check if we're inside the features section and it has internal scroll
      const features = document.getElementById("features");
      if (features) {
        const scrollableContent = features.querySelector(".overflow-y-auto");
        if (scrollableContent) {
          const el = scrollableContent as HTMLElement;
          const isAtTop = el.scrollTop <= 0;
          const isAtBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 2;

          // If features is current section and content is scrollable internally
          if (currentIndex.current === SECTION_IDS.indexOf("features")) {
            if (e.deltaY > 0 && !isAtBottom) {
              // Let internal scroll happen
              el.scrollTop += 60;
              return;
            }
            if (e.deltaY < 0 && !isAtTop) {
              el.scrollTop -= 60;
              return;
            }
          }
        }
      }

      if (e.deltaY > 0) {
        scrollTo(currentIndex.current + 1);
      } else if (e.deltaY < 0) {
        scrollTo(currentIndex.current - 1);
      }
    };

    // Keyboard navigation
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        scrollTo(currentIndex.current + 1);
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        scrollTo(currentIndex.current - 1);
      }
    };

    container.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKeyDown);

    // Sync index on any scroll (debounced), covers nav clicks, keyboard, etc.
    let scrollTimer: ReturnType<typeof setTimeout> | null = null;
    const onScroll = () => {
      if (scrollTimer) clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        if (!isScrolling.current) updateIndex();
      }, 100);
    };
    container.addEventListener("scroll", onScroll, { passive: true });

    updateIndex();

    return () => {
      container.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKeyDown);
      container.removeEventListener("scroll", onScroll);
      if (scrollTimer) clearTimeout(scrollTimer);
    };
  }, []);

  return null;
}
