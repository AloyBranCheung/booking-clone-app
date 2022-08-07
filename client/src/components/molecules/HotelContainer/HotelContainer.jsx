import styles from "./HotelContainer.module.css";
import React from "react";
import HotelIntroText from "./HotelIntroText/HotelIntroText";
import HotelImages from "./HotelImages/HotelImages";
import HotelDetails from "./HotelDetails/HotelDetails";

export default function HotelContainer() {
  return (
    <div className={styles.hotelContainer}>
      <div className={styles.hotelWrapper}>
        <HotelIntroText />
        <HotelImages />
        <HotelDetails />
      </div>
    </div>
  );
}
