import IconImage from "@/components/common/image/IconImage";
import { T_MAP_URI, KAKAO_MAP_URI, NAVER_MAP_URI } from "@/constants/constant";
import React from "react";

export default function Navi() {
  return (
    <div className="flex flex-row justify-evenly items-center py-4 border border-opacity-70 w-[360px]">
      <a href={`${T_MAP_URI}`} target="_blank" className="flex flex-row justify-evenly items-center cursor-pointer">
        <IconImage imageUrl="/map/t_map_icon.png" />
        티맵
      </a>
      <a href={`${KAKAO_MAP_URI}`} target="_blank" className="flex flex-row justify-evenly items-center cursor-pointer">
        <IconImage imageUrl="/map/kakao_map_icon.png" />
        카카오맵
      </a>
      <a href={`${NAVER_MAP_URI}`} target="_blank" className="flex flex-row justify-evenly items-center cursor-pointer">
        <IconImage imageUrl="/map/naver_map_icon.png" />
        네이버지도
      </a>
    </div>
  );
}
