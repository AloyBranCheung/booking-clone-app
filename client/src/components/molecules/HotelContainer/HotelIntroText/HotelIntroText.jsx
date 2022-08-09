import styles from "./HotelIntroText.module.css";
import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import SecondaryBtn from "../../../atoms/SecondaryBtn";
import { AuthContext } from "../../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import ReserveModal from "./ReserveModal/ReserveModal";

export default function HotelIntroText({ data }) {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [openBooking, setOpenBooking] = useState(false);

  const handleLogin = () => {
    if (user) {
      setOpenBooking(true);
    } else {
      navigate("/login");
    }
  };

  const toggleModal = () => {
    setOpenBooking((prev) => !prev);
  };
  return (
    <>
      {openBooking && <ReserveModal openModal={toggleModal} />}
      <h1 className={styles.hotelTitle}>
        {data.name}
        <SecondaryBtn
          onClick={handleLogin}
          text="Reserve/Book now!"
          className={styles.btn}
        />
      </h1>
      <div className={styles.hotelAddressContainer}>
        <FontAwesomeIcon icon={faLocationDot} />
        <p>{data.address}</p>
      </div>
      <div className={styles.hotelDistance}>
        <p>Excellent location - {data.distance}</p>
      </div>
      <div className={styles.hotelPriceHighlight}>
        <p>
          {`Book a stay over $${data.cheapestPrice} at this property and get a free airport taxi`}
        </p>
      </div>
    </>
  );
}
