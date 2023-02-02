import React from "react";

import styles from "./CardWithRadius.module.css";

const CardWithRadius = (props) => {
  return (
    <div className={`${styles.main_container} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default CardWithRadius;
