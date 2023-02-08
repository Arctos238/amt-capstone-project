import React, { useState, useRef } from "react";

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
  // const [itemList, setItemList] = useState(invoiceItemList);

  // const addItemHandler = (itemList) => {
  //   setItemList((prevInvoiceItemList) => {
  //     return [itemList, ...prevInvoiceItemList];
  //   });
  // };

  const itemIdRef = useRef();
  const itemNameRef = useRef();
  const itemMeasurementRef = useRef();
  const itemWidthRef = useRef();
  const itemLengthRef = useRef();
  const itemAreaRef = useRef();
  const itemDepthRef = useRef();
  const itemPriceRef = useRef();

  const addItemHandler = (event) => {
    event.preventDefault();
    
    const itemId = itemIdRef.current.value;
    const itemName = itemNameRef.current.value;
    const itemMeasurement = itemMeasurementRef.current.value;
    const itemWidth = itemWidthRef.current.value;
    const itemLength = itemLengthRef.current.value;
    const itemArea = itemAreaRef.current.value;
    const itemDepth = itemDepthRef.current.value;
    const itemPrice = itemPriceRef.current.value;

    const obj = {
      itemId,
      itemName,
      itemMeasurement,
      itemWidth,
      itemLength,
      itemArea,
      itemDepth,
      itemPrice,
    };

    console.log(obj);
  };

  return (
    <form className="invoiceItemForm" >
      <div className={styles.invoiceItem}>
        <div className={styles.parent}>
          <div className={styles.left}>
            <CardWithRadius className={classes.blueCard}>
              <label>Name:</label>
              <input type="text" ref={itemNameRef} />
            </CardWithRadius>
            <CardWithRadius className={classes.blueCard}>
              <label>Width:</label>
              <input
                type="number"
                className={styles.transparentInput}
                ref={itemWidthRef}
              />
            </CardWithRadius>
            <CardWithRadius className={classes.blueCard}>
              <label>Area:</label>
              <input type="number" ref={itemAreaRef} />
            </CardWithRadius>
          </div>
          <div className={styles.right}>
            <CardWithRadius className={classes.blueCard}>
              <label>Measurement:</label>
              <input type="text" ref={itemMeasurementRef} />
            </CardWithRadius>
            <CardWithRadius className={classes.blueCard}>
              <label>Length:</label>
              <input type="number" ref={itemLengthRef} />
            </CardWithRadius>
            <CardWithRadius className={classes.blueCard}>
              <label>Depth:</label>
              <input type="number" ref={itemDepthRef} />
            </CardWithRadius>
          </div>
        </div>
        <CardWithRadius className={classes.blueCard}>
          <label>Price:</label>
          <input type="number" ref={itemPriceRef} />
        </CardWithRadius>
        <Button onClick={addItemHandler} className={styles.button} type="submit">
          Add Item
        </Button>
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
    </form>
  );
};

export default CreateInvoiceItem;
