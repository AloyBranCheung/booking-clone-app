import React from "react";
import styles from "./HeaderSearch.module.css";
import Button from "../../../atoms/Button";
import DestinationSearch from "./DestinationSearch/DestinationSearch";
import CalendarChooser from "./CalendarChooser/CalendarChooser";
import NumberOfPeople from "./NumberOfPeople/NumberOfPeople";

export default function HeaderSearch() {
  return (
    <div className={styles.headerSearch}>
      <DestinationSearch className={styles.destination} />
      <CalendarChooser className={styles.calendar} />
      <NumberOfPeople className={styles.numPpl} />
      <div className={styles.headerSearchItem}>
        <Button className={styles.headerBtn} text="Search" />
      </div>
    </div>
  );
}
