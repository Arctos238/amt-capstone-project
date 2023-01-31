import React from "react";
import { useRef } from "react";
import { Link, Redirect, Route } from 'react-router-dom';
import  useGet  from '../../hooks/GetHttpRequest.js';

import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const usernameChangeHandler = (event) => {
    const usernameInput = event.target.value;
  };

  const passwordChangeHandler = (event) => {
    const passwordInput = event.target.value;
  };

  function SubmitHandler(event) {
    event.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    const { data, loading, error } = useGet(
      "http://70.77.64.68:8083/api/employees/" + username
    );
    if (password === data.employeePassword) {
      console.log("inside if");
      sessionStorage.setItem("user", JSON.stringify(data));
      const activeUser = JSON.parse(sessionStorage.user);
      console.log(activeUser.role);
    }
  }

  return (
    <form onSubmit={SubmitHandler}>
      <div>
        <Card className={`${styles.card} ${styles.form_floating}`}>
          <label>Username:</label>
          <input
            type="text"
            className="inputbox"
            onChange={usernameChangeHandler}
            ref={usernameRef}
          />
        </Card>
      </div>
      <div>
        <Card className="card form_floating">
          <label>Password:</label>
          <input
            type="text"
            className="inputbox"
            onChange={passwordChangeHandler}
            ref={passwordRef}
          />
        </Card>
      </div>
      <div className="login-button-container">
        <Button type="submit" onClick="">
          Login
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
