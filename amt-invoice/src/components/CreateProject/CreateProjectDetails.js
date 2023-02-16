import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CardWithRadius from "../UI/CardWithRadius";
import styles from "./CreateProjectDetails.module.css";
import classes from "../UI/CardWithRadius.module.css";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import FormControl from "@mui/material/FormControl";
import { MuiTelInput } from 'mui-tel-input'

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
    },
    background: {
      main: "#05516a"
      ,
    },

    text: {
      main: "#FFFFFF",
    },
  },
});

const CreateProjectDetails = (props) => {


  const [value, setValue] = React.useState("+1")

  const handleChange = (newValue) => {
    setValue(newValue)
  }
  return (
    <div className={styles.container}>
      <div className={styles.parent}>
      <ThemeProvider theme={theme}>
        <div className={styles.left}>
          <CardWithRadius
            className={`${classes.blueCard} ${styles.inputBoxes}`}
          >
            <TextField
            sx={{ width: "100%", color: "white", "& .MuiInputBase-input": {
                width: "calc(100% - 2px)", // 2px is the width of the underline
              }, }}
            id="standard-basic"
            label="Project Name"
            placeholder="Dan's House"
            variant="standard"
            type = "text" 
            inputRef={props.projectNameRef}
            InputLabelProps={{ className: styles.textFieldLabel }}
            InputProps={{
              classes: {
                underline: styles.underline, 
              },
            }}
          />   
            {/* <label className={styles.label}>Project Name:</label>
            <input
              type="text"
              className={styles.transparentInput}
              ref={props.projectNameRef}
            /> */}
          </CardWithRadius>
          
          
            <CardWithRadius
            className={`${classes.blueCard} ${styles.inputBoxes}`}
          >
            <MuiTelInput
            defaultCountry={"ca"}
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            inputRef={props.siteSuperPhoneRef}
            type="tel"
            value={value}
            onChange={handleChange}
            inputProps={{
                className: styles.inputPhone,
            }}
            />
            {/* <label className={styles.label}>Project Name:</label>
            <input
            className={styles.transparentInput}
              type="tel"
              placeholder="123-456-7890"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              ref={props.siteSuperPhoneRef}
            /> */}
          </CardWithRadius>
          
          <CardWithRadius
            className={`${classes.blueCard} ${styles.inputBoxes}`}
          >
            <TextField
            sx={{ width: "100%", color: "white", "& .MuiInputBase-input": {
                width: "calc(100% - 2px)", // 2px is the width of the underline
              }, }}
            id="standard-basic"
            label="Postal Code"
            placeholder="T2E 8K7"
            variant="standard"
            type = "text" 
            inputRef={props.postalCodeRef}
            InputLabelProps={{ className: styles.textFieldLabel }}
            InputProps={{
              classes: {
                underline: styles.underline, 
              },
            }}
          />  
            
            {/* <label>Postal Code:</label>
            <input
              type="text"
              className={styles.transparentInput}
              ref={props.postalCodeRef}
            /> */}
          </CardWithRadius>
          <CardWithRadius
            className={`${classes.blueCard} ${styles.inputBoxes}`}
          >
            <TextField
            sx={{ width: "100%", color: "white", "& .MuiInputBase-input": {
                width: "calc(100% - 2px)", // 2px is the width of the underline
              }, }}
            id="standard-basic"
            label="City"
            placeholder="Dead Man's Flats"
            variant="standard"
            type = "text" 
            inputRef={props.cityRef}
            InputLabelProps={{ className: styles.textFieldLabel }}
            InputProps={{
              classes: {
                underline: styles.underline, 
              },
            }}
          /> 
            {/* <label>City:</label>
            <input type="text" className={styles.transparentInput} ref={props.cityRef} /> */}
          </CardWithRadius>
        </div>
        <div className={styles.right}>
          <CardWithRadius
            className={`${classes.blueCard} ${styles.inputBoxes}`}
          >
            <TextField
            sx={{ width: "100%", color: "white", "& .MuiInputBase-input": {
                width: "calc(100% - 2px)", // 2px is the width of the underline
              }, }}
            id="standard-basic"
            label="Site Super Name"
            placeholder="Bob the Builder"
            variant="standard"
            type = "text" 
            inputRef={props.siteSuperNameRef}
            InputLabelProps={{ className: styles.textFieldLabel }}
            InputProps={{
              classes: {
                underline: styles.underline, 
              },
            }}
          />
            {/* <label>Site Super Name:</label>
            <input
              type="text"
              className={styles.transparentInput}
              ref={props.siteSuperNameRef}
            /> */}
          </CardWithRadius>
          <CardWithRadius
            className={`${classes.blueCard} ${styles.inputBoxes}`}
          >
            <TextField
            sx={{ width: "100%", color: "white", "& .MuiInputBase-input": {
                width: "calc(100% - 2px)", // 2px is the width of the underline
              }, }}
            id="standard-basic"
            label="Address"
            placeholder="2020 Pegasus Rd NE"
            variant="standard"
            type = "text" 
            inputRef={props.addressRef}
            InputLabelProps={{ className: styles.textFieldLabel }}
            InputProps={{
              classes: {
                underline: styles.underline, 
              },
            }}
          />
            {/* <label>Address:</label>
            <input type="text" className={styles.transparentInput} ref={props.addressRef} /> */}
          </CardWithRadius>
          <CardWithRadius
            className={`${classes.blueCard} ${styles.inputBoxes}`}
          >
            <TextField
            sx={{ width: "100%", color: "white", "& .MuiInputBase-input": {
                width: "calc(100% - 2px)", // 2px is the width of the underline
              }, }}
            id="standard-basic"
            label="Building Number"
            variant="standard"
            type="number" 
            min="0"
            inputRef={props.suiteRef}
            InputLabelProps={{ className: styles.textFieldLabel }}
            InputProps={{
              classes: {
                underline: styles.underline, 
              },
            }}
          />
            {/* <label>Suite/Building No:</label>
            <input
              type="number"
              className={styles.transparentInput}
              min="0"
              ref={props.suiteRef}
            /> */}
          </CardWithRadius>
          <CardWithRadius
            className={`${classes.blueCard} ${styles.inputBoxes}`}
          >
            <TextField
            sx={{ width: "100%", color: "white", "& .MuiInputBase-input": {
                width: "calc(100% - 2px)", // 2px is the width of the underline
              }, }}
            id="standard-basic"
            label="Province"
            placeholder="AB"
            variant="standard"
            type = "text" 
            inputRef={props.provinceRef}
            InputLabelProps={{ className: styles.textFieldLabel }}
            InputProps={{
              classes: {
                underline: styles.underline, 
              },
            }}
          />
            {/* <label>Province:</label>
            <input type="text" className={styles.transparentInput} ref={props.provinceRef} /> */}
          </CardWithRadius>
        </div>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default CreateProjectDetails;
