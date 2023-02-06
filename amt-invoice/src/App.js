import { Route, Switch, useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Layout from "./components/Navigation/Layout";
import { GetEmployeeByUsername } from "./services/EmployeeServices";
import Login from "./components/Login/Login";
import HomePage from "./components/Home/Home";
import CreateProject from "./components/CreateProject/CreateProject";
import ClientPage from "./components/ClientPage/ClientPage";
import CreateClient from "./components/Create_client/CreateClientPage";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});

  let name = "admin";
  let pass = "password";

  const history = useHistory();

  const handleSubmit = async () => {
    const data = await GetEmployeeByUsername(username);
    const cUser = data;

    if (cUser.employeePassword === password) {
      localStorage.setItem("user", JSON.stringify(cUser));
      setUser(user);
      setUsername("");
      setPassword("");
      setUser(cUser);
    }

    history.push("/");
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  const cUser = localStorage.getItem("user");
  console.log(user);
  if (user.employeePassword != null) {
    return (
      <Switch>
        {/* <Route path="/" exact>
          <Login
            handleSubmit={handleSubmit}
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
          />
        </Route> */}
        <Route path="/" exact>
          <Layout>
            <HomePage />
          </Layout>
        </Route>
        <Route path="/createProject" exact>
          <CreateProject />
        </Route>
        <Route path="/createClient" exact>
          <CreateClient />
        </Route>
      </Switch>
      //<ClientPage />
    );
  }

  // if there's no user, show the login form
  return (
    <Login
      handleSubmit={handleSubmit}
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      history={history}
    />
  );
}

export default App;
