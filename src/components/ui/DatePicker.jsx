import React, { useEffect, useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import opacity from "react-element-popper/animations/opacity";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import { useDispatch, useSelector } from "react-redux";
import { ReportForDateRange } from "../../apis/Reports/ReportForDateRange";
import "../../styles/ui/datePicker.css";
import "react-multi-date-picker/styles/layouts/mobile.css";
import { setRangeDate } from "../../redux/slice/reportsSlice";

const makeFormateToObject = (date) => [
  new DateObject(new Date(date[0])),
  new DateObject(new Date(date[1])),
];
const makeDateFormate = (date) => {
  const mydata = new Date(new DateObject(date).convert().toUnix() * 1000);
  return `${mydata.getMonth() + 1}/${mydata.getDate()}/${mydata.getFullYear()}`;
};

function MyDatePicker({
  pickerDate = [
    makeDateFormate(new DateObject({ calendar: persian }).subtract(1, "months")),
    makeDateFormate(new DateObject({ calendar: persian })),
  ],
  defaultDate = [],
}) {

  const dispatch = useDispatch();
  const [values, setValues] = useState(defaultDate.length === 0 ? pickerDate : defaultDate);

  useEffect(() => {
    if(typeof values[0] === 'object'){
      const helper = [makeDateFormate(values[0]),makeDateFormate(values[1])]
      dispatch(setRangeDate(helper));
    }else{
      dispatch(setRangeDate(values));
    }

  }, [values]);

  return (
    <DatePicker
      hideOnScroll
      className="rmdp-mobile"
      containerClassName="myInput"
      mapDays={({ date }) => {
        let props = {};
        let isWeekend = date.weekDay.index === 6;

        if (isWeekend) props.className = "highlight highlight-red";

        return props;
      }}
      animations={[opacity({ from: 0, to: 1, duration: 1000 })]}
      render={<CustomRangeInput />}
      value={makeFormateToObject(values)}
      onChange={setValues}
      dateSeparator="  تا  "
      range
      plugins={[<DatePanel position="right" />]}
      maxDate={new DateObject({ calendar: persian }).add(0, "days")}
      numberOfMonths={1}
      calendar={persian}
      locale={persian_fa}
    ></DatePicker>
  );
}

function CustomRangeInput({ onFocus, value, separator }) {
  var values;

  typeof value !== "object"
    ? (values = value.split(separator))
    : (values = value.toString().split(separator));

  let from = values[0] || "";
  let to = values[1] || "";

  value = from && to ? "از " + from + " تا " + to : from;

  return <input onFocus={onFocus} value={value} readOnly />;
}

export default MyDatePicker;
