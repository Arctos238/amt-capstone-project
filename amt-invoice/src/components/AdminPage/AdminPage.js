import React from "react";
import Button from "../UI/Button";
import AdminPageAdd from "./AdminPageAdd";
import { Link } from "react-router-dom";
import styles from "./AdminPage.module.css";
import classes from "../UI/Button.module.css";

const AdminPage = () => {
  return (
    <div className={styles.home}>
      <h1 className={styles.h1}>Admin</h1>
      <div className={styles.parent}>
        <div className={styles.left}>
          <Link to="/AdminPageAdd">
            <Button type="submit" className={classes.change}>
              Add User
            </Button>
          </Link>
        </div>
        <div className={styles.right}>
          <Link to="/AdminPageRemove">
            <Button type="submit" value="remove" className={classes.change}>
              Users
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
