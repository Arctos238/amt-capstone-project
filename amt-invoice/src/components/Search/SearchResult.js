import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import CardWithRadius from "../UI/CardWithRadius";
import ClientPage from "../ClientPage/ClientPage";
import classes from "../UI/CardWithRadius.module.css";
import styles from "./SearchInputs.module.css";
import Button from "../UI/Button";

import { GetClientById } from "../../services/ClientServices";

const SearchResult = (props) => {

  const nav = useNavigate();

  const fetchData = async () => {
    // const data = await GetClientByFirstName(selectedName);
    const data = await GetClientById(props.clientId);
    localStorage.setItem("clientInfo", JSON.stringify(data));
  };

  const clientSelectedHandler =async () => {
    await fetchData();
    console.log(localStorage.getItem('clientInfo'));
    nav("/clientPage")
  };




  return (
    <React.Fragment>
      <div>
          <Button
            className={classes.blueCard}
            onClick={clientSelectedHandler}
          >
            {props.clientName}
          </Button>
      </div>
    </React.Fragment>
  );
};

export default SearchResult;
