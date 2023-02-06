import React from "react";

import MainNavigation from "../Navigation/MainNavigation";
import CreateClientDetails from "./CreateClientDetails";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./CreateClientPage.module.css";
import classes from "../UI/Button.module.css";
import { useRef} from "react";

const CreateClient = () => {

  const clientNameRef = useRef();
  const emailPersonalRef = useRef();
  const emailBusinessRef = useRef();
  const phoneNumberRef = useRef();

  function submitHandler(event){
    event.preventDefault();
    const clientName = clientNameRef.current.value;
    const emailPersonal = emailPersonalRef.current.value;
    const emailBusiness = emailBusinessRef.current.value;
    const phoneNumber = phoneNumberRef.current.value;
    
    const obj = {
      clientName,
      emailPersonal,
      emailBusiness,
      phoneNumber,
    };
    console.log(obj);
  }
  
  return (
    <div className={styles.createClient}>
      
      <h1 className={styles.h1}>Client Creator</h1>
      <form className={styles.form}>
      <CreateClientDetails 
      clientNameRef = {clientNameRef}
      emailPersonalRef = {emailPersonalRef}
      emailBusiness = {emailBusinessRef}
      phoneNumber = {phoneNumberRef}
      />
      <Button className={classes.button}type="submit">Create Client</Button>
      </form>
    </div>
  );
};

export default CreateClient;