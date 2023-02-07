import React from "react";

import MainNavigation from "../Navigation/MainNavigation";
import Card from "../UI/Card";
import classes from "./InvoicesPage.module.css";

import InvoicesPageProject from "./InvoicesPageProjects";



const InvoicesPage = () => {
  return (
    <div >
      
      <div className="theProjects">
        <Card className={classes.yellowProjectCard}>
          <InvoicesPageProject />
          
        </Card>
      </div>

      

      

      
      
    </div>
  );
};

export default InvoicesPage;
