import CheckLottie from "@/components/common/lottie/CheckLottie/CheckLottie";
import React from "react";
import { IoCopyOutline } from "react-icons/io5";
import { toast } from "react-toastify";

type AccountInfoProps = {
  type: "신랑" | "신부" | "혼주";
  name: string;
  account: string;
};

export default function AccountInfo({ type, name, account }: AccountInfoProps) {
  const copyToClipboard = () => {
    navigator.clipboard
      ?.writeText(account)
      .then(() => {
        toast.success(
          <div className="flex items-center">
            <CheckLottie />
            <span className="ml-2">
              계좌번호가 복사되었어요.
              <br />
              {account}
            </span>
          </div>,
          {
            autoClose: 3000,
            closeOnClick: true,
            icon: false,
          }
        );
      })
      .catch(() => {
        toast.error("복사에 실패했습니다.");
      });
  };

  return (
    <div
      className="flex flex-col px-4 py-2 my-2 w-full bg-white rounded-xl shadow-lg aos-init aos-animate"
      data-aos="zoom-out"
      data-aos-offset="100"
      data-aos-duration="550"
    >
      <div className="flex justify-center items-center gap-1 w-full text-black">
        <span className="text-xs mt-[4px]">{type}</span>
        <span className="text-md font-bold">{name}</span>
        <span className="text-sm ml-auto font-sans text-[0.8rem]">{account}</span>
        <div className="px-1 py-2 cursor-pointer" onClick={copyToClipboard}>
          <IoCopyOutline />
        </div>
      </div>
    </div>
  );
}
