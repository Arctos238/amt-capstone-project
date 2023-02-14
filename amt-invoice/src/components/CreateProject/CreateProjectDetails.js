import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CardWithRadius from "../UI/CardWithRadius";
import styles from "./CreateProjectDetails.module.css";
import classes from "../UI/CardWithRadius.module.css";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import FormControl from "@mui/material/FormControl";

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
  return (
    <div className={styles.container}>
      <div className={styles.parent}>
      <ThemeProvider theme={theme}>
        <div className={styles.left}>
          <CardWithRadius
            className={`${classes.blueCard} ${styles.inputBoxes}`}
          >
            <label className={styles.label}>Project Name:</label>
            <input
              type="text"
              className={styles.transparentInput}
              ref={props.projectNameRef}
            />
          </CardWithRadius>
          
          <FormControl sx={{ m: 1, width: "100%", color: "white"}} variant="standard">
            <TextField sx={{color: "white", bgcolor: "background.main"}}
              type="tel"
              
              placeholder="123-456-7890"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              ref={props.siteSuperPhoneRef}
              id="standard-basic" label="Site Super Phone:" variant="outlined" />
              </FormControl>
          
          <CardWithRadius
            className={`${classes.blueCard} ${styles.inputBoxes}`}
          >
            <label>Postal Code:</label>
            <input
              type="text"
              className={styles.transparentInput}
              ref={props.postalCodeRef}
            />
          </CardWithRadius>
          <CardWithRadius
            className={`${classes.blueCard} ${styles.inputBoxes}`}
          >
            <label>City:</label>
            <input type="text" className={styles.transparentInput} ref={props.cityRef} />
          </CardWithRadius>
        </div>
        <div className={styles.right}>
          <CardWithRadius
            className={`${classes.blueCard} ${styles.inputBoxes}`}
          >
            <label>Site Super Name:</label>
            <input
              type="text"
              className={styles.transparentInput}
              ref={props.siteSuperNameRef}
            />
          </CardWithRadius>
          <CardWithRadius
            className={`${classes.blueCard} ${styles.inputBoxes}`}
          >
            <label>Address:</label>
            <input type="text" className={styles.transparentInput} ref={props.addressRef} />
          </CardWithRadius>
          <CardWithRadius
            className={`${classes.blueCard} ${styles.inputBoxes}`}
          >
            <label>Suite/Building No:</label>
            <input
              type="number"
              className={styles.transparentInput}
              min="0"
              ref={props.suiteRef}
            />
          </CardWithRadius>
          <CardWithRadius
            className={`${classes.blueCard} ${styles.inputBoxes}`}
          >
            <label>Province:</label>
            <input type="text" className={styles.transparentInput} ref={props.provinceRef} />
          </CardWithRadius>
        </div>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default CreateProjectDetails;
