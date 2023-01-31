import React from "react";

import CardWithRadius from "../UI/CardWithRadius";
import styles from "./ClientContact.module.css";
import classes from "../UI/CardWithRadius.module.css";

const ClientContact = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.left}>
        <CardWithRadius className={classes.blueCard}>Name:</CardWithRadius>
        <CardWithRadius className={classes.blueCard}>Business Email:</CardWithRadius>
      </div>
      <div className={styles.right}>
        <CardWithRadius className={classes.blueCard}>Personal Phone Number:</CardWithRadius>
        <CardWithRadius className={classes.blueCard}>Personal Email:</CardWithRadius>
      </div>
    </div>
  );
};

export default ClientContact;
