import React from "react";
import Card from "../UI/Card";
import styles from"./CreateClientDetails.module.css"

const createClient = (props) =>{

return (
    <React.Fragment>
        <div className = {styles.center} >
            <Card className={styles.inputContainer}>
            <label>Client Name:</label>
            <input type = "text" className="CC_Name"
            />
            </Card>
            <Card className={styles.inputContainer}>
            <label>Email Personal:</label>
            <input type = "text" className="CC_EmailPersonal"
            />
            </Card>
            <Card className={styles.inputContainer}>
            <label>Email Business:</label>
            <input type = "text" className="CC_EmailBusiness"
            />
            </Card>
            <Card className={styles.inputContainer}>
            <label>Phone Number:</label>
            <input  type="tel" 
              className="CC_PhoneNumber"
              placeholder="123-456-7890"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            />
            </Card>
        </div>
    </React.Fragment>
);
};

export default createClient;