import styles from "./HotelPrice.module.css";
import React from "react";
import SecondaryBtn from "../../../../atoms/SecondaryBtn";

export default function HotelPrice() {
  return (
    <div className={styles.hotelDetailsPrice}>
      <h1>Perfect for a 9-night stay!</h1>
      <p>
        Located in the real heart of Krakow, this property has an excellent
        location score of 9.8!
      </p>
      <h2>
        <strong>$945</strong>(9 nights)
      </h2>
      <SecondaryBtn text="Reserve or Book Now" className={styles.btn} />
    </div>
  );
}
