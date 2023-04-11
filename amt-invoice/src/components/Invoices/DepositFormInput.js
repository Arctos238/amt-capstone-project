import React from 'react';
import TextField from '@mui/material/TextField';
import { MuiTelInput } from 'mui-tel-input'
import { useState, useEffect } from "react";
import CardWithRadius from "../UI/CardWithRadius";
import classes from "../UI/CardWithRadius.module.css";
import styles from"../Create_client/CreateClientDetails.module.css"
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Button, Icon } from '@mui/material';

//inputRef= {props.clientNameRef}
export default function DepositInput(props) {
    const [value, setValue] = React.useState("+1")

   

    const handleChange = (newValue) => {
  
      setValue(newValue)
    }
    return(
        <div>
            <h1>Deposit</h1>
        <div style={{ display: "flex", justifyContent: "space-between", gap: "16px" }}>
            <CardWithRadius className={`${classes.blueCard} ${styles.inputBoxes}`}>
                <TextField
                sx={{
                    width: "100%",
                    color: "white",
                    "& .MuiInputBase-input": {
                    width: "calc(100% - 2px)", // 2px is the width of the underline
                    },
                }}
                id="standard-basic"
                label="Name on Card"
                placeholder="Chandler Bing"
                variant="standard"
                type="text"
                //inputRef= {props.clientNameRef}
                InputLabelProps={{ className: styles.textFieldLabel }}
                InputProps={{
                    classes: {
                    underline: styles.underline,
                    },
                }}
                />
            </CardWithRadius>

            <CardWithRadius className={`${classes.blueCard} ${styles.inputBoxes}`}>
                <TextField
                sx={{
                    width: "100%",
                    color: "white",
                    "& .MuiInputBase-input": {
                    width: "calc(100% - 2px)", // 2px is the width of the underline
                    },
                }}
                id="standard-basic"
                label="Billing Address"
                placeholder="2020 Pegasus Rd"
                variant="standard"
                type="text"
                //inputRef= {props.clientNameRef}
                InputLabelProps={{ className: styles.textFieldLabel }}
                InputProps={{
                    classes: {
                    underline: styles.underline,
                    },
                }}
                />
            </CardWithRadius>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", gap: "16px" }}>
            <CardWithRadius className={`${classes.blueCard} ${styles.inputBoxes}`}>
                <TextField
                sx={{ width: "100%", color: "white", "& .MuiInputBase-input": {
                    width: "calc(100% - 2px)", // 2px is the width of the underline
                }, }}
                id="standard-basic"
                label="City"
                placeholder="Calgary"
                variant="standard"
                type = "text" 
                //inputRef= {props.clientNameRef}
                InputLabelProps={{ className: styles.textFieldLabel }}
                InputProps={{
                classes: {
                    underline: styles.underline, 
                },
                }}
            />
            </CardWithRadius>

            <CardWithRadius className={`${classes.blueCard} ${styles.inputBoxes}`}>
                <TextField
                sx={{ width: "100%", color: "white", "& .MuiInputBase-input": {
                    width: "calc(100% - 2px)", // 2px is the width of the underline
                }, }}
                id="standard-basic"
                label="Province"
                placeholder="AB"
                variant="standard"
                type = "text" 
                //inputRef= {props.clientNameRef}
                InputLabelProps={{ className: styles.textFieldLabel }}
                InputProps={{
                classes: {
                    underline: styles.underline, 
                },
                }}
            />
            </CardWithRadius>


            </div>

            <div style={{ display: "flex", justifyContent: "space-between", gap: "16px" }}>
            <CardWithRadius className={`${classes.blueCard} ${styles.inputBoxes}`}>
                <TextField
                sx={{ width: "100%", color: "white", "& .MuiInputBase-input": {
                    width: "calc(100% - 2px)", // 2px is the width of the underline
                }, }}
                id="standard-basic"
                label="Postal Code"
                placeholder="T2E 8K7"
                variant="standard"
                type = "text" 
                //inputRef= {props.clientNameRef}
                InputLabelProps={{ className: styles.textFieldLabel }}
                InputProps={{
                classes: {
                    underline: styles.underline, 
                },
                
                }}
            />
            </CardWithRadius>

            <CardWithRadius className={`${classes.blueCard} ${styles.inputBoxes}`}>
                <TextField
                sx={{ width: "100%", color: "white", "& .MuiInputBase-input": {
                    width: "calc(100% - 2px)", // 2px is the width of the underline
                }, }}
                id="standard-basic"
                label="Email"
                placeholder="TotalyRealEmail.com"
                variant="standard"
                type = "text" 
                //inputRef= {props.clientNameRef}
                InputLabelProps={{ className: styles.textFieldLabel }}
                InputProps={{
                classes: {
                    underline: styles.underline, 
                },
                }}
            />
            </CardWithRadius>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", gap: "16px" }}>
            
            <CardWithRadius className={`${classes.blueCard} ${styles.inputBoxes}`}>
            <MuiTelInput 
             label="Phone"
             pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
             inputRef= {props.phoneNumberRef}
             type="tel" 
             value={value} onChange={handleChange} 
             />
            </CardWithRadius>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", gap: "16px" }}>
            <CardWithRadius className={classes.blueCard}>
            <FormControl>
            
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              defaultValue="name"
            >
              <FormControlLabel
                value="Deposit"
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

                label="Deposit"
              />
              <FormControlLabel
                value="Invoice Number"
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
                
                label="Invoice Number"
              />
            </RadioGroup>
          </FormControl>
      </CardWithRadius>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", gap: "16px" }}>
        <CardWithRadius className={classes.blueCard}>
        <FormControl>
            
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              defaultValue="name"
            >
              <FormControlLabel
                value="Visa"
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

                label="Visa"
              />
              <FormControlLabel
                value="Master Card"
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
                
                label="Master Card"
              />

                <FormControlLabel
                value="AmEx"
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
                
                label="AmEx"
                />
            </RadioGroup>
          </FormControl>
        </CardWithRadius>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", gap: "16px" }}>
            <CardWithRadius className={`${classes.blueCard} ${styles.inputBoxes}`}>
                <TextField
                sx={{ width: "100%", color: "white", "& .MuiInputBase-input": {
                    width: "calc(100% - 2px)", // 2px is the width of the underline
                }, }}
                id="standard-basic"
                label="Credit Card Number"
                placeholder="1234 5678 1234 5678"
                variant="standard"
                type = "text" 
                //inputRef= {props.clientNameRef}
                InputLabelProps={{ className: styles.textFieldLabel }}
                InputProps={{
                classes: {
                    underline: styles.underline, 
                },
                }}
            />
            </CardWithRadius>

            <CardWithRadius className={`${classes.blueCard} ${styles.inputBoxes}`}>
                <TextField
                sx={{ width: "100%", color: "white", "& .MuiInputBase-input": {
                    width: "calc(100% - 2px)", // 2px is the width of the underline
                }, }}
                id="standard-basic"
                label="Expiration Date"
                placeholder="0/42"
                variant="standard"
                type = "text" 
                //inputRef= {props.clientNameRef}
                InputLabelProps={{ className: styles.textFieldLabel }}
                InputProps={{
                classes: {
                    underline: styles.underline, 
                },
                }}
            />
            </CardWithRadius>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", gap: "16px" }}>
            <CardWithRadius className={`${classes.blueCard} ${styles.inputBoxes}`}>
                <TextField
                sx={{ width: "100%", color: "white", "& .MuiInputBase-input": {
                    width: "calc(100% - 2px)", // 2px is the width of the underline
                }, }}
                id="standard-basic"
                label="Card Identification Number"
                placeholder="3 digits on back of card"
                variant="standard"
                type = "text" 
                //inputRef= {props.clientNameRef}
                InputLabelProps={{ className: styles.textFieldLabel }}
                InputProps={{
                classes: {
                    underline: styles.underline, 
                },
                }}
            />
            </CardWithRadius>

            <CardWithRadius className={`${classes.blueCard} ${styles.inputBoxes}`}>
                <TextField
                sx={{ width: "100%", color: "white", "& .MuiInputBase-input": {
                    width: "calc(100% - 2px)", // 2px is the width of the underline
                }, }}
                startAdornment={<label>$</label>}
                id="standard-basic"
                label="Amount to Charge"
                placeholder="$5"
                variant="standard"
                type = "text" 
                //inputRef= {props.clientNameRef}
                InputLabelProps={{ className: styles.textFieldLabel }}
                InputProps={{
                classes: {
                    underline: styles.underline, 
                },
                }}
            />
            </CardWithRadius>
        </div>

        <div style={{display: "flex", justifyContent: "center", margin: "0 auto", maxWidth: "800px", padding: "32px 0 64px 0" }}>
            <Button variant="contained" style={{ backgroundColor: "#fabd44" }}>
                Save Deposit
            </Button>
        </div>


        </div>

        
    );
}

