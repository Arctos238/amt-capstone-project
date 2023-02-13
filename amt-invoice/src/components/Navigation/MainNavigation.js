import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTheme } from '@mui/joy/styles';
import classes from "./MainNavigation.module.css";
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';


function MainNavigation(props) {
  const nav = useNavigate();
  const theme = useTheme();

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
            <LogoutIcon sx={{fontSize:"50px"}}/>
          </Link>
        </li>

        <li>
          
          <Link to="/home">
          <HomeIcon sx={{fontSize:"60px"}}/>
          
          
          </Link>
        </li>

        <li>
          <Link to="/">WIP</Link>
        </li>
      </ul>
    </header>
  );
}

export default MainNavigation;
