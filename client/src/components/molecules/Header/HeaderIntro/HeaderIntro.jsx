import React from "react";
import styles from "./HeaderIntro.module.css";
import Button from "../../../atoms/Button";

export default function HeaderIntro() {
  return (
    <>
      <h1 className={styles.headerTitle}>
        A lifetime of discounts? It's Genius.
      </h1>
      <p className={styles.headerDesc}>
        Get rewarded for your travels - unlock instant savings of 10% ore more
        with a free BookingApp account.
      </p>
      <Button className={styles.headerBtn} text="Sign In / Register" />
    </>
  );
}
