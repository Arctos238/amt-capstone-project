import React from "react";
import { useState, useEffect } from "react";
import CardWithRadius from "../UI/CardWithRadius";
import classes from "../UI/CardWithRadius.module.css";
import styles from"./CreateClientDetails.module.css"
import TextField from '@mui/material/TextField';
import { MuiTelInput } from 'mui-tel-input'


const CreateClientDetails = (props) =>{
    const [value, setValue] = React.useState("+1")

  const handleChange = (newValue) => {

    setValue(newValue)
  }
    

const changeToHome = () => {
    
}

return (
    


    <React.Fragment>
        <div className = {styles.center} >
            <CardWithRadius className={`${classes.blueCard} ${styles.inputBoxes}`}>
            <TextField
            sx={{ width: "100%", color: "white", "& .MuiInputBase-input": {
                width: "calc(100% - 2px)", // 2px is the width of the underline
              }, }}
            id="standard-basic"
            label="Client Name"
            placeholder="Candler Bing"
            variant="standard"
            type = "text" 
            ref= {props.clientNameRef}
            InputLabelProps={{ className: styles.textFieldLabel }}
            InputProps={{
              classes: {
                underline: styles.underline, 
              },
            }}
          />
            {/* Keeping this just in case what is above doesn't work  */}
            {/* <label>Client Name:</label>
            <input type = "text" className={styles.inputBox}
            ref= {props.clientNameRef}
            /> */}
            </CardWithRadius>
            
            <CardWithRadius className={`${classes.blueCard} ${styles.inputBoxes}`}>
            <TextField
            sx={{ width: "100%", color: "white", "& .MuiInputBase-input": {
                width: "calc(100% - 2px)", // 2px is the width of the underline
              }, }}
            id="standard-basic"
            label="Email Personal"
            placeholder="RonSwanson@no.com"
            variant="standard"
            type = "text" 
            ref= {props.emailPersonalRef}
            InputLabelProps={{ className: styles.textFieldLabel }}
            InputProps={{
              classes: {
                underline: styles.underline, 
              },
            }}
          /> 
            {/* Keeping this just in case what is above doesn't work 
            <label>Email Personal:</label>
            <input type = "text" className={styles.inputBox}
            ref= {props.emailPersonalRef}
            /> */}
            </CardWithRadius>
            <CardWithRadius className={`${classes.blueCard} ${styles.inputBoxes}`}>
            <TextField
            sx={{ width: "100%", color: "white", "& .MuiInputBase-input": {
                width: "calc(100% - 2px)", // 2px is the width of the underline
              }, }}
            id="standard-basic"
            label="Email Business"
            placeholder="Business@work.ca"
            variant="standard"
            type = "text" 
            ref= {props.emailBusinessRef}
            InputLabelProps={{ className: styles.textFieldLabel }}
            InputProps={{
              classes: {
                underline: styles.underline, 
              },
            }}
          />    
            {/* Keeping this just in case what is above doesn't work
            <label>Email Business:</label>
            <input type = "text" className={styles.inputBox}
            ref= {props.emailBusinessRef}
            /> */}
            </CardWithRadius>
            <CardWithRadius className={`${classes.blueCard} ${styles.inputBoxes}`}>
            <MuiTelInput 
             pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
             ref= {props.phoneNumberRef}
             type="tel" 
             value={value} onChange={handleChange} />
            
            {/* Keeping just in case
            <label>Phone Number:</label>
            <input  type="tel" 
              className={styles.inputBox}
              placeholder="123-456-7890"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              ref= {props.phoneNumberRef}
            /> */}
            </CardWithRadius>
        </div>
    </React.Fragment>
);
};

export default CreateClientDetails;