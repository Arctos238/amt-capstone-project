import { Link } from "react-router-dom";
import { useState } from "react";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  const [reset, setReset] = useState(false);

  function clearLoc() {
    localStorage.clear();
    setReset(true);
  }

  return (
    <header className={classes.header}>
      <ul className={classes.nav}>
        <li>
          <Link to="/" onClick={clearLoc}>
            Logout
          </Link>
        </li>

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/">WIP</Link>
        </li>
      </ul>
    </header>
  );
}

export default MainNavigation;
