import React from "react";
import CardWithRadius from "../UI/CardWithRadius";
import classes from "../UI/CardWithRadius.module.css";
import styles from"./CreateClientDetails.module.css"

const createClient = (props) =>{

return (
    <React.Fragment>
        <div className = {styles.center} >
            <CardWithRadius className={`${classes.blueCard} ${styles.inputBoxes}`}>
            <label>Client Name:</label>
            <input type = "text" className="CC_Name"
            />
            </CardWithRadius>
            <CardWithRadius className={`${classes.blueCard} ${styles.inputBoxes}`}>
            <label>Email Personal:</label>
            <input type = "text" className="CC_EmailPersonal"
            />
            </CardWithRadius>
            <CardWithRadius className={`${classes.blueCard} ${styles.inputBoxes}`}>
            <label>Email Business:</label>
            <input type = "text" className="CC_EmailBusiness"
            />
            </CardWithRadius>
            <CardWithRadius className={`${classes.blueCard} ${styles.inputBoxes}`}>
            <label>Phone Number:</label>
            <input  type="tel" 
              className={styles.transparentInput}
              placeholder="123-456-7890"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            />
            </CardWithRadius>
        </div>
    </React.Fragment>
);
};

export default createClient;