import React, { useContext, useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import Button from "../../atoms/Button";
import { AuthContext } from "../../../context/AuthContext";

export default function Navbar() {
  const { user, dispatch } = useContext(AuthContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [user]);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <a href="/" className={styles.logo}>
          BookingAppClone
        </a>
        {isLoggedIn ? (
          <Button
            classname={styles.logout}
            text="Logout"
            onClick={handleLogout}
          />
        ) : (
          <div className={styles.navItems}>
            <Button className={styles.navButton} text="Register" />
            <a href="/login">
              <Button className={styles.navButton} text="Login" />
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
