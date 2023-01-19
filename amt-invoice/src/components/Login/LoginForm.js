import React from "react";
import {Link} from "react-router-dom";


import Card from "../UI/Card";
import Button from "../UI/Button";
import "./LoginForm.css";

const LoginForm = () => {
  const usernameChangeHandler = (event) => {
    const usernameInput = event.target.value;
  };

  const passwordChangeHandler = (event) => {
    const passwordInput = event.target.value;
  };

  return (
    <form>
      <div>
        <Card className="card form_floating">
          <label>Username:</label>
          <input
            type="text"
            className="inputbox"
            onChange={usernameChangeHandler}
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
