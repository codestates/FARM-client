import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FarmPage from "./Pages/FarmPage";

function App() {
  return (
    <FarmPage></FarmPage>
    // <Router>
    //   <Switch>
    //     <Route path="/">{/* hello world 찍어주는 컴포넌트 */}</Route>
    //     <Route path="/signin">{/* 로그인 컴포넌트 */}</Route>
    //     <Route path="/signup">{/* 회원가입 컴포넌트 */}</Route>
    //     <Route path="/mypage">{/* 마이페이지 컴포넌트 */}</Route>
    //     <Route path="/farmpage">
    //       <FarmPage></FarmPage>
    //     </Route>
    //   </Switch>
    // </Router>
  );
}

export default App;
