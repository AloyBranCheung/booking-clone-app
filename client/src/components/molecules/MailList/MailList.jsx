import styles from "./MailList.module.css";
import React from "react";
import SecondaryBtn from "../../atoms/SecondaryBtn";

export default function MailList() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Save time, save money!</h1>
      <p className={styles.description}>
        Sign up and we'll send the best deals to you.
      </p>
      <div className={styles.inputContainer}>
        <input className={styles.input} type="text" placeholder="Your email" />
        <SecondaryBtn text="Subscribe" className={styles.inputBtn} />
      </div>
    </div>
  );
}
