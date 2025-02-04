import { IMAGE_INTRO } from "@/constants/constant";
import { convertGoogleImage } from "@/utils/imageUtil";
import Image from "next/image";

export default function IntroImage({ url }: { url: string }) {
  return (
    <div className="relative mx-auto min-h-screen overflow-hidden">
      <Image src={url} alt="🤵👰" layout="fill" objectFit="cover" priority />
      <Image
        src={convertGoogleImage(IMAGE_INTRO.flowerEffect)}
        alt="🌸"
        layout="fill"
        objectFit="cover"
        className="scale-x-[-1]"
      />
    </div>
  );
}
