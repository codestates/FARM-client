import React, { useState, memo } from "react";
import Login from "../Components/Login";
import SignUp from "../Components/SignUp";
import { useHistory } from "react-router";
import { openSignup } from "../Redux/actions/actions";
import { useSelector, useDispatch } from "react-redux";

function SignInPage({ handleLoginSuccess }) {
  // const [isClickSignUp, setIsClickSignUp] = useState(false);
  const history = useHistory();
  const pageState = useSelector((state) => state.loginSignupReducer);
  const dispatch = useDispatch();
  const handleSignUpWindow = () => {
    // setIsClickSignUp(true);
    dispatch(openSignup(true));
  };
  const handleLoginWindow = () => {
    // setIsClickSignUp(false);
    dispatch(openSignup(false));
  };
  const goToLandingpage = () => {
    console.log("랜딩페이지로가자!");
    history.push("/landingpage");
  };
  return (
    <div className="Sign_In_Page">
      <nav className="Login_SignUp_Nav">
        <svg
          className="Farm_Image"
          onClick={goToLandingpage}
          width="105"
          height="31"
          viewBox="0 0 105 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M43.0122 8.81246V14.4732H51.9933V17.3935H43.0122V24.5144H39.5518V5.91211H53.1334V8.81246H43.0122Z"
            fill="#222222"
          />
          <path
            d="M65.3957 11.6728C66.4958 12.6729 67.0559 14.1931 67.0559 16.2133V24.5344H63.9155V22.7941C63.5154 23.4142 62.9354 23.8943 62.1753 24.2143C61.4152 24.5344 60.5151 24.7144 59.4549 24.7144C58.3948 24.7144 57.4547 24.5344 56.6546 24.1743C55.8545 23.8143 55.2344 23.3142 54.8144 22.6541C54.3743 22.0141 54.1543 21.274 54.1543 20.4539C54.1543 19.1737 54.6344 18.1536 55.5745 17.3935C56.5146 16.6134 58.0148 16.2333 60.055 16.2333H63.7155V16.0133C63.7155 15.0132 63.4154 14.2531 62.8154 13.733C62.2153 13.193 61.3352 12.9329 60.175 12.9329C59.3749 12.9329 58.5948 13.053 57.8147 13.313C57.0346 13.553 56.3946 13.9131 55.8545 14.3531L54.5543 11.9328C55.2944 11.3728 56.1945 10.9327 57.2347 10.6327C58.2748 10.3326 59.3949 10.1726 60.5551 10.1726C62.6953 10.1726 64.2955 10.6727 65.3957 11.6728ZM62.3753 21.734C63.0154 21.354 63.4754 20.8139 63.7355 20.0938V18.4536H60.315C58.3948 18.4536 57.4347 19.0737 57.4347 20.3338C57.4347 20.9339 57.6747 21.414 58.1548 21.774C58.6348 22.1341 59.2949 22.3141 60.155 22.3141C60.9751 22.2941 61.7152 22.1141 62.3753 21.734Z"
            fill="#222222"
          />
          <path
            d="M78.9969 10.1726V13.333C78.7169 13.273 78.4568 13.253 78.2168 13.253C76.9166 13.253 75.9165 13.633 75.1964 14.3731C74.4763 15.1332 74.1163 16.2133 74.1163 17.6335V24.5144H70.7959V10.3126H73.9563V12.3929C74.8964 10.9127 76.5766 10.1726 78.9969 10.1726Z"
            fill="#222222"
          />
          <path
            d="M103.44 11.733C104.48 12.7732 105 14.3333 105 16.3936V24.5346H101.679V16.8136C101.679 15.5735 101.399 14.6334 100.859 14.0133C100.319 13.3932 99.5191 13.0732 98.499 13.0732C97.3788 13.0732 96.4787 13.4332 95.8186 14.1733C95.1386 14.9134 94.8185 15.9535 94.8185 17.3137V24.5146H91.4981V16.8136C91.4981 15.5735 91.2181 14.6334 90.678 14.0133C90.138 13.3932 89.3379 13.0732 88.3177 13.0732C87.1776 13.0732 86.2775 13.4332 85.6174 14.1533C84.9573 14.8734 84.6173 15.9335 84.6173 17.3137V24.5146H81.2969V10.3129H84.4573V12.1131C84.9973 11.473 85.6574 10.9929 86.4575 10.6529C87.2576 10.3129 88.1377 10.1528 89.1178 10.1528C90.178 10.1528 91.1181 10.3529 91.9582 10.7529C92.7983 11.153 93.4384 11.733 93.9184 12.5131C94.4985 11.773 95.2586 11.193 96.1787 10.7729C97.0988 10.3529 98.1189 10.1528 99.2391 10.1528C100.979 10.1728 102.399 10.6929 103.44 11.733Z"
            fill="#222222"
          />
          <path
            d="M22.6301 23.4342C14.1291 23.4342 7.24826 16.5533 7.24826 8.05231C7.24826 5.73202 7.76832 3.51175 8.68843 1.55151C3.58781 4.05182 0.0673828 9.29246 0.0673828 15.3732C0.0673828 23.8742 6.94822 30.7551 15.4493 30.7551C21.61 30.7551 26.9307 27.1146 29.391 21.874C27.3507 22.8741 25.0504 23.4342 22.6301 23.4342Z"
            fill="url(#paint0_linear)"
          />
          <path
            d="M19.3895 1.29143C20.1295 1.25143 20.8696 1.25143 21.6097 1.27143C19.4495 0.331316 17.0492 -0.12874 14.5289 0.0312791C6.00783 0.53134 -0.472964 7.85223 0.0270972 16.3533C0.0671021 17.1134 0.347136 18.4535 0.347136 18.3935C1.88732 9.15239 9.64827 1.8715 19.3895 1.29143Z"
            fill="url(#paint1_linear)"
          />
          <path
            d="M26.3102 4.45196C25.19 4.33194 24.0299 4.29194 22.8697 4.37195C21.2295 4.47196 19.5893 4.772 18.0091 5.25206C16.429 5.73211 14.8888 6.37219 13.4486 7.17229C12.0284 7.95238 10.6683 8.8725 9.4281 9.93263C8.22796 10.9527 7.12782 12.0929 6.1677 13.353C5.24759 14.5532 4.4675 15.8533 3.84742 17.2335C3.26735 18.5537 2.8673 19.9538 2.70728 21.374C2.64728 21.9341 2.60727 22.4942 2.62727 23.0342C2.62727 23.3143 2.64728 23.5743 2.66728 23.8543C2.70728 24.3344 3.12733 24.8144 3.42737 25.1945C4.30748 26.3346 5.46762 27.2947 6.68777 28.0548C6.70777 28.0748 7.06781 28.2549 7.06781 28.2749C6.90779 17.3535 15.3688 8.13241 26.3702 7.47233C27.1503 7.43232 27.9304 7.43232 28.6904 7.47233C28.0104 6.35219 27.2103 5.35207 26.3102 4.45196Z"
            fill="url(#paint2_linear)"
          />
          <path
            d="M30.8303 13.9331C30.7103 12.753 30.4703 11.6128 30.1102 10.5327C30.0102 10.5327 29.9302 10.5327 29.8302 10.5527C19.2889 11.1928 11.0879 19.6538 10.5479 29.9751C10.5479 29.9951 10.7479 30.1751 12.3481 30.5552C13.9683 30.9352 14.3483 30.7552 14.3483 30.7352C15.7285 22.2541 22.2493 15.4933 30.8303 13.9331Z"
            fill="url(#paint3_linear)"
          />
          <path
            d="M30.6904 18.0139C24.9697 20.1942 20.6292 24.6747 18.6689 30.3954C24.9297 29.1153 29.6503 24.2547 30.6904 18.0139Z"
            fill="url(#paint4_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="30.3844"
              y1="35.5954"
              x2="-1.33715"
              y2="6.63439"
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
              x1="21.1722"
              y1="-4.13201"
              x2="-2.69951"
              y2="16.4937"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#B6C61A" />
              <stop offset="1" stop-color="#006344" />
            </linearGradient>
            <linearGradient
              id="paint2_linear"
              x1="29.5449"
              y1="0.747366"
              x2="1.88614"
              y2="24.5514"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#B6C61A" />
              <stop offset="1" stop-color="#006344" />
            </linearGradient>
            <linearGradient
              id="paint3_linear"
              x1="34.3397"
              y1="3.36388"
              x2="11.7529"
              y2="28.4529"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#B6C61A" />
              <stop offset="1" stop-color="#006344" />
            </linearGradient>
            <linearGradient
              id="paint4_linear"
              x1="38.2434"
              y1="8.98094"
              x2="21.4724"
              y2="28.5246"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#B6C61A" />
              <stop offset="1" stop-color="#006344" />
            </linearGradient>
          </defs>
        </svg>

        <div className="Login_SignUp">
          <div className="Login" onClick={handleLoginWindow}>
            로그인
          </div>
          <div className="SignUp" onClick={handleSignUpWindow}>
            회원가입
          </div>
        </div>
      </nav>

      <div>
        {!pageState.isClickSignUp ? (
          <Login
            handleLoginSuccess={handleLoginSuccess}
            handleSignUpWindow={handleSignUpWindow}
          />
        ) : (
          <SignUp
            handleLoginSuccess={handleLoginSuccess}
            handleLoginWindow={handleLoginWindow}
          />
        )}
      </div>
      <div className="Footer">
        <svg
          width="100vw"
          height="60"
          viewBox="0 0 100vw 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="100vw" height="60" fill="#198342" />
        </svg>
      </div>
    </div>
  );
}
export default memo(SignInPage);
