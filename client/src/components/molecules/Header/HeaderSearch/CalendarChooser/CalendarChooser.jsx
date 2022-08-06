import React, { useState } from "react";
import styles from "./CalenderChooser.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

export default function CalendarChooser({ className, dateValue }) {
  // DateRange Logic
  const [openDate, setOpenDate] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const dateHandler = () => {
    setOpenDate((prevState) => !prevState);
  };

  return (
    <div className={`${styles.headerSearchItem} ${className}`}>
      <FontAwesomeIcon className={styles.headerIcon} icon={faCalendarDays} />
      <span onClick={dateHandler} className={styles.headerSearchText}>
        {`${dates[0].startDate.toDateString()} to ${dates[0].endDate.toDateString()}`}
      </span>
      {openDate && (
        <div className={styles.dateRange}>
          <DateRange
            editableDateInputs={true}
            onChange={(item) => {
              setDates([item.selection]);
              dateValue(item.selection);
            }}
            moveRangeOnFirstSelection={false}
            ranges={dates}
          />
        </div>
      )}
    </div>
  );
}
