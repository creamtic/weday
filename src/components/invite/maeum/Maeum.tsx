import Content from "@/components/common/message/Content";
import Title from "@/components/common/message/Title";
import React from "react";
import AccountInfo from "./AccountInfo";
import {
  BRIDE_ACCOUNT,
  BRIDE_FATHER_ACCOUNT,
  BRIDE_FATHER_NAME,
  BRIDE_MOTHER_ACCOUNT,
  BRIDE_MOTHER_NAME,
  BRIDE_NAME,
  GROOM_ACCOUNT,
  GROOM_FATHER_ACCOUNT,
  GROOM_FATHER_NAME,
  GROOM_MOTHER_ACCOUNT,
  GROOM_MOTHER_NAME,
  GROOM_NAME,
} from "@/constants/constant";

export default function Maeum() {
  return (
    <div className="flex flex-col justify-center items-center py-4 px-10">
      <Title message="마음 전해주실 곳" />
      <Content
        message="멀리서도 축하의 마음을\n
                전하고 싶으신 분들을 위해\n
                계좌번호를 안내드립니다.\n
                \n
                소중한 축하를 보내주셔서 감사드리며,\n
                따뜻한 마음에 깊이 감사드립니다."
      />

      <div className="flex items-center justify-center pt-10 pb-1 px-4 sm:px-6 md:px-8 text-blue-300 text-xl">
        신랑측
      </div>
      <AccountInfo type="신랑" name={GROOM_NAME} account={GROOM_ACCOUNT} />
      <AccountInfo type="혼주" name={GROOM_FATHER_NAME} account={GROOM_FATHER_ACCOUNT} />
      <AccountInfo type="혼주" name={GROOM_MOTHER_NAME} account={GROOM_MOTHER_ACCOUNT} />

      <div className="flex items-center justify-center pt-10 pb-1 px-4 sm:px-6 md:px-8 text-rose-300 text-xl">
        신부측
      </div>
      <AccountInfo type="신부" name={BRIDE_NAME} account={BRIDE_ACCOUNT} />
      <AccountInfo type="혼주" name={BRIDE_FATHER_NAME} account={BRIDE_FATHER_ACCOUNT} />
      <AccountInfo type="혼주" name={BRIDE_MOTHER_NAME} account={BRIDE_MOTHER_ACCOUNT} />
    </div>
  );
}
