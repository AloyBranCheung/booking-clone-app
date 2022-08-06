import React from "react";
import Featured from "./Featured/Featured";
import styles from "./HomeContainer.module.css";
import PropertyList from "./PropertyList/PropertyList";
import FeaturedHomes from "./FeaturedHomes/FeaturedHomes";

export default function HomeContainer() {
  return (
    <div className={styles.homeContainer}>
      <Featured />
      <div className={styles.homeTitleContainer}>
        <h1 className={styles.homeTitle}>Browse by property type</h1>
      </div>
      <PropertyList />
      <div className={styles.homeTitleContainer}>
        <h1 className={styles.homeTitle}>Homes guests love</h1>
      </div>
      <FeaturedHomes />
    </div>
  );
}
