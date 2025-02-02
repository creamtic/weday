import Image from "next/image";

export default function IntroImage({ url }: { url: string }) {
  return (
    <div className="relative mx-auto min-h-screen overflow-hidden">
      <Image src={url} alt="🤵👰" layout="fill" objectFit="cover" priority />
      <Image src={"/flower_effect.png"} alt="🌸" layout="fill" objectFit="cover" className="scale-x-[-1]" />
    </div>
  );
}
