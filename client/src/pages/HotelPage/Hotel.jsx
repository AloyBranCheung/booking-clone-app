import React from "react";
import Header from "../../components/molecules/Header/Header";
import HotelContainer from "../../components/molecules/HotelContainer/HotelContainer";
import MailList from "../../components/molecules/MailList/MailList";
import Footer from "../../components/molecules/Footer/Footer";

export default function Hotel() {
  return (
    <div>
      <Header type="list" />
      <HotelContainer />
      <MailList />
      <Footer />
    </div>
  );
}
