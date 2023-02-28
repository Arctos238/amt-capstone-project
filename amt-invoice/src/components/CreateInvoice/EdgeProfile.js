import React from "react";

import CardWithRadius from "../UI/CardWithRadius";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./EdgeProfile.module.css";
import classes from "../UI/CardWithRadius.module.css";

const useStyles = makeStyles((theme) => ({
  label: {
    color: "white",
  },
  root: {
    padding: 10, // set the desired height
    color: "white",
  },
}));

const EdgeProfile = (props) => {
  const textFieldStyle = useStyles();
  return (
    <div className={styles.edgeProfilePage}>
      <CardWithRadius className={classes.blueCard}>
        <div className={styles.edgeProfile}>
          <div className={styles.parent}>
            <div className={styles.left}>
              {/* <select
                value={props.selectedEdgeProfileType}
                onChange={props.handleEdgeProfileTypeChange}
              >
                <option value="">Select Edge Profile Type</option>
                {props.edgeProfileTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select> */}
              <FormControl sx={{ m: 1, minWidth: 200, color: "white" }}>
                <InputLabel
                  sx={{ color: "white" }}
                  id="demo-simple-select-helper-label"
                >
                  Edge Profile Type
                </InputLabel>
                <Select
                  sx={{ color: "white" }}
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={props.selectedEdgeProfileType}
                  onChange={props.handleEdgeProfileTypeChange}
                  label="Edge Profile Type"
                >
                  <MenuItem value="">
                    <em>Select Edge Profile Type</em>
                  </MenuItem>
                  {props.edgeProfileTypes.map((type) => (
                    <MenuItem value={type.value}>{type.value}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className={styles.center}>
              {/* <select
                value={props.selectedEdgeProfileCut}
                onChange={props.handleEdgeProfileCutChange}
                disabled={!props.selectedEdgeProfileType}
              >
                <option value="">Select Edge Profile Cut</option>
                {props.edgeProfileCuts.map((cut) => (
                  <option key={cut} value={cut}>
                    {cut}
                  </option>
                ))}
              </select> */}
              <FormControl sx={{ m: 1, minWidth: 200 }}>
                <InputLabel
                  sx={{ color: "white" }}
                  id="demo-simple-select-helper-label"
                >
                  Edge Profile Cut
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  label="Edge Profile Cut"
                  value={props.selectedEdgeProfileCut}
                  onChange={props.handleEdgeProfileCutChange}
                  disabled={!props.selectedEdgeProfileType}
                  sx={{ color: "white" }}
                >
                  <MenuItem value="">
                    <em>Select Edge Profile Cut</em>
                  </MenuItem>

                  {props.edgeProfileCuts.map((cut) => (
                    <MenuItem value={cut}>{cut}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className={styles.right}>
              <InputLabel sx={{ color: "white"}}>
                Edge Profile Measurement
              </InputLabel>
              <FormControl sx={{ m: 1, minWidth: 200}}>
                <TextField
                  id="outlined-basic"
                  value={props.selectedEdgeProfileMeasurement}
                  variant="outlined"
                  className={textFieldStyle.root}
                >
                  {props.selectedEdgeProfileMeasurement}
                </TextField>
              </FormControl>
            </div>
          </div>
        </div>
      </CardWithRadius>
    </div>
  );
};

export default EdgeProfile;
