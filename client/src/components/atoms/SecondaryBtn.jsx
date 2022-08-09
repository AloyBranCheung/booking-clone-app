import styles from "./SecondaryBtn.module.css";
import React from "react";

export default function SecondaryBtn({
  text,
  className,
  onClick,
  disabled,
  type,
}) {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={`${styles.btn} ${className}`}
    >
      {text}
    </button>
  );
}
