import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GetEmployeeByUsername } from "../../services/EmployeeServices";

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
    <div>
      <label>Username:</label>
      <input
        type="text"
        name="formUsername"
        onChange={inputHandler}
        value={username}
      ></input>
      <br></br>
      <label>Password:</label>
      <input
        type="text"
        name="formPassword"
        onChange={inputHandler}
        value={password}
      ></input>
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default LoginForm;
