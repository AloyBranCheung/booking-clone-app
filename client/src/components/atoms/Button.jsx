import React from "react";
import styles from "./Button.module.css";

export default function Button({ text, className, onClick }) {
  return (
    <button onClick={onClick} className={`${styles.button} ${className}`}>
      {text}
    </button>
  );
}
