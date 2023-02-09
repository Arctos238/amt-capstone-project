import React from "react";

import CardWithRadius from "../UI/CardWithRadius";

import styles from "./EdgeProfile.module.css";
import classes from "../UI/CardWithRadius.module.css";

const EdgeProfile = (props) => {
  return (
    <div className={styles.edgeProfilePage}>
      <CardWithRadius className={classes.blueCard}>
        <div className={styles.edgeProfile}>
          <div className={styles.parent}>
            <div className={styles.left}>
              <select
                value={props.selectedOption}
                onChange={props.handleSelectChange}
              >
                <option selected value>Select Type</option>
                <option value="Standard">Standard</option>
                <option value="Upgrade">Upgrade</option>
              </select>
            </div>
            <div className={styles.center}>
              <select value={props.selectedCut} onChange={props.handleSelectedCut}>
              <option selected value>Select Cut</option>
                {props.selectedProfile.map((profile) => (
                  <option value={profile.edgeProfileCut}>
                    {profile.edgeProfileCut}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.right}>
              <label>Measurement:</label>
              <input type="text" ref={props.edgeProfileMeasurementRef} placeholder="Type Measurement Here"/>
            </div>
          </div>
        </div>
      </CardWithRadius>
    </div>
  );
};

export default EdgeProfile;
