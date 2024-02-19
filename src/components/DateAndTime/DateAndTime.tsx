import React from "react";
import "./DateAndTime.css";
import { UseAppSelector } from "../../hooks/typedhooks";

const WeekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const Month = [
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
];

const DateAndTime: React.FC = () => {
  const State = UseAppSelector((State) => State.Weather);
  const [Data, SetDate] = React.useState<string | number>();
  React.useEffect(() => {
    const timer = setInterval(
      () =>
        SetDate(
          new Date().getHours() > 10
            ? new Date().getHours() +
                ":" +
                (new Date().getUTCMinutes() > 10
                  ? new Date().getUTCMinutes()
                  : "0" + new Date().getUTCMinutes())
            : "0" +
                new Date().getHours() +
                ":" +
                (new Date().getUTCMinutes() >= 10
                  ? new Date().getUTCMinutes()
                  : "0" + new Date().getUTCMinutes())
        ),
      1000
    );
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="DateAndTimeInfo">
      <h3>{State?.City ? State.City : "Athens"}</h3>
      <div>
        <h2>{Data}</h2>
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
