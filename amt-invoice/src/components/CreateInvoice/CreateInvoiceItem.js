import React from "react";

import CardWithRadius from "../UI/CardWithRadius";
// import PrintItemList from "./PrintItemList";
import TextField from '@mui/material/TextField';

import styles from "./CreateInvoiceItem.module.css";
import classes from "../UI/CardWithRadius.module.css";

// const invoiceItemList = [
//   {
//     invoiceItemId: 1,
//     invoiceItemName: "Alfalfa",
//     invoiceItemMeasurement: "Tammy",
//     invoiceItemWidth: 48.77,
//     invoiceItemLength: 56.67,
//     invoiceItemArea: 39.21,
//     invoiceItemDepth: 234.4,
//     invoiceItemPrice: 9999.99,
//   },
//   {
//     invoiceItemId: 2,
//     invoiceItemName: "Alfa",
//     invoiceItemMeasurement: "Dawg",
//     invoiceItemWidth: 7.77,
//     invoiceItemLength: 86.67,
//     invoiceItemArea: 31.21,
//     invoiceItemDepth: 34.4,
//     invoiceItemPrice: 8899.99,
//   },
// ];

const CreateInvoiceItem = (props) => {
  

  return (
    <form className="invoiceItemForm">
      <div className={styles.invoiceItem}>
        <div className={styles.parent}>
          <div className={styles.left}>
            <CardWithRadius className={classes.blueCard}>
              {/* <label>Name:</label>
              <input type="text" ref={props.invoiceItemNameRef} /> */}
              <TextField id="outlined-basic" label="Name" variant="outlined" ref={props.invoiceItemNameRef}/>
            </CardWithRadius>
            <CardWithRadius className={classes.blueCard}>
              <label>Width:</label>
              <input
                type="number"
                className={styles.transparentInput}
                ref={props.invoiceItemWidthRef}
              />
            </CardWithRadius>
            <CardWithRadius className={classes.blueCard}>
              <label>Area:</label>
              <input type="number" ref={props.invoiceItemAreaRef} />
            </CardWithRadius>
          </div>
          <div className={styles.right}>
            <CardWithRadius className={classes.blueCard}>
              <label>Measurement:</label>
              <input type="text" ref={props.invoiceItemMeasurementRef} placeholder="Type Measurement Here"/>
            </CardWithRadius>
            <CardWithRadius className={classes.blueCard}>
              <label>Length:</label>
              <input type="number" ref={props.invoiceItemLengthRef} />
            </CardWithRadius>
            <CardWithRadius className={classes.blueCard}>
              <label>Depth:</label>
              <input type="number" ref={props.invoiceItemDepthRef} placeholder="Type Depth Here"/>
            </CardWithRadius>
          </div>
        </div>
        <CardWithRadius className={classes.blueCard}>
          <label>Price:</label>
          <input type="number" ref={props.invoiceItemPriceRef} />
        </CardWithRadius>
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
