import React from "react";
import styles from "./Featured.module.css";
import FeaturedItem from "./FeaturedItem/FeaturedItem";
import { v4 as uuidv4 } from "uuid";

const DUMMY_DATA = [
  {
    imgUrl: "https://picsum.photos/600/300",
    title: "Title 1",
    description: "lorenipsum description",
  },
  {
    imgUrl: "https://picsum.photos/600/300",
    title: "Title 2",
    description: "lorenipsum description",
  },
  {
    imgUrl: "https://picsum.photos/600/300",
    title: "Title 3",
    description: "lorenipsum description",
  },
];

export default function Featured() {
  const featuredList = DUMMY_DATA.map((feature) => {
    return (
      <FeaturedItem
        key={uuidv4()}
        id={uuidv4()}
        title={feature.title}
        imgUrl={feature.imgUrl}
        description={feature.description}
      />
    );
  });
  return <ul className={styles.featured}>{featuredList}</ul>;
}
