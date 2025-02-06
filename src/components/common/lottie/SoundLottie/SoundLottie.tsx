import React, { useState, useRef } from "react";
import dynamic from "next/dynamic";
import soundLottie from "./sound_lottie.json";
import "./SoundLottie.css";

const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

const SoundLottie = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [segment, setSegment] = useState([0, 47]);
  const audioRef = useRef<HTMLAudioElement | null>(null); // audio 참조 추가

  const options = {
    loop: false,
    autoplay: true,
    animationData: soundLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleClick = () => {
    if (isPlaying) {
      setSegment([47, 104]);
      setIsPlaying(false);
      audioRef.current?.pause(); // 음악 멈추기
    } else {
      setSegment([0, 47]);
      setIsPlaying(true);
      audioRef.current?.play(); // 음악 재생
    }
  };

  return (
    <div className={`fixed flex z-[100] w-[100%] max-w-[480px] lottie-fade-in`}>
      <div className="absolute top-0 right-0" onClick={handleClick}>
        <Lottie segments={segment} options={options} height={60} width={60} />
      </div>
      <audio ref={audioRef} controls controlsList="nodownload" loop style={{ display: "none" }}>
        <source src="/music.mp3" />
      </audio>
    </div>
  );
};

export default SoundLottie;
