import { DEFAULT_FONT } from "@/constants/constant";
import React from "react";

type TitleProps = {
  message: string;
};

const Title = ({ message }: TitleProps) => {
  return (
    <>
      <div
        className="flex items-center justify-center pt-10 pb-4 px-4 sm:px-6 md:px-8 text-amber-600 text-opacity-60 text-[1.2rem] font-bold"
        style={{ fontFamily: `${DEFAULT_FONT}` }}
      >
        {message}
      </div>
    </>
  );
};

export default Title;
