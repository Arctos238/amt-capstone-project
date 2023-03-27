import React from "react";
import classes from "./Home.module.css";
import HomeButtons from "./HomeButtons";

function HomePage() {
  return (
    <div className={classes.home}>
      <h1>Home</h1>
      <React.Fragment>
        <HomeButtons />
      </React.Fragment>
    </div>
  );
}

export default HomePage;
