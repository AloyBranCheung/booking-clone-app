import styles from "./SecondaryBtn.module.css";
import React from "react";

export default function SecondaryBtn({ text, className, onClick }) {
  return (
    <button onClick={onClick} className={`${styles.btn} ${className}`}>
      {text}
    </button>
  );
}
