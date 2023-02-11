import React from "react";
import { useState, useEffect } from "react";
import ClientProject from "./ClientProject";

import styles from "./ClientPageProjects.module.css";

import { GetProjectByClientId } from "../../services/ProjectServices";

const ClientPageProjects = (props) => {

  const [clientProjects, setClientProjects] = useState([]);
  const loadProjectHandler = () => {
    if("clientInfo" in localStorage) {
      let projectLists = props.toArray[0].projects;
      setClientProjects(projectLists);
      console.log("projectLists " + projectLists);
    } else {
      setClientProjects([]);
    }
    
  };
  
  return (
    <div className={styles.projectList} onLoad={loadProjectHandler}>
      {props.toArray.map((projectList) => (
        <ClientProject
          projectName={projectList.projectName}
          projectId={projectList.projectId}
          projectStatus={projectList.projectStatus ? ("Active") : ("Inactive")}
          id={projectList.projectId}
        />
      ))}
    </div>
  );
};

export default ClientPageProjects;
