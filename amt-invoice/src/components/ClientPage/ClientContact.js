import React, { useState } from "react";

import CardWithRadius from "../UI/CardWithRadius";
import styles from "./ClientContact.module.css";
import classes from "../UI/CardWithRadius.module.css";

const ClientContact = (props) => {
  
  return (
    <div className={styles.parent}>
      <div className={styles.left}>
<<<<<<< HEAD
        <CardWithRadius className={classes.blueCard}>Name:</CardWithRadius>
        <CardWithRadius className={classes.blueCard}>
          Business Email:
=======
        <CardWithRadius className={classes.blueCard}>Name: {props.clientName}</CardWithRadius>
        <CardWithRadius className={classes.blueCard}>
          Business Email: {props.businessEmail}
>>>>>>> branch 'main' of git@github.com:Arctos238/amt-capstone-project.git
        </CardWithRadius>
      </div>
      <div className={styles.right}>
        <CardWithRadius className={classes.blueCard}>
<<<<<<< HEAD
          Personal Phone Number:
        </CardWithRadius>
        <CardWithRadius className={classes.blueCard}>
          Personal Email:
=======
          Personal Phone Number: {props.phoneNumber}
        </CardWithRadius>
        <CardWithRadius className={classes.blueCard}>
          Personal Email: {props.personalEmail}
>>>>>>> branch 'main' of git@github.com:Arctos238/amt-capstone-project.git
        </CardWithRadius>
      </div>
    </div>
  );
};

export default ClientContact;
