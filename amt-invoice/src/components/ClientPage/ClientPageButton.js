import React from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import styles from "./ClientPageButton.module.css";
import classes from '../UI/Button.module.css';

const ClientPageButton = () => {
    return(
        <div className={styles.clientPageButtons}>
            <div className={styles.parent}>
                <div className={styles.left}>
                    <Button className={classes.editClient}>Edit Client Information</Button>
                </div>
                <div className={styles.right}>
                    <Link to="/createProject">
                    <Button className={classes.addProject}>Add Project</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ClientPageButton;