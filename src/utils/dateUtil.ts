export const formatDate = (date: Date): string => {
  const daysOfWeek = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // 월은 0부터 시작하므로 +1
  const day = date.getDate();
  const dayOfWeek = daysOfWeek[date.getDay()];
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const period = hours >= 12 ? "오후" : "오전";

  const formattedHours = hours > 12 ? hours - 12 : hours; // 12시간제로 변환
  const formattedMinutes = minutes.toString().padStart(2, "0"); // 두 자리 수 맞추기

  return `${year}년 ${month}월 ${day}일 ${dayOfWeek} ${period} ${formattedHours}시 ${formattedMinutes}분`;
};
