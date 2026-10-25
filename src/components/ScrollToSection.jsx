import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToSection() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);

      if (el) {
        const reduceMotion = typeof window.matchMedia !== "function" || window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

  return null;
}
