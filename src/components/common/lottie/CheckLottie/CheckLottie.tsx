import { useEffect, useState } from "react";
import Lottie from "react-lottie";
import checkLottie from "./check_lottie.json";

const CheckLottieComponent = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const options = {
    animationData: checkLottie,
    loop: true,
    autoplay: true,
  };

  return <Lottie options={options} height={30} width={30} />;
};

export default CheckLottieComponent;
