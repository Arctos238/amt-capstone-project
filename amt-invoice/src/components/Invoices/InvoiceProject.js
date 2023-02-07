import React from "react";


import CardWithRadius from "../UI/CardWithRadius";


import classes from "../UI/CardWithRadius.module.css";
import styles from "./InvoiceProject.module.css";


const InvoiceProject = (props) => {
  return (
    <CardWithRadius className={classes.blueCard}>
      <div className={styles.parent}>
        <div className={styles.left}>
          <h3>Project Client: {props.projectClient}</h3>
          <h3>Project Name: {props.projectName}</h3>
        </div>
        <div className={styles.middle}>
        <h3>Project Address: {props.projectAddress}</h3>
        <h3>Project Status: {props.projectStatus}</h3>
        <br/>
        <br/>
        <h3>Invocing Details</h3>
        </div>
        <div className={styles.right}>
        <h3>Project ID: {props.projectId}</h3>
        </div>
      </div>

      <div className={styles.parent}>
        <div className={styles.left}>
        <h3>Material</h3>
        <h3>{props.projectMaterial}</h3>
        </div>
        <div className={styles.middle}>
        <h3>Cost</h3>
        <h3>{props.projectCost}</h3>
        <br/>
        <br/>
        <h3>Documents</h3>
        </div>
        <div className={styles.right}>
          <h3>Edge Profile</h3>
        <h3>{props.projectEdge}</h3>
        </div>
      </div>

      <div className={styles.parent}>
        
        
        
        <div className={styles.middle}>
        <h3>{props.projectDocumentation}</h3>
        </div>
        
          
        
      </div>

      
    </CardWithRadius>

    
    

    
  );
};

export default InvoiceProject;
