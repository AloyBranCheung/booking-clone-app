import React from "react";
import Header from "../../components/molecules/Header/Header";
import HomeContainer from "../../components/molecules/HomeContainer/HomeContainer";
import MailList from "../../components/molecules/MailList/MailList";
import Footer from "../../components/molecules/Footer/Footer";

export default function Homepage() {
  return (
    <div>
      <Header type="home" />
      <HomeContainer />
      <MailList />
      <Footer />
    </div>
  );
}
