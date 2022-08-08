import styles from "./FeaturesHomes.module.css";
import React from "react";
import FeaturedHomesItem from "./FeaturedHomesItem/FeaturedHomesItem";
import { v4 as uuidv4 } from "uuid";
import useFetch from "../../../../hooks/useFetch";
import CircularProgress from "@mui/material/CircularProgress";

export default function FeaturedHomes() {
  const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");

  const featuredHomesItems = data.map((home) => {
    return (
      <FeaturedHomesItem
        key={uuidv4()}
        className={styles.fhItem}
        imgUrl={`https://picsum.photos/200/300?random=${uuidv4()}`}
        name={home.name}
        city={home.city}
        price={home.cheapestPrice}
        rating={home.rating.toFixed(1)}
        comment="Excellent"
      />
    );
  });
  return (
    <div className={styles.featuredHomes}>
      {loading ? <CircularProgress /> : <> {featuredHomesItems}</>}
    </div>
  );
}
