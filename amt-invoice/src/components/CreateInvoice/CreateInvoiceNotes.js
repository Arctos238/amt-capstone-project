import React from "react";
import Card from "../UI/Card";

import styles from "./CreateInvoiceNotes.module.css";
import classes from "../UI/Card.module.css";

const CreateInvoiceNotes = props => {
    return(<React.Fragment>
        <div className={styles.invoiceNotes}>
            <Card className={classes.blueCard}>
            <textarea rows="4" placeholder="Type notes here" ref={props.invoiceNoteRef}></textarea>
            </Card>
        </div>
    </React.Fragment>)
};

export default CreateInvoiceNotes;