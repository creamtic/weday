import React from "react";
import Image from "next/image";

type ContentProps = {
  imageUrl: string;
};

const IconImage = ({ imageUrl }: ContentProps) => {
  return (
    <div className="relative w-[1.2rem] h-[1.2rem] overflow-hidden">
      <Image src={imageUrl} alt="🤵👰" layout="fill" objectFit="cover" />
    </div>
  );
};

export default IconImage;
