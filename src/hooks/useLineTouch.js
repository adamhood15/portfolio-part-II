import { useEffect, useRef, useState } from "react";

// Fires once the observed element crosses the vertical center of the viewport —
// the same point the growing timeline line's leading edge stops at (see
// useScrollProgress), so this tells a timeline entry when the line has drawn
// as far as its dot.
export default function useLineTouch() {
  const ref = useRef(null);
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTouched(true);
          observer.unobserve(node);
        }
      },
      { rootMargin: "0px 0px -50% 0px", threshold: 0 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, touched];
}
