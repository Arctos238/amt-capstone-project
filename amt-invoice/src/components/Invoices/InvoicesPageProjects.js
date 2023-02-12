import React from "react";
import { useState, useEffect } from "react";
import InvoiceProject from "./InvoiceProject";
import {GetProjectById} from "../../services/ProjectServices";


const InvoicesPageProject = (props) => {
  //change to load from api
  const [projectList, setProjectList] = useState([]);

  const invoices = props.project;
  const invoicesArray = JSON.stringify(invoices);
  // setProjectList(invoicesArray);
  console.log(invoicesArray);
  
  return (
<<<<<<< Updated upstream
    <div>
        
        <InvoiceProject 
          projectName={project.projectName}
          projectId={project.projectId}
          projectStatus={project.projectStatus ? ("Active") : ("Inactive")}
          />
        
    </div>
=======
    <React.Fragment>
        {/* {projectList.map((projects) => (
          <InvoiceProject 
          projectName={projects.projectName}
          projectId={projects.projectId}
          projectStatus={projects.projectStatus ? ("Active") : ("Inactive")}
          
        />
        ))} */}
    </React.Fragment>
>>>>>>> Stashed changes
  );

};

export default InvoicesPageProject;
