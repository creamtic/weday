import React, { useRef } from "react";

const SoundPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playSound = () => {
    audioRef.current?.play();
  };

  return (
    <div>
      <button onClick={playSound}>Play Sound</button>
      <audio ref={audioRef} src="path/to/your/sound.mp3" />
    </div>
  );
};

export default SoundPlayer;
