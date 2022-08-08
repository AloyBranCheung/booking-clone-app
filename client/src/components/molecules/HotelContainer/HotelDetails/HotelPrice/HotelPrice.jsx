import styles from "./HotelPrice.module.css";
import React, { useEffect, useState, useContext } from "react";
import SecondaryBtn from "../../../../atoms/SecondaryBtn";
import CircularProgress from "@mui/material/CircularProgress";
import { SearchContext } from "../../../../../context/SearchContext";

export default function HotelPrice({ data, loading }) {
  const [roomCount, setRoomCount] = useState(1);
  const [cheapestPrice, setCheapestPrice] = useState(0);
  const [bro, setBro] = useState(0);
  useEffect(() => {
    setRoomCount(data.rooms);
    setCheapestPrice(data.cheapestPrice);
    setBro(data.rating);
  }, [data, setBro]);

  const [calculatedDateDiff, setCalculatedDateDiff] = useState(0);
  const { dates } = useContext(SearchContext);
  const dateDiff = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diff = (end - start) / 86400000;
    return diff;
  };

  useEffect(() => {
    const diff = dateDiff(dates.startDate, dates.endDate);
    setCalculatedDateDiff(diff);
  }, [dates.startDate, dates.endDate]);

  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : (
        <div className={styles.hotelDetailsPrice}>
          <h1>{`Perfect for a ${calculatedDateDiff}-night stay!`}</h1>
          <p>
            {`  Located in the real heart of ${
              data.city
            }, this property has an excellent
      location score of ${bro.toFixed(1)}!`}
          </p>
          <h2>
            <strong>{`$${cheapestPrice}`}</strong> (per night)
          </h2>
          <p>{`That's $${
            calculatedDateDiff * cheapestPrice * roomCount.length
          } total for ${roomCount.length} rooms`}</p>
          <SecondaryBtn text="Reserve or Book Now" className={styles.btn} />
        </div>
      )}
    </>
  );
}
