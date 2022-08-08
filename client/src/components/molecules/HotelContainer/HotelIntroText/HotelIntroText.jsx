import styles from "./HotelIntroText.module.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import SecondaryBtn from "../../../atoms/SecondaryBtn";

export default function HotelIntroText({ data }) {
  return (
    <>
      <h1 className={styles.hotelTitle}>
        {data.name}
        <SecondaryBtn text="Reserve/Book now!" className={styles.btn} />
      </h1>
      <div className={styles.hotelAddressContainer}>
        <FontAwesomeIcon icon={faLocationDot} />
        <p>{data.address}</p>
      </div>
      <div className={styles.hotelDistance}>
        <p>Excellent location - {data.distance}</p>
      </div>
      <div className={styles.hotelPriceHighlight}>
        <p>
          {`Book a stay over $${data.cheapestPrice} at this property and get a free airport taxi`}
        </p>
      </div>
    </>
  );
}
