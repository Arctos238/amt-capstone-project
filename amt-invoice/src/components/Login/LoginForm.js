import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GetEmployeeByUsername } from "../../services/EmployeeServices";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Card from "../UI/Card";
import classes from "../UI/Card.module.css";
import styles from "./LoginForm.module.css";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import IconButton from '@mui/material/IconButton';

import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
      
    },
    background: {
      main: '#fabd44',
      
    },

    text:{
      main: '#FFFFFF'
    }
  },
});

const LoginForm = (props) => {

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (username === "" || password === "") {
      alert("username and password can not be null");
      return;
    }

    const data = await GetEmployeeByUsername(username);

    if (
      data.employeePassword === password &&
      username === data.employeeUsername
    ) {
      localStorage.setItem("user", JSON.stringify(data));
      props.changeLoginHandler();
      navigate("/home");
    }

    setUsername("");
    setPassword("");
  };

  const inputHandler = (event) => {
    if (event.target.name === "formUsername") {
      setUsername(event.target.value);
    } else if (event.target.name === "formPassword") {
      setPassword(event.target.value);
    }
  };

  return (
    <div className={styles.formLogin}>
      <ThemeProvider theme={theme}>
      <Card className={styles.inputContainer}>
        
        <TextField
        id="input-with-icon-textfield"
        type="text"
        name="formUsername"
        onChange={inputHandler}
        value={username}
        label="Username"
        
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
      </Card>

      
      <Card className={styles.inputContainer}>
        
        <FormControl sx={{ m: 1, width: '23ch' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            
            name="formPassword"
            onChange={inputHandler}
            value={password}
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="start">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </Card>

      
      <Button variant="contained"  sx={{ bgcolor: 'background.main', color: 'text.main'}}className={styles.submitButton}onClick={handleSubmit}>Login</Button>
      </ThemeProvider>
    </div>
  );
};

export default LoginForm;
