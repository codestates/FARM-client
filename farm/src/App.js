import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  withRouter,
} from "react-router-dom";
import FarmPage from "./Pages/FarmPage";
import MyPage from "./Pages/MyPage";
import SignInPage from "./Pages/SignInPage";
import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import SignUp from "./Components/SignUp";
import { useSelector, useDispatch } from "react-redux";
import { setUserInfo, setAuth, setNoAuth } from "./Redux/actions/actions";

function App() {
  // const url = process.env.REACT_APP_API_URL;
  const url = "http://localhost:80";
  // const [islogin, setIslogin] = useState(false);
  // const [accessToken, setAccessToken] = useState("");
  const state = useSelector((state) => state.authReducer);

  const history = useHistory();
  const dispatch = useDispatch();
  const handleLoginSuccess = (accessToken) => {
    // setIslogin(true);
    // setAccessToken(accessToken);
    dispatch(setAuth(accessToken));
    console.log(`state.isLogin`, state.isLogin);
    console.log(`state.accessToken`, state.accessToken);
    // 로그인 및 accessToken 상태변경했으니 이제 유저정보와 farmlist 정보 요청
    axios
      .get(`${url}/users/info`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        console.log(`userinfo res`, res);
        if (res.data.data.message !== "ok") {
          alert("로그인 기간이 만료되었습니다. 다시 로그인 해주세요.");
          // setIslogin(false);
          dispatch(setNoAuth());
          return history.push("/");
        }
        // userinfo를 잘 불러 왔으면 dis
        const objUserInfo = res.data.data.data.userinfo;
        console.log(`류제천 존잘`, res.data);
        axios
          .get(`${url}/users/farminfo`, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-Type": "application/json",
            },
            withCredentials: true,
          })
          .then((res) => {
            console.log(`farminfo res`, res);
            if (res.data.message) {
              console.log(`res.data.data.length`, res.data.data.length);
              alert("로그인 기간이 만료되었습니다. 다시 로그인 해주세요.");
              // setIslogin(false);
              dispatch(setNoAuth());
              return history.push("/");
            }
            const arrProjectList = res.data.data;
            dispatch(setUserInfo(objUserInfo, arrProjectList));
            // return history.push("/");
          });
      })
      .catch((err) => alert(err));
  };
  const handleLogout = () => {
    //로그아웃 요청
    console.log("로그아웃요청들어옴!");
    axios
      .get(`${url}/users/signout`, {
        headers: {
          Authorization: `Bearer ${state.accessToken}`,
          "Content-Type": "application/json",
          withCredentials: true,
        },
      })
      .then((res) => {
        console.log(`res in logout`, res);
        dispatch(setNoAuth());
        return history.push("/");
      });
  };

  return (
    <Router>
      <Switch>
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
            else return <Redirect to="/signin" />;
          }}
        />
      </Switch>
    </Router>
  );
}

export default withRouter(App);
