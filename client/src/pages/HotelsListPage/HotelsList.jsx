import React from "react";
import Header from "../../components/molecules/Header/Header";
import ListSearch from "../../components/molecules/HotelsListSearch/ListSearch";

export default function HotelsList() {
  return (
    <>
      <Header type="list" />
      <ListSearch />
    </>
  );
}
