import styles from "./Footer.module.css";
import React from "react";
import FooterListItem from "./FooterListItem/FooterListItem";

const DESTINATIONS = [
  "Countries",
  "Regions",
  "Cities",
  "Districts",
  "Airports",
  "Hotels",
];

const PROPERTIES = [
  "Homes",
  "Apartments",
  "Resorts",
  "Villas",
  "Hostels",
  "B&Bs",
  "GuestHouses",
];

const OTHERS = [
  "Unique places to stay",
  "Discover monthly stays",
  "All destinations",
  "Discover",
  "Reviews",
  "Unpacked: Travel articles",
  "Travel communities",
  "Seasonal and holiday deals",
];

const APPS = [
  "Car hire",
  "Flight finger",
  "Restaurant reservations",
  "BookingAppClone for Travel Agents",
];

const HELP = [
  "Coronavirus (COVID-19) FAQs",
  "About Booking.com",
  "Customer Service help",
  "Partner help",
  "Careers",
  "Sustainability",
  "Press centre",
  "Safety resource centre",
  "Investor relations",
  "Terms & Conditions",
  "Partner dispute",
  "How we work",
  "Privacy & Cookie Statement",
  "Corporate contact",
];

export default function Footer() {
  const date = new Date();
  return (
    <div className={styles.footer}>
      <div className={styles.listContainer}>
        <FooterListItem listText={DESTINATIONS} />
        <FooterListItem listText={PROPERTIES} />
        <FooterListItem listText={OTHERS} />
        <FooterListItem listText={APPS} />
        <FooterListItem listText={HELP} />
      </div>
      <h5 className={styles.footerText}>
        Made with ❤️ by Brandon Cheung {date.getFullYear()}
      </h5>
    </div>
  );
}
