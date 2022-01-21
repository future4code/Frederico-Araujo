import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import AdminPage from "../pages/AdminPage";
import HomePage from "../pages/HomePage";
import TravelsPage from "../pages/TravelsPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <HomePage />
        </Route>

        <Route exact path={"/travels"}>
          <TravelsPage />
        </Route>

        <Route exact path={"/login"}>
          <AdminPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
