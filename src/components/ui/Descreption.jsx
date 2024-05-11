import React, { useEffect } from "react";
import "../../styles/ui/descreption.css";
import { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

function Descreption({ desc, date }) {
  const editDesc = (des = "") => {
    const edit = des.split("jpg");
    return edit;
  };

  const editDate = (interDate) => {
    const myDate = new DateObject({
      date: new Date(interDate),
      format: "YYYY/MM/DD HH:mm:ss",
      calendar: persian,
      locale: persian_fa,
    });
    return myDate.format("DD MMMM سال YYYY, ساعت HH و mm دقیقه");
  };

  useEffect(() => {}, []);

  return (
    <div className={`descreption`}>
      <p>{editDesc(desc)[1]}</p>
      <p>{editDate(date)}</p>
    </div>
  );
}

export default Descreption;
