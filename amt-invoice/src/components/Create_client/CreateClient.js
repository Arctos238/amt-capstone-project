import React from "react";

import CreateClientDetails from "./CreateClientDetails";
import Button from "../UI/Button";
import styles from "./CreateClientPage.module.css";
import { useRef } from "react";
import { CreateNewClient } from "../../services/ClientServices";
import { useNavigate } from "react-router-dom";

const CreateClient = () => {
  const clientNameRef = useRef();
  const emailPersonalRef = useRef();
  const emailBusinessRef = useRef();
  const phoneNumberRef = useRef();
  const nav = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault();
    const clientName = clientNameRef.current.value;
    const emailPersonal = emailPersonalRef.current.value;
    const emailBusiness = emailBusinessRef.current.value;
    const phoneNumber = phoneNumberRef.current.value;

    const obj = {
      clientName: clientName,
      clientContact: {
        personalEmail: emailPersonal,
        businessEmail: emailBusiness,
        personalContactNumber: phoneNumber,
      },
    };

    console.log(obj);
    const data = await CreateNewClient(obj);

    if (data != null) {
      nav("/home");
    }
  };

  return (
    <div>
      <h1 className={styles.h1}>Create Client</h1>
      <div className={styles.form}>
        <CreateClientDetails
          clientNameRef={clientNameRef}
          emailPersonalRef={emailPersonalRef}
          emailBusinessRef={emailBusinessRef}
          phoneNumberRef={phoneNumberRef}
        />
        <Button className={styles.button} onClick={submitHandler}>
          Create Client
        </Button>
      </div>
    </div>
  );
};

export default CreateClient;
