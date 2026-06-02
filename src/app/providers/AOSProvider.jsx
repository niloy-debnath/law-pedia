"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSProvider({ children }) {
  useEffect(() => {
    AOS.init({
      // Global settings:
      duration: 800, // values from 0 to 3000, with step 50ms
      once: false, // whether animation should happen only once - while scrolling down
    });
  }, []);

  return <>{children}</>;
}
