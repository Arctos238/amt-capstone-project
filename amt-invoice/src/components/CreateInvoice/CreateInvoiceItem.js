import React from "react";

import CardWithRadius from "../UI/CardWithRadius";
import Button from "../UI/Button";

import styles from "./CreateInvoiceItem.module.css";
import classes from "../UI/CardWithRadius.module.css";

const CreateInvoiceItem = () => {
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
        <Button>Add Item</Button>
      </div>
    </React.Fragment>
  );
};

export default CreateInvoiceItem;
