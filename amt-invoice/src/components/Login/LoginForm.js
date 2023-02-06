import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GetEmployeeByUsername } from "../../services/EmployeeServices";

import Card from "../UI/Card";
import classes from "../UI/Card.module.css";
import styles from "./LoginForm.module.css";

const LoginForm = (props) => {
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
      <label className={styles.label}>Username:</label>
      <Card className={styles.inputContainer}>
        <input
          className={styles.input}
          type="text"
          name="formUsername"
          onChange={inputHandler}
          value={username}
        ></input>
      </Card>

      <label className={styles.label}>Password:</label>
      <Card className={styles.inputContainer}>
        <input
          className={styles.password}
          type="password"
          name="formPassword"
          onChange={inputHandler}
          value={password}
        ></input>
      </Card>

      <button className={styles.submitButton} onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default LoginForm;
