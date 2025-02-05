import { DEFAULT_FONT } from "@/constants/constant";
import React from "react";

type TitleProps = {
  message: string;
};

const Title: React.FC<TitleProps> = ({ message }) => {
  return (
    <>
      <div
        className="flex items-center justify-center pt-10 pb-4 px-4 sm:px-6 md:px-8 text-rose-400 text-opacity-70 text-[1.5rem]"
        style={{ fontFamily: `${DEFAULT_FONT}` }}
      >
        {message}
      </div>
    </>
  );
};

export default Title;
