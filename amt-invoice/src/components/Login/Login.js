import React from "react";
import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";

import styles from "./Login.module.css";

const Login = (props) => {
  if ("clientInfo" in localStorage) {
    localStorage.removeItem("clientInfo");
  }

  const loginHandler = () => {
    props.changeLoginHandler();
  };

  return (
    <React.Fragment>
      <div className={styles.title}>Invoicing System</div>
      <LoginForm changeLoginHandler={loginHandler}></LoginForm>
    </React.Fragment>
  );
};

export default Login;
