import React from "react";

import { Link } from "react-router-dom";
import SearchInputs from "./SearchInputs";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./Search.module.css";


const SearchPage = () => {
  return (
    <React.Fragment>
       
      <h1 className={styles.h1}>Invoice Finder</h1>
      <form className={styles.form}>
      <SearchInputs />
      <Link to="/clientPage">
      <Button className={styles.ButtonInput}>Find</Button>
      </Link>
      </form>
    </React.Fragment>
  );
};

export default SearchPage;