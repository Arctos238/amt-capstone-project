import React from "react";

import MainNavigation from "../Navigation/MainNavigation";
import Card from "../UI/Card";
import classes from "../UI/Card.module.css";
import ClientContact from "./ClientContact";
import ClientPageProjects from "./ClientPageProjects";
import ClientPageButton from "./ClientPageButton";

const ClientPage = () => {
  return (
    <div className="clientPage">
      <div className="aboutClient">
        <Card className={classes.yellowCard}>
          <ClientContact />
        </Card>
      </div>
      <div className="theProjects">
        <Card className={classes.yellowCard}>
          <ClientPageProjects />
        </Card>
      </div>
      <div className="buttons">
        <ClientPageButton/>
      </div>
    </div>
  );
};

export default ClientPage;
