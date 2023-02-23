import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import CardWithRadius from "../UI/CardWithRadius";
import ClientPage from "../ClientPage/ClientPage";
import classes from "../UI/Button.module.css";
import styles from "./SearchInputs.module.css";
import Button from "../UI/Button";
import Grid from "@mui/material/Grid";

import { GetClientById } from "../../services/ClientServices";

const SearchResult = (props) => {
  const nav = useNavigate();

  const fetchData = async () => {
    // const data = await GetClientByFirstName(selectedName);
    const data = await GetClientById(props.clientId);
    localStorage.setItem("clientInfo", JSON.stringify(data));
  };

  const clientSelectedHandler = async () => {
    await fetchData();
    console.log(localStorage.getItem("clientInfo"));
    nav("/clientPage");
  };

  return (
    <React.Fragment>
      <div>
        <Button
          className={` ${classes.searchResults}`}
          onClick={clientSelectedHandler}
        >
          <Grid
            sx={{ textAlign: "left", "padding-left": "10px" }}
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <b>Name</b>
              {props.clientName}
            </Grid>
            <Grid item xs={6}>
              <b>Business Email: </b>
              {props.businessEmail}
            </Grid>
            <Grid item xs={6}>
              <b>Personal Email</b>
              {props.personalEmail}
            </Grid>
            <Grid item xs={6}>
              <b>Phone Number</b>
              {props.phoneNumber}
            </Grid>
          </Grid>
        </Button>
      </div>
    </React.Fragment>
  );
};

export default SearchResult;
