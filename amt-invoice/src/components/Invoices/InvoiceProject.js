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
import { createSearchParams, useNavigate, Link } from "react-router-dom";
import { GetProjectById } from "../../services/ProjectServices";
import { GetInvoiceById } from "../../services/InvoiceServices";
import DocumentUpload from "./InvoiceProjectDocumentUpload";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import BackButton from "../BackButton/BackButton";
import { GetImageById } from "../../services/ImageServices";
import { DeleteInvoiceById } from "../../services/InvoiceServices";
import { GetInvoiceItemsByInvoiceId } from "../../services/InvoiceItemServices";
import { useState, useEffect, useRef } from "react";
import InvoicesPageProject from "./InvoicesPageProjects";
import PhotoIcon from "@mui/icons-material/Photo";
import { TableContainer } from "@mui/material";
import { Paper, Table, TableBody, TableRow, TableCell } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SummarizeIcon from "@mui/icons-material/Summarize";
import CreditCardIcon from '@mui/icons-material/CreditCard';



const InvoiceProject = (props) => {
  let componentRef = useRef();
  const projectList = props.project;
  const [invoices, setInvoices] = useState(projectList.invoices);
  const [selectedInvoiceId, setSelectedInvoiceId] = useState(null);
  const [sendInvoiceInfo, setSendInvoiceInfo] = useState({});

  console.log(props.project);
  // const [invoices, setInvoices] = useState([]);
  // setInvoices(projectInfo.invoices);
  // console.log(invoices);
  // useEffect(() => {
  //   setInvoices(projectList.invoices);
  // }, [invoices]);
  let i;

  // const [images, setImages] = useState([]);
  const nav = useNavigate();
  localStorage.setItem('invoice', JSON.stringify(projectList));
  const test = JSON.parse(localStorage.getItem('invoice'));
  console.log(test);
  const workForms = async () => {
    nav("/workForm");
  };
  const deposit = async () => {
    nav("/deposit");
  }
  const productInfo = async () => {
    nav("/productInfo");
  }
  const budget = async () => {
    nav("/BudgetQoute");
  }
  const handleClick = async () => {
    const data = await GetProjectById(props.projectId);
    localStorage.setItem("projectId", JSON.stringify(data));
    nav("/createInvoice");
  };
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const deleteInvoiceHandler = async (id) => {
    await DeleteInvoiceById(id);
    setInvoices(invoices.filter((invoice) => invoice.invoiceId !== id));
  };

  //these three are sent to InvoicePageProjects
  const [open, setOpen] = useState(false);
  const handleOpen = async (invoiceId) => {
    setOpen(true);
    setSelectedInvoiceId(invoiceId);
    const data = await GetInvoiceById(invoiceId);
    setSendInvoiceInfo(data);
  };
  const handleClose = () => setOpen(false);

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
          <TableContainer component={Paper}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell style={{ fontWeight: "bold" }}>
                    Project Name:
                  </TableCell>
                  <TableCell>{props.project.projectName}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ fontWeight: "bold" }}>
                    Project ID:
                  </TableCell>
                  <TableCell>{props.projectId}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ fontWeight: "bold" }}>
                    Project Status:
                  </TableCell>
                  <TableCell>{props.project.projectStatus}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ fontWeight: "bold" }}>
                    Project Address:
                  </TableCell>
                  <TableCell>{props.project.projectAddress.firstLineAddress}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ fontWeight: "bold" }}>
                    Project Second Address:
                  </TableCell>
                  <TableCell>{props.project.projectAddress.secondLineAddress}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ fontWeight: "bold" }}>
                    Project Postal:
                  </TableCell>
                  <TableCell>{props.project.projectAddress.postalCode}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ fontWeight: "bold" }}>
                    Project City:
                  </TableCell>
                  <TableCell>{props.project.projectAddress.city}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ fontWeight: "bold" }}>
                    Project Province:
                  </TableCell>
                  <TableCell>{props.project.projectAddress.province}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <br></br>

          <div>
              <Typography variant="h6" gutterBottom>
                Project Supervisor Information
              </Typography>
              <TableContainer component={Paper}>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell style={{ fontWeight: "bold" }}>
                        Super Name:
                      </TableCell>
                      <TableCell>
                        {props.project.projectSupervisor.projectSupervisorName}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell style={{ fontWeight: "bold" }}>
                        Super Number:
                      </TableCell>
                      <TableCell>
                        {props.project.projectSupervisor.projectSupervisorNumber}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>


          

          
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
                <div className={styles.gridContainer}>
                  <div
                    className={styles.gridItem}
                    onClick={() => handleOpen(invoices.invoiceId)}
                  >
                    <label className={styles.invoiceLabel}>
                      <b>Date Created:</b> {invoices.dateCreated}
                    </label>
                  </div>
                  <div
                    className={styles.gridItem}
                    onClick={() => handleOpen(invoices.invoiceId)}
                  >
                    <label className={styles.invoiceLabel}>
                      <b>Total Price:</b> {invoices.invoiceTotalPrice}{" "}
                    </label>
                  </div>
                  <div
                    className={styles.gridItem}
                    onClick={() => handleOpen(invoices.invoiceId)}
                  >
                    <label className={styles.invoiceLabel}>
                      <b>No. of Items:</b> {invoices.invoiceItems.length}
                    </label>
                  </div>
                  <div className={`{styles.gridItem} {styles.buttonOptions}`}>
                    <IconButton
                      aria-label="delete"
                      size="medium"
                      onClick={() => deleteInvoiceHandler(invoices.invoiceId)}
                    >
                      <DeleteIcon
                        fontSize="inherit"
                        sx={{ color: "#fabd44", padding: 0 }}
                      />
                    </IconButton>
                    <IconButton aria-label="delete" size="medium">
                      <EditIcon
                        fontSize="inherit"
                        sx={{ color: "#fabd44", padding: 0 }}
                      />
                    </IconButton>
                  </div>
                </div>
              </CardWithRadius>
            ))
          ) : (
            <p>No Invoices</p>
          )}
          <Button
            variant="contained"
            onClick={handleClick}
            style={{ backgroundColor: "#05516a" }}
            startIcon={<AddCircleOutlineIcon />}
          >
            Add Invoice
          </Button>
          <br />
          <br />
          <Button
            variant="contained"
            onClick={workForms}
            style={{ backgroundColor: "#05516a" }}
            startIcon={<SummarizeIcon />}
          >
            Work Order
          </Button>
          <br />
          <br />

          <Button
            variant="contained"
            onClick={deposit}
            style={{ backgroundColor: "#05516a" }}
            startIcon={<CreditCardIcon />}
          >
            Deposit
          </Button>
          <br/>
          <br/>
          <Button
            variant="contained"
            onClick={productInfo}
            style={{ backgroundColor: "#05516a" }}
            startIcon={<CreditCardIcon />}
          >
            Product Info
          </Button>

          <br />
          <br />

          <Button
            variant="contained"
            onClick={budget}
            style={{ backgroundColor: "#05516a" }}
          >
            Budget Quote
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

          <PhotoIcon sx={{ width: "80%", fontSize: "60px" }}></PhotoIcon>
        </AccordionSummary>
        <AccordionDetails>
          <DocumentUpload projectId={props.projectId} />
        </AccordionDetails>
      </Accordion>
      <InvoicesPageProject
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        selectedInvoiceId={selectedInvoiceId}
        invoiceInfo={sendInvoiceInfo.invoiceItems}
      />
    </div>
  );
};

export default InvoiceProject;
