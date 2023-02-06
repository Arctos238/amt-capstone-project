import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

function Layout(props) {
  const logoutHandler = () => {
    props.changeLoginHandler();
  };

  return (
    <div className={classes.container}>
      <MainNavigation
        logoutChangeHandler={logoutHandler}
        loggedIn={props.userLoggedIn}
      />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
