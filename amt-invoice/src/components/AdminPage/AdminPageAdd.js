import React, { useState } from "react";
import CardWithRadius from "../UI/CardWithRadius";
import classes from "../UI/CardWithRadius.module.css";
import styles from "./AdminPageAdd.module.css";
import TextField from "@mui/material/TextField";
import Button from "../UI/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { CreateNewEmployee } from "../../services/EmployeeServices";

const AdminPageAdd = () => {
  const [isValidSearch, setIsValidSearch] = useState(true);
  const [isSelectedOption, setSelectedOption] = useState("");
  const [isRoleId, setRoleId] = useState("");
  const [isEmployeeId, setEmployeeId] = useState("");
  const [isEmployeeFirstName, setEmployeeFirstName] = useState("");
  const [isEmployeeLastName, setEmployeeLastName] = useState("");
  const [isEmployeeUsername, setEmployeeUsername] = useState("");
  const [isEmployeePassword, setEmployeePassword] = useState("");

  const handleIDChange = (event) => {
    setEmployeeId(event.target.value);
  };

  const handleFirstnameChange = (event) => {
    setEmployeeFirstName(event.target.value);
  };

  const handleLastnameChange = (event) => {
    setEmployeeLastName(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setEmployeeUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setEmployeePassword(event.target.value);
  };

  const handleOptionChange = (e) => {
    setIsValidSearch(true);
    setSelectedOption(e.target.value);

    if (e.target.value === "regular_user") {
      setRoleId("2");
    } else {
      setRoleId("1");
    }
  };

  const obj = {
    employeeId: isEmployeeId,
    role: {
      roleId: isRoleId,
      roleName: isSelectedOption,
    },
    employeeFirstName: isEmployeeFirstName,
    employeeLastName: isEmployeeLastName,
    employeeUsername: isEmployeeUsername,
    employeePassword: isEmployeePassword,
  };
  console.log(obj);
  const submitHandler = async (event) => {
    event.preventDefault();
    const data = await CreateNewEmployee(obj);
  };

  return (
    <div className={styles.center}>
      <h1>Create User</h1>
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
          label="ID:"
          variant="standard"
          type="text"
          InputLabelProps={{ className: styles.textFieldLabel }}
          InputProps={{
            classes: {
              underline: styles.underline,
            },
          }}
          onChange={handleIDChange}
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
          label="FirstName:"
          variant="standard"
          type="text"
          InputLabelProps={{ className: styles.textFieldLabel }}
          InputProps={{
            classes: {
              underline: styles.underline,
            },
          }}
          onChange={handleFirstnameChange}
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
          label="LastName:"
          variant="standard"
          type="text"
          InputLabelProps={{ className: styles.textFieldLabel }}
          InputProps={{
            classes: {
              underline: styles.underline,
            },
          }}
          onChange={handleLastnameChange}
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
          label="Username:"
          variant="standard"
          type="text"
          InputLabelProps={{ className: styles.textFieldLabel }}
          InputProps={{
            classes: {
              underline: styles.underline,
            },
          }}
          onChange={handleUsernameChange}
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
          label="Password:"
          variant="standard"
          type="text"
          InputLabelProps={{ className: styles.textFieldLabel }}
          InputProps={{
            classes: {
              underline: styles.underline,
            },
          }}
          onChange={handlePasswordChange}
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
              value="admin"
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
              value="regular_user"
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
      <Button
        type="submit"
        value="add"
        className={styles.button}
        onClick={submitHandler}
      >
        Add User
      </Button>
    </div>
  );
};

export default AdminPageAdd;
