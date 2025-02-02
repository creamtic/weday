import { KAKAO_MAP_API_KEY } from "@/constants/constant";
import React, { useEffect } from "react";

const WEDDING_LOCATION_COORDINATE = { lat: 35.824482, lng: 128.619791 };

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

  return <div id="map" style={{ width: "500px", height: "400px" }}></div>;
}
