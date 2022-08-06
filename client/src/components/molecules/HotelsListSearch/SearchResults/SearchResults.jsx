import styles from "./SearchResults.module.css";
import React from "react";
import SearchItem from "./SearchItem/SearchItem";
import { v4 as uuidv4 } from "uuid";

const DUMMY_DATA = [
  {
    imgUrl: "https://picsum.photos/600/300",
    title: "Title of Apartment",
    distance: "500m from center",
    taxiOp: "Free airport taxi",
    subtitle: "Studio apartment with air conditioning",
    features: "Entire studio · 1 bathroom · 21m square · 1 full bed",
    cancelOp: "Free cancellation",
    cancelOpSubtitle:
      "You can cancel later, so lock in this great price today!",
    details: "details",
    ratingComment: "Excellent",
    ratingNumber: "9.1",
    price: "$100",
  },
  {
    imgUrl: "https://picsum.photos/600/300",
    title: "Title of Apartment",
    distance: "500m from center",
    taxiOp: "Free airport taxi",
    subtitle: "Studio apartment with air conditioning",
    features: "Entire studio · 1 bathroom · 21m square · 1 full bed",
    cancelOp: "Free cancellation",
    cancelOpSubtitle:
      "You can cancel later, so lock in this great price today!",
    details: "details",
    ratingComment: "Excellent",
    ratingNumber: "9.1",
    price: "$100",
  },
  {
    imgUrl: "https://picsum.photos/600/300",
    title: "Title of Apartment",
    distance: "500m from center",
    taxiOp: "Free airport taxi",
    subtitle: "Studio apartment with air conditioning",
    features: "Entire studio · 1 bathroom · 21m square · 1 full bed",
    cancelOp: "Free cancellation",
    cancelOpSubtitle:
      "You can cancel later, so lock in this great price today!",
    details: "details",
    ratingComment: "Excellent",
    ratingNumber: "9.1",
    price: "$100",
  },
  {
    imgUrl: "https://picsum.photos/600/300",
    title: "Title of Apartment",
    distance: "500m from center",
    taxiOp: "Free airport taxi",
    subtitle: "Studio apartment with air conditioning",
    features: "Entire studio · 1 bathroom · 21m square · 1 full bed",
    cancelOp: "Free cancellation",
    cancelOpSubtitle:
      "You can cancel later, so lock in this great price today!",
    details: "details",
    ratingComment: "Excellent",
    ratingNumber: "9.1",
    price: "$100",
  },
  {
    imgUrl: "https://picsum.photos/600/300",
    title: "Title of Apartment",
    distance: "500m from center",
    taxiOp: "Free airport taxi",
    subtitle: "Studio apartment with air conditioning",
    features: "Entire studio · 1 bathroom · 21m square · 1 full bed",
    cancelOp: "Free cancellation",
    cancelOpSubtitle:
      "You can cancel later, so lock in this great price today!",
    details: "details",
    ratingComment: "Excellent",
    ratingNumber: "9.1",
    price: "$100",
  },
  {
    imgUrl: "https://picsum.photos/600/300",
    title: "Title of Apartment",
    distance: "500m from center",
    taxiOp: "Free airport taxi",
    subtitle: "Studio apartment with air conditioning",
    features: "Entire studio · 1 bathroom · 21m square · 1 full bed",
    cancelOp: "Free cancellation",
    cancelOpSubtitle:
      "You can cancel later, so lock in this great price today!",
    details: "details",
    ratingComment: "Excellent",
    ratingNumber: "9.1",
    price: "$100",
  },
  {
    imgUrl: "https://picsum.photos/600/300",
    title: "Title of Apartment",
    distance: "500m from center",
    taxiOp: "Free airport taxi",
    subtitle: "Studio apartment with air conditioning",
    features: "Entire studio · 1 bathroom · 21m square · 1 full bed",
    cancelOp: "Free cancellation",
    cancelOpSubtitle:
      "You can cancel later, so lock in this great price today!",
    details: "details",
    ratingComment: "Excellent",
    ratingNumber: "9.1",
    price: "$100",
  },
  {
    imgUrl: "https://picsum.photos/600/300",
    title: "Title of Apartment",
    distance: "500m from center",
    taxiOp: "Free airport taxi",
    subtitle: "Studio apartment with air conditioning",
    features: "Entire studio · 1 bathroom · 21m square · 1 full bed",
    cancelOp: "Free cancellation",
    cancelOpSubtitle:
      "You can cancel later, so lock in this great price today!",
    details: "details",
    ratingComment: "Excellent",
    ratingNumber: "9.1",
    price: "$100",
  },
  {
    imgUrl: "https://picsum.photos/600/300",
    title: "Title of Apartment",
    distance: "500m from center",
    taxiOp: "Free airport taxi",
    subtitle: "Studio apartment with air conditioning",
    features: "Entire studio · 1 bathroom · 21m square · 1 full bed",
    cancelOp: "Free cancellation",
    cancelOpSubtitle:
      "You can cancel later, so lock in this great price today!",
    details: "details",
    ratingComment: "Excellent",
    ratingNumber: "9.1",
    price: "$100",
  },
];

export default function SearchResults() {
  const searchItems = DUMMY_DATA.map((item) => {
    return (
      <SearchItem
        key={uuidv4()}
        imgUrl={item.imgUrl}
        title={item.title}
        distance={item.distance}
        taxiOp={item.taxiOp}
        subtitle={item.subtitle}
        features={item.features}
        cancelOp={item.cancelOp}
        cancelOpSubtitle={item.cancelOpSubtitle}
        ratingComment={item.ratingComment}
        ratingNumber={item.ratingNumber}
        price={item.price}
        className={styles.searchItem}
      />
    );
  });

  return <div>{searchItems}</div>;
}
