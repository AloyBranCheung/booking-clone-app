import styles from "./SearchResults.module.css";
import React from "react";
import SearchItem from "./SearchItem/SearchItem";
import { v4 as uuidv4 } from "uuid";
import CircularProgress from "@mui/material/CircularProgress";
import useFetch from "../../../../hooks/useFetch.jsx";

export default function SearchResults({ data }) {
  const { loading } = useFetch();
  const searchItems = data.map((item) => {
    return (
      <SearchItem
        key={uuidv4()}
        _id={item._id}
        imgUrl={`https://picsum.photos/1920/1080?random=${uuidv4()}`}
        title={item.city}
        distance={item.distance}
        taxiOp="Free airport taxi"
        subtitle="Entire studio · 1 bathroom · 21m square · 1 full bed"
        features={`${item.description.slice(0, 200)} ...`}
        cancelOp="Free cancellation"
        cancelOpSubtitle="You can cancel later, so lock in this great price today!"
        ratingComment="Excellent"
        ratingNumber={item.rating.toFixed(1)}
        price={`$ ${item.cheapestPrice}`}
        className={styles.searchItem}
      />
    );
  });

  return (
    <div className={styles.container}>
      {loading ? <CircularProgress /> : <> {searchItems}</>}
    </div>
  );
}
