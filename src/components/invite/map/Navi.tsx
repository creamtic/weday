import IconImage from "@/components/common/image/IconImage";
import { T_MAP_URI, KAKAO_MAP_URI, NAVER_MAP_URI } from "@/constants/constant";
import React from "react";

export default function Navi() {
  return (
    <div className="flex flex-row justify-between items-center py-4 border border-opacity-70 w-[360px] text-xl">
      <div className="flex justify-center items-center w-1/3">
        <a href={`${T_MAP_URI}`} target="_blank" className="flex flex-row justify-center items-center cursor-pointer">
          <IconImage imageUrl="/map/t_map_icon.png" />
          <span className="pl-1">티맵</span>
        </a>
      </div>
      <div className="flex justify-center items-center w-1/3">
        <a
          href={`${KAKAO_MAP_URI}`}
          target="_blank"
          className="flex flex-row justify-center items-center cursor-pointer"
        >
          <IconImage imageUrl="/map/kakao_map_icon.png" />
          <span className="pl-1">카카오맵</span>
        </a>
      </div>
      <div className="flex justify-center items-center w-1/3">
        <a
          href={`${NAVER_MAP_URI}`}
          target="_blank"
          className="flex flex-row justify-center items-center cursor-pointer"
        >
          <IconImage imageUrl="/map/naver_map_icon.png" />
          <span className="pl-1">네이버지도</span>
        </a>
      </div>
    </div>
  );
}
