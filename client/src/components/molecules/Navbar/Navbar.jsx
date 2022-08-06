import React from "react";
import styles from "./Navbar.module.css";
import Button from "../../atoms/Button";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <a href="/" className={styles.logo}>
          BookingAppClone
        </a>
        <div className={styles.navItems}>
          <Button className={styles.navButton} text="Register" />
          <Button className={styles.navButton} text="Login" />
        </div>
      </div>
    </nav>
  );
}
