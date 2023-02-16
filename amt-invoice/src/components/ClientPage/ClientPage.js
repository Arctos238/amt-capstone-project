import React from "react";
import { Navigate } from "react-router-dom";
import MainNavigation from "../Navigation/MainNavigation";
import Card from "../UI/Card";
import classes from "../UI/Card.module.css";
import ClientContact from "./ClientContact";
import ClientPageProjects from "./ClientPageProjects";
import ClientPageButton from "./ClientPageButton";

const ClientPage = () => {
  let clientInfo = localStorage.getItem("clientInfo");
  let toArray = JSON.parse(clientInfo);
  console.log(toArray);
  return (
    <div className="clientPage">
      <div className="aboutClient">
        <Card className={classes.yellowCard}>
          <ClientContact
            clientName={toArray[0].clientName}
            businessEmail={toArray[0].clientContact.businessEmail}
            phoneNumber={toArray[0].clientContact.personalContactNumber}
            personalEmail={toArray[0].clientContact.personalEmail}
          />
        </Card>
      </div>
      <div className="theProjects">
        <Card className={classes.yellowCard}>
          <ClientPageProjects toArray={toArray[0].projects}/>
        </Card>
      </div>
      <div className="buttons">
        <ClientPageButton />
      </div>
    </div>
  );
};

export default ClientPage;
