import { IMAGE_INTRO } from "@/constants/constant";
import { convertGoogleImage } from "@/utils/imageUtil";
import Image from "next/image";

export default function IntroImage({ url }: { url: string }) {
  return (
    <div className="relative mx-auto min-h-screen overflow-hidden">
      <Image
        src={url}
        alt="🤵👰"
        fill
        priority
        style={{ objectFit: "cover" }}
        sizes="100vw"
        className="w-full h-auto"
      />
      <Image
        src={convertGoogleImage(IMAGE_INTRO.flowerEffect)}
        alt="🌸"
        layout="fill"
        className="scale-x-[-1] w-full h-auto"
        style={{ objectFit: "cover" }}
        sizes="100vw"
      />
    </div>
  );
}
