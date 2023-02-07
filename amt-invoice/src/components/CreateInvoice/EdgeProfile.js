import React, { useState } from "react";

import CardWithRadius from "../UI/CardWithRadius";
import Button from "../UI/Button";

import styles from "./EdgeProfile.module.css";
import classes from "../UI/CardWithRadius.module.css"

const EdgeProfile = () => {
  const standardProfiles = [
    {
      edgeProfileId: 1,
      edgeProfileType: "Standard",
      edgeProfileCut: "Minimal Eased",
      edgeProfileMeasurement: "3cm",
    },
    {
      edgeProfileId: 2,
      edgeProfileType: "Standard",
      edgeProfileCut: "Eased",
      edgeProfileMeasurement: "3cm",
    },
  ];

  const upgradeProfiles = [
    {
      edgeProfileId: 7,
      edgeProfileType: "Upgrade",
      edgeProfileCut: "Bullnose",
      edgeProfileMeasurement: "3cm",
    },
    {
      edgeProfileId: 8,
      edgeProfileType: "Upgrade",
      edgeProfileCut: "Ogee",
      edgeProfileMeasurement: "3cm",
    },
  ];

  const [selectedOption, setSelectedOption] = useState("Standard");
  const [selectedProfile, setSelectedProfile] = useState(standardProfiles);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    if (event.target.value === "Standard") {
      setSelectedProfile(standardProfiles);
    } else {
      setSelectedProfile(upgradeProfiles);
    }
  };

  return (
    <React.Fragment>
        <CardWithRadius className={classes.blueCard}>
      <div className={styles.edgeProfile}>
        <div className={styles.parent}>
          <div className={styles.left}>
            <select value={selectedOption} onChange={handleSelectChange}>
              <option value="Standard">Standard</option>
              <option value="Upgrade">Upgrade</option>
            </select>
          </div>
          <div className={styles.center}>
            <select>
              {selectedProfile.map((profile) => (
                <option
                  key={profile.edgeProfileId}
                  value={profile.edgeProfileCut}
                >
                  {profile.edgeProfileCut}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.right}>
            <label>Measurement:</label>
            <input type="text"/>
          </div>
        </div>
      </div>
      </CardWithRadius>
      <Button>Add Edge Profile</Button>
    </React.Fragment>
  );
};

export default EdgeProfile;
