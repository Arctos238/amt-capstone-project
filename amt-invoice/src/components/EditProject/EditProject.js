import React from "react";
import { useNavigate } from "react-router-dom";
import EditProjectDetails from "./EditProjectDetails";
import EditProjectAddOns from "./EditProjectAddOns";
import Button from "../UI/Button";
import { UpdateProject } from "../../services/ProjectServices";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import styles from "./EditProject.module.css";
import BackButton from "../BackButton/BackButton";
import { useRef, useState, useEffect } from "react";

const EditProject = () => {
  const navigate = useNavigate();
  const [isProjectUploaded, setIsProjectUploaded] = useState(false);
  const [isInputEmpty, setIsInputEmpty] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsProjectUploaded(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [isProjectUploaded]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInputEmpty(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [isInputEmpty]);

  let clientInfo;
  let toArray;
  let project = JSON.parse(localStorage.getItem("project"));
  if ("clientInfo" in localStorage) {
    clientInfo = localStorage.getItem("clientInfo");
    toArray = JSON.parse(clientInfo);
  }
  const theSelectedClientId = toArray[0].clientId;

  const projectNameRef = useRef();
  const siteSuperPhoneRef = useRef();
  const siteSuperNameRef = useRef();
  const postalCodeRef = useRef();
  const cityRef = useRef();
  const addressRef = useRef();
  const suiteRef = useRef();
  const provinceRef = useRef();
  const projectCabinetsConditionRef = useRef();
  const projectCounterRemovalRef = useRef();
  const projectTileRemovalRef = useRef();
  const projectSupervisorEmailRef = useRef();
  const projectContractorNameRef = useRef();
  const projectContractorNumberRef = useRef();
  const projectContractorEmailRef = useRef();

  const user = JSON.parse(localStorage.getItem("user"));
  const employeeName = user.employeeFirstName + " " + user.employeeLastName;

  async function submitHandler(event) {
    event.preventDefault();
    const projectName = projectNameRef.current.value;
    const projectStatus = true;
    const siteSuperPhone = siteSuperPhoneRef.current.value;
    const siteSuperName = siteSuperNameRef.current.value;
    const postalCode = postalCodeRef.current.value;
    const city = cityRef.current.value;
    const address = addressRef.current.value;
    const suite = suiteRef.current.value;
    const province = provinceRef.current.value;
    const projectCounterRemoval = projectCounterRemovalRef.current;
    const projectTileRemoval = projectTileRemovalRef.current;
    const projectCabinetsCondition = projectCabinetsConditionRef.current;
    const projectSupervisorEmail = projectSupervisorEmailRef.current.value;
    const projectContractorEmail = projectContractorEmailRef.current.value;
    const projectContractorName = projectContractorNameRef.current.value;
    const projectContractorNumber = projectContractorNumberRef.current.value;

    console.log(projectTileRemoval);
    if (
      projectName === null ||
      projectName === "" ||
      projectStatus === null ||
      projectStatus === "" ||
      siteSuperPhone === null ||
      siteSuperPhone === "" ||
      siteSuperName === null ||
      siteSuperName === "" ||
      postalCode === null ||
      postalCode === "" ||
      city === null ||
      city === "" ||
      province === null ||
      province === "" ||
      projectCounterRemoval === null ||
      projectCounterRemoval === "" ||
      projectTileRemoval === null ||
      projectTileRemoval === "" ||
      projectCabinetsCondition === null ||
      projectCabinetsCondition === ""
    ) {
      setIsInputEmpty(true);
    } else {
      const obj = {
        projectId: project.projectId,
        projectName: projectName,
        projectStatus,
        projectCabinetsCondition,
        projectCounterRemoval,
        projectTileRemoval,
        projectAddress: {
          projectAddressId: project.projectAddress.projectAddressId,
          firstLineAddress: address,
          secondLineAddress: suite,
          postalCode: postalCode,
          city: city,
          province: province,
        },
        projectSupervisor: {
          projectSupervisorId: project.projectSupervisor.projectSupervisorId,
          projectSupervisorName: siteSuperName,
          projectSupervisorNumber: siteSuperPhone,
          projectSupervisorEmail: projectSupervisorEmail,
        },
        projectContractor: {
          projectContractorName,
          projectContractorEmail,
          projectContractorNumber,
        },
        quotes: project.quotes,
        images: project.images,
        purchaseOrders: project.purchaseOrders,
        depositForms: project.depositForms,
        invoices: project.invoices,
        client: { clientId: theSelectedClientId },
        employeeName,
      };

      console.log(JSON.stringify(obj));
      const data = await UpdateProject(obj);
      navigate("/invoices");
    }
  }

  return (
    <React.Fragment>
      <BackButton />
      <h1 className={styles.h1}>Edit Project</h1>
      <div className={styles.container}>
        {isProjectUploaded ? (
          <div className={styles.errorBox}>
            <Stack sx={{ width: 1100, margin: "auto" }} spacing={2}>
              <Alert severity="success">
                {projectNameRef.current.value} - project added!
              </Alert>
            </Stack>
          </div>
        ) : (
          <></>
        )}
        {isInputEmpty ? (
          <div className={styles.errorBox}>
            <Stack sx={{ width: 1100, margin: "auto" }} spacing={2}>
              <Alert severity="error">Please fill up the form</Alert>
            </Stack>
          </div>
        ) : (
          <></>
        )}
        <form className={styles.form}>
          <EditProjectDetails
            projectNameRef={projectNameRef}
            siteSuperNameRef={siteSuperNameRef}
            siteSuperPhoneRef={siteSuperPhoneRef}
            postalCodeRef={postalCodeRef}
            cityRef={cityRef}
            addressRef={addressRef}
            suiteRef={suiteRef}
            provinceRef={provinceRef}
            projectSupervisorEmailRef={projectSupervisorEmailRef}
            projectContractorEmailRef={projectContractorEmailRef}
            projectContractorNameRef={projectContractorNameRef}
            projectContractorNumberRef={projectContractorNumberRef}
          />
          <EditProjectAddOns
            projectTileRemovalRef={projectTileRemovalRef}
            projectCounterRemovalRef={projectCounterRemovalRef}
            projectCabinetsConditionRef={projectCabinetsConditionRef}
          />

          <Button
            type="submit"
            onClick={submitHandler}
            className={styles.button}
          >
            Update Project
          </Button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default EditProject;
