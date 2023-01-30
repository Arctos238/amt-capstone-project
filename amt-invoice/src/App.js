import { Route, Switch } from "react-router-dom";

import Layout from "./components/Navigation/Layout";

import Login from "./components/Login/Login";
import HomePage from "./components/Home/Home";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Login />
      </Route>

      <Layout>
        <Route path="/home" exact>
          <HomePage />
        </Route>
      </Layout>
    </Switch>
  );
}

export default App;
