import styles from "./SearchSidebar.module.css";
import { useLocation } from "react-router-dom";
import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import SecondaryBtn from "../../../atoms/SecondaryBtn";

export default function SearchSidebar() {
  const { state } = useLocation();
  // string
  const [destination, setDestinaton] = useState(state.destination);
  // obj {adult, children, rooms}
  const [numPeople, setNumPeople] = useState(state.numPeople);

  // obj {endDate, startDate}
  const [dates, setDates] = useState(state.dates);

  // DateRange Logic
  const [dateIsOpen, setDateIsOpen] = useState(false);
  const [dateRange, setDateRange] = useState([
    {
      startDate: dates.startDate,
      endDate: dates.startDate,
      key: "selection",
    },
  ]);

  const handleDateClick = () => {
    setDateIsOpen(!dateIsOpen);
  };
  return (
    <>
      <h1 className={styles.lsTitle}>Search</h1>
      <div className={styles.lsItem}>
        <label htmlFor="destination">
          <strong>Destination</strong>
        </label>
        <input
          name="destination"
          type="text"
          className={styles.destinationInput}
          placeholder={destination}
        />
      </div>
      <div className={styles.lsItem}>
        <label htmlFor="dates">
          <strong>Check-in Date</strong>
        </label>
        <p
          onClick={handleDateClick}
          name="dates"
          className={styles.datesPicked}
        >
          {dates.startDate.toDateString()} to {dates.endDate.toDateString()}
        </p>
        {dateIsOpen && (
          <DateRange
            className={styles.dateRange}
            editableDateInputs={true}
            onChange={(item) => setDateRange([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={dateRange}
          />
        )}
      </div>

      <div className={styles.lsItem}>
        <label htmlFor="">
          <strong>Options</strong>
        </label>
        <div className={styles.optionItems}>
          <div className={styles.lsOptionItem}>
            <p className={styles.lsOptionText}>
              Min price <small>per night</small>
            </p>
            <input type="number" min={0} className={styles.lsOptionInput} />
          </div>

          <div className={styles.lsOptionItem}>
            <p className={styles.lsOptionText}>
              Max price <small>per night</small>
            </p>
            <input type="number" min={0} className={styles.lsOptionInput} />
          </div>

          <div className={styles.lsOptionItem}>
            <p className={styles.lsOptionText}>Adult</p>
            <input
              min={1}
              type="number"
              className={styles.lsOptionInput}
              placeholder={numPeople.adult}
            />
          </div>

          <div className={styles.lsOptionItem}>
            <p className={styles.lsOptionText}>Children</p>
            <input
              min={0}
              type="number"
              className={styles.lsOptionInput}
              placeholder={numPeople.children}
            />
          </div>

          <div className={styles.lsOptionItem}>
            <p className={styles.lsOptionText}>Rooms</p>
            <input
              min={1}
              type="number"
              className={styles.lsOptionInput}
              placeholder={numPeople.room}
            />
          </div>
        </div>
      </div>
      <SecondaryBtn text="Search" className={styles.searchBtn} />
    </>
  );
}
