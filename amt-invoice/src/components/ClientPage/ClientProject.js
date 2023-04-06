import { React, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import CardWithRadius from "../UI/CardWithRadius";
import { GetProjectById } from "../../services/ProjectServices";
import { UpdateProject } from "../../services/ProjectServices";
import classes from "../UI/CardWithRadius.module.css";
import styles from "./ClientProject.module.css";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { DeleteProjectById } from "../../services/ProjectServices";

const ClientProject = (props) => {
  const nav = useNavigate();
  const [selectedProject, setSelectedProject] = useState({});

  function handleClick() {
    localStorage.setItem("currentProjectId", (props.projectId));
    nav("/invoices");
  }

  const fetchData = async () => {
    const data = await GetProjectById(props.projectId);
    console.log(data);
    setSelectedProject(data);
  }

  const updateProject = async (obj) => {
    const data = await UpdateProject(obj);
  }

  const changeStatusHandler = () => {
    fetchData();

    const projectContractor = selectedProject.projectContractor;
    const quotes = selectedProject.quotes;
    const images = selectedProject.images;
    const purchaseOrders = selectedProject.purchaseOrders;
    const depositForms = selectedProject.depositForms;
    const invoices = selectedProject.invoices;


    const toChangeJson = {
      projectId: selectedProject.projectId,
      projectName: selectedProject.projectName,
      employeeName: selectedProject.employeeName,
      projectStatus: true,
      projectCabinetsCondition: selectedProject.projectCabinetsCondition,
      projectCounterRemoval: selectedProject.projectCounterRemoval,
      projectTileRemoval: selectedProject.projectTileRemoval,
      projectAddress: selectedProject.projectAddress,
      projectSupervisor: selectedProject.projectAddress,
      projectContractor,
      quotes,
      images,
      purchaseOrders,
      depositForms,
      invoices,
      clientId: selectedProject.clientId
    }
    updateProject(toChangeJson);
    console.log(JSON.stringify(toChangeJson));
  }

  const deleteProjectHandler = async (id) => {
    await DeleteProjectById(id);
  };

  return (
    <CardWithRadius className={classes.blueCard}>
      <div className={styles.parent}>
        <div className={styles.left}>
          <h3>Project Name: {props.projectName}</h3>
        </div>
        <div className={styles.middle}>
          <h3>Project ID: {props.projectId}</h3>
        </div>
        <div className={styles.right}>
          <h3>Project Status: {props.projectStatus}</h3>
        </div>
      </div>


      <button className={styles.viewButton} onClick={handleClick}>View</button>
      <button className={styles.statusButton} onClick={changeStatusHandler}>Change Status</button>
      <IconButton
        aria-label="delete"
        size="medium"
        onClick={() => deleteProjectHandler(props.projectId)}
      >
        <DeleteIcon
         
          sx={{ color: "#fabd44", padding: 0, fontSize: 28 }}
        />
      </IconButton>




    </CardWithRadius>
  );
};

export default ClientProject;
