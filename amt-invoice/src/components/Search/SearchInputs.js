import React, { useEffect, useRef, useState } from "react";
import CardWithRadius from "../UI/CardWithRadius";
import Button from "../UI/Button";
import SearchResult from "./SearchResult";
import { GetClientByFirstName } from "../../services/ClientServices";
import classes from "../UI/CardWithRadius.module.css";
import styles from "./SearchInputs.module.css";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const SearchInputs = (props) => {
  const [isValidSearch,setIsValidSearch] = useState(true);
  const [showRadioButtons, setShowRadioButtons] = useState(false);
  const [selectedOption, setSelectedOption] = useState("invoiceId");
  const [searchInput, setSearchInput] = useState("");
  const [results, setResults] = useState([]);

  const handleOptionChange = (e) => {
    setIsValidSearch(true);
    setSelectedOption(e.target.value);
    console.log(selectedOption);
  };

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetClientByFirstName(searchInput);

      localStorage.setItem("clientInfo", JSON.stringify(data));
    };

    if (searchInput) {
      fetchData();
    }
  }, [searchInput]);

  const findHandler = () => {
    if(searchInput === ""){
      setIsValidSearch(false);
    }

    if ("clientInfo" in localStorage) {
      let clientInfo = localStorage.getItem("clientInfo");
      let toArray = JSON.parse(clientInfo);
      setResults(toArray);
    } else {
      setResults([]);
    }
  };
  
  return (
    <React.Fragment>
      {!isValidSearch  && selectedOption==="name" ? (
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert severity="error">
              Please search for a name
            </Alert>
          </Stack>
        ) : <></>}
      {!isValidSearch  && selectedOption==="phoneNumber" ? (
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert severity="error">
              Please search for a phone number (123) 4567890
            </Alert>
          </Stack>
        ) : <></>}
      {!isValidSearch  && selectedOption==="invoiceId" ? (
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert severity="error">
              Please search for an invoice ID
            </Alert>
          </Stack>
        ) : <></>}
      <div className={styles.center}>
        <CardWithRadius className={`${classes.blueCard} ${styles.inputBoxes}`}>
          <input
            type="radio"
            value="invoiceId"
            id="invoiceId"
            name="selectedOption"
            checked={selectedOption === "invoiceId"}
            onChange={handleOptionChange}
          />
          <label>Invoice ID</label>

          <br />

          <input
            type="radio"
            value="phoneNumber"
            name="selectedOption"
            id="phoneNumber"
            checked={selectedOption === "phoneNumber"}
            onChange={handleOptionChange}
          />
          <label>Client Phone Number</label>
          <br />

          <input
            type="radio"
            value="name"
            name="selectedOption"
            id="name"
            checked={selectedOption === "name"}
            onChange={handleOptionChange}
          />
          <label>Client Name</label>
        </CardWithRadius>
        <CardWithRadius className={`${classes.blueCard} ${styles.inputBoxes}`}>
          <label>Search:</label>
          <input
            type="text"
            className="SearchType"
            required
            value={searchInput}
            onChange={handleSearchInput}
          />
        </CardWithRadius>
      </div>

      <Button className={classes.yellowCard} onClick={findHandler}>
        Find
      </Button>

      {results.map((results) => (
        <SearchResult clientName={results.clientName} clientId={results.clientId}/>
        
      ))}

    </React.Fragment>
  );
};

export default SearchInputs;
