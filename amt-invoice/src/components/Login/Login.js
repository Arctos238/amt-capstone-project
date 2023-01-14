import React from "react";

import LoginForm from "./LoginForm";
import "./Login.css";

const Login = () => {
  return (
    <div className="login_contents">
      <div>
        <h2>AMT: Invoicing</h2>
      </div>
      <LoginForm />
    </div>
  );
};

export default Login;
