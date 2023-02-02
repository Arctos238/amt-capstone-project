import React from "react";

import CardWithRadius from "../UI/CardWithRadius";
import styles from "./CreateProjectDetails.module.css";
import classes from "../UI/CardWithRadius.module.css";

const CreateProjectDetails = (props) => {
  return (
    <React.Fragment>
      <div className={styles.parent}>
        <div className={styles.left}>
          <CardWithRadius
            className={`${classes.blueCard} ${styles.inputBoxes}`}
          >
            <label className={styles.label}>Project Name:</label>
            <input
              type="text"
              className={styles.transparentInput}
              ref={props.projectNameRef}
            />
          </CardWithRadius>
          <CardWithRadius
            className={`${classes.blueCard} ${styles.inputBoxes}`}
          >
            <label>Site Super Phone:</label>
            <input
              type="tel"
              className={styles.transparentInput}
              placeholder="123-456-7890"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              ref={props.siteSuperPhoneRef}
            />
          </CardWithRadius>
          <CardWithRadius
            className={`${classes.blueCard} ${styles.inputBoxes}`}
          >
            <label>Postal Code:</label>
            <input
              type="text"
              className={styles.transparentInput}
              ref={props.postalCodeRef}
            />
          </CardWithRadius>
          <CardWithRadius
            className={`${classes.blueCard} ${styles.inputBoxes}`}
          >
            <label>City:</label>
            <input type="text" className={styles.transparentInput} ref={props.cityRef} />
          </CardWithRadius>
        </div>
        <div className={styles.right}>
          <CardWithRadius
            className={`${classes.blueCard} ${styles.inputBoxes}`}
          >
            <label>Site Super Name:</label>
            <input
              type="text"
              className={styles.transparentInput}
              ref={props.siteSuperNameRef}
            />
          </CardWithRadius>
          <CardWithRadius
            className={`${classes.blueCard} ${styles.inputBoxes}`}
          >
            <label>Address:</label>
            <input type="text" className={styles.transparentInput} ref={props.addressRef} />
          </CardWithRadius>
          <CardWithRadius
            className={`${classes.blueCard} ${styles.inputBoxes}`}
          >
            <label>Suite/Building No.:</label>
            <input
              type="number"
              className={styles.transparentInput}
              min="0"
              ref={props.suiteRef}
            />
          </CardWithRadius>
          <CardWithRadius
            className={`${classes.blueCard} ${styles.inputBoxes}`}
          >
            <label>Province:</label>
            <input type="text" className={styles.transparentInput} ref={props.provinceRef} />
          </CardWithRadius>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CreateProjectDetails;
