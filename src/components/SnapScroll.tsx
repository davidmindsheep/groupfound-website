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

      setTimeout(() => {
        isScrolling.current = false;
        updateIndex();
      }, 700);
    };

    const onWheel = (e: WheelEvent) => {
      if (isScrolling.current) {
        e.preventDefault();
        return;
      }

      // Features section has internal scrollable content
      const features = document.getElementById("features");
      if (features && currentIndex.current === SECTION_IDS.indexOf("features")) {
        const scrollableContent = features.querySelector(".overflow-y-auto") as HTMLElement | null;
        if (scrollableContent) {
          const isAtTop = scrollableContent.scrollTop <= 0;
          const isAtBottom =
            scrollableContent.scrollTop + scrollableContent.clientHeight >=
            scrollableContent.scrollHeight - 2;

          if (e.deltaY > 0 && !isAtBottom) {
            e.preventDefault();
            scrollableContent.scrollTop += 60;
            return;
          }
          if (e.deltaY < 0 && !isAtTop) {
            e.preventDefault();
            scrollableContent.scrollTop -= 60;
            return;
          }
        }
      }

      // Scrolling DOWN from waitlist — allow native scroll to reveal footer
      const onLastSection = currentIndex.current === SECTION_IDS.length - 1;
      if (e.deltaY > 0 && onLastSection) {
        // Don't preventDefault — let the browser scroll into the footer naturally
        return;
      }

      // Scrolling UP when past waitlist (i.e. into the footer area) —
      // snap back up to waitlist
      const waitlist = document.getElementById("waitlist");
      if (waitlist && e.deltaY < 0 && container.scrollTop > waitlist.offsetTop) {
        e.preventDefault();
        scrollTo(SECTION_IDS.indexOf("waitlist"));
        return;
      }

      e.preventDefault();

      if (e.deltaY > 0) {
        scrollTo(currentIndex.current + 1);
      } else if (e.deltaY < 0) {
        scrollTo(currentIndex.current - 1);
      }
    };

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
