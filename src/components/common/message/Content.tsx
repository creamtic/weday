import React from "react";

type ContentProps = {
  message: string;
};

const Content = ({ message }: ContentProps) => {
  const formattedMessage = message.split("\\n").map((str, index) => (
    <div key={index}>
      {str}
      {index !== message.split("\\n").length - 1 && <br />}
    </div>
  ));

  return <div className="text-center py-4 px-4 sm:px-6 md:px-8 text-[1.1rem]">{formattedMessage}</div>;
};

export default Content;
