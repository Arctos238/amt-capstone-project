import React from "react";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';

import Card from "../UI/Card";
import Button from "../UI/Button";
import "./LoginForm.css";

const LoginForm = () => {
  const [loadedData, setLoadedData] = useState([]);
  const usernameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

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
    fetch('http://192.168.11.1:8080/api/employees').then(res => {
      return res.json();
    }).then(data => {
      for (const key in data) {
        if (data[key].username == username)  {
          if (data[key].password == password) {
            navigate("/main");
          }
        } 
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
        <Button className="button login-button" type="submit">Login</Button>
      </div>
    </form>
  );
};

export default LoginForm;
