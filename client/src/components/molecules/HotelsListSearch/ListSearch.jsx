import styles from "./ListSearch.module.css";
import React from "react";
import SearchSidebar from "./SearchSidebar/SearchSidebar";
import SearchResults from "./SearchResults/SearchResults";

export default function ListSearch() {
  return (
    <div className={styles.listContainer}>
      <div className={styles.listWrapper}>
        <div className={styles.listSearch}>
          <SearchSidebar />
        </div>
        <div className={styles.listResult}>
          <h1 className={styles.lsResultTitle}>Results</h1>
          <SearchResults />
        </div>
      </div>
    </div>
  );
}
