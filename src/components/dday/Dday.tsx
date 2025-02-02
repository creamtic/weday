import React from "react";
import StartDay from "./StartDay";
import WeddingDay from "./WeddingDay";
import Image from "next/image";

const Dday = () => {
  return (
    <div className="flex flex-col justtify-center items-center text-center">
      <div className="p-3" />
      <StartDay />
      <div className="p-3" />
      <WeddingDay />
      <div className="p-3" />

      <div className="relative w-[368px] h-[600px] shadow-md rounded-xl overflow-hidden">
        <Image src="/dday/1.jpg" alt="🤵👰" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
};

export default Dday;
