import styles from "./FeaturesHomes.module.css";
import React from "react";
import FeaturedHomesItem from "./FeaturedHomesItem/FeaturedHomesItem";
import { v4 as uuidv4 } from "uuid";

const DUMMY_DATA = [
  {
    imgUrl: "https://picsum.photos/600/300",
    name: "Name of Place",
    city: "Name of City",
    price: "Price of Stay",
    rating: "8.9",
    comment: "Excellent",
  },
  {
    imgUrl: "https://picsum.photos/600/300",
    name: "Name of Place",
    city: "Name of City",
    price: "Price of Stay",
    rating: "8.9",
    comment: "Excellent",
  },
  {
    imgUrl: "https://picsum.photos/600/300",
    name: "Name of Place",
    city: "Name of City",
    price: "Price of Stay",
    rating: "8.9",
    comment: "Excellent",
  },
  {
    imgUrl: "https://picsum.photos/600/300",
    name: "Name of Place",
    city: "Name of City",
    price: "Price of Stay",
    rating: "8.9",
    comment: "Excellent",
  },
];
export default function FeaturedHomes() {
  const featuredHomesItems = DUMMY_DATA.map((home) => {
    return (
      <FeaturedHomesItem
        key={uuidv4()}
        className={styles.fhItem}
        imgUrl={home.imgUrl}
        name={home.name}
        city={home.city}
        price={home.price}
        rating={home.rating}
        comment={home.comment}
      />
    );
  });
  return <div className={styles.featuredHomes}>{featuredHomesItems}</div>;
}
