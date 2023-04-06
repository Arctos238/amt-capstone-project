import React from "react";
import Button from "../UI/Button";
import styles from "./EditClient.module.css";
import { useRef } from "react";
import { UpdateClient, DeleteClientById } from "../../services/ClientServices";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import CardWithRadius from "../UI/CardWithRadius";
import classes from "../UI/CardWithRadius.module.css";
import TextField from "@mui/material/TextField";
import { MuiTelInput } from "mui-tel-input";
import { FormControl } from "@mui/material";

const EditClient = () => {
  const clientNameRef = useRef();
  const emailPersonalRef = useRef();
  const emailBusinessRef = useRef();
  const phoneNumberRef = useRef();
  const nav = useNavigate();

  let clientInfo = localStorage.getItem("clientInfo");
  let toArray = JSON.parse(clientInfo);
  const [value, setValue] = React.useState(
    toArray[0].clientContact.personalContactNumber
  );

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const deleteHandler = async () => {
    let clientInfo = localStorage.getItem("clientInfo");
    let toArray = JSON.parse(clientInfo);
    await DeleteClientById(toArray[0].clientId);

    nav("/home");
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const clientName = clientNameRef.current.value;
    const emailPersonal = emailPersonalRef.current.value;
    const emailBusiness = emailBusinessRef.current.value;
    const phoneNumber = phoneNumberRef.current.value;

    console.log(clientNameRef.current);
    let clientInfo = localStorage.getItem("clientInfo");
    let toArray = JSON.parse(clientInfo);
    const obj = {
      clientId: toArray[0].clientId,
      clientName: clientName,
      clientContact: {
        personalEmail: emailPersonal,
        businessEmail: emailBusiness,
        personalContactNumber: phoneNumber,
      },
    };

    console.log(obj);
    const data = await UpdateClient(obj);

    if (data != null) {
      nav("/home");
    }
  };

  return (
    <div>
      <h1 className={styles.h1}>Edit Client</h1>
      <FormControl className={styles.form}>
        <div className={styles.center}>
          <CardWithRadius
            className={`${classes.blueCard} ${styles.inputBoxes}`}
          >
            <TextField
              sx={{
                width: "100%",
                color: "white",
                "& .MuiInputBase-input": {
                  width: "calc(100% - 2px)", // 2px is the width of the underline
                },
              }}
              id="standard-basic"
              label="Client Name"
              placeholder="Candler Bing"
              variant="standard"
              type="text"
              defaultValue={toArray[0].clientName}
              inputRef={clientNameRef}
              InputLabelProps={{ className: styles.textFieldLabel }}
              InputProps={{
                classes: {
                  underline: styles.underline,
                },
              }}
            />
            {/* Keeping this just in case what is above doesn't work  */}
            {/* <label>Client Name:</label>
            <input type = "text" className={styles.inputBox}
            ref= {props.clientNameRef}
            /> */}
          </CardWithRadius>

          <CardWithRadius
            className={`${classes.blueCard} ${styles.inputBoxes}`}
          >
            <TextField
              sx={{
                width: "100%",
                color: "white",
                "& .MuiInputBase-input": {
                  width: "calc(100% - 2px)", // 2px is the width of the underline
                },
              }}
              id="standard-basic"
              label="Email Personal"
              placeholder="RonSwanson@no.com"
              variant="standard"
              type="text"
              defaultValue={toArray[0].clientContact.personalEmail}
              inputRef={emailPersonalRef}
              InputLabelProps={{ className: styles.textFieldLabel }}
              InputProps={{
                classes: {
                  underline: styles.underline,
                },
              }}
            />
            {/* Keeping this just in case what is above doesn't work 
            <label>Email Personal:</label>
            <input type = "text" className={styles.inputBox}
            ref= {props.emailPersonalRef}
            /> */}
          </CardWithRadius>
          <CardWithRadius
            className={`${classes.blueCard} ${styles.inputBoxes}`}
          >
            <TextField
              sx={{
                width: "100%",
                color: "white",
                "& .MuiInputBase-input": {
                  width: "calc(100% - 2px)", // 2px is the width of the underline
                },
              }}
              id="standard-basic"
              label="Email Business"
              placeholder="Business@work.ca"
              variant="standard"
              type="text"
              defaultValue={toArray[0].clientContact.businessEmail}
              inputRef={emailBusinessRef}
              InputLabelProps={{ className: styles.textFieldLabel }}
              InputProps={{
                classes: {
                  underline: styles.underline,
                },
              }}
            />
            {/* Keeping this just in case what is above doesn't work
            <label>Email Business:</label>
            <input type = "text" className={styles.inputBox}
            ref= {props.emailBusinessRef}
            /> */}
          </CardWithRadius>
          <CardWithRadius
            className={`${classes.blueCard} ${styles.inputBoxes}`}
          >
            <MuiTelInput
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              inputRef={phoneNumberRef}
              type="tel"
              value={value}
              onChange={handleChange}
            />

            {/* Keeping just in case
            <label>Phone Number:</label>
            <input  type="tel" 
              className={styles.inputBox}
              placeholder="123-456-7890"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              ref= {props.phoneNumberRef}
            /> */}
          </CardWithRadius>
        </div>
        <div className={styles.parent}>
          <div className={styles.buttonContainer}>
            <Button className={styles.button} onClick={deleteHandler}>
              Delete
            </Button>
          </div>
          <div className={styles.buttonContainer}>
            <Button className={styles.button} onClick={submitHandler}>
              Submit
            </Button>
          </div>
        </div>
      </FormControl>
    </div>
  );
};

export default EditClient;
