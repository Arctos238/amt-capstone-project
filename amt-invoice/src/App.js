import "./App.css";
import { useLocation, Navigate, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login.js";
import { useState } from "react";
import CreateProject from "./components/CreateProject/CreateProject";
import CreateInvoice from "./components/CreateInvoice/CreateInvoice";
import SearchPage from "./components/Search/Search";
import Layout from "./components/Navigation/Layout";
import ClientPage from "./components/ClientPage/ClientPage";
import InvoicesPage from "./components/Invoices/InvoicesPage";
import CreateClient from "./components/Create_client/CreateClient";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const location = useLocation();

  const changeLogin = () => {
    setLoggedIn(loggedIn ? false : true);
  };

  if (!loggedIn && location.pathname !== "/") {
    return <Navigate to="/" />;
  }

  return (
    <Routes>
      <Route
        path="/"
        exact
        element={<Login changeLoginHandler={changeLogin} />}
      />

      <Route
        path="/home"
        exact
        element={
          <Layout changeLoginHandler={changeLogin} userLoggedIn={loggedIn}>
            <Home />
          </Layout>
        }
      />

      <Route
        path="/createProject"
        element={
          <Layout changeLoginHandler={changeLogin} userLoggedIn={loggedIn}>
            <CreateProject />
          </Layout>
        }
      />

      <Route
        path="/search"
        exact
        element={
          <Layout changeLoginHandler={changeLogin} userLoggedIn={loggedIn}>
            <SearchPage />
          </Layout>
        }
      />

      <Route
        path="/clientPage"
        exact
        element={
          <Layout changeLoginHandler={changeLogin} userLoggedIn={loggedIn}>
            <ClientPage />
          </Layout>
        }
      />

      <Route
        path="/invoices"
        exact
        element={
          <Layout changeLoginHandler={changeLogin} userLoggedIn={loggedIn}>
            <InvoicesPage />
          </Layout>
        }
      />

      <Route
        path="/createClient"
        exact
        element={
          <Layout changeLoginHandler={changeLogin} userLoggedIn={loggedIn}>
            <CreateClient />
          </Layout>
        }
      />

      <Route
        path="/invoices"
        exact
        element={
          <Layout changeLoginHandler={changeLogin} userLoggedIn={loggedIn}>
            <InvoicesPage />
          </Layout>
        }
      />
      <Route
        path="/createInvoice"
        exact
        element={
          <Layout changeLoginHandler={changeLogin} userLoggedIn={loggedIn}>
            <CreateInvoice />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
