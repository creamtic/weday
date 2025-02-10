import React from "react";
import Image from "next/image";

type ContentProps = {
  imageUrl: string;
};

const RoundedImage = ({ imageUrl }: ContentProps) => {
  return (
    <div className="relative w-[368px] h-[280px] shadow-md rounded-xl overflow-hidden">
      <Image src={imageUrl} alt="🤵👰" fill style={{ objectFit: "cover" }} sizes="100vw" className="w-full h-auto" />
    </div>
  );
};

export default RoundedImage;
