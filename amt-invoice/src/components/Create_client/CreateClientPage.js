import React from "react";

import MainNavigation from "../Navigation/MainNavigation";
import CreateClientDetails from "./CreateClientDetails";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./CreateClientPage.module.css";


const ClientPage = () => {
  return (
    <React.Fragment>
      <MainNavigation/> 
      <h1 className={styles.h1}>Client Creator</h1>
      <form className={styles.form}>
      <CreateClientDetails />
      <Button type="submit">Create Client</Button>
      </form>
    </React.Fragment>
  );
};

export default ClientPage;