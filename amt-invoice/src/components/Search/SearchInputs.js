import React, { useState } from "react";
import CardWithRadius from "../UI/CardWithRadius";
import classes from "../UI/CardWithRadius.module.css";
import styles from"./SearchInputs.module.css"

const SearchInputs = (props) =>{

    const [showRadioButtons, setShowRadioButtons] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");
    const [searchInput, setSearchInput] = useState("");

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
      };
    
      const handleSearchInput = (e) => {
        setSearchInput(e.target.value);
      };
    
      const handleFind = () => {
        setShowRadioButtons(!showRadioButtons);
        // Perform the search based on selected option and searchInput
        console.log(selectedOption, searchInput);
      };

return (
    <React.Fragment>
        <div className = {styles.center} >
            <CardWithRadius className={`${classes.blueCard} ${styles.inputBoxes}`}>
            
            <input
                type="radio"
                value="invoiceId"
                checked={selectedOption === "invoiceId"}
                onChange={handleOptionChange}
              />
              <label>Invoice ID</label>

              <br/>
            
            <input
                type="radio"
                value="phoneNumber"
                checked={selectedOption === "phoneNumber"}
                onChange={handleOptionChange}
              />
            <label>Client Phone Number</label>
            <br/>

            
            <input
                type="radio"
                value="name"
                checked={selectedOption === "name"}
                onChange={handleOptionChange}
              />
            <label>Client Name</label>
            </CardWithRadius>
            <CardWithRadius className={`${classes.blueCard} ${styles.inputBoxes}`}>
            <label>Search:</label>
            <input type = "text" className="SearchType" required/>
            </CardWithRadius>
           
        </div>
    </React.Fragment>
);
};

export default SearchInputs;