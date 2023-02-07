import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import { useState } from "react";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login.js";
import CreateProject from "./components/CreateProject/CreateProject";
import CreateClient from "./components/Create_client/CreateClientPage";
import CreateInvoice from "./components/CreateInvoice/CreateInvoice";
import MainNavigation from "./components/Navigation/MainNavigation";
import Layout from "./components/Navigation/Layout";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const changeLogin = () => {
    setLoggedIn(loggedIn ? false : true);
  };

  return (
    <Routes>
      <Route path="/" element={<Login changeLoginHandler={changeLogin} />} />
      <Route
        path="/home"
        element={
          <Layout changeLoginHandler={changeLogin} userLoggedIn={loggedIn}>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/createProject"
        element={
          <Layout>
            <CreateProject />
          </Layout>
        }
      />
      <Route
        path="/createClient"
        element={
          <Layout>
            <CreateClient />
          </Layout>
        }
      />
      <Route
        path="/createInvoice"
        element={
          <Layout>
            <CreateInvoice />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
