import React from "react";
import { IoIosCall } from "react-icons/io";

export default function Location() {
  return (
    <div className="flex flex-col justify-center items-center border py-5 px-5 rounded-b-lg w-[360px]">
      <span className="text-[1.2rem]">대구 수성구 용학로 106-7</span>
      <div className="flex flex-col  justify-center items-center">
        <div className="flex justify-center items-center">
          <span className="text-[1.1rem]">호텔수성 수성스퀘어 3층 피오니홀</span>
          <a href="tel:0537705555" className="ml-1 flex flex-col items-center justify-center">
            <IoIosCall className="text-lg text-green-300" />
          </a>
        </div>
        <div className="flex flex-col pt-5 text-[1rem]">
          <div className="flex items-center pt-3">
            <span className="pr-1">🚊</span>
            <div>
              <span>3호선 수성못역 (도보 20분, 0.9km)</span>
            </div>
          </div>
          <div className="flex items-center pt-3">
            <span className="pr-1">🚗</span>
            <div>
              <span>3시간 무료 주차 (식권과 함께 수령)</span>
            </div>
          </div>
          <div className="flex items-start pt-3">
            <span className="pr-1">🚌</span>
            <div className="flex flex-col">
              <span>호텔수성 앞 하차 (401, 410-1)</span>
            </div>
          </div>

          <div className="flex items-start pt-3">
            <span className="pr-1">🤵</span>
            <div className="flex flex-col">
              <span>신랑측 전세 버스</span>
              <div className="flex flex-row">
                <span>선탑자 연락하기</span>
                <a href="tel:01026575008" className="ml-1 flex flex-col items-center justify-center">
                  <IoIosCall className="text-lg text-green-300" />
                </a>
              </div>
              <span>출발 - 삼성 정문주차타워 오전 8시 30분</span>
              <span>귀가 - 호텔수성 수성스퀘어 오후 3시</span>
            </div>
          </div>

          <div className="flex items-start pt-3">
            <span className="pr-1">👰</span>
            <div className="flex flex-col">
              <span>신부측 전세 버스</span>
              <div className="flex flex-row">
                <span>선탑자 연락하기</span>
                <a href="tel:01090584627" className="ml-1 flex flex-col items-center justify-center">
                  <IoIosCall className="text-lg text-green-300" />
                </a>
              </div>
              <span>출발 - 화산동 행정복지센터 오전 8시</span>
              <span>귀가 - 호텔수성 수성스퀘어 오후 3시</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
