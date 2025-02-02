import Title from "@/components/common/message/Title";
import Content from "@/components/common/message/Content";
import Image from "next/image";
import Modal from "react-modal";
import { IoIosCall } from "react-icons/io";
import { useState } from "react";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    padding: "0",
    border: "none",
    background: "none",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)", // 어두운 색의 오버레이
    backdropFilter: "blur(5px)", // 배경 블러 처리
  },
};
export default function Invitation() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="mt-10 flex flex-col items-center justify-center">
      <Title message="소중한 분들을 초대합니다." />
      <Content message="오랜 기다림 속에서 저희 두 사람, \n 한 마음 되어 참된 사랑의 결실을 \n 맺게 되었습니다. \n\n 오셔서 축복해 주시면 큰 기쁨이겠습니다." />

      <div className="relative w-[368px] h-[300px]">
        <Image src={"/invitation/2.jpg"} alt="🤵👰" layout="fill" objectFit="contain" />
      </div>
      <div className="text-md mt-10 flex flex-col items-center gap-2 w-fit px-10 py-3">
        <div className="flex">
          <span className="font-bold">고태영 · 이숙이</span>
          <span className="font-normal">의</span>
          <span className="w-[45px] font-normal text-center">아들</span>
          <span className="font-bold">관우</span>
          <a href="tel:01054669298" className="ml-1 flex flex-col items-center justify-center">
            <IoIosCall className="text-rose-300" />
          </a>
        </div>
        <div className="flex">
          <span className="font-bold">이승구 · 조완복</span>
          <span className="font-normal">의</span>
          <span className="w-[45px] font-normal text-center ">딸</span>
          <span className="font-bold">세란</span>
          <a href="tel:01097273147" className="ml-1 flex flex-col items-center justify-center">
            <IoIosCall className="text-rose-300" />
          </a>
        </div>
        <button className="w-fit px-10 py-2 mt-5 text-sm text-gray-600 rounded-full cursor-pointer bg-white border border-gray-900 border-opacity-70 transition-all hover:bg-rose-50">
          혼주에게 연락하기
          {isModalOpen}
        </button>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          style={customStyles}
          ariaHideApp={false} // 모달에서 app의 숨김 처리 방지
        >
          <div className="relative w-[100%] h-[90vh] overflow-hidden">ddddd</div>
        </Modal>
      </div>
    </div>
  );
}
