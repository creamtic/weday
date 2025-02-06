import dynamic from "next/dynamic";
import checkLottie from "./check_lottie.json";
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

const CheckLottie = () => {
  const options = {
    loop: false,
    autoplay: true,
    animationData: checkLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={options} height={30} width={30} />;
};

export default CheckLottie;
