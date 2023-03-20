import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DescriptionIcon from "@mui/icons-material/Description";
import ReceiptIcon from "@mui/icons-material/Receipt";
import ArticleIcon from "@mui/icons-material/Article";
import Button from "@mui/material/Button";
import CardWithRadius from "../UI/CardWithRadius";
import Box from "@mui/material/Box";
import classes from "../UI/CardWithRadius.module.css";
import styles from "./InvoiceProject.module.css";
import { useNavigate } from "react-router-dom";
import { GetProjectById } from "../../services/ProjectServices";
import DocumentUpload from "./InvoiceProjectDocumentUpload";
import BackButton from "../BackButton/BackButton";
import { GetImageById } from "../../services/ImageServices";
import { useState, useEffect } from "react";

const InvoiceProject = (props) => {
  const projectList = props.project;
  const invoices = projectList.invoices;
  console.log(invoices);
  let i;

  // const [images, setImages] = useState([]);
  const nav = useNavigate();

  const handleClick = async () => {
    const data = await GetProjectById(props.projectId);
    localStorage.setItem("projectId", JSON.stringify(data));
    nav("/createInvoice");
  };
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // const getImage = async (id) => {
  //   const res = await GetImageById(id);
  //   const imageBlob = await res.blob();
  //   const imageObjectURL = URL.createObjectURL(imageBlob);
  //   return imageObjectURL
  // };

  // useEffect(() => {
  //   for (let id in props.imageId) {
  //     let imageUrl = getImage(id);
  //     images.append(imageUrl);
  //   }
  // },[props.imageId, images])

  return (
    // <div>
    //   {/* <CardWithRadius className={classes.blueCard}>
    //     <div>
    //       <Accordion
    //         expanded={expanded === "panel1"}
    //         onChange={handleChange("panel1")}
    //       >
    //         <AccordionSummary
    //           expandIcon={<ExpandMoreIcon />}
    //           aria-controls="panel1bh-content"
    //           id="panel1bh-header"
    //         >
    //           <Typography sx={{ width: "33%", flexShrink: 0 }}>
    //             Project Details
    //           </Typography>

    //           <DescriptionIcon
    //             sx={{ width: "80%", fontSize: "60px" }}
    //           ></DescriptionIcon>
    //         </AccordionSummary>
    //         <AccordionDetails>
    //           <Typography> Project Name: {props.projectName}</Typography>
    //           <Typography> Project ID: {props.projectId}</Typography>
    //           <Typography> Project Status: {props.projectStatus}</Typography>
    //           <Typography> Project Address: {props.projectAddress}</Typography>
    //           <Typography>
    //             {" "}
    //             Project Second Address: {props.projectSecondAddress}
    //           </Typography>
    //           <Typography> Project Postal: {props.projectPostal}</Typography>
    //           <Typography> Project City: {props.projectCity}</Typography>
    //           <Typography>
    //             {" "}
    //             Project Province: {props.projectProvince}
    //           </Typography>

    //           <br></br>

    //           <Typography>Site Supervisor</Typography>
    //           <Typography> Super Name: {props.projectSuper}</Typography>
    //           <Typography> Super Number: {props.projectSuperNum}</Typography>
    //         </AccordionDetails>
    //       </Accordion>
    //       <Accordion
    //         expanded={expanded === "panel2"}
    //         onChange={handleChange("panel2")}
    //       >
    //         <AccordionSummary
    //           expandIcon={<ExpandMoreIcon />}
    //           aria-controls="panel2bh-content"
    //           id="panel2bh-header"
    //         >
    //           <Typography sx={{ width: "33%", flexShrink: 0 }}>
    //             Invoice
    //           </Typography>

    //           <ReceiptIcon
    //             sx={{ width: "80%", fontSize: "60px" }}
    //           ></ReceiptIcon>
    //         </AccordionSummary>
    //         <AccordionDetails>
    //           <Typography> Invoice ID: {props.projectInvoice} </Typography>
    //           {props.projectDepths.map((depth, i) => (
    //             <Typography>
    //               {" "}
    //               Item Depth: {depth} {props.projectUnits}
    //             </Typography>
    //           ))}
    //           {props.projectWidths.map((width, i) => (
    //             <Typography>
    //               {" "}
    //               Item Width: {width} {props.projectUnits}
    //             </Typography>
    //           ))}
    //           {props.projectLengths.map((length, i) => (
    //             <Typography>
    //               {" "}
    //               Item Length: {length} {props.projectUnits}
    //             </Typography>
    //           ))}

    //           {props.projectAreas.map((area) => (
    //             <Typography> Item Area: {area}</Typography>
    //           ))}
    //           {props.projectEdges.map((edge) => (
    //             <Typography> Edge Profile: {edge}</Typography>
    //           ))}
    //           {props.projectEdgeMeasures.map((measure) => (
    //             <Typography> Edge Measurement: {measure}</Typography>
    //           ))}
    //           {props.projectEdgeTypes.map((type) => (
    //             <Typography> Edge Profile Type: {type}</Typography>
    //           ))}
    //           {props.projectPrices.map((price) => (
    //             <Typography> Item Price: ${price}</Typography>
    //           ))}
    //           <br></br>
    //           <Typography> Project Total: ${props.projectTotal}</Typography>

    //           <Button variant="contained" onClick={handleClick}>
    //             Add Invoice
    //           </Button>
    //         </AccordionDetails>
    //       </Accordion>
    //       <Accordion
    //         expanded={expanded === "panel3"}
    //         onChange={handleChange("panel3")}
    //       >
    //         <AccordionSummary
    //           expandIcon={<ExpandMoreIcon />}
    //           aria-controls="panel3bh-content"
    //           id="panel3bh-header"
    //         >
    //           <Typography sx={{ width: "33%", flexShrink: 0 }}>
    //             Documentation
    //           </Typography>

    //           <ArticleIcon
    //             sx={{ width: "80%", fontSize: "60px" }}
    //           ></ArticleIcon>
    //         </AccordionSummary>
    //         <AccordionDetails>
    //           <DocumentUpload projectId={props.projectId} />
    //         </AccordionDetails>
    //       </Accordion>
    //     </div>
    //   </CardWithRadius> */}

    // </div>
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Project Details
          </Typography>

          <DescriptionIcon
            sx={{ width: "80%", fontSize: "60px" }}
          ></DescriptionIcon>
        </AccordionSummary>
        <AccordionDetails>
          <Typography> Project Name: {props.projectName}</Typography>
          <Typography> Project ID: {props.projectId}</Typography>
          <Typography> Project Status: {props.projectStatus}</Typography>
          <Typography> Project Address: {props.projectAddress}</Typography>
          <Typography>
            {" "}
            Project Second Address: {props.projectSecondAddress}
          </Typography>
          <Typography> Project Postal: {props.projectPostal}</Typography>
          <Typography> Project City: {props.projectCity}</Typography>
          <Typography> Project Province: {props.projectProvince}</Typography>

          <br></br>

          <Typography>Site Supervisor</Typography>
          <Typography> Super Name: {props.projectSuper}</Typography>
          <Typography> Super Number: {props.projectSuperNum}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Invoice</Typography>
          <ReceiptIcon sx={{ width: "80%", fontSize: "60px" }}></ReceiptIcon>
        </AccordionSummary>
        <AccordionDetails>
          {invoices.length > 0 ? (
            invoices.map((invoices) => (
              <CardWithRadius className={classes.blueCard}>
                Date Created: {invoices.dateCreated} Total Price:{" "}
                {invoices.invoiceTotalPrice}
              </CardWithRadius>
            ))
          ) : (
            <p>No Invoices</p>
          )}
          <Button variant="contained" onClick={handleClick}>
            Add Invoice
          </Button>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Documentation
          </Typography>

          <ArticleIcon sx={{ width: "80%", fontSize: "60px" }}></ArticleIcon>
        </AccordionSummary>
        <AccordionDetails>
          <DocumentUpload projectId={props.projectId} />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default InvoiceProject;
