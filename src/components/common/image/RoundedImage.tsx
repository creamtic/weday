import React from "react";
import Image from "next/image";

type ContentProps = {
  imageUrl: string;
};

const RoundedImage = ({ imageUrl }: ContentProps) => {
  return (
    <div className="relative w-[368px] h-[280px] shadow-md rounded-xl overflow-hidden">
      <Image src={imageUrl} alt="🤵👰" layout="fill" objectFit="cover" />
    </div>
  );
};

export default RoundedImage;
