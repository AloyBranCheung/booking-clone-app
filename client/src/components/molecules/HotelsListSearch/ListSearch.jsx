import styles from "./ListSearch.module.css";
import React, { useState } from "react";
import SearchSidebar from "./SearchSidebar/SearchSidebar";
import SearchResults from "./SearchResults/SearchResults";

export default function ListSearch() {
  const [fetchedData, setFetchedData] = useState([]);
  const handleFetchedData = (data) => {
    setFetchedData(data);
  };
  return (
    <div className={styles.listContainer}>
      <div className={styles.listWrapper}>
        <div className={styles.listSearch}>
          <SearchSidebar fetchedData={handleFetchedData} />
        </div>
        <div className={styles.listResult}>
          <h1 className={styles.lsResultTitle}>Results</h1>
          <SearchResults data={fetchedData} />
        </div>
      </div>
    </div>
  );
}
