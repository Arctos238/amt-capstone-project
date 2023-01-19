import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
    return (
        <header className={classes.header}>
      <div className={classes.logo}>AMT Invocing</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Logout</Link>
          </li>

          <li>
            <Link to="/home">Home</Link>
          </li>

          <li>
            <Link to="/">
              WIP
            </Link>
          </li>
        </ul>
      </nav>
    </header>
      );
}

export default MainNavigation;
