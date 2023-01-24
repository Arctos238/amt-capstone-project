import React from "react";
import { useRef } from "react";

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
    const password = usernameRef.current.value;
    let loggedIn = false;
    fetch('http://70.77.64.68:8083/api/employees/admin').then(res => {
      return res.json();
    }).then(data => {
      for (const key in data) {
        console.log(data[key]);
        if (data[key].employeeUsername == username)  {
          if (data[key].employeePassword == password) {
            console.log("Log in");
            loggedIn = true;
          }
        }
      }
      if (!loggedIn) {
        console.log("Wrong authen");
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
      <Link to="/home">
      <div className="login-button-container">
        <Button className="button login-button" type="submit">Login</Button>
      </div>
      </Link>
    </form>
  );
};

export default LoginForm;
