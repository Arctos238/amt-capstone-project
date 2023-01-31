import React from "react";

import ClientProject from "./ClientProject";

import styles from "./ClientPageProjects.module.css";

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
    }
  ];

  return (
    <div className={styles.projectList}>
      {projectList.map((projectList) => (
        <ClientProject
          projectName={projectList.projectName}
          projectId={projectList.projectId}
          projectStatus={projectList.projectStatus}
        />
      ))}
    </div>
  );
};

export default ClientPageProjects;
