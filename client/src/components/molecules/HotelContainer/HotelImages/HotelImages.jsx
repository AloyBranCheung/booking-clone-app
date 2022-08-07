import styles from "./HotelImages.module.css";
import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import HotelImgSlider from "../HotelImgSlider/HotelImgSlider";

const DUMMY_IMAGES = [
  {
    src: "https://picsum.photos/600/300?random=1",
  },
  {
    src: "https://picsum.photos/600/300?random=2",
  },
  {
    src: "https://picsum.photos/600/300?random=3",
  },
  {
    src: "https://picsum.photos/600/300?random=4",
  },
  {
    src: "https://picsum.photos/600/300?random=5",
  },
  {
    src: "https://picsum.photos/600/300?random=6",
  },
];

export default function HotelImages() {
  const [imgIndex, setImgIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (index) => {
    setImgIndex(index);
    setIsOpen(!isOpen);
  };

  const sliderClick = (arg) => {
    setIsOpen(arg);
  };

  const pictureList = DUMMY_IMAGES.map((img, index) => {
    return (
      <div key={uuidv4()} className={styles.hotelImgWrapper}>
        <img
          onClick={() => {
            handleOpen(index);
          }}
          src={img.src}
          alt="img-placeholder"
          className={styles.hotelImg}
        />
      </div>
    );
  });
  return (
    <>
      {isOpen && (
        <HotelImgSlider
          onClick={sliderClick}
          chosenImg={imgIndex}
          images={DUMMY_IMAGES}
        />
      )}
      <div className={styles.hotelImages}>{pictureList}</div>
    </>
  );
}
