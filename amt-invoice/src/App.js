import { Route, Switch } from "react-router-dom";

import Layout from "./components/Navigation/Layout";

import Login from "./components/Login/Login";
import HomePage from "./components/Home/Home";
import CreateProject from "./components/CreateProject/CreateProject"
import ClientPage from "./components/ClientPage/ClientPage";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Login />
      </Route>
      <Route path="/createProject" exact>
        <CreateProject />
      </Route>
      <Layout>
        <Route path="/home" exact>
          <HomePage />
        </Route>
      </Layout>
      
    </Switch>
    // <ClientPage/>
  );
}

export default App;
