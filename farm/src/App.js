import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import FarmPage from "./Pages/FarmPage";
import MyPage from "./Pages/MyPage";
import SignInPage from "./Pages/SignInPage";
import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import SignUp from "./Components/SignUp";

function App() {
  const [islogin, setIslogin] = useState(false);
  const [userinfo, setUserinfo] = useState(null);
  const history = useHistory();
  const handleResponseSuccess = () => {
    axios
      .get("url/users/info", {
        "Content-Type": "application/json",
        withCredentials: true,
      })
      .then((res) => {
        setIslogin(true);
        setUserinfo(res.data.userInfo);
      })
      .then(() => {
        history.push("/");
      });
  };

  return (
    <Router>
      <Switch>
        <Route
          path="/signin"
          render={() => (
            <SignInPage handleResponseSuccess={handleResponseSuccess} />
          )}
        />
        <Route path="/signup" render={() => <SignUp />} />
        <Route
          path="/mypage"
          render={() => {
            if (!islogin) return <Redirect to="/signin" />;
            else return <MyPage userinfo={userinfo} />;
          }}
        />
        <Route
          path="/farmpage"
          render={() => {
            if (islogin) return <FarmPage userinfo={userinfo} />;
            else return <Redirect to="/signin" />;
          }}
        />
        <Route
          path="/"
          render={() => {
            if (islogin) return <Redirect to="/mypage" />;
            else return <Redirect to="/signin" />;
          }}
        />
      </Switch>
    </Router>
  );
}

export default App;
