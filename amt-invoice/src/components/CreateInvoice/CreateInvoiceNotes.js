import React from "react";
import Card from "../UI/Card";
import TextField from "@mui/material/TextField";
import styles from "./CreateInvoiceNotes.module.css";
import classes from "../UI/Card.module.css";
import { makeStyles } from "@material-ui/core/styles";
import SendIcon from "@mui/icons-material/Send";
import Button from "../UI/Button";
import buttonClasses from "../UI/Button.module.css";
import Grid from "@mui/material/Grid";

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
const CreateInvoiceNotes = (props) => {
  const textfield = useStyles();
  return (
    <React.Fragment>
      <div className={styles.invoiceNotes}>
        <Card className={classes.blueCard}>
          <Grid container spacing={2}>
            <Grid item xs={11}>
              <TextField
                sx={{ width: 880 }}
                className={textfield.root}
                id="standard-multiline-flexible"
                label="Notes"
                placeholder="Type notes here"
                inputRef={props.invoiceNoteRef}
                multiline
                maxRows={10}
                variant="standard"
              />
            </Grid>
            <Grid item xs={1}>
              <Button className={buttonClasses.sendButton} onClick={props.addNotesHandler}>
                <SendIcon sx={{ color: "white" }} />
              </Button>
            </Grid>
          </Grid>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default CreateInvoiceNotes;
