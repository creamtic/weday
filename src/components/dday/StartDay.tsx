import { START_DATE } from "@/constants/constant";
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
  const startDate = START_DATE;

  const [elapsedTime, setElapsedTime] = useState(getTimeDifference(startDate, new Date()));

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime(getTimeDifference(startDate, new Date()));
    }, 1000); // 1초마다 갱신

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 정리
  }, []);

  return (
    <div className="time-difference">
      <div>
        <h2>함께한 시간</h2>
        <p>{`${elapsedTime.years}년 ${elapsedTime.months}개월 ${elapsedTime.days}일 ${elapsedTime.hours}시간 ${elapsedTime.minutes}분 ${elapsedTime.seconds}초`}</p>
      </div>
    </div>
  );
};

export default StartDay;
