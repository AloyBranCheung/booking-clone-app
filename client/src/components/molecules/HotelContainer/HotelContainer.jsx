import styles from "./HotelContainer.module.css";
import React from "react";
import HotelIntroText from "./HotelIntroText/HotelIntroText";
import HotelImages from "./HotelImages/HotelImages";
import HotelDetails from "./HotelDetails/HotelDetails";
import { useLocation } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import CircularProgress from "@mui/material/CircularProgress";

export default function HotelContainer() {
  const location = useLocation();
  const { data, loading, error } = useFetch(
    `/hotels/find/${location.pathname.split("/")[2]}`
  );

  return (
    <div className={styles.hotelContainer}>
      {loading ? (
        <CircularProgress />
      ) : (
        <div className={styles.hotelWrapper}>
          <HotelIntroText data={data} />
          <HotelImages data={data} />
          <HotelDetails loading={loading} data={data} />
        </div>
      )}
    </div>
  );
}
