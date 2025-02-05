import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import soundLottie from "../../../../../public/sound_lottie.json"; // JSON 파일 경로
import "./SoundLottie.css";

const Lottie = dynamic(() => import("react-lottie"), { ssr: false });
const LottieAnimation = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [segment, setSegment] = useState([0, 47]); // 애니메이션의 시작과 끝 프레임
  const [isVisible, setIsVisible] = useState(false); // fade-in 효과를 제어하는 상태

  // Lottie 옵션 설정
  const options = {
    loop: false,
    autoplay: true,
    animationData: soundLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // 1초 뒤에 fade-in 효과를 적용
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true); // 1초 후에 div를 표시
      console.log("!!");
    }, 4000);

    return () => clearTimeout(timer); // 컴포넌트가 unmount될 때 타이머 정리
  }, []);

  const handleClick = () => {
    console.log("?? : ", isPlaying);
    if (isPlaying) {
      setSegment([47, 104]);
      setIsPlaying(false);
    } else {
      setSegment([0, 47]);
      setIsPlaying(true);
    }
  };

  return (
    <div
      className={`fixed flex z-[100] w-[100%] max-w-[480px] ${isVisible ? "fade-in" : ""}`}
      style={{ display: isVisible ? "unset" : "none" }} // 처음에는 안 보이도록 opacity를 0으로 설정
    >
      <div className="absolute top-0 right-0" onClick={handleClick}>
        <Lottie segments={segment} options={options} height={60} width={60} />
      </div>
    </div>
  );
};

export default LottieAnimation;
