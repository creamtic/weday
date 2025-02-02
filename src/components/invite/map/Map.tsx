import { CUTE_FONT, KAKAO_MAP_API_KEY, WEDDING_LOCATION_COORDINATE } from "@/constants/constant";
import React, { useEffect } from "react";
import Navi from "./Navi";
import Location from "./Location";

export default function KakaoMap() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_MAP_API_KEY}&autoload=false`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      if (window.kakao && window.kakao.maps) {
        window.kakao.maps.load(() => {
          const container = document.getElementById("map");
          const options = {
            center: new window.kakao.maps.LatLng(WEDDING_LOCATION_COORDINATE.lat, WEDDING_LOCATION_COORDINATE.lng),
            level: 3,
          };
          const map = new window.kakao.maps.Map(container, options);

          const markerPosition = new window.kakao.maps.LatLng(
            WEDDING_LOCATION_COORDINATE.lat,
            WEDDING_LOCATION_COORDINATE.lng
          );
          const marker = new window.kakao.maps.Marker({
            position: markerPosition,
          });
          marker.setMap(map);
        });
      }
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-center py-5 text-xl" style={{ fontFamily: `${CUTE_FONT}` }}>
      <div id="map" className="w-[360px] h-[300px]" />
      <Navi />
      <Location />
    </div>
  );
}
