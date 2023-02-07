import React from "react";

import InvoiceProject from "./InvoiceProject";



const InvoicesPageProject = () => {
  //change to load from api
  const projectList = [
    {
      projectName: "Project Test 1",
      projectId: 1,
      projectStatus: "Active",
      projectAddress:"123 Home",
      projectClient:"Bill Construction",
      projectMaterial:"3 Slabs Taj Mahal",
      projectMaterial2:"10 Slabs Marble",
      projectMaterial3:"42 Slabs of Quartzite",
      projectCost:"$2000",
      projectCost2:"10 Slabs Marble total = $1500",
      projectCost3:"42 Slabs of Quartzite total = $4500",
      projectTotal:"Total Cost $8000",
      projectEdge:"Double Stepped",
      projectDocumentation:"Currently the we are on track to complete the project by Easter. The client is pleased with progress, but has requested that we add more backsplash.",
    },

    
  ];

  return (
    <div >
      {projectList.map((projectList) => (
        <InvoiceProject
          projectClient={projectList.projectClient}
          projectName={projectList.projectName}
          projectId={projectList.projectId}
          projectStatus={projectList.projectStatus}
          projectAddress={projectList.projectAddress}
          projectMaterial={projectList.projectMaterial}
          projectCost={projectList.projectCost}
          projectTotal={projectList.projectTotal}
          projectEdge={projectList.projectEdge}
          projectDocumentation={projectList.projectDocumentation}

        />
        
      ))}
      
    </div>
  );
};

export default InvoicesPageProject;
