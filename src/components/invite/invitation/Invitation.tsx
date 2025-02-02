import Title from "@/components/common/message/Title";
import Content from "@/components/common/message/Content";
import Modal from "react-modal";
import { IoIosCall } from "react-icons/io";
import { BiMessageDetail } from "react-icons/bi";
import { useState } from "react";
import {
  BRIDE_FATHER_MOBILE,
  BRIDE_FATHER_NAME,
  BRIDE_MOTHER_MOBILE,
  BRIDE_MOTHER_NAME,
  BRIDE_NAME,
  CUTE_FONT,
  GROOM_FATHER_MOBILE,
  GROOM_FATHER_NAME,
  GROOM_MOTHER_MOBILE,
  GROOM_MOTHER_NAME,
  GROOM_NAME,
} from "@/constants/constant";
import RoundedImage from "@/components/common/image/RoundedImage";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    height: "480px",
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

      <RoundedImage imageUrl="/invitation/1.jpg" />

      <div className="text-md mt-10 flex flex-col items-center gap-2 w-fit px-10 py-3">
        <div className="flex p-2">
          <span className="font-bold">
            {GROOM_FATHER_NAME} · {GROOM_MOTHER_NAME}
          </span>
          <span className="font-normal">의</span>
          <span className="w-[45px] font-normal text-center">아들</span>
          <span className="font-bold">{GROOM_NAME.slice(1)}</span>
          <a href="tel:01054669298" className="ml-1 flex flex-col items-center justify-center">
            <IoIosCall className="text-lg text-green-300" />
          </a>
        </div>
        <div className="flex p-2">
          <span className="font-bold">
            {BRIDE_FATHER_NAME} · {BRIDE_MOTHER_NAME}
          </span>
          <span className="font-normal">의</span>
          <span className="w-[45px] font-normal text-center ">딸</span>
          <span className="font-bold">{BRIDE_NAME.slice(1)}</span>
          <a href="tel:01097273147" className="ml-1 flex flex-col items-center justify-center">
            <IoIosCall className="text-lg text-green-300" />
          </a>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="w-fit px-10 py-2 mt-5 text-sm text-gray-600 rounded-full  bg-white border border-gray-400 border-opacity-70 transition-all shadow-md"
        >
          혼주에게 연락하기
          {isModalOpen}
        </button>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          style={customStyles}
          ariaHideApp={false}
        >
          <div className="w-[380px] h-[400px] mt-4 p-4 bg-white rounded-lg shadow-md">
            <div className="flex justify-evenly">
              <div className="flex flex-col justify-center">
                <span className="pt-10 pb-5 font-bold text-blue-500 text-center">신랑측</span>
                <div className="py-5 px-5 ">
                  <div className="flex justify-center">
                    <span className="p-1 text-sm flex items-center">아버지</span>
                    <span className="p-1 text-base flex items-center">고태영</span>
                  </div>
                  <div className="flex justify-center py-2.5">
                    <a href={`tel:${GROOM_FATHER_MOBILE}`} className="px-3 flex flex-col items-center justify-center">
                      <IoIosCall className="text-xl text-blue-300" />
                    </a>
                    <a href={`sms:${GROOM_FATHER_MOBILE}`} className="px-3 flex flex-col items-center justify-center">
                      <BiMessageDetail className="text-xl text-blue-300" />
                    </a>
                  </div>
                </div>
                <div className="py-5 px-5 ">
                  <div className="flex justify-center">
                    <span className="p-1 text-sm flex items-center">어머니</span>
                    <span className="p-1 text-base flex items-center">이숙이</span>
                  </div>
                  <div className="flex justify-center py-2.5">
                    <a href={`tel:${GROOM_MOTHER_MOBILE}`} className="px-3 flex flex-col items-center justify-center">
                      <IoIosCall className="text-xl text-blue-300" />
                    </a>
                    <a href={`sms:${GROOM_MOTHER_MOBILE}`} className="px-3 flex flex-col items-center justify-center">
                      <BiMessageDetail className="text-xl text-blue-300" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <span className="pt-10 pb-5 font-bold text-rose-500 text-center">신부측</span>
                <div className="py-5 px-5 ">
                  <div className="flex justify-center">
                    <span className="p-1 text-sm flex items-center">아버지</span>
                    <span className="p-1 text-base flex items-center">이승구</span>
                  </div>
                  <div className="flex justify-center py-2.5">
                    <a href={`tel:${BRIDE_FATHER_MOBILE}`} className="px-3 flex flex-col items-center justify-center">
                      <IoIosCall className="text-xl text-rose-300" />
                    </a>
                    <a href={`sms:${BRIDE_FATHER_MOBILE}`} className="px-3 flex flex-col items-center justify-center">
                      <BiMessageDetail className="text-xl text-rose-300" />
                    </a>
                  </div>
                </div>
                <div className="py-5 px-5 ">
                  <div className="flex justify-center">
                    <span className="p-1 text-sm flex items-center">어머니</span>
                    <span className="p-1 text-base flex items-center">조완복</span>
                  </div>
                  <div className="flex justify-center py-2.5">
                    <a href={`tel:${BRIDE_MOTHER_MOBILE}`} className="px-3 flex flex-col items-center justify-center">
                      <IoIosCall className="text-xl text-rose-300" />
                    </a>
                    <a href={`sms:${BRIDE_MOTHER_MOBILE}`} className="px-3 flex flex-col items-center justify-center">
                      <BiMessageDetail className="text-xl text-rose-300" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[60px] h-[35px] bg-[rgba(145,130,130,0.7)] rounded-full text-[13px] text-white border-0 flex items-center justify-center cursor-pointer z-2 hover:bg-white hover:text-black"
            style={{ fontFamily: `${CUTE_FONT}`, fontSize: "1rem" }}
          >
            닫기
          </button>
        </Modal>
      </div>
    </div>
  );
}
