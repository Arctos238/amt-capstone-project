import React from "react";
import { useState, useEffect } from "react";
import InvoiceProject from "./InvoiceProject";
import {GetProjectById} from "../../services/ProjectServices";


const InvoicesPageProject = (props) => {

  const projectList = props.project;
  const invoices = projectList.invoices;
  
  return (
    <React.Fragment>
      {invoices.length > 0 ? (
        <InvoiceProject 
          projectName={projectList.projectName}
          projectId={projectList.projectId}
          projectStatus={projectList.projectStatus ? ("Active") : ("Inactive")}
          projectAddress={projectList.projectAddress.firstLineAddress}
          projectSecondAddress={projectList.projectAddress.secondLineAddress}
          projectPostal={projectList.projectAddress.postalCode}
          projectCity={projectList.projectAddress.city}
          projectProvince={projectList.projectAddress.province}
          projectInvoice={invoices[0].invoiceId}
          projectArea={invoices[0].invoiceItems[0].invoiceItemArea}
          projectDepth={invoices[0].invoiceItems[0].invoiceItemDepth}
          projectWidth={invoices[0].invoiceItems[0].invoiceItemWidth}
          projectLength={invoices[0].invoiceItems[0].invoiceItemLength}
          projectUnit={invoices[0].invoiceItems[0].invoiceItemMeasurement}
          projectPrice={invoices[0].invoiceItems[0].invoiceItemPrice}
          projectTotal={invoices[0].invoiceTotalPrice}
          projectEdge={invoices[0].invoiceItems[0].edgeProfile.edgeProfileCut}
          projectEdgeMeasure={invoices[0].invoiceItems[0].edgeProfile.edgeProfileMeasurement}
          projectEdgeType={invoices[0].invoiceItems[0].edgeProfile.edgeProfileType}
          projectTileRemoved={projectList.projectTitleRemoval}
          projectSuper={projectList.projectSupervisor.projectSupervisorName}
          projectSuperNum={projectList.projectSupervisor.projectSupervisorNumber}
        />
      ) : (
        <InvoiceProject
          projectName={projectList.projectName}
          projectId={projectList.projectId}
          projectStatus={projectList.projectStatus ? ("Active") : ("Inactive")}
          projectAddress={projectList.projectAddress.firstLineAddress}
          projectSecondAddress={projectList.projectAddress.secondLineAddress}
          projectPostal={projectList.projectAddress.postalCode}
          projectCity={projectList.projectAddress.city}
          projectProvince={projectList.projectAddress.province}
          projectInvoice={"No Invoices"}
          projectArea={"No Invoices"}
          projectUnit={"No Invoices"}
          projectPrice={"No Invoices: Please add an invoice below"}
          projectTotal={"No Invoices"}
          projectEdge={"No Invoices"}
          projectEdgeMeasure={"No Invoices"}
          projectEdgeType={"No Invoices"}
          
        />
      )}
    </React.Fragment>
  );
};

export default InvoicesPageProject;
