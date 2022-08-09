import React, { useContext } from "react";
import styles from "./Navbar.module.css";
import Button from "../../atoms/Button";
import { AuthContext } from "../../../context/AuthContext";

export default function Navbar() {
  const { user, dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <a href="/" className={styles.logo}>
          BookingAppClone
        </a>
        {user ? (
          <Button
            classname={styles.logout}
            text="Logout"
            onClick={handleLogout}
          />
        ) : (
          <div className={styles.navItems}>
            <Button className={styles.navButton} text="Register" />
            <Button className={styles.navButton} text="Login" />
          </div>
        )}
      </div>
    </nav>
  );
}
