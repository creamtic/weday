import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import "./Calendar.css";
import { WEDDING_DATE } from "@/constants/constant";

const getTileClassName = (date: Date, currentDate: Date): string => {
  let className = "calendar-day";

  if (date.getDay() === 0) {
    className += " sunday";
  }
  if (date.getDay() === 6) {
    className += " saturday";
  }

  const isToday = date.toDateString() === new Date().toDateString();
  if (isToday) className += " today";

  const isSelected = date.toDateString() === currentDate.toDateString();
  if (isSelected) className += " selected";

  return className;
};

const Calendar = () => {
  const getMonthName = (date: Date) => format(date, "MMMM", { locale: ko });

  return (
    <div className="relative mx-auto w-full overflow-hidden" style={{ maxWidth: "480px", minWidth: "320px" }}>
      <div style={{ textAlign: "center", marginBottom: "16px" }}>
        <div className="text-rose-400  text-lg" style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.05)" }}>
          {getMonthName(WEDDING_DATE)}
        </div>
      </div>

      <ReactCalendar
        value={WEDDING_DATE}
        showNeighboringMonth={false}
        calendarType="hebrew"
        formatDay={(locale, date) => format(date, "d")}
        tileClassName={({ date }) => getTileClassName(date, WEDDING_DATE)}
        prev2Label={null}
        next2Label={null}
        prevLabel={null}
        nextLabel={null}
        navigationLabel={undefined}
      />
    </div>
  );
};

export default Calendar;
