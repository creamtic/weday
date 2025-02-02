import { WEDDING_DATE } from "@/constants/constant";
import React, { useEffect, useState } from "react";

const getTimeDifference = (startDate: Date, endDate: Date) => {
  const diffInMillis = endDate.getTime() - startDate.getTime();

  const years = Math.floor(diffInMillis / (1000 * 60 * 60 * 24 * 365));
  const months = Math.floor((diffInMillis % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
  const days = Math.floor((diffInMillis % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diffInMillis % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diffInMillis % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diffInMillis % (1000 * 60)) / 1000);

  return {
    years,
    months,
    days,
    hours,
    minutes,
    seconds,
  };
};

const StartDay = () => {
  const weddingDate = WEDDING_DATE;

  const [remainingTime, setRemainingTime] = useState(getTimeDifference(new Date(), weddingDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(getTimeDifference(new Date(), weddingDate));
    }, 1000); // 1초마다 갱신

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="time-difference">
      <div>
        <h2>결혼까지 남은 시간</h2>
        <p>{`${remainingTime.years}년 ${remainingTime.months}개월 ${remainingTime.days}일 ${remainingTime.hours}시간 ${remainingTime.minutes}분 ${remainingTime.seconds}초`}</p>
      </div>
    </div>
  );
};

export default StartDay;
