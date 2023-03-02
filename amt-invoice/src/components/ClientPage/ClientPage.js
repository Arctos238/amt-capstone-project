import React from "react";
import { useNavigate } from 'react-router-dom';
import Card from "../UI/Card";
import classes from "../UI/Card.module.css";
import ClientContact from "./ClientContact";
import ClientPageProjects from "./ClientPageProjects";
import ClientPageButton from "./ClientPageButton";
import BackButton from "../BackButton/BackButton";

const ClientPage = () => {
  const handleGoBack = () => {
    window.history.back();
  };

  let clientInfo = localStorage.getItem("clientInfo");
  let toArray = JSON.parse(clientInfo);
  console.log(toArray);
  return (
    <div className="clientPage">
      <BackButton/>
      <div className="aboutClient">
        <Card className={classes.yellowCard}>
          <ClientContact
            clientName={toArray.clientName}
            businessEmail={toArray.clientContact.businessEmail}
            phoneNumber={toArray.clientContact.personalContactNumber}
            personalEmail={toArray.clientContact.personalEmail}
          />
        </Card>
      </div>
      <div className="theProjects">
        <Card className={classes.yellowCard}>
          <ClientPageProjects toArray={toArray.projects}/>
        </Card>
      </div>
      <div className="buttons">
        <ClientPageButton />
      </div>
    </div>
  );
};

export default ClientPage;
