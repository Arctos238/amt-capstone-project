import React from "react";


import CardWithRadius from "../UI/CardWithRadius";

import styles from "./ClientProject.module.css";
import classes from "../UI/CardWithRadius.module.css";



const ClientProject = (props) => {
  return (
    <CardWithRadius className={`${classes.blueCard} ${classes.projectList}`}>
      <div className={styles.parent}>
        <div className={styles.left}>
          <h3>Project Name: {props.projectName}</h3>
        </div>
        <div className={styles.middle}>
          <h3>Projecet ID: {props.projectId}</h3>
        </div>
        <div className={styles.right}>
          <h3>Project Status: {props.projectStatus}</h3>
        </div>
      </div>
    </CardWithRadius>
  );
};

export default ClientProject;
