import React from "react";

type ContentProps = {
  message: string;
};

const Content: React.FC<ContentProps> = ({ message }) => {
  const formattedMessage = message.split("\\n").map((str, index) => (
    <React.Fragment key={index}>
      {str}
      {index !== message.split("\\n").length - 1 && <br />}
    </React.Fragment>
  ));

  return <div className="text-center py-4 px-4 sm:px-6 md:px-8 text-[1.1rem]">{formattedMessage}</div>;
};

export default Content;
