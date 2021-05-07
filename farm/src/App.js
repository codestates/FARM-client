import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  withRouter,
} from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import FarmPage from "./Pages/FarmPage";
import MyPage from "./Pages/MyPage";
import SignInPage from "./Pages/SignInPage";
import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import SignUp from "./Components/SignUp";
import { useSelector, useDispatch } from "react-redux";
import {
  setUserInfo,
  setAuth,
  setNoAuth,
  openSignup,
} from "./Redux/actions/actions";
// import { LandingPage } from "./Pages/LandingPage";

function App() {
  // const url = process.env.REACT_APP_API_URL;
  // const [islogin, setIslogin] = useState(false);
  // const [accessToken, setAccessToken] = useState("");
  const state = useSelector((state) => state.authReducer);

  const history = useHistory();
  const dispatch = useDispatch();
  const handleLoginSuccess = (accessToken) => {
    // setIslogin(true);
    // setAccessToken(accessToken);
    dispatch(setAuth(accessToken));
    // 로그인 및 accessToken 상태변경했으니 이제 유저정보와 farmlist 정보 요청
    axios
      .get(`${process.env.REACT_APP_API_URL}/users/info`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.message !== "ok") {
          alert("로그인 기간이 만료되었습니다. 다시 로그인 해주세요.");
          dispatch(setNoAuth());
          return history.push("/");
        }

        const objUserInfo = res.data.data.userinfo;
        axios
          .get(`${process.env.REACT_APP_API_URL}/users/farminfo`, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-Type": "application/json",
            },
            withCredentials: true,
          })
          .then((res) => {
            if (res.data.message !== "ok") {
              alert("로그인 기간이 만료되었습니다. 다시 로그인 해주세요.");
              dispatch(setNoAuth());
              return history.push("/signin");
            }
            const arrProjectList = res.data.data;
            dispatch(setUserInfo(objUserInfo, arrProjectList));
          });
      })
      .catch((err) => console.log(`err`, err));
  };
  const handleLogout = () => {
    //로그아웃 요청
    axios
      .get(`${process.env.REACT_APP_API_URL}/users/signout`, {
        headers: {
          Authorization: `Bearer ${state.accessToken}`,
          "Content-Type": "application/json",
          withCredentials: true,
        },
      })
      .then((res) => {
        dispatch(setNoAuth());
        dispatch(openSignup(false));
        return history.push("/signin");
      });
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/landingpage" render={() => <LandingPage />} />
        <Route
          path="/signin"
          render={() => <SignInPage handleLoginSuccess={handleLoginSuccess} />}
        />
        <Route
          path="/signup"
          render={() => <SignUp handleLoginSuccess={handleLoginSuccess} />}
        />
        <Route
          path="/mypage"
          render={() => {
            if (!state.isLogin) return <Redirect to="/signin" />;
            else
              return (
                <MyPage
                  accessToken={state.accessToken}
                  handleLogout={handleLogout}
                />
              );
          }}
        />
        <Route
          path="/farmpage"
          render={() => {
            if (state.isLogin)
              return <FarmPage accessToken={state.accessToken} />;
            else return <Redirect to="/signin" />;
          }}
        />
        <Route
          path="/"
          render={() => {
            if (state.isLogin) return <Redirect to="/mypage" />;
            else return <Redirect to="/landingpage" />;
          }}
        />
      </Switch>
    </Router>
  );
}

export default withRouter(App);
