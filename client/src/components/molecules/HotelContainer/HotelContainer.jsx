import styles from "./HotelContainer.module.css";
import React from "react";

export default function HotelContainer() {
  return (
    <div className={styles.hotelContainer}>
      <div className={styles.hotelWrapper}>
        <h1 className={styles.hotelTitle}>Grand Hotel</h1>
        <div className={styles.hotelAddressContainer}>
          <p>icon placeholder</p>
          <p>address placeholder</p>
        </div>
      </div>
    </div>
  );
}
