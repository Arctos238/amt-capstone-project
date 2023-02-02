import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
    function clearLoc() {
      localStorage.clear();
    }
    return (
        <header className={classes.header}>
      
      
        <ul  className={classes.nav}>
          <li>
            <Link to="/" onClick={clearLoc}>Logout</Link>
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
      
    </header>
      );
}

export default MainNavigation;
