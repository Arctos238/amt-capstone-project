import React from "react";

import CreateProjectDetails from "./CreateProjectDetails";
import CreateProjectAddOns from "./CreateProjectAddOns";
import Button from "../UI/Button";
import { CreateNewProject } from "../../services/ProjectServices";

import styles from "./CreateProject.module.css";
import { useRef, useState } from "react";

const CreateProject = () => {
  const [cabinet, setCabinet] = useState();
  const [tile, setTile] = useState();
  const [counter, setCounter] = useState();

  function onCabinetChange(event) {
    if (event.target.value === true) {
      setCabinet(true);
    } else {
      setCabinet(false);
    }
  }
  function onCounterChange(event) {
    if (event.target.value === true) {
      setCounter(true);
    } else {
      setCounter(false);
    }
  }
  function onTileChange(event) {
    if (event.target.value === true) {
      setTile(true);
    } else {
      setTile(false);
    }
  }

  const projectNameRef = useRef();
  const siteSuperPhoneRef = useRef();
  const siteSuperNameRef = useRef();
  const postalCodeRef = useRef();
  const cityRef = useRef();
  const addressRef = useRef();
  const suiteRef = useRef();
  const provinceRef = useRef();

  async function submitHandler(event) {
    event.preventDefault();

    const projectId = 1;
    const projectName = projectNameRef.current.value;
    const projectStatus = true;
    const siteSuperPhone = siteSuperPhoneRef.current.value;
    const siteSuperName = siteSuperNameRef.current.value;
    const postalCode = postalCodeRef.current.value;
    const city = cityRef.current.value;
    const address = addressRef.current.value;
    const suite = suiteRef.current.value;
    const province = provinceRef.current.value;

    const obj = {
      projectName: projectName,
      projectStatus,
      projectCabinetsCondition: cabinet,
      projectCounterRemoval: counter,
      projectTileRemoval: tile,
      projectAddress: {
        projectAddressId: 1,
        firstLineAddress: address,
        secondLineAddress: suite,
        postalCode: postalCode,
        city: city,
        province: province
      },
      projectSupervisor: {
        projectSupervisorId: 1,
        projectSupervisorName: siteSuperName,
        projectSupervisorNumber: siteSuperPhone,
      },
      quotes: [],
      images: [],
      purchaseOrders: [],
      depositForms: [],
      invoices: [],
      client: { clientId: 1 },
    };
    console.log(JSON.stringify(obj));
    const data = await CreateNewProject(obj);
    

    if (data != null) {
      alert("its probably up there");
    }
  }

  return (
    <React.Fragment>
      <h1 className={styles.h1}>Create Project</h1>
      <div className={styles.container}>
        <form className={styles.form}>
          <CreateProjectDetails
            projectNameRef={projectNameRef}
            siteSuperNameRef={siteSuperNameRef}
            siteSuperPhoneRef={siteSuperPhoneRef}
            postalCodeRef={postalCodeRef}
            cityRef={cityRef}
            addressRef={addressRef}
            suiteRef={suiteRef}
            provinceRef={provinceRef}
          />
          <CreateProjectAddOns
            onCabinetChange={onCabinetChange}
            onTileChange={onTileChange}
            onCounterChange={onCounterChange}
          />

          <Button
            type="submit"
            onClick={submitHandler}
            className={styles.button}
          >
            Create Project
          </Button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default CreateProject;
