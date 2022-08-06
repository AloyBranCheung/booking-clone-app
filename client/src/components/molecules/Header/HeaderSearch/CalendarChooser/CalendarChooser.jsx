import React, { useState, useRef, useEffect } from "react";
import styles from "./CalenderChooser.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

export default function CalendarChooser({ className }) {
  // DateRange Logic
  const dateRangeRef = useRef();
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dateRangeRef && !dateRangeRef.current.contains(event.target)) {
        setOpenDate(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dateRangeRef]);

  return (
    <div className={`${styles.headerSearchItem} ${className}`}>
      <FontAwesomeIcon className={styles.headerIcon} icon={faCalendarDays} />
      <span onClick={dateHandler} className={styles.headerSearchText}>
        {`${dates[0].startDate.toDateString()} to ${dates[0].endDate.toDateString()}`}
      </span>
      {openDate && (
        <div className={styles.dateRange} ref={dateRangeRef}>
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setDates([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={dates}
          />
        </div>
      )}
    </div>
  );
}
