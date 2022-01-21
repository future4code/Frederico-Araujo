import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import AdminPage from "../pages/AdminPage";
import HomePage from "../pages/HomePage";
import TripsPage from "../pages/TripsPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <HomePage />
        </Route>

        <Route exact path={"/trips"}>
          <TripsPage />
        </Route>

        <Route exact path={"/login"}>
          <AdminPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
