import React from "react";
import Header from "../../components/molecules/Header/Header";
import styles from "./Homepage.module.css";
import HomeContainer from "../../components/molecules/HomeContainer/HomeContainer";

export default function Homepage() {
  return (
    <div className={styles.homepageContainer}>
      <Header type="home" />
      <HomeContainer />
    </div>
  );
}
