import React from "react";

import MainNavigation from "../Navigation/MainNavigation";
import Card from "../UI/Card";
import classes from "./InvoicesPage.module.css";
import { useState, useEffect } from "react";
import InvoicesPageProject from "./InvoicesPageProjects";
import { GetProjectById } from "../../services/ProjectServices";

const InvoicesPage = (props) => {
  const currentProjectId = {};
  const [project, setProject] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetProjectById(
        localStorage.getItem("currentProjectId")
      );
      // let dataParsed = JSON.parse(data);
      console.log(data);
      setProject(data);
    };

    if(localStorage.getItem("currentProjectId")){
      fetchData();
    }
    return () => {};
  }, []);

  return (
    <div>
      <div className="theProjects">
        <Card className={classes.yellowProjectCard}>
          <InvoicesPageProject project={project} />
        </Card>
      </div>
    </div>
  );
};

export default InvoicesPage;
