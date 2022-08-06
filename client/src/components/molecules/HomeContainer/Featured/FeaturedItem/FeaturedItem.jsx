import React from "react";
import styles from "./FeaturedItem.module.css";

export default function FeaturedItem({ imgUrl, title, description }) {
  return (
    <li className={styles.featuredItem}>
      <img
        src={imgUrl}
        alt="hotel-placeholder"
        className={styles.featuredImage}
      />
      <div className={styles.featuredTitles}>
        <h1>{title}</h1>
        <h2>{description}</h2>
      </div>
    </li>
  );
}
