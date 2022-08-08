import React from "react";
import styles from "./Featured.module.css";
import FeaturedItem from "./FeaturedItem/FeaturedItem";
import { v4 as uuidv4 } from "uuid";
import useFetch from "../../../../hooks/useFetch";
import CircularProgress from "@mui/material/CircularProgress";

export default function Featured() {
  const { data, loading, error } = useFetch(
    "hotels/countByCity?cities=Rio,Madrid,London"
  );

  const featuredList = data.slice(0, 3).map((data, index) => {
    const imgUrl = `https://picsum.photos/600/300?random=${index}`;
    return (
      <FeaturedItem
        key={uuidv4()}
        id={uuidv4()}
        title={data.city}
        imgUrl={imgUrl}
        description={`${data.count} properties`}
      />
    );
  });
  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : (
        <ul className={styles.featured}>{featuredList}</ul>
      )}
    </>
  );
}
