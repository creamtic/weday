import IntroImage from "./IntroImage";
import Image from "next/image";
import "./Intro.css";
import { IMAGE_INTRO } from "@/constants/constant";
import { convertGoogleImage } from "@/utils/imageUtil";

export default function Intro() {
  return (
    <div className="relative mx-auto min-h-screen overflow-hidden">
      <div className="relative">
        <IntroImage url={convertGoogleImage(IMAGE_INTRO.main)} />
        <div className="absolute inset-0 flex flex-col items-center text-center text-white">
          <div className="pt-8 flex flex-col items-center">
            <Image
              src={convertGoogleImage(IMAGE_INTRO.our)}
              alt="🤵👰"
              width={100}
              height={50}
              className="animate-fadeInSlide"
              priority
            />
            <Image
              src={convertGoogleImage(IMAGE_INTRO.weddingDay)}
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
