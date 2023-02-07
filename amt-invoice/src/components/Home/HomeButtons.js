import React from "react";
import { Link } from "react-router-dom";

import Button from "../UI/Button";
import classes from "../UI/Button.module.css";
import styles from "./HomeButtons.module.css";

const HomeButtons = () => {
  return (
    <React.Fragment>
      <div className={styles.container}>
        <div className={styles.parent}>
          <Link to="/createClient">
            <div className={styles.left}>
              <Button className={classes.change}>Add Client</Button>
            </div>
          </Link>

          {/* change to createProject */}
          <Link to="/createInvoice">
            <div className={styles.center}>
              <Button className={classes.change}>Add Project</Button>
            </div>
          </Link>

          <Link to="/search">
            <div className={styles.right}>
              <Button className={classes.find}>Find</Button>
            </div>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomeButtons;
