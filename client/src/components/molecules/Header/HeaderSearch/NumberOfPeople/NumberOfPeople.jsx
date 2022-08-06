import React, { useEffect, useState } from "react";
import styles from "./NumberOfPeople.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson } from "@fortawesome/free-solid-svg-icons";

export default function NumberOfPeople({ className, numPeopleValue }) {
  // Number of People Options Logic
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prevState) => {
      return {
        ...prevState,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  useEffect(() => {
    numPeopleValue(options);
  }, [numPeopleValue, options]);

  return (
    <div className={`${styles.headerSearchItem} ${className}`}>
      <FontAwesomeIcon icon={faPerson} className={styles.headerIcon} />
      <span
        onClick={() => setOpenOptions(!openOptions)}
        className={styles.headerSearchText}
      >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
      {openOptions && (
        <div className={styles.options}>
          <div className={styles.optionItem}>
            <span className={styles.optionText}>Adult</span>
            <div className={styles.optionCounter}>
              <button
                onClick={() => {
                  handleOption("adult", "d");
                }}
                disabled={options.adult <= 1}
                className={styles.optionCounterButton}
              >
                -
              </button>
              <span className={styles.optionCounterText}>{options.adult}</span>
              <button
                onClick={() => {
                  handleOption("adult", "i");
                }}
                className={styles.optionCounterButton}
              >
                +
              </button>
            </div>
          </div>
          <div className={styles.optionItem}>
            <span className={styles.optionText}>Children</span>
            <div className={styles.optionCounter}>
              <button
                onClick={() => {
                  handleOption("children", "d");
                }}
                disabled={options.children <= 0}
                className={styles.optionCounterButton}
              >
                -
              </button>
              <span className={styles.optionCounterText}>
                {options.children}
              </span>
              <button
                onClick={() => {
                  handleOption("children", "i");
                }}
                className={styles.optionCounterButton}
              >
                +
              </button>
            </div>
          </div>
          <div className={styles.optionItem}>
            <span className={styles.optionText}>Room</span>
            <div className={styles.optionCounter}>
              <button
                onClick={() => {
                  handleOption("room", "d");
                }}
                disabled={options.room <= 1}
                className={styles.optionCounterButton}
              >
                -
              </button>
              <span className={styles.optionCounterText}>{options.room}</span>
              <button
                onClick={() => {
                  handleOption("room", "i");
                }}
                className={styles.optionCounterButton}
              >
                +
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
