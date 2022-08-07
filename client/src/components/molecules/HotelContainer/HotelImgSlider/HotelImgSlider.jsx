import styles from "./HotelImgSlider.module.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faXmarkCircle,
} from "@fortawesome/free-solid-svg-icons";

export default function HotelImgSlider({ images, chosenImg, onClick }) {
  const [selectedImage, setSelectedImage] = useState(chosenImg);

  // closes slider
  const handleImgClick = () => {
    onClick(false);
  };

  const nextImg = () => {
    setSelectedImage((prev) => {
      if (prev >= images.length - 1) {
        return prev;
      }
      return prev + 1;
    });
  };

  const prevImg = () => {
    setSelectedImage((prev) => {
      if (prev <= 0) {
        return prev;
      }
      return prev - 1;
    });
  };

  return (
    <div className={styles.slider}>
      <FontAwesomeIcon
        onClick={handleImgClick}
        className={styles.closeIcon}
        icon={faXmarkCircle}
      />
      <FontAwesomeIcon
        onClick={prevImg}
        className={styles.arrowLeft}
        icon={faCircleArrowLeft}
      />
      <div className={styles.sliderWrapper}>
        <img
          onClick={handleImgClick}
          src={images[selectedImage].src}
          alt="slider-img"
          className={styles.sliderImg}
        />
      </div>
      <FontAwesomeIcon
        onClick={nextImg}
        className={styles.arrowRight}
        icon={faCircleArrowRight}
      />
    </div>
  );
}
