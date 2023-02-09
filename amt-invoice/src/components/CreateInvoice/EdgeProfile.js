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
              {/* <select
                value={props.selectedOption}
                onChange={props.handleSelectChange}
              >
                <option selected value>Select Type</option>
                <option value="Standard">Standard</option>
                <option value="Upgrade">Upgrade</option>
              </select> */}
              <select
                value={props.selectedEdgeProfileType}
                onChange={props.handleEdgeProfileTypeChange}
              >
                <option value="">Select Edge Profile Type</option>
                {props.edgeProfileTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.center}>
              {/* <select
                value={props.selectedCut}
                onChange={props.handleSelectedCut}
              >
                <option selected value>
                  Select Cut
                </option>
                {props.selectedProfile.map((profile) => (
                  <option value={profile.edgeProfileCut}>
                    {profile.edgeProfileCut}
                  </option>
                ))}
              </select> */}
              <select
                value={props.selectedEdgeProfileCut}
                onChange={props.handleEdgeProfileCutChange}
                disabled={!props.selectedEdgeProfileType}
              >
                <option value="">Select Edge Profile Cut</option>
                {props.edgeProfileCuts.map((cut) => (
                  <option key={cut} value={cut}>
                    {cut}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.right}>
              <label>Measurement:</label>
              {/* <input
                type="text"
                ref={props.edgeProfileMeasurementRef}
                placeholder="Type Measurement Here"
              /> */}
              <input
                type="text"
                value={props.selectedEdgeProfileMeasurement}
                disabled
                placeholder="Edge Profile Measurement"
              />
            </div>
          </div>
        </div>
      </CardWithRadius>
    </div>
  );
};

export default EdgeProfile;
