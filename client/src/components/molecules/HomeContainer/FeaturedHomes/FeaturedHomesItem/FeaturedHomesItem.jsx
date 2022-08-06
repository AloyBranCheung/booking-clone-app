import styles from "./FeaturedHomesItem.module.css";
import React from "react";

export default function FeaturedHomesItem({
  imgUrl,
  name,
  city,
  price,
  rating,
  comment,
  className,
}) {
  return (
    <div className={className}>
      <img src={imgUrl} alt="" className={styles.featuredHomesImg} />
      <h3 className={styles.fhName}>{name}</h3>
      <h4 className={styles.fhCity}>{city}</h4>
      <h5 className={styles.fhPrice}>{price}</h5>
      <div className={styles.rating}>
        <button className={styles.ratingButton}>{rating}</button>
        <span>{comment}</span>
      </div>
    </div>
  );
}
