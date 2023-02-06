import React from "react";

import MainNavigation from "../Navigation/MainNavigation";
import CreateClientDetails from "./CreateClientDetails";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./CreateClientPage.module.css";
import classes from "../UI/Button.module.css";

const CreateClient = () => {
  return (
    <div className={styles.createClient}>
      
      <h1 className={styles.h1}>Client Creator</h1>
      <form className={styles.form}>
      <CreateClientDetails />
      <Button className={classes.button}type="submit">Create Client</Button>
      </form>
    </div>
  );
};

export default CreateClient;