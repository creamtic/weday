"use client";

import { useEffect, useRef, useState } from "react";
import Intro from "@/components/invite/Intro/Intro";
import HallDetail from "@/components/invite/hallDetail/HallDetail";
import Invitation from "@/components/invite/invitation/Invitation";
import Calendar from "@/components/invite/calendar/Calendar";
import Map from "@/components/invite/map/Map";
import PhotoGallery from "@/components/invite/photoGallery/PhotoGallery";
import Title from "@/components/common/message/Title";
import Maeum from "@/components/invite/maeum/Maeum";
import Dday from "@/components/dday/Dday";
import { Slide, ToastContainer } from "react-toastify";
import { IMAGE_INFINITY_FILM_1, IMAGE_INFINITY_FILM_2, IMAGE_INFINITY_FILM_3 } from "@/constants/constant";
import { convertGoogleImage } from "@/utils/imageUtil";
import SoundLottie from "@/components/common/lottie/SoundLottie/SoundLottie";
import VerticalDivider from "@/components/common/divider/VerticalDivider";
import IntroText from "@/components/invite/Intro/IntroText";

export default function InvitationPage() {
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
            element.classList.add("fade-in");
            element.classList.remove("fade-out");
          } else {
            if (scrollDirection === "down") {
              element.classList.add("fade-out");
              element.classList.remove("fade-in");
            } else if (scrollDirection === "up" && index > 0) {
              element.classList.add("fade-out");
              element.classList.remove("fade-in");
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    modulesRef.current.forEach((module) => observer.observe(module));

    return () => {
      modulesRef.current.forEach((module) => observer.unobserve(module));
    };
  }, [scrollDirection]);

  return (
    <>
      <div className="relative mx-auto max-w-[480px] min-w-[320px] w-full min-h-screen overflow-hidden">
        <SoundLottie />
        <div
          className="fade"
          ref={(el) => {
            if (el) modulesRef.current.push(el);
          }}
        >
          <Intro />
        </div>
        <div
          className="fade"
          ref={(el) => {
            if (el) modulesRef.current.push(el);
          }}
        >
          <IntroText />
        </div>

        <div
          className="fade"
          ref={(el) => {
            if (el) modulesRef.current.push(el);
          }}
        >
          <Invitation />
        </div>
        <div
          className="fade"
          ref={(el) => {
            if (el) modulesRef.current.push(el);
          }}
        >
          <HallDetail />
        </div>
        <div
          className="fade"
          ref={(el) => {
            if (el) modulesRef.current.push(el);
          }}
        >
          <Calendar />
        </div>
        <div
          className="fade"
          ref={(el) => {
            if (el) modulesRef.current.push(el);
          }}
        >
          <Map />
        </div>
        <div
          className="fade"
          ref={(el) => {
            if (el) modulesRef.current.push(el);
          }}
        >
          <Title message="갤러리" />
          <PhotoGallery
            images={IMAGE_INFINITY_FILM_1.slice(0, IMAGE_INFINITY_FILM_1.length).map((image) =>
              convertGoogleImage(image)
            )}
          />
          <PhotoGallery
            images={IMAGE_INFINITY_FILM_2.slice(0, IMAGE_INFINITY_FILM_2.length).map((image) =>
              convertGoogleImage(image)
            )}
          />
          <PhotoGallery
            images={IMAGE_INFINITY_FILM_3.slice(0, IMAGE_INFINITY_FILM_3.length).map((image) =>
              convertGoogleImage(image)
            )}
          />
        </div>
        <div
          className="fade"
          ref={(el) => {
            if (el) modulesRef.current.push(el);
          }}
        >
          <Maeum />
        </div>
        <div
          className="fade"
          ref={(el) => {
            if (el) modulesRef.current.push(el);
          }}
        >
          <VerticalDivider />
          <Dday />
        </div>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        limit={8}
        hideProgressBar
        newestOnTop
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        closeButton={false}
        theme="light"
        transition={Slide}
      />
    </>
  );
}
