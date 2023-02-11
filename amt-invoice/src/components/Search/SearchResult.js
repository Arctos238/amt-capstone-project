import React from "react";
import CardWithRadius from "../UI/CardWithRadius";
import classes from "../UI/CardWithRadius.module.css";
import styles from "./SearchInputs.module.css";
import Button from "../UI/Button";

const SearchResult = (props) => {
  return (
    <React.Fragment>
      <div>
        <CardWithRadius className={classes.blueCard}>
            {props.clientName}
        </CardWithRadius>

        <Button>Search</Button>
      </div>
    </React.Fragment>
  );
};

export default SearchResult;
