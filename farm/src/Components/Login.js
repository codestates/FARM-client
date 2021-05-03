import React, { useRef, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router";
import SIgnUp from "./SignUp";

function Login({ handleLoginSuccess, handleSignUpWindow }) {
  const emailInput = useRef();
  const pwInput = useRef();
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loginResultMsg, setLoginResultMsg] = useState("");
  const history = useHistory();

  const handleInputValue = (key) => (e) => {
    if (key === "email") setEmail(e.target.value);
    if (key === "pw") setPw(e.target.value);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !pw) {
      return setLoginResultMsg("모든 항목은 필수로 입력되어야 합니다.");
    }
    let validEmail = isValidEmail(email);
    let validPw = isValidPw(pw);

    if (validEmail && validPw) {
      // 서버 로그인 post 요청
      // 받은 객체의 message가 "ok"면 마이페이지 이동
      // ok가 아니면 "존재하지 않는 회원입니다." 문구 띄어주기
      axios
        .post(
          "http://localhost:80/users/signin",
          {
            email: email,
            password: pw,
          },
          {
            "Content-Type": "application/json",
            withCredentials: true,
          }
        )
        .then((res) => {
          if (res.data.message === "ok") {
            handleLoginSuccess(res.data.data.accessToken);
          } else setLoginResultMsg("존재하지 않는 회원입니다.");
        })
        .then(() => {
          history.push("/");
        })
        .catch((err) => alert(err));
    } else {
      setErrorMessage("이메일과 비밀번호를 다시 확인해 주세요.");
      emailInput.current.focus();
    }
  };
  const isValidEmail = (email) => {
    const regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    return regExp.test(email);
  };
  const isValidPw = (pw) => {
    const regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/; // 8~10자 영문, 숫자 조합
    return regExp.test(pw);
  };

  return (
    <div className="Login_Window">
      <svg
        className="Farm_Logo"
        width="167"
        height="49"
        viewBox="0 0 167 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M68.153 13.9633V22.9327H82.3836V27.56H68.153V38.8431H62.6699V9.36768H84.1901V13.9633H68.153Z"
          fill="#222222"
        />
        <path
          d="M103.62 18.4959C105.363 20.0806 106.25 22.4894 106.25 25.6905V38.8752H101.274V36.1178C100.64 37.1003 99.7213 37.861 98.5169 38.3681C97.3125 38.8752 95.8863 39.1604 94.2065 39.1604C92.5267 39.1604 91.0371 38.8752 89.7694 38.3047C88.5016 37.7342 87.5191 36.9418 86.8535 35.8959C86.1562 34.8817 85.8076 33.7091 85.8076 32.4096C85.8076 30.3812 86.5683 28.7648 88.0579 27.5604C89.5475 26.3244 91.9246 25.7222 95.1573 25.7222H100.957V25.3735C100.957 23.7888 100.482 22.5845 99.5311 21.7604C98.5803 20.9047 97.1857 20.4927 95.3475 20.4927C94.0797 20.4927 92.8437 20.6828 91.6076 21.0948C90.3715 21.4752 89.3573 22.0457 88.5016 22.7429L86.4415 18.908C87.6142 18.0205 89.0404 17.3233 90.6885 16.8479C92.3366 16.3724 94.1114 16.1189 95.9497 16.1189C99.3409 16.1189 101.876 16.9112 103.62 18.4959ZM98.8338 34.438C99.848 33.8358 100.577 32.9801 100.989 31.8391V29.2402H95.5694C92.5267 29.2402 91.0054 30.2227 91.0054 32.2194C91.0054 33.1703 91.3858 33.9309 92.1464 34.5014C92.9071 35.0719 93.953 35.3571 95.3158 35.3571C96.6153 35.3254 97.7879 35.0402 98.8338 34.438Z"
          fill="#222222"
        />
        <path
          d="M125.171 16.1189V21.1265C124.727 21.0315 124.315 20.9998 123.935 20.9998C121.875 20.9998 120.29 21.602 119.149 22.7746C118.008 23.979 117.437 25.6905 117.437 27.9407V38.8435H112.176V16.3408H117.184V19.6369C118.674 17.2916 121.336 16.1189 125.171 16.1189Z"
          fill="#222222"
        />
        <path
          d="M163.901 18.591C165.549 20.2391 166.373 22.7112 166.373 25.9757V38.8751H161.112V26.6413C161.112 24.6762 160.668 23.1866 159.812 22.2041C158.956 21.2216 157.689 20.7145 156.072 20.7145C154.297 20.7145 152.871 21.285 151.825 22.4576C150.748 23.6303 150.241 25.2784 150.241 27.4336V38.8434H144.979V26.6413C144.979 24.6762 144.536 23.1866 143.68 22.2041C142.824 21.2216 141.556 20.7145 139.94 20.7145C138.133 20.7145 136.707 21.285 135.661 22.426C134.615 23.5669 134.077 25.2467 134.077 27.4336V38.8434H128.815V16.3407H133.823V19.1932C134.679 18.179 135.725 17.4183 136.992 16.8795C138.26 16.3407 139.655 16.0872 141.208 16.0872C142.888 16.0872 144.377 16.4041 145.708 17.038C147.039 17.6719 148.054 18.591 148.814 19.827C149.733 18.6544 150.938 17.7352 152.396 17.0697C153.854 16.4041 155.47 16.0872 157.245 16.0872C160.002 16.1189 162.253 16.9429 163.901 18.591Z"
          fill="#222222"
        />
        <path
          d="M35.8577 37.1319C22.3878 37.1319 11.4851 26.2292 11.4851 12.7593C11.4851 9.08278 12.3091 5.56475 13.767 2.45874C5.68507 6.42049 0.106934 14.7243 0.106934 24.3593C0.106934 37.8292 11.0097 48.7319 24.4796 48.7319C34.2413 48.7319 42.6719 42.9636 46.5703 34.6598C43.3375 36.2445 39.6927 37.1319 35.8577 37.1319Z"
          fill="url(#paint0_linear)"
        />
        <path
          d="M30.7227 2.04628C31.8954 1.98289 33.0681 1.98289 34.2407 2.01459C30.8178 0.524972 27.0145 -0.20399 23.0211 0.0495619C9.51943 0.841911 -0.749414 12.4419 0.0429356 25.9118C0.106324 27.1162 0.550039 29.2397 0.550039 29.1446C2.99048 14.502 15.2877 2.96541 30.7227 2.04628Z"
          fill="url(#paint1_linear)"
        />
        <path
          d="M41.6887 7.05455C39.9138 6.86438 38.0756 6.801 36.2373 6.92777C33.6384 7.08624 31.0395 7.56165 28.5357 8.32231C26.0319 9.08296 23.5914 10.0972 21.3095 11.3649C19.0592 12.601 16.904 14.0589 14.939 15.7387C13.0373 17.3551 11.2942 19.1616 9.77286 21.1584C8.31494 23.06 7.07888 25.1201 6.09636 27.307C5.17724 29.3988 4.54336 31.6174 4.28981 33.8676C4.19472 34.7551 4.13134 35.6425 4.16303 36.4982C4.16303 36.942 4.19472 37.354 4.22642 37.7977C4.28981 38.5584 4.95538 39.319 5.43079 39.9212C6.82532 41.7278 8.66357 43.2491 10.5969 44.4534C10.6286 44.4851 11.1991 44.7704 11.1991 44.8021C10.9455 27.4972 24.3521 12.8862 41.7838 11.8403C43.0198 11.777 44.2559 11.777 45.4603 11.8403C44.3827 10.0655 43.1149 8.48078 41.6887 7.05455Z"
          fill="url(#paint2_linear)"
        />
        <path
          d="M48.8506 22.0772C48.6604 20.2072 48.2801 18.4007 47.7096 16.6892C47.5511 16.6892 47.4244 16.6892 47.2659 16.7209C30.5632 17.7351 17.5686 31.1417 16.7129 47.4958C16.7129 47.5274 17.0298 47.8127 19.5653 48.4149C22.1326 49.0171 22.7347 48.7318 22.7347 48.7001C24.9216 35.2619 35.2539 24.5493 48.8506 22.0772Z"
          fill="url(#paint3_linear)"
        />
        <path
          d="M48.6291 28.5427C39.5647 31.9974 32.6871 39.0968 29.5811 48.1613C39.5013 46.1329 46.981 38.4312 48.6291 28.5427Z"
          fill="url(#paint4_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="48.1445"
            y1="56.4015"
            x2="-2.11856"
            y2="10.5126"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" />
            <stop offset="0.1892" stop-color="#F9F9F9" />
            <stop offset="0.4321" stop-color="#E9E9E9" />
            <stop offset="0.7045" stop-color="#CFCFCF" />
            <stop offset="0.9964" stop-color="#AAAAAA" />
            <stop offset="1" stop-color="#AAAAAA" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="33.5475"
            y1="-6.54719"
            x2="-4.27739"
            y2="26.1343"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#B6C61A" />
            <stop offset="1" stop-color="#006344" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="46.8141"
            y1="1.1846"
            x2="2.98871"
            y2="38.9023"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#B6C61A" />
            <stop offset="1" stop-color="#006344" />
          </linearGradient>
          <linearGradient
            id="paint3_linear"
            x1="54.4112"
            y1="5.33015"
            x2="18.6223"
            y2="45.0838"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#B6C61A" />
            <stop offset="1" stop-color="#006344" />
          </linearGradient>
          <linearGradient
            id="paint4_linear"
            x1="60.597"
            y1="14.2299"
            x2="34.0231"
            y2="45.197"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#B6C61A" />
            <stop offset="1" stop-color="#006344" />
          </linearGradient>
        </defs>
      </svg>

      <form onSubmit={handleLogin} className="Login_Wrapper">
        <div className="Login_Text">로그인</div>
        <br></br>
        <div className="Input_Set">
          <div>이메일 주소</div>
          <input
            className="Input_Box"
            type="text"
            ref={emailInput}
            onChange={handleInputValue("email")}
          ></input>
        </div>
        <div className="Input_Set">
          <div>비밀번호</div>
          <input
            className="Input_Box"
            type="password"
            ref={pwInput}
            onChange={handleInputValue("pw")}
          ></input>
        </div>
        <div className="Error_Msg">{errorMessage}</div>
        <div className="Btns_Login_SignUp">
          <input
            className="Btn_Login Input_Btn"
            type="submit"
            value="로그인"
          ></input>
          <div>{loginResultMsg}</div>
          <div className="Input_Btn">
            계정이 없으신가요?{" "}
            <span className="SignUp_Span" onClick={handleSignUpWindow}>
              회원가입
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}

export default withRouter(Login);
