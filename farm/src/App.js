import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FarmPage from "./Pages/FarmPage";
import MyPage from "./Pages/MyPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <FarmPage />

          {/* 테스트를 위해 임시로 root path / 에 FarmPage 설정. 추후 변경 예정 */}
        </Route>
        <Route path="/signin">{/* 로그인 컴포넌트 */}</Route>
        <Route path="/signup">{/* 회원가입 컴포넌트 */}</Route>
        <Route path="/mypage">
          <MyPage />
        </Route>

        {/* <Route path="/farmpage">
          <FarmPage />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
