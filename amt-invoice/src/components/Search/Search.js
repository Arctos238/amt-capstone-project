import React from "react";

import { Link } from "react-router-dom";
import SearchInputs from "./SearchInputs";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./Search.module.css";
import { useState } from "react";
import SearchResult from "./SearchResult";


const SearchPage = () => {

  

  return (
    <React.Fragment>

      <h1 className={styles.h1}>Finder</h1>
      <form className={styles.form}>
        <SearchInputs />
        {/* <Link to="/clientPage"> */}
        
        
        
        {/* </Link> */}
      </form>
    </React.Fragment>
  );
};

export default SearchPage;