import React from "react";
import { useState, useEffect } from "react";
import ClientProject from "./ClientProject";

import styles from "./ClientPageProjects.module.css";

import { GetProjectByClientId } from "../../services/ProjectServices";

const ClientPageProjects = () => {
  //change to load from api
  const projectList = [
    {
      projectName: "Project Test 1",
      projectId: 1,
      projectStatus: "Active",
    },
    {
      projectName: "Project Test 2",
      projectId: 2,
      projectStatus: "Inactive",
    },
    {
      projectName: "Project Test 3",
      projectId: 3,
      projectStatus: "Active",
    },
    {
      projectName: "Project Test 4",
      projectId: 4,
      projectStatus: "Active",
    },
  ];

  const [clientProjects, setClientProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetProjectByClientId(1);
      setClientProjects(data);
    };

    fetchData();
    return () => {};
  }, []);

  console.log(clientProjects);

  return (
    <div className={styles.projectList}>
      {projectList.map((projectList) => (
        <ClientProject
          projectName={projectList.projectName}
          projectId={projectList.projectId}
          projectStatus={projectList.projectStatus}
          id={projectList.projectId}
        />
      ))}
    </div>
  );
};

export default ClientPageProjects;
