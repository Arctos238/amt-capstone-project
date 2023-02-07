import React, { useState } from "react";

import CardWithRadius from "../UI/CardWithRadius";
import Button from "../UI/Button";
import PrintItemList from "./PrintItemList";

import styles from "./CreateInvoiceItem.module.css";
import classes from "../UI/CardWithRadius.module.css";

const invoiceItemList = [
  {
    invoiceItemId: 1,
    invoiceItemName: "Alfalfa",
    invoiceItemMeasurement: "Tammy",
    invoiceItemWidth: 48.77,
    invoiceItemLength: 56.67,
    invoiceItemArea: 39.21,
    invoiceItemDepth: 234.4,
    invoiceItemPrice: 9999.99,
  },
  {
    invoiceItemId: 2,
    invoiceItemName: "Alfa",
    invoiceItemMeasurement: "Dawg",
    invoiceItemWidth: 7.77,
    invoiceItemLength: 86.67,
    invoiceItemArea: 31.21,
    invoiceItemDepth: 34.4,
    invoiceItemPrice: 8899.99,
  },
];

const CreateInvoiceItem = () => {
  const [itemList, setItemList] = useState(invoiceItemList);

  const [enteredItemName, setEnteredItemName] = useState("");
  const [enteredItemMeasurement, setEnteredItemMeasurement] = useState("");
  const [enteredItemWidth, setEnteredItemWidth] = useState("");
  const [enteredItemLength, setEnteredItemLength] = useState("");
  const [enteredItemArea, setEnteredItemArea] = useState("");
  const [enteredItemDepth, setEnteredItemDepth] = useState("");
  const [enteredItemPrice, setEnteredItemPrice] = useState(""); 

  const addItemHandler = (itemList) => {
    setItemList((prevInvoiceItemList) => {
      return [itemList, ...prevInvoiceItemList];
    });
  };

  return (
    <React.Fragment>
      <div className={styles.invoiceItem}>
        <div className={styles.parent}>
          <div className={styles.left}>
            <CardWithRadius className={classes.blueCard}>
              <label>Name:</label>
              <input type="text" />
            </CardWithRadius>
            <CardWithRadius className={classes.blueCard}>
              <label>Width:</label>
              <input type="number" />
            </CardWithRadius>
            <CardWithRadius className={classes.blueCard}>
              <label>Area:</label>
              <input type="number" />
            </CardWithRadius>
          </div>
          <div className={styles.right}>
            <CardWithRadius className={classes.blueCard}>
              <label>Measurement:</label>
              <input type="text" />
            </CardWithRadius>
            <CardWithRadius className={classes.blueCard}>
              <label>Length:</label>
              <input type="number" />
            </CardWithRadius>
            <CardWithRadius className={classes.blueCard}>
              <label>Depth:</label>
              <input type="number" />
            </CardWithRadius>
          </div>
        </div>
        <CardWithRadius className={classes.blueCard}>
          <label>Price:</label>
          <input type="number" />
        </CardWithRadius>
        <Button className={styles.button} onClick={addItemHandler}>Add Item</Button>
      </div>

      
      {/* <div className={styles.itemList}>
        {invoiceItemList.map((itemList) => (
          <PrintItemList
            invoiceItemName={itemList.invoiceItemName}
            invoiceItemMeasurement={itemList.invoiceItemMeasurement}
            invoiceItemWidth={itemList.invoiceItemWidth}
            invoiceItemLength={itemList.invoiceItemLength}
            invoiceItemArea={itemList.invoiceItemArea}
            invoiceItemDepth={itemList.invoiceItemDepth}
            invoiceItemPrice={itemList.invoiceItemPrice}
          />
        ))}
      </div> */}
    </React.Fragment>
  );
};

export default CreateInvoiceItem;
