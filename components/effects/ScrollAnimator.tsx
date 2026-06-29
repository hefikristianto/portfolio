"use client";

import { useEffect } from "react";

export default function ScrollAnimator() {
  useEffect(() => {
    const selectors = [
      ".keyboard-key",
      ".skill-console",
      ".knowledge-tree",
      ".research-bubble",
      ".project-viewer",
      ".archive-preview",
      ".archive-info",
      "#contact > div",
    ];

    const elements = document.querySelectorAll(selectors.join(","));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px 80px 0px",
      }
    );

    elements.forEach((element) => {
      element.classList.add("reveal-ready");
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
