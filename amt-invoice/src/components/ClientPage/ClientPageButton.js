import React from "react";

import Button from "../UI/Button";
import styles from "./ClientPageButton.module.css";

const ClientPageButton = () => {
    return(
        <div className="classPageButtons">
            <div className={styles.parent}>
                <div className="left">
                    <Button>Edit Client Information</Button>
                </div>
                <div className="right">
                    <Button>Add Project</Button>
                </div>
            </div>
        </div>
    );
};

export default ClientPageButton;