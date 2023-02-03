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
 
  const handleSubmit = () => {
    const data = GetEmployeeByUsername();
    console.log(data);
    localStorage.setItem("data", data);
      const user = data;
      if(user !== null ){
        if (password === user.password) {
          localStorage.setItem("user", JSON.stringify(user));
          setUser(user);
          setUsername("");
          setPassword("");
         history.push("/home");
      }
    }
    
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);



  // if there's a user show the message below
  if (user.name) {
      return (
        <Switch>
          <Route path="/" exact>
            <Login 
              handleSubmit={handleSubmit}
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
            />
          </Route>
          <Route path="/home" exact>
            
            <Layout>
              <HomePage/>
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
};

export default App;
