import React from "react";

import Card from "../UI/Card";
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
      <div className="login-button-container">
        <button className="login-button" type="submit">Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
