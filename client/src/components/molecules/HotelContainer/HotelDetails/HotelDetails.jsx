import styles from "./HotelDetails.module.css";

import React from "react";
import HotelPrice from "./HotelPrice/HotelPrice";

export default function HotelDetails() {
  return (
    <div className={styles.hotelDetails}>
      <div className={styles.hotelDetailsTexts}>
        <h1 className={styles.hotelTitle}>Grand Hotel</h1>
        <p className={styles.hotelDesc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <HotelPrice />
    </div>
  );
}
