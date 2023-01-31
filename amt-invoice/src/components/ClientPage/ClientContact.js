import React from "react";

import CardWithRadius from "../UI/CardWithRadius";
import styles from "./ClientContact.module.css";

const ClientContact = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.left}>
        <CardWithRadius>Name:</CardWithRadius>
        <CardWithRadius>Business Email:</CardWithRadius>
      </div>
      <div className={styles.right}>
        <CardWithRadius>Personal Phone Number:</CardWithRadius>
        <CardWithRadius>Personal Email:</CardWithRadius>
      </div>
    </div>
  );
};

export default ClientContact;
