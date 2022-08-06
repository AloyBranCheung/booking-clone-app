import React from "react";
import styles from "./HeaderList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faPlane,
  faCar,
  faPersonHiking,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";

export default function HeaderList() {
  return (
    <ul className={styles.headerList}>
      <li className={`${styles.headerListItem} ${styles.headerListItemActive}`}>
        <FontAwesomeIcon icon={faBed} />
        <p>Stays</p>
      </li>
      <li className={styles.headerListItem}>
        <FontAwesomeIcon icon={faPlane} />
        <p>Flights</p>
      </li>
      <li className={styles.headerListItem}>
        <FontAwesomeIcon icon={faCar} />
        <p>Car Rentals</p>
      </li>
      <li className={styles.headerListItem}>
        <FontAwesomeIcon icon={faPersonHiking} />
        <p>Attractions</p>
      </li>
      <li className={styles.headerListItem}>
        <FontAwesomeIcon icon={faTaxi} />
        <p>Airport Taxis</p>
      </li>
    </ul>
  );
}
