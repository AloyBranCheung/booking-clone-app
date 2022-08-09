import styles from "./Completed.module.css";
import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import Header from "../../components/molecules/Header/Header";
import Footer from "../../components/molecules/Footer/Footer";
import MailList from "../../components/molecules/MailList/MailList";
import SecondaryBtn from "../../components/atoms/SecondaryBtn";
import { AuthContext } from "../../context/AuthContext";

export default function Completed() {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  const clickHome = () => {
    navigate("/");
  };
  return (
    <div>
      <Header type="list" />
      <div className={styles.completedContainer}>
        <h1>Your booking has been completed.</h1>
        <div className={styles.btnContainer}>
          <SecondaryBtn text="Back home" onClick={clickHome} />
          <SecondaryBtn text="Logout" onClick={handleLogout} />
        </div>
      </div>
      <MailList />
      <Footer />
    </div>
  );
}
