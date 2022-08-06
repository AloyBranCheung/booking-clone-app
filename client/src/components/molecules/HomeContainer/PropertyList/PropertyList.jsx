import React from "react";
import styles from "./PropertyList.module.css";
import PropertyListItem from "./PropertyListItem/PropertyListItem";

const DUMMY_DATA = [
  {
    imgUrl: "https://picsum.photos/600/300",
    title: "Title 1",
    description: "lorenipsum as;dkfj;as",
  },
  {
    imgUrl: "https://picsum.photos/600/300",
    title: "Title 2",
    description: "lorenipsum as;dkfj;as",
  },
  {
    imgUrl: "https://picsum.photos/600/300",
    title: "Title 3",
    description: "lorenipsum as;dkfj;as",
  },
  {
    imgUrl: "https://picsum.photos/600/300",
    title: "Title 4",
    description: "lorenipsum as;dkfj;as",
  },
  {
    imgUrl: "https://picsum.photos/600/300",
    title: "Title 5",
    description: "lorenipsum as;dkfj;as",
  },
];

export default function PropertyList() {
  const propertyList = DUMMY_DATA.map((property) => {
    return (
      <PropertyListItem
        imgUrl={property.imgUrl}
        title={property.title}
        description={property.description}
      />
    );
  });
  return <div className={styles.pList}>{propertyList}</div>;
}
