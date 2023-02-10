import React, { useState } from "react";
import CardWithRadius from "../UI/CardWithRadius";
import classes from "../UI/CardWithRadius.module.css";
import styles from"./SearchInputs.module.css"

const SearchInputs = (props) =>{

    const [showRadioButtons, setShowRadioButtons] = useState(false);
    const [selectedOption, setSelectedOption] = useState("invoiceId");
    const [searchInput, setSearchInput] = useState("");

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
        console.log(selectedOption)
      };
    
      const handleSearchInput = (e) => {
        setSearchInput(e.target.value);
        console.log(searchInput)
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
                id="invoiceId"
                name = "selectedOption"
                checked={selectedOption === "invoiceId"}
                onChange={handleOptionChange}
              />
              <label>Invoice ID</label>

              <br/>
            
            <input
                type="radio"
                value="phoneNumber"
                name = "selectedOption"
                id="phoneNumber"
                checked={selectedOption === "phoneNumber"}
                onChange={handleOptionChange}
              />
            <label>Client Phone Number</label>
            <br/>

            
            <input
                type="radio"
                value="name"
                name = "selectedOption"
                id= "name"
                checked={selectedOption === "name"}
                onChange={handleOptionChange}
              />
            <label>Client Name</label>
            </CardWithRadius>
            <CardWithRadius className={`${classes.blueCard} ${styles.inputBoxes}`}>
            <label>Search:</label>
            <input type = "text" className="SearchType" required value={searchInput} onChange={handleSearchInput}
            />
            </CardWithRadius>
           
        </div>
    </React.Fragment>
);
};

export default SearchInputs;