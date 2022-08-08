import styles from "./HotelImages.module.css";
import { v4 as uuidv4 } from "uuid";
import React, { useState, useEffect } from "react";
import HotelImgSlider from "../HotelImgSlider/HotelImgSlider";

export default function HotelImages({ data }) {
  const [imgIndex, setImgIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [photosArr, setPhotosArr] = useState([]);

  useEffect(() => {
    setPhotosArr(data.photos);
  }, [data.photos]);

  const handleOpen = (index) => {
    setImgIndex(index);
    setIsOpen(!isOpen);
  };

  const sliderClick = (arg) => {
    setIsOpen(arg);
  };

  const pictureList = photosArr?.map((img, index) => {
    return (
      <div key={uuidv4()} className={styles.hotelImgWrapper}>
        <img
          onClick={() => {
            handleOpen(index);
          }}
          src={img}
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
          images={photosArr}
        />
      )}
      <div className={styles.hotelImages}>{pictureList}</div>
    </>
  );
}
