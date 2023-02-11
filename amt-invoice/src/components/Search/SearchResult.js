import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import CardWithRadius from "../UI/CardWithRadius";
import ClientPage from "../ClientPage/ClientPage";
import classes from "../UI/CardWithRadius.module.css";
import styles from "./SearchInputs.module.css";
import Button from "../UI/Button";

import { GetClientByFirstName } from "../../services/ClientServices";

const SearchResult = (props) => {
  const [selectedName, setSelectedName] = useState("");
  let name = props.clientName;
  const clientSelectedHandler = () => {
    setSelectedName(props.clientName);

    
  };
  useEffect(() => {
    const fetchData = async () => {
      const data = await GetClientByFirstName(selectedName);

      localStorage.setItem("clientInfo", JSON.stringify(data));
    };

    if (selectedName) {
      fetchData();
    }
  }, [selectedName]);

  return (
    <React.Fragment>
      <div>
        <Link to="/clientPage">
        <Button className={classes.blueCard} onClick={clientSelectedHandler}>
          {props.clientName}
        </Button>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default SearchResult;
