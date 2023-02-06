import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login.js";
import { useState } from "react";
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
    </Routes>
  );
}

export default App;
