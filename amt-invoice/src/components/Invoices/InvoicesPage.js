import React from "react";

import MainNavigation from "../Navigation/MainNavigation";
import Card from "../UI/Card";
import classes from "./InvoicesPage.module.css";
import { useState, useEffect } from "react";
import InvoicesPageProject from "./InvoicesPageProjects";
import InvoiceProject from "./InvoiceProject";
import { GetProjectById } from "../../services/ProjectServices";
import BackButton from "../BackButton/BackButton";

const InvoicesPage = (props) => {
  const [project, setProject] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    const data = await GetProjectById(localStorage.getItem("currentProjectId"));
    setLoading(true);
    setProject(data);
  };

  useEffect(() => {
    if (localStorage.getItem("currentProjectId")) {
      fetchData();
    }
  }, []);

  return (
    <div>
      <BackButton />
      <h1>Project</h1>
      <div className="theProjects">
        <Card className={classes.yellowProjectCard}>
          {loading ? (
            <InvoiceProject project={project} projectId={project.projectId} />
          ) : (
            <></>
          )}
        </Card>
      </div>
    </div>
  );
};

export default InvoicesPage;
