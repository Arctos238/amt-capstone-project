import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CardWithRadius from "../UI/CardWithRadius";
import ClientPage from "../ClientPage/ClientPage";
import classes from "../UI/CardWithRadius.module.css";
import styles from "./SearchInputs.module.css";
import Button from "../UI/Button";

import { GetClientById } from "../../services/ClientServices";

const SearchResult = (props) => {
  const [selectedName, setSelectedName] = useState("");
  // const [loading, setLoading] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const clientSelectedHandler = () => {
    setSelectedId(props.clientId);
    console.log("Selected ID: " + selectedId);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (selectedId) {
        const data = await GetClientById(selectedId);
        // setLoading(true);
        console.log(JSON.stringify(data));
        if ("clientInfo" in localStorage) {
          console.log("CLIENT INFO " + localStorage.getItem("clientInfo"));
          localStorage.removeItem("clientInfo");
        }
        console.log("-----------");
        localStorage.setItem("clientInfo", JSON.stringify(data));
      }
    };

    fetchData();
  }, [selectedId]);

  return (
    <React.Fragment>
      <div>
        {/* {loading ? (
          <Link to="/clientPage">
            <Button
              key={props.key}
              className={classes.blueCard}
              onClick={clientSelectedHandler}
            >
              {props.clientName}
            </Button>
          </Link>
        ) : (
          <></>
        )} */}
        <Link to="/clientPage">
            <Button
              key={props.key}
              className={classes.blueCard}
              onClick={clientSelectedHandler}
            >
              {props.clientName}
            </Button>
          </Link>
      </div>
    </React.Fragment>
  );
};

export default SearchResult;