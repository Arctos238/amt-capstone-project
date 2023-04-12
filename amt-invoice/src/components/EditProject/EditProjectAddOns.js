import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CardWithRadius from "../UI/CardWithRadius";
import styles from "./EditProjectAddOns.module.css";
import classes from "../UI/CardWithRadius.module.css";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
    },
    background: {
      main: "#fabd44",
    },

    text: {
      main: "#FFFFFF",
    },
  },
});


const EditProjectAddOns = (props) => {
  let project = JSON.parse(localStorage.getItem('project'));
  const [alignment, setAlignment] = React.useState(project.projectCabinetsCondition + "");
  

  //cabinet 
  const handleChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
      props.projectCabinetsConditionRef.current = newAlignment;
    }
  };

  const [alignment2, setAlignment2] = React.useState(project.projectCounterRemoval + "");

  //counter removal
  const handleChange2 = (event, newAlignment2) => {
    if (newAlignment2 !== null) {
    setAlignment2(newAlignment2);
    props.projectCounterRemovalRef.current = newAlignment2;
    }
  };

  const [alignment3, setAlignment3] = React.useState(project.projectTileRemoval + "");

  //tile
  const handleChange3 = (event, newAlignment3) => {
    if (newAlignment3 !== null) {
    setAlignment3(newAlignment3);
    props.projectTileRemovalRef.current = newAlignment3;
    }
  };

  return (
    <div className={styles.addOnPart}>
      <ThemeProvider theme={theme}>
      <CardWithRadius className={classes.blueCard}>
        <div className={styles.parent}>
          <div className={styles.label}>
            <label className={styles.label}>Cabinet:</label>
          </div>
          <ToggleButtonGroup
          sx={{color: "white"}}
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
          >
          <ToggleButton className="new" name="cabinet" value="true" onChange={props.onCabinetChange} sx={{color: "white"}} >New</ToggleButton>
          <ToggleButton className="existing" name="cabinet" value="false" onChange={props.onCabinetChange} sx={{color: "white"}}>Existing</ToggleButton>
          
          </ToggleButtonGroup>
          
        </div>
      </CardWithRadius>

      <CardWithRadius className={classes.blueCard}>
        <div className={styles.parent}>
          <div className={styles.label}>
            <label>Counter Removal:</label>
          </div>
          <ToggleButtonGroup
          sx={{color: "white"}}
          color="primary"
          value={alignment2}
          exclusive
          onChange={handleChange2}
          aria-label="Platform"
          >
          <ToggleButton  className="amt" name="counter_removal" value="true" onChange={props.onCabinetChange} sx={{color: "white"}}>AMT</ToggleButton>
          <ToggleButton  className="ther" name="counter_removal" value="false" onChange={props.onCabinetChange} sx={{color: "white"}}>Other</ToggleButton>
          
          </ToggleButtonGroup>
          
        </div>
      </CardWithRadius>

      <CardWithRadius className={classes.blueCard}>
        <div className={styles.parent}>
          <div className={styles.label}>
            <label>Tile Removal:</label>
          </div>
          <ToggleButtonGroup
          sx={{color: "white"}}
          color="primary"
          value={alignment3}
          exclusive
          onChange={handleChange3}
          aria-label="Platform"
          >
          <ToggleButton  className="amt" name="tile_removal" value="true" onChange={props.onCabinetChange} sx={{color: "white"}}>AMT</ToggleButton>
          <ToggleButton  className="ther" name="tile_removal" value="false" onChange={props.onCabinetChange} sx={{color: "white"}}>Other</ToggleButton>
          
          </ToggleButtonGroup>
          
        </div>
      </CardWithRadius>
      </ThemeProvider>
    </div>
  );
};

export default EditProjectAddOns;
