import styles from "./ReserveModal.module.css";
import React, { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import useFetch from "../../../../../hooks/useFetch";
import CircularProgress from "@mui/material/CircularProgress";
import { v4 as uuidv4 } from "uuid";
import SecondaryBtn from "../../../../atoms/SecondaryBtn";
import { SearchContext } from "../../../../../context/SearchContext";

export default function ReserveModal({ className, openModal }) {
  const location = useLocation();
  const hotelId = location.pathname.split("/")[2];
  const { data, loading, error, reFetch } = useFetch(`/hotels/room/${hotelId}`);
  const [selectedRooms, setSelectedRooms] = useState([]);
  const { dates } = useContext(SearchContext); // access context to update unavailable dates

  // gets all the dates between start/end range
  const getDatesInRange = (startDate, endDate) => {
    let start = new Date(startDate);
    let end = new Date(endDate);
    let loopDate = new Date(start);
    const listDates = [];

    while (loopDate <= end) {
      listDates.push(new Date(loopDate).getTime());
      loopDate.setDate(loopDate.getDate() + 1);
    }

    return listDates;
  };
  const allDates = getDatesInRange(dates.startDate, dates.endDate);
  // check if rooms selected are available with selected dates
  const roomIsAvailable = (roomNumber) => {
    if (roomNumber.length === 0 || roomNumber.length === undefined) {
      console.log(false);
      return false;
    }
    // sees if unavailable dates matches ith date range
    // found matching date == true > disabled = true
    const isFound = roomNumber.some((date) => {
      allDates.includes(new Date(date).getTime());
    });

    return isFound;
  };

  // add/remove room _ids fstrom selectedRooms array
  const handleChange = (e) => {
    const isChecked = e.target.checked;
    const value = e.target.value;

    if (isChecked) {
      setSelectedRooms((prev) => [...prev, value]);
    } else {
      setSelectedRooms((prev) => prev.filter((item) => item !== value));
    }
  };

  // reserve now button > updates DB with unavailable dates
  const handleReserve = () => {};

  const roomsList = data.map((item) => {
    return (
      <div key={uuidv4()} className={styles.item}>
        <div className={styles.itemInfo}>
          <p className={styles.title}>{item.title}</p>
          <p className={styles.description}>{item.description}</p>
          <p
            className={styles.maxPeople}
          >{`Maximum ${item.maxPeople} people`}</p>
          <p className={styles.price}>{item.price}</p>
        </div>

        <div className={styles.roomNumbers}>
          {item.roomNumbers.map((roomNumber) => {
            return (
              <div key={uuidv4()} className={styles.rooms}>
                <label htmlFor="roomNumber">{roomNumber.number}</label>
                <input
                  disabled={roomIsAvailable(roomNumber.unavailableDates)}
                  onChange={handleChange}
                  name="roomNumber"
                  id="roomNumber"
                  type="checkbox"
                  value={roomNumber._id}
                  checked={selectedRooms.includes(roomNumber._id)}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  });

  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : (
        <div className={`${styles.container} ${className}`}>
          <div className={styles.wrapper}>
            <FontAwesomeIcon
              icon={faCircleXmark}
              className={styles.close}
              onClick={openModal}
            />
            <h1>Select your rooms:</h1>
            {roomsList}
            <SecondaryBtn
              onClick={handleReserve}
              text="Reserve Now!"
              className={styles.reserveBtn}
            />
          </div>
        </div>
      )}
    </>
  );
}
