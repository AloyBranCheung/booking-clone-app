import styles from "./HotelIntroText.module.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import SecondaryBtn from "../../../atoms/SecondaryBtn";

export default function HotelIntroText() {
  return (
    <>
      <h1 className={styles.hotelTitle}>
        Grand Hotel
        <SecondaryBtn text="Reserve/Book now!" className={styles.btn} />
      </h1>
      <div className={styles.hotelAddressContainer}>
        <FontAwesomeIcon icon={faLocationDot} />
        <p>This is an address placeholder</p>
      </div>
      <div className={styles.hotelDistance}>
        <p>Excellent location - 500m from center</p>
      </div>
      <div className={styles.hotelPriceHighlight}>
        <p>
          Book a stay over $114 at this property and get a free airport taxi
        </p>
      </div>
    </>
  );
}
