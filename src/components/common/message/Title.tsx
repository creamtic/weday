import React from "react";

type TitleProps = {
  message: string;
};

const Title: React.FC<TitleProps> = ({ message }) => {
  return (
    <>
      <div className="flex items-center justify-center py-4 px-4 sm:px-6 md:px-8 text-rose-300">{message}</div>
    </>
  );
};

export default Title;
