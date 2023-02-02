import React from "react";

import MainNavigation from "../Navigation/MainNavigation";
import CreateProjectDetails from "./CreateProjectDetails";
import CreateProjectAddOns from "./CreateProjectAddOns";
import Button from "../UI/Button";

import styles from "./CreateProject.module.css";
import { useRef, useState } from "react";

const CreateProject = () => {
  const [cabinet, setCabinet] = useState("");
  const [tile, setTile] = useState("");
  const [counter, setCounter] = useState("");

  function onCabinetChange(event) {
    if (event.target.value === "true") {
      setCabinet("true");
    } else {
      setCabinet("false");
    }
  }
  function onCounterChange(event) {
    if (event.target.value === "true") {
      setCounter("true");
    } else {
      setCounter("false");
    }
  }
  function onTileChange(event) {
    if (event.target.value === "true") {
      setTile("true");
    } else {
      setTile("false");
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


  function submitHandler(event) {
    event.preventDefault();
    const projectName = projectNameRef.current.value;
    const siteSuperPhone = siteSuperPhoneRef.current.value;
    const siteSuperName = siteSuperPhoneRef.current.value;
    const postalCode = postalCodeRef.current.value;
    const city = cityRef.current.value;
    const address = addressRef.current.value;
    const suite = suiteRef.current.value;
    const province = provinceRef.current.value;

    const obj = {
      projectName,
      projectStatus: true,
      projectCabinetsCondition: cabinet,
      projectTileRemoval: tile, 
      projectCounterRemoval: counter,
      projectAddress: {
        firstLineAddress: address,
        secondLineAddress: suite,
        postalCode,
        city,
        province
      },
      projectSupervisor: {
        siteSuperPhone,
        siteSuperName
      }
    }
    console.log(obj);
  }

  return (
    <React.Fragment>
      <MainNavigation />
      <h1 className={styles.h1}>Create Project</h1>
      <form onSubmit={submitHandler}>
        <CreateProjectDetails 
        projectNameRef={projectNameRef}
        siteSuperNameRef={siteSuperNameRef}
        siteSuperPhoneRef={siteSuperPhoneRef}
        postalCodeRef={postalCodeRef}
        cityRef={cityRef}
        addressRef={addressRef}
        suiteRef={suiteRef}
        provinceRef={provinceRef}/>
        <CreateProjectAddOns 
        onCabinetChange={onCabinetChange}
        onTileChange={onTileChange}
        onCounterChange={onCounterChange}/>
        <Button type="submit">Create Project</Button>
      </form>
    </React.Fragment>
  );
};

export default CreateProject;
