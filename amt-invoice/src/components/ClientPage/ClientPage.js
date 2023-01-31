import React from "react";

import Card from "../UI/Card";
import classes from '../UI/CardWithRadius.module.css';
import ClientContact from "./ClientContact";

const ClientPage = () => {
  return (
    <React.Fragment>
      <Card classes={classes.yellowCard} >

      </Card>
        <ClientContact />
    </React.Fragment>
  );
};

export default ClientPage;
