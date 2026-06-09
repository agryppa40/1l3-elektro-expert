/**
 * Global scroll reveal initialization
 * Observes all .fade-in-section elements on the page
 */
import { useEffect } from "react";

export default function ScrollRevealInit() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.06, rootMargin: "0px 0px -40px 0px" }
    );

    // Observe all current elements
    document.querySelectorAll(".fade-in-section").forEach((el) => observer.observe(el));

    // Also observe any future elements via MutationObserver
    const mutationObserver = new MutationObserver(() => {
      document.querySelectorAll(".fade-in-section:not(.observed)").forEach((el) => {
        el.classList.add("observed");
        observer.observe(el);
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}
