import { useEffect, useRef, useState } from "react";

export default function useScrollProgress() {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const node = ref.current;
      if (!node) return;

      const { top, height } = node.getBoundingClientRect();
      const viewportMiddle = window.innerHeight / 2;
      const scrolled = viewportMiddle - top;
      const ratio = Math.min(1, Math.max(0, scrolled / height));

      setProgress(ratio);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return [ref, progress];
}
