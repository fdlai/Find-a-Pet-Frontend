import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// navigating to any new route, will have us start at the top of the page
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
