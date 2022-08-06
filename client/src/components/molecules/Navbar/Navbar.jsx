import React from "react";
import styles from "./Navbar.module.css";
import Header from "../Header/Header";
import Button from "../../atoms/Button";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <span className={styles.logo}>BookingApp</span>
        <div className={styles.navItems}>
          <Button className={styles.navButton} text="Register" />
          <Button className={styles.navButton} text="Login" />
        </div>
      </div>
    </nav>
  );
}
