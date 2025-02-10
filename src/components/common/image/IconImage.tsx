import React from "react";
import Image from "next/image";

type ContentProps = {
  imageUrl: string;
};

const IconImage = ({ imageUrl }: ContentProps) => {
  return (
    <div className="relative w-[1.2rem] h-[1.2rem] overflow-hidden">
      <Image src={imageUrl} alt="🤵👰" fill style={{ objectFit: "cover" }} sizes="100vw" className="w-full h-auto" />
    </div>
  );
};

export default IconImage;
