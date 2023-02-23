import React, { useEffect, useRef, useState } from "react";
import CardWithRadius from "../UI/CardWithRadius";
import Button from "../UI/Button";
import buttonClass from "../UI/Button.module.css";
import SearchResult from "./SearchResult";
import { GetClientByFirstName } from "../../services/ClientServices";
import classes from "../UI/CardWithRadius.module.css";
import styles from "./SearchInputs.module.css";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Card from "../UI/Card";
import cardClass from "../UI/Card.module.css";
import SearchIcon from "@mui/icons-material/Search";
import Grid from "@mui/material/Grid";

const SearchInputs = (props) => {
  const [isValidSearch, setIsValidSearch] = useState(true);
  const [showRadioButtons, setShowRadioButtons] = useState(false);
  const [selectedOption, setSelectedOption] = useState("invoiceId");
  const [searchInput, setSearchInput] = useState("");
  const [results, setResults] = useState([]);
  const [noResult, setNoResult] = useState(false);

  const handleOptionChange = (e) => {
    setIsValidSearch(true);
    setSelectedOption(e.target.value);
  };

  const handleSearchInput = (e) => {
    setNoResult(false);
    setIsValidSearch(true);
    setSearchInput(e.target.value);
    setResults([]);
  };

  const fetchData = async () => {
    try {
      const data = await GetClientByFirstName(searchInput);
      setResults(data);
    } catch (error) {
      console.log(error);
      setNoResult(true);
    }
  };

  const findHandler = () => {
    if (searchInput === "") {
      setIsValidSearch(false);
    } else {
      try {
        fetchData();
      } catch (error) {
        console.log(error);
      }
    }
    console.log(results.length);
  };

  return (
    <React.Fragment>
      {!isValidSearch && selectedOption === "name" ? (
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert severity="error">Please search for a name</Alert>
        </Stack>
      ) : (
        <></>
      )}
      {!isValidSearch && selectedOption === "phoneNumber" ? (
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert severity="error">
            Please search for a phone number (123) 4567890
          </Alert>
        </Stack>
      ) : (
        <></>
      )}
      {!isValidSearch && selectedOption === "invoiceId" ? (
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert severity="error">Please search for an invoice ID</Alert>
        </Stack>
      ) : (
        <></>
      )}
      <div className={styles.center}>
        <CardWithRadius className={`${classes.blueCard} ${styles.inputBoxes}`}>
          <FormControl>
            <label>Search With</label>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="name"
                control={
                  <Radio
                    sx={{
                      color: "white",
                      "&.Mui-checked": {
                        color: "#fabd44",
                      },
                    }}
                  />
                }
                onChange={handleOptionChange}
                label="Client Name"
              />
              <FormControlLabel
                value="invoiceId"
                control={
                  <Radio
                    sx={{
                      color: "white",
                      "&.Mui-checked": {
                        color: "#fabd44",
                      },
                    }}
                  />
                }
                onChange={handleOptionChange}
                label="Invoice ID"
              />
              <FormControlLabel
                value="phoneNumber"
                control={
                  <Radio
                    sx={{
                      color: "white",
                      "&.Mui-checked": {
                        color: "#fabd44",
                      },
                    }}
                  />
                }
                onChange={handleOptionChange}
                label="Phone Number"
              />
            </RadioGroup>
          </FormControl>
        </CardWithRadius>
        <CardWithRadius className={`${classes.blueCard} ${styles.inputBoxes}`}>
          <Grid container spacing={0}>
            <Grid item xs={11}>
              <label>Search:</label>
              <input
                type="text"
                className="SearchType"
                required
                value={searchInput}
                onChange={handleSearchInput}
              />
            </Grid>
            <Grid item xs={1}>
              <Button className={buttonClass.searchIcon} onClick={findHandler}>
                <SearchIcon></SearchIcon>
              </Button>
            </Grid>
          </Grid>
        </CardWithRadius>
      </div>
      <Card className={cardClass.resultBox}>
        {noResult ? "No result" : <></>}
        {results.map((results) => (
          <Stack direction="row">
            <SearchResult
              key={results.clientId}
              clientName={results.clientName}
              clientId={results.clientId}
              personalEmail={results.clientContact.personalEmail}
              phoneNumber={results.clientContact.personalContactNumber}
              businessEmail={results.clientContact.businessEmail}
            />
          </Stack>
        ))}
      </Card>
    </React.Fragment>
  );
};

export default SearchInputs;
