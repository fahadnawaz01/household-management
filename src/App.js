import { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Password from "./pages/Password";
import UserProfile from "./components/Profile/UserProfile";
import AuthContext from "./components/store/auth-context";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import HireServices from "./pages/HireServices";
import FillServices from "./pages/FillServices";
import ApplyServices from "./pages/ApplyServices";
import LookForServices from "./pages/LookForServices";
import PostServiceAvailabiity from "./pages/PostServiceAvailability";
import Request from "./pages/requests";
import STAP from "./pages/serviceTakerAndProvider";
import Message from "./pages/message";

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        {!authCtx.isLoggedIn && (
          <Route path="/auth">
            <AuthPage />
          </Route>
        )}
        {authCtx.isLoggedIn && (
          <Route path="/profile">
            <UserProfile />
          </Route>
        )}
        {authCtx.isLoggedIn && (
          <Route path="/password">
            <Password />
          </Route>
        )}
        {authCtx.isLoggedIn && (
          <Route path="/hireservices">
            <HireServices />
          </Route>
        )}
        {authCtx.isLoggedIn && (
          <Route path="/fillservices">
            <FillServices />
          </Route>
        )}
        {authCtx.isLoggedIn && (
          <Route path="/applyservices">
            <ApplyServices />
          </Route>
        )}
        {authCtx.isLoggedIn && (
          <Route path="/lookforservices">
            <LookForServices />
          </Route>
        )}
        {authCtx.isLoggedIn && (
          <Route path="/postservices">
            <PostServiceAvailabiity />
          </Route>
        )}
        {authCtx.isLoggedIn && (
          <Route path="/requests">
            <Request />
          </Route>
        )}
        {authCtx.isLoggedIn && (
          <Route path="/STAP">
            <STAP />
          </Route>
        )}
        {authCtx.isLoggedIn && (
          <Route path="/message">
            <Message />
          </Route>
        )}
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
