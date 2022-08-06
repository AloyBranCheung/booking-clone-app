import styles from "./PropertyListItem.module.css";
import React from "react";

export default function PropertyListItem({ imgUrl, title, description }) {
  return (
    <div>
      <li className={styles.pListItem}>
        <img src={imgUrl} alt="pList-placeholder" className={styles.pListImg} />
      </li>
      <div className={styles.pListTitle}>
        <h1>{title}</h1>
        <h2>{description}</h2>
      </div>
    </div>
  );
}
