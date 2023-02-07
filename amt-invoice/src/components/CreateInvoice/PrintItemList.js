import React from "react";

import CardWithRadius from "../UI/CardWithRadius";

import styles from "./PrintItemList.module.css";
import classes from "../UI/CardWithRadius.module.css";

const PrintItemList = (props) => {
  return (
    <CardWithRadius className={classes.blueCard}>
      <div className={styles.gridContainer}>
        <div className={styles.gridItem}>{props.invoiceItemName}</div>
        <div className={styles.gridItem}>{props.invoiceItemMeasurement}</div>
        <div className={styles.gridItem}>{props.invoiceItemWidth}</div>
        <div className={styles.gridItem}>{props.invoiceItemLength}</div>
        <div className={styles.gridItem}>{props.invoiceItemArea}</div>
        <div className={styles.gridItem}>{props.invoiceItemDepth}</div>
        <div className={styles.gridItem}>{props.invoiceItemPrice}</div>
      </div>
    </CardWithRadius>
  );
};
export default PrintItemList;
