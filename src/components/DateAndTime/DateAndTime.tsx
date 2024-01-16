import React from "react";
import "./DateAndTime.css";
const DateAndTime: React.FC = () => {
  const [WeekDays, SetWeekDays] = React.useState<String[]>([
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]);
  const [Month, SetMonth] = React.useState<String[]>([
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]);
  return (
    <div className="DateAndTimeInfo">
      <h3>Athens</h3>

      <div>
        <h2>
          {new Date().getMinutes() < 10
            ? new Date().getHours() + ":" + "0" + new Date().getMinutes()
            : new Date().getHours() + ":" + new Date().getMinutes()}
        </h2>
        <div className="TimeBox">
          <h4>{WeekDays[new Date().getUTCDay() - 1]},</h4>
          <h4>{new Date().toLocaleString("default", { day: "2-digit" })}</h4>
          <h4>
            {Month[+new Date().toLocaleString("default", { month: "numeric" })]}
          </h4>
        </div>
      </div>
    </div>
  );
};
export { DateAndTime };
