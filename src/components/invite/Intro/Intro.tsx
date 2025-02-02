import IntroImage from "./IntroImage";
import Image from "next/image";
import "./Intro.css";

export default function Intro() {
  return (
    <div className="relative mx-auto min-h-screen overflow-hidden">
      <div className="relative">
        <IntroImage url={"/main_img.jpg"} />
        <div className="absolute inset-0 flex flex-col items-center text-center text-white">
          <div className="pt-8 flex flex-col items-center">
            <Image src="/our.png" alt="🤵👰" width={100} height={50} className="animate-fadeInSlide" priority />
            <Image
              src="/wedding_day.png"
              alt="🤵👰"
              width={350}
              height={175}
              className="-mt-3 animate-fadeInSlide"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
