import React from "react";
import Header from "../../components/molecules/Header/Header";
import HotelContainer from "../../components/molecules/HotelContainer/HotelContainer";

export default function Hotel() {
  return (
    <div>
      <Header type="list" />
      <HotelContainer />
    </div>
  );
}
