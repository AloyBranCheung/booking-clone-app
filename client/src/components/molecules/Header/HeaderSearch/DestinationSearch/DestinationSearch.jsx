import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./DestinationSearch.module.css";
import { faBed } from "@fortawesome/free-solid-svg-icons";

export default function DestinationSearch({ className, destinationValue }) {
  const destinationHandler = (e) => {
    const destination = e.target.value;
    destinationValue(destination);
  };

  return (
    <div className={`${styles.headerSearchItem} ${className}`}>
      <FontAwesomeIcon className={styles.headerIcon} icon={faBed} />
      <input
        type="text"
        placeholder="Where are you going?"
        className={styles.headerSearchInput}
        onChange={destinationHandler}
      />
    </div>
  );
}
