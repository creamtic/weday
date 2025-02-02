import React from "react";
import { IoIosCall } from "react-icons/io";

export default function Location() {
  return (
    <div className="flex flex-col justify-center items-center border py-5 rounded-b-lg w-[360px]">
      <span className="text-xl font-bold">대구 수성구 용학로 106-7</span>
      <div className="flex">
        <span className="text-md">호텔수성 피오니홀</span>
        <a href="tel:0537705555" className="ml-1 flex flex-col items-center justify-center">
          <IoIosCall className="text-lg text-green-300" />
        </a>
      </div>
    </div>
  );
}
