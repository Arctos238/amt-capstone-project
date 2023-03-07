import React,{useState } from 'react';
import CardWithRadius from "../UI/CardWithRadius";
import classes from "../UI/CardWithRadius.module.css";
import styles from"./AdminPageAdd.module.css";
import TextField from '@mui/material/TextField';
import Button from "../UI/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

const AdminPageAdd = () =>{
  const [isValidSearch, setIsValidSearch] = useState(true);
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (e) => {
    setIsValidSearch(true);
    setSelectedOption(e.target.value);
  };

    return (
        <div className = {styles.center} >
            <h1>Adding User</h1>
            <CardWithRadius className={`${classes.blueCard} ${styles.inputBoxes}`}>
            <TextField
            sx={{ width: "100%", color: "white", "& .MuiInputBase-input": {
                width: "calc(100% - 2px)", // 2px is the width of the underline
              }, }}
            id="standard-basic"
            label="Username:"
            variant="standard"
            type = "text" 
            
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
            label="Password:"
            variant="standard"
            type = "text" 
            
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
            label="Job Title:"
            variant="standard"
            type = "text" 
            InputLabelProps={{ className: styles.textFieldLabel }}
            InputProps={{
              classes: {
                underline: styles.underline, 
              },
            }}
          />
            </CardWithRadius>

            <CardWithRadius className={`${classes.blueCard} ${styles.inputBoxes}`}>
            <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
                <FormControlLabel
                value="Admin"
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
                label="Admin"
              />
                <FormControlLabel
                value="User"
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
                label="User"
              />
              </RadioGroup>
            </FormControl>
            </CardWithRadius>
            <Button type = "submit"
                value = "add" className={styles.button}>Add User</Button>
        </div>
    );
};

export default AdminPageAdd;