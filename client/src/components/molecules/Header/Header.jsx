import React from "react";
import styles from "./Header.module.css";
import HeaderList from "./HeaderList/HeaderList";
import HeaderIntro from "./HeaderIntro/HeaderIntro";
import HeaderSearch from "./HeaderSearch/HeaderSearch";

export default function Header({ type }) {
  console.log(type);
  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <HeaderList />
        <HeaderIntro />
        {type === "home" && <HeaderSearch />}
      </div>
    </div>
  );
}
