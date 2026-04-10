"use client";

import { useEffect, useRef } from "react";

const SECTION_IDS = ["hero", "problem", "features", "how-it-works", "about", "waitlist"];

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
      const viewportH = container.clientHeight;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].offsetTop <= scrollTop + viewportH * 0.3) {
          currentIndex.current = i;
          break;
        }
      }
    };

    const scrollTo = (index: number) => {
      const clamped = Math.max(0, Math.min(index, SECTION_IDS.length - 1));
      const target = document.getElementById(SECTION_IDS[clamped]);
      if (!target || isScrolling.current) return;

      isScrolling.current = true;
      currentIndex.current = clamped;

      target.scrollIntoView({ behavior: "smooth" });

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

    // Sync index on manual scroll (e.g., from dot nav clicks)
    container.addEventListener("scrollend", updateIndex);

    updateIndex();

    return () => {
      container.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKeyDown);
      container.removeEventListener("scrollend", updateIndex);
    };
  }, []);

  return null;
}
