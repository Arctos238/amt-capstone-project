import React from "react";
import { useState, useEffect } from "react";
import InvoiceProject from "./InvoiceProject";
import { GetProjectById } from "../../services/ProjectServices";

const InvoicesPageProject = (props) => {
  const projectList = props.project;
  const invoices = projectList.invoices;

  // console.log("Project List: " + JSON.stringify(projectList));
  // console.log("Invoice List: " + JSON.stringify(invoices));

  return (
    <React.Fragment>
      {/* {invoices.length > 0 ? (
        <InvoiceProject
          projectName={projectList.projectName}
          projectId={projectList.projectId}
          projectStatus={projectList.projectStatus ? "Active" : "Inactive"}
          projectAddress={projectList.projectAddress.firstLineAddress}
          projectSecondAddress={projectList.projectAddress.secondLineAddress}
          projectPostal={projectList.projectAddress.postalCode}
          projectCity={projectList.projectAddress.city}
          projectProvince={projectList.projectAddress.province}
          projectInvoice={invoices[0].invoiceId}
          projectAreas={invoices[0].invoiceItems.map(
            (item) => item.invoiceItemArea
          )}
          projectDepths={invoices[0].invoiceItems.map(
            (item) => item.invoiceItemDepth
          )}
          projectWidths={invoices[0].invoiceItems.map(
            (item) => item.invoiceItemWidth
          )}
          projectLengths={invoices[0].invoiceItems.map(
            (item) => item.invoiceItemLength
          )}
          projectUnits={invoices[0].invoiceItems.map(
            (item) => item.invoiceItemMeasurement
          )}
          projectPrices={invoices[0].invoiceItems.map(
            (item) => item.invoiceItemPrice
          )}
          projectTotal={invoices[0].invoiceTotalPrice}
          projectEdges={invoices[0].invoiceItems.map(
            (item) => item.edgeProfile.edgeProfileCut
          )}
          projectEdgeMeasures={invoices[0].invoiceItems.map(
            (item) => item.edgeProfile.edgeProfileMeasurement
          )}
          projectEdgeTypes={invoices[0].invoiceItems.map(
            (item) => item.edgeProfile.edgeProfileType
          )}
        />
      ) : (
        <InvoiceProject
          projectName={projectList.projectName}
          projectId={projectList.projectId}
          projectStatus={projectList.projectStatus ? "Active" : "Inactive"}
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
      )} */}

      {invoices.length > 0 ? (
        invoices.map((invoices) => (
          <InvoiceProject
            dateCreated={invoices.dateCreated}
            invoiceTotalPrice={invoices.invoiceTotalPrice}
          />
        ))
      ) : (
        <p>No Invoices</p>
      )}
    </React.Fragment>
  );
};

export default InvoicesPageProject;
