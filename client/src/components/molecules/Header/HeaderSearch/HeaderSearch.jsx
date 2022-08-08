import React, { useState, useContext } from "react";
import { SearchContext } from "../../../../context/SearchContext";
import styles from "./HeaderSearch.module.css";
import Button from "../../../atoms/Button";
import DestinationSearch from "./DestinationSearch/DestinationSearch";
import CalendarChooser from "./CalendarChooser/CalendarChooser";
import NumberOfPeople from "./NumberOfPeople/NumberOfPeople";
import { useNavigate } from "react-router-dom";

export default function HeaderSearch() {
  // context
  const searchCtx = useContext(SearchContext);
  const [destination, setDestination] = useState("Where are you going?");
  const [dates, setDate] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });
  const [numPeople, setNumPeople] = useState({
    adults: 1,
    children: 0,
    rooms: 1,
  });

  const navigate = useNavigate();

  // Receive destination input value from child component
  const destinationHandler = (destination) => {
    setDestination(destination);
  };

  // Receive date input value from child component
  const calendarHandler = (date) => {
    // date arg returns: date = [{endDate: ..., startDate: ...}]
    const dateObj = { startDate: date.startDate, endDate: date.endDate };
    setDate(dateObj);
  };

  // Receive number of people input value from child component
  const numberOfPeopleHandler = (numPeeps) => {
    setNumPeople(numPeeps);
  };

  // Navigate to /hotels
  const searchHandler = () => {
    searchCtx.dispatch({
      type: "NEW_SEARCH",
      payload: {
        destination,
        dates,
        numPeople,
      },
    });
    navigate("/hotels", { state: { destination, dates, numPeople } });
  };

  return (
    <div className={styles.headerSearch}>
      <DestinationSearch
        destinationValue={destinationHandler}
        className={styles.destination}
      />
      <CalendarChooser
        dateValue={calendarHandler}
        className={styles.calendar}
      />
      <NumberOfPeople
        numPeopleValue={numberOfPeopleHandler}
        className={styles.numPpl}
      />
      <div className={styles.headerSearchItem}>
        <Button
          className={styles.headerBtn}
          onClick={searchHandler}
          text="Search"
        />
      </div>
    </div>
  );
}
