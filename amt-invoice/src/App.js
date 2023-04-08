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
import AdminPage from "./components/AdminPage/AdminPage";
import AdminPageAdd from "./components/AdminPage/AdminPageAdd";
import AdminPageRemove from "./components/AdminPage/AdminPageRemove";
import WorkOrderForm from "./components/Invoices/WorkOrderForm";
import Header from "./components/UI/Header";
import UpdateInvoice from "./components/CreateInvoice/UpdateInvoice";
import AdminPageEdit from "./components/AdminPage/AdminPageEdit";
import EditClient from "./components/EditClient/EditClient"
// import Deposit from "./components/Invoices/DepositForm";
import ProductInfoForm from "./components/Invoices/ProductInfoForm";

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
    <div>
      <Header />
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
          path="/AdminPage"
          exact
          element={
            <Layout changeLoginHandler={changeLogin} userLoggedIn={loggedIn}>
              <AdminPage />
            </Layout>
          }
        />

        <Route
          path="/AdminPageAdd"
          exact
          element={
            <Layout changeLoginHandler={changeLogin} userLoggedIn={loggedIn}>
              <AdminPageAdd />
            </Layout>
          }
        />

        <Route
          path="/AdminPageRemove"
          exact
          element={
            <Layout changeLoginHandler={changeLogin} userLoggedIn={loggedIn}>
              <AdminPageRemove />
            </Layout>
          }
        />
        <Route
          path="/AdminPageEdit"
          exact
          element={
            <Layout changeLoginHandler={changeLogin} userLoggedIn={loggedIn}>
              <AdminPageEdit />
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
          path="/workForm"
          exact
          element={
            <Layout changeLoginHandler={changeLogin} userLoggedIn={loggedIn}>
              <WorkOrderForm />
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
          path="/createInvoice"
          exact
          element={
            <Layout changeLoginHandler={changeLogin} userLoggedIn={loggedIn}>
              <CreateInvoice />
            </Layout>
          }
        />

        <Route
          path="/editClient"
          exact
          element={
            <Layout changeLoginHandler={changeLogin} userLoggedIn={loggedIn}>
              <EditClient />
            </Layout>
          }
        />

        <Route
          path="/updateInvoice"
          exact
          element={
            <Layout changeLoginHandler={changeLogin} userLoggedIn={loggedIn}>
              <UpdateInvoice/>
            </Layout>
          }
        />

        {/* <Route
          path="/deposit"
          exact
          element={
            <Layout changeLoginHandler={changeLogin} userLoggedIn={loggedIn}>
              <Deposit/>
            </Layout>
          }
        /> */}

        <Route
          path="/productInfo"
          exact
          element={
            <Layout changeLoginHandler={changeLogin} userLoggedIn={loggedIn}>
              <ProductInfoForm/>
            </Layout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
