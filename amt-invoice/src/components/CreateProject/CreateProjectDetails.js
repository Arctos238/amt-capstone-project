import React from "react";

import CardWithRadius from "../UI/CardWithRadius";
import styles from "./CreateProjectDetails.module.css";


const CreateProjectDetails = (props) => {
  return (
    <React.Fragment>
      <div className={styles.parent}>
        <div className={styles.left}>
          <CardWithRadius>
            <label>Project Name:</label>
            <input type="text" className="project-name" ref={props.projectNameRef}/>
          </CardWithRadius>
          <CardWithRadius>
            <label>Site Super Phone:</label>
            <input
              type="tel"
              className="site-super-phone"
              placeholder="123-456-7890"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              ref={props.siteSuperPhoneRef}
            />
          </CardWithRadius>
          <CardWithRadius>
            <label>Postal Code:</label>
            <input type="text" className="postal-code" ref={props.postalCodeRef}/>
          </CardWithRadius>
          <CardWithRadius>
            <label>City:</label>
            <input type="text" className="city" ref={props.cityRef}/>
          </CardWithRadius>
        </div>
        <div className={styles.right}>
          <CardWithRadius>
            <label>Site Super Name:</label>
            <input type="text" className="site-super-name" ref={props.siteSuperNameRef}/>
          </CardWithRadius>
          <CardWithRadius>
            <label>Address:</label>
            <input type="text" className="address" ref={props.addressRef}/>
          </CardWithRadius>
          <CardWithRadius>
            <label>Suite/Building No.:</label>
            <input type="number" className="building-no" min="0" ref={props.suiteRef}/>
          </CardWithRadius>
          <CardWithRadius>
            <label>Province:</label>
            <input type="text" className="province" ref={props.provinceRef}/>
          </CardWithRadius>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CreateProjectDetails;
