import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import classes from "./MainNavigation.module.css";

function MainNavigation(props) {
  const nav = useNavigate();

  function clearLoc() {
    localStorage.clear();
    props.logoutChangeHandler();
    nav("/");
  }

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!props.loggedIn || user === null) {
      nav("/");
    }
    return () => {};
  }, []);

  return (
    <header className={classes.header}>
      <ul className={classes.nav}>
        <li>
          <Link to="/" onClick={clearLoc}>
            Logout
          </Link>
        </li>

        <li>
          <Link to="/home">Home</Link>
        </li>

        <li>
          <Link to="/">WIP</Link>
        </li>
      </ul>
    </header>
  );
}

export default MainNavigation;
