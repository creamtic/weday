import React from "react";
import StartDay from "./StartDay";
import WeddingDay from "./WeddingDay";
import RoundedImage from "../common/image/RoundedImage";

const Dday = () => {
  return (
    <div className="flex flex-col justtify-center items-center text-center">
      <div className="p-3" />
      <StartDay />
      <div className="p-3" />
      <WeddingDay />
      <div className="p-3" />

      <RoundedImage imageUrl="/dday/1.jpg" />
    </div>
  );
};

export default Dday;
