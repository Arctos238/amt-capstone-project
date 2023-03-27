import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../UI/Card";
import classes from "../UI/Card.module.css";
import ClientContact from "./ClientContact";
import ClientPageProjects from "./ClientPageProjects";
import ClientPageButton from "./ClientPageButton";
import BackButton from "../BackButton/BackButton";
import styles from "./ClientContact.module.css";

const ClientPage = () => {
  const handleGoBack = () => {
    window.history.back();
  };

  let clientInfo = localStorage.getItem("clientInfo");
  let toArray = JSON.parse(clientInfo);
  console.log(toArray);
  return (
    <div className={styles.clientPage}>
      <BackButton />
      <h1 className={styles.title}>Create Client</h1>
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
          <ClientPageProjects toArray={toArray[0].projects} />
        </Card>
      </div>
      <div className="buttons">
        <ClientPageButton />
      </div>
    </div>
  );
};

export default ClientPage;
