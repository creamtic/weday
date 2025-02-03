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

  const [elapsedTime, setElapsedTime] = useState<{
    years: number;
    months: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  useEffect(() => {
    const updateElapsedTime = () => {
      setElapsedTime(getTimeDifference(startDate, new Date()));
    };

    updateElapsedTime();

    const interval = setInterval(() => {
      updateElapsedTime();
    }, 1000);

    return () => clearInterval(interval);
  }, [startDate]);

  if (!elapsedTime) {
    return <div>Loading...</div>;
  }

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
