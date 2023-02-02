import React from 'react';
import classes from './Home.module.css';
import HomeButtons from './HomeButtons';


function HomePage(props) {
    return (
      <div className={classes.home}>
      <React.Fragment>
        <HomeButtons/>
        
      </React.Fragment>
      </div>
    );
  }
  
  export default HomePage;
