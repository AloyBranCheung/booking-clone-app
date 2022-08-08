import React from "react";
import styles from "./PropertyList.module.css";
import PropertyListItem from "./PropertyListItem/PropertyListItem";
import { v4 as uuidv4 } from "uuid";
import useFetch from "../../../../hooks/useFetch";
import { CircularProgress } from "@mui/material";

export default function PropertyList() {
  const { data, loading, error } = useFetch("/hotels/countByType");

  const propertyList = data.map((property, index) => {
    return (
      <PropertyListItem
        key={uuidv4()}
        imgUrl={`https://picsum.photos/200/300?random=${index}`}
        title={property.type}
        description={`${property.count}  properties of this type`}
      />
    );
  });
  return (
    <div className={styles.pList}>
      {loading ? <CircularProgress /> : <>{propertyList}</>}
    </div>
  );
}
