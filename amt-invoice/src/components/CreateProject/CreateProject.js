import React from "react";

import MainNavigation from "../Navigation/MainNavigation";
import CreateProjectDetails from "./CreateProjectDetails";
import CreateProjectAddOns from "./CreateProjectAddOns";
import Button from "../UI/Button";

import styles from "./CreateProject.module.css";

const CreateProject = () => {
  return (
    <React.Fragment>
      <MainNavigation />
      <h1 className={styles.h1}>Create Project</h1>
      <CreateProjectDetails />
      <CreateProjectAddOns />
      <Button>Create Project</Button>
    </React.Fragment>
  );
};

export default CreateProject;
