import styles from "./HotelDetails.module.css";
import CircularProgress from "@mui/material/CircularProgress";
import React from "react";
import HotelPrice from "./HotelPrice/HotelPrice";

export default function HotelDetails({ data, loading }) {
  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : (
        <div className={styles.hotelDetails}>
          <div className={styles.hotelDetailsTexts}>
            <h1 className={styles.hotelTitle}>Grand Hotel</h1>
            <p className={styles.hotelDesc}>{data.description}</p>
          </div>
          <HotelPrice loading={loading} data={data} />
        </div>
      )}
    </>
  );
}
