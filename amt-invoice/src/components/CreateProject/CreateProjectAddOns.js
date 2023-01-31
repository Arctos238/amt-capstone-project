import React from "react";

import CardWithRadius from "../UI/CardWithRadius";
import styles from "./CreateProjectAddOns.module.css";

const CreateProjectAddOns = () => {
  return (
    <div className={styles.addon_part}>
      <CardWithRadius>
        <div className={styles.parent}>
          <div className={styles.label}>
            <label>Cabinet:</label>
          </div>
          <div className={styles.left}>
            <input type="radio" className="new" name="cabinet" />
            <label>New</label>
          </div>
          <div className={styles.right}>
            <input type="radio" className="existing" name="cabinet" />
            <label>Existing</label>
          </div>
        </div>
      </CardWithRadius>

      <CardWithRadius>
        <div className={styles.parent}>
          <div className={styles.label}>
            <label>Counter Removal:</label>
          </div>
          <div className={styles.left}>
            <input type="radio" className="amt" name="counter_removal" />
            <label>AMT</label>
          </div>
          <div className={styles.right}>
            <input type="radio" className="ther" name="counter_removal" />
            <label>Other</label>
          </div>
        </div>
      </CardWithRadius>

      <CardWithRadius>
        <div className={styles.parent}>
          <div className={styles.label}>
            <label>Tile Removal:</label>
          </div>
          <div className={styles.left}>
            <input type="radio" className="amt" name="tile_removal" />
            <label>AMT</label>
          </div>
          <div className={styles.right}>
            <input type="radio" className="ther" name="tile_removal" />
            <label>Other</label>
          </div>
        </div>
      </CardWithRadius>
    </div>
  );
};

export default CreateProjectAddOns;
