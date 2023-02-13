import React from "react";
import { useState, useEffect } from "react";
import InvoiceProject from "./InvoiceProject";
import {GetProjectById} from "../../services/ProjectServices";


const InvoicesPageProject = (props) => {
  //change to load from api
  const [projectList, setProjectList] = useState({});

  const invoiceList = props.project;
  // setProjectList(invoicesArray);
  console.log(invoiceList);

  const invoices = invoiceList.invoices;
  console.log(invoices);
  useEffect(() => {
    setProjectList(props.project);
  }, [props])
  
  return (
    <React.Fragment>
          <InvoiceProject 
          projectName={projectList.projectName}
          projectId={projectList.projectId}
          projectStatus={projectList.projectStatus ? ("Active") : ("Inactive")}
        />
    </React.Fragment>
  );

};

export default InvoicesPageProject;
