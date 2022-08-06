import styles from "./SecondaryBtn.module.css";
import React from "react";

export default function SecondaryBtn({ text, className }) {
  return <button className={`${styles.btn} ${className}`}>{text}</button>;
}
