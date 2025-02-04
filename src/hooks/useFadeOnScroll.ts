// hooks/useFadeOnScroll.ts
import { useEffect, useState, useRef } from "react";

export const useFadeOnScroll = () => {
  const modulesRef = useRef<HTMLDivElement[]>([]);
  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    let lastScrollTop = 0;

    // 스크롤 방향 감지
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrollDirection(scrollTop > lastScrollTop ? "down" : "up");
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          const element = entry.target as HTMLElement;

          if (entry.isIntersecting) {
            // 화면에 보이면 fade-in + 위로 올라오는 효과
            element.classList.add("fade-in");
            element.classList.remove("fade-out");
          } else {
            if (scrollDirection === "down") {
              // 스크롤 내릴 때는 화면에서 벗어난 모듈은 fade-out
              element.classList.add("fade-out");
              element.classList.remove("fade-in");
            } else if (scrollDirection === "up" && index > 0) {
              // 스크롤 올릴 때는 이미 보이는 모듈은 그대로 두고,
              // 새로 벗어난 모듈만 fade-out
              element.classList.add("fade-out");
              element.classList.remove("fade-in");
            }
          }
        });
      },
      { threshold: 0.1 } // 10%가 보일 때 트리거
    );

    modulesRef.current.forEach((module) => observer.observe(module));

    return () => {
      modulesRef.current.forEach((module) => observer.unobserve(module));
    };
  }, [scrollDirection]);

  return { modulesRef };
};
