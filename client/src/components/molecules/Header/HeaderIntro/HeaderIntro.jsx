import React, { useContext } from "react";
import styles from "./HeaderIntro.module.css";
import Button from "../../../atoms/Button";
import { AuthContext } from "../../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function HeaderIntro() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <h1 className={styles.headerTitle}>
        A lifetime of discounts? It's Genius.
      </h1>
      <p className={styles.headerDesc}>
        Get rewarded for your travels - unlock instant savings of 10% ore more
        with a free BookingApp account.
      </p>
      {!user && (
        <Button
          onClick={handleLogin}
          className={styles.headerBtn}
          text="Sign In / Register"
        />
      )}
    </>
  );
}
