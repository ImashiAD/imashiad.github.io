import { useEffect, useState } from "react";

const useSectionInView = (id: string): boolean => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = document.getElementById(id);
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        rootMargin: "0px",
        threshold: 0.6,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [id]);

  return isInView;
};

export default useSectionInView;
