import React from "react";

import CardWithRadius from "../UI/CardWithRadius";
// import PrintItemList from "./PrintItemList";
import TextField from "@mui/material/TextField";

import styles from "./CreateInvoiceItem.module.css";
import classes from "../UI/CardWithRadius.module.css";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import Input from "@mui/material/Input";
const useStyles = makeStyles((theme) => ({
  label: {
    color: "white",
  },
  root: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
    "& .MuiInputLabel-root": {
      color: "white",
    },
    "& .MuiInputBase-input": {
      color: "white",
      fontSize: "16px",
    },
  },
}));

const CreateInvoiceItem = (props) => {
  const textfield = useStyles();
  return (
    <form className="invoiceItemForm">
      <div className={styles.invoiceItem}>
        <div className={styles.parent}>
          <div className={styles.left}>
            <CardWithRadius className={classes.notSoBlue}>
              <TextField
                className={textfield.root}
                sx={{ width: "100%", color: "white" }}
                id="standard-basic"
                label="Name"
                InputProps={{
                  style: { color: "white" },
                }}
                variant="standard"
                inputRef={props.invoiceItemNameRef}
              />
            </CardWithRadius>
            
            <CardWithRadius className={classes.notSoBlue}>
              <TextField
                sx={{ width: "100%", color: "white" }}
                id="standard-basic"
                label="Width"
                type="number"
                className={textfield.root}
                variant="standard"
                inputRef={props.invoiceItemWidthRef}
              />
            </CardWithRadius>
            <CardWithRadius className={classes.notSoBlue}>
              <TextField
                sx={{ width: "100%", color: "white" }}
                id="standard-basic"
                label="Area"
                type="number"
                className={textfield.root}
                variant="standard"
                inputRef={props.invoiceItemAreaRef}
              />
            </CardWithRadius>
            <CardWithRadius className={classes.notSoBlue}>
              <TextField
                sx={{ width: "100%", color: "white" }}
                id="standard-basic"
                label="Measurement"
                className={textfield.root}
                type="text"
                variant="standard"
                inputRef={props.invoiceItemMeasurementRef}
                placeholder="Type Measurement Here"
              />
            </CardWithRadius>
          </div>
          <div className={styles.right}>
          <CardWithRadius className={classes.notSoBlue}>
              <TextField
                className={textfield.root}
                sx={{ width: "100%", color: "white" }}
                id="standard-basic"
                label="Location"
                InputProps={{
                  style: { color: "white" },
                }}
                variant="standard"
                inputRef={props.locationRef}
              />
            </CardWithRadius>
            <CardWithRadius className={classes.notSoBlue}>
              <TextField
                sx={{ width: "100%", color: "white" }}
                id="standard-basic"
                label="Length"
                type="number"
                className={textfield.root}
                InputProps={{
                  style: { color: "white" },
                }}
                variant="standard"
                inputRef={props.invoiceItemLengthRef}
              />
            </CardWithRadius>
            <CardWithRadius className={classes.notSoBlue}>
              <TextField
                sx={{ width: "100%", color: "white" }}
                id="standard-basic"
                label="Depth"
                type="number"
                className={textfield.root}
                variant="standard"
                placeholder="Type Depth Here"
                inputRef={props.invoiceItemDepthRef}
              />
            </CardWithRadius>
            <CardWithRadius className={classes.notSoBlue}>
          <FormControl fullWidth variant="filled">
            <InputLabel
              htmlFor="filled-adornment-amount"
              style={{ color: "white" }}
            >
              Amount
            </InputLabel>
            <Input
              id="filled-adornment-amount"
              startAdornment={<label>$</label>}
              className={textfield.root}
              inputRef={props.invoiceItemPriceRef}
              sx={{
                padding: 0.5,
              }}
            />
          </FormControl>
        </CardWithRadius>
          </div>
        </div>
        
      </div>
    </form>
  );
};

export default CreateInvoiceItem;
