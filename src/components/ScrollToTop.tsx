import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    // Use try-catch and multiple methods to ensure it scrolls to top
    try {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant' as ScrollBehavior // Force instant jump
      });
      document.documentElement.scrollTo(0, 0);
      document.body.scrollTo(0, 0);
    } catch (e) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}
