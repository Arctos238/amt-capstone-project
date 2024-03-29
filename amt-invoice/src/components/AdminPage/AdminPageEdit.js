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
import {
  UpdateEmployee,
  GetEmployeeByUsername,
} from "../../services/EmployeeServices";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AdminPageEdit = () => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  const [isValidSearch, setIsValidSearch] = useState(true);
  const [isSelectedOption, setSelectedOption] = useState("");
  const [isEmployeeId, setEmployeeId] = useState("");
  const [isRoleId, setRoleId] = useState("");
  const [isEmployeeFirstName, setEmployeeFirstName] = useState("");
  const [isEmployeeLastName, setEmployeeLastName] = useState("");
  const [isEmployeeUsername, setEmployeeUsername] = useState("");
  const [isEmployeePassword, setEmployeePassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
        try {
            const data = await GetEmployeeByUsername(location.state);
            setUser(data);
            setEmployeeId(data.employeeId)
            setEmployeeFirstName(data.employeeFirstName)
            setEmployeeLastName(data.employeeLastName)
            setEmployeeUsername(data.employeeUsername)
            setEmployeePassword(data.employeePassword)
            setRoleId(data.role.roleId)
            setSelectedOption(data.role.roleName)
            setLoading(true);
        } catch (error) {
            console.log(error);
        }
        }; 
    
    
    fetchData();
  }, [])

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

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(obj);
    // alert("Edit Added Successfully");
   
    const data = await UpdateEmployee(obj);
    navigate("/AdminPage");
  };

  if (!loading) {
    return <h1>Loading</h1>;
  }

  return (
    <div className={styles.center}>
      <h1>Edit User</h1>
      <p>*Please fill in the information in each text box</p>
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
          label="First Name:"
          defaultValue={user.employeeFirstName}
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
          label="Last Name:"
          defaultValue={user.employeeLastName}
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
          defaultValue={user.employeeUsername}
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
          defaultValue={user.employeePassword}
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
            defaultValue={
              user.role.roleName === "regular_user" ? "regular_user" : "admin"
            }
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
        value="Edit"
        className={styles.button}
        onClick={submitHandler}
      >
        Edit User
      </Button>
    </div>
  );
};

export default AdminPageEdit;
