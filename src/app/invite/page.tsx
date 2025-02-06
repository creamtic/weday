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
      { threshold: 0.1 } // 10%가 보일 때 트리거
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
          <div className="flex flex-col items-center gap-3 my-6 border rounded-xl py-10 mx-10">
            <div className="flex gap-2 justify-center items-center text-[1.6rem] text-amber-600 text-opacity-60">
              <p className=" font-serif">KWANWOO</p>
              <p className=" font-serif">&</p>
              <p className=" font-serif">SERAN</p>
            </div>
            <div className=" w-[10vh] h-[2px] bg-gray-950 opacity-20"></div>
            <div className="text-center text-gray-950 text-opacity-60">
              <p className="text-md font-bold ">2025. 05. 17. Sat, 12:50 PM</p>
              <br></br>
              <p className=" text-md font-bold ">호텔수성 수성스퀘어</p>
              <p className=" text-md font-bold ">3층 피오니홀</p>
            </div>
          </div>
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
