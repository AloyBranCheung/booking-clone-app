import styles from "./SearchItem.module.css";
import React from "react";
import { Link } from "react-router-dom";

export default function SearchItem({
  imgUrl,
  title,
  distance,
  taxiOp,
  subtitle,
  features,
  cancelOp,
  cancelOpSubtitle,
  className,
  ratingComment,
  ratingNumber,
  price,
  _id,
}) {
  return (
    <div className={`${styles.searchItem} ${className}`}>
      <div className={styles.imgContainer}>
        <img src={imgUrl} alt="placeholder-img" className={styles.siImg} />
      </div>

      <div className={styles.siDesc}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.distance}>{distance}</p>
        <p className={styles.TaxiOp}>{taxiOp}</p>
        <p className={styles.Subtitle}>{subtitle}</p>
        <p className={styles.features}>{features}</p>
        <p className={styles.cancelOp}>{cancelOp}</p>
        <p className={styles.cancelOpSubtitle}>{cancelOpSubtitle}</p>
      </div>
      <div className={styles.details}>
        <div className={styles.rating}>
          <span>{ratingComment}</span>
          <button>{ratingNumber}</button>
        </div>
        <div className={styles.detailsText}>
          <span className={styles.price}>{price}</span>
          <p className={styles.priceDescription}>Includes taxes and fees.</p>
          <Link to={`/hotels/${_id}`}>
            <button className={styles.availableBtn}>See Availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
