import React from "react";
import { IoIosCall } from "react-icons/io";

export default function Location() {
  return (
    <div className="flex flex-col justify-center items-center border py-5 rounded-b-lg w-[360px]">
      <span className="text-[1.5rem] font-bold">대구 수성구 용학로 106-7</span>
      <div className="flex flex-col  justify-center items-center">
        <div className="flex justify-center items-center">
          <span className="text-[1.5rem]">호텔수성 수성스퀘어 3층 피오니홀</span>
          <a href="tel:0537705555" className="ml-1 flex flex-col items-center justify-center">
            <IoIosCall className="text-lg text-green-300" />
          </a>
        </div>
        <div className="flex flex-col pt-5">
          <span className="pt-3 text-[1.3rem]">🚊 3호선 수성못역 (도보 20분, 0.9km)</span>
          <span className="pt-3 text-[1.3rem]">🚌 호텔수성 앞 하차 401, 410-1</span>
          <span className="pt-3 text-[1.3rem]">🚕 동대구역 (20분 소요, 6.4km)</span>
        </div>
      </div>
    </div>
  );
}
