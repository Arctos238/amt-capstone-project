import React from "react";
import { useRef } from "react";
import { Link, Redirect, Route } from 'react-router-dom';

import Card from "../UI/Card";
import Button from "../UI/Button";
import "./LoginForm.css";

const LoginForm = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
 

  const usernameChangeHandler = (event) => {
    const usernameInput = event.target.value;
  };

  const passwordChangeHandler = (event) => {
    const passwordInput = event.target.value;
  };

  function submitHandler(event) {
    event.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    fetch('http://70.77.64.68:8083/api/employees/' + username).then(res => {
      return res.json();
    }).then(user => {
        if(password === user.employeePassword) {
          console.log("inside if")
          sessionStorage.setItem("user" , user);
          return <Redirect to="/home"/>;
        }


      }
      

    );
  }

  return (
    <form onSubmit={submitHandler}>
      <div>
        <Card className="card form_floating">
          <label>Username:</label>
          <input
            type="text"
            className="inputbox"
            onChange={usernameChangeHandler}
            ref = {usernameRef}
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
            ref = {passwordRef}
          />
        </Card>
      </div>
      <div className="login-button-container">
        <Button className="button login-button" type="submit" onClick="">Login</Button>
      </div>
    </form>
  );
};

export default LoginForm;
