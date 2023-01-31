import React from "react";

import CardWithRadius from "../UI/CardWithRadius";
import styles from "./CreateProjectAddOns.module.css";

const CreateProjectAddOns = (props) => {
  
  
  return (
    <div className={styles.addon_part}>
      <CardWithRadius>
        <div className={styles.parent}>
          <div className={styles.label}>
            <label>Cabinet:</label>
          </div>
          <div className={styles.left}>
            <input type="radio" className="new" name="cabinet" value="true" onChange={props.onCabinetChange}/>
            <label>New</label>
          </div>
          <div className={styles.right}>
            <input type="radio" className="existing" value="false" name="cabinet" onChange={props.onCabinetChange}/>
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
            <input type="radio" className="amt" name="counter_removal" value="true" onChange={props.onCounterChange}/>
            <label>AMT</label>
          </div>
          <div className={styles.right}>
            <input type="radio" className="ther" value="false" name="counter_removal" onChange={props.onCounterChange}/>
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
            <input type="radio" className="amt" name="tile_removal" value="true" onChange={props.onTileChange}/>
            <label>AMT</label>
          </div>
          <div className={styles.right}>
            <input type="radio" className="ther" value="false" name="tile_removal" onChange={props.onTileChange}/>
            <label>Other</label>
          </div>
        </div>
      </CardWithRadius>
    </div>
  );
};

export default CreateProjectAddOns;
