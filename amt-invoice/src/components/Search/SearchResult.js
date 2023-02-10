import React from "react";
import CardWithRadius from "../UI/CardWithRadius";
import classes from "../UI/CardWithRadius.module.css";
import styles from"./SearchInputs.module.css";
import Button from "../UI/Button";


const SearchResult = () =>{
    return(
        <React.Fragment>
            <form>
                <CardWithRadius className = {`${classes.blueCard} ${styles.inputBoxes}`}>
                    <input type="radio"></input>
                    <label >test</label>
                </CardWithRadius>
                <Button>Search</Button>
            </form>
        </React.Fragment>
    );
};

export default SearchResult;