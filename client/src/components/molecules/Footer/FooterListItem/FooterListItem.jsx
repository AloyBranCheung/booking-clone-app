import styles from "./FooterListItem.module.css";
import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function FooterListItem({ listText }) {
  const listItems = listText.map((listItem) => {
    return (
      <li key={uuidv4()} className={styles.listItem}>
        {listItem}
      </li>
    );
  });
  return <ul className={styles.list}>{listItems}</ul>;
}
