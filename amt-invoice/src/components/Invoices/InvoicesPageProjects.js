import React from "react";
import { useState, useEffect } from "react";
import InvoiceProject from "./InvoiceProject";
import {GetProjectById} from "../../services/ProjectServices";


const InvoicesPageProject = (props) => {
  //change to load from api

  const invoices = props.project.invoices;

  
  const project = props.project;
  return (
    <div>
        
        <InvoiceProject 
          projectName={project.projectName}
          projectId={project.projectId}
          projectStatus={project.projectStatus ? ("Active") : ("Inactive")}
          />
        
    </div>
  );

};

export default InvoicesPageProject;
