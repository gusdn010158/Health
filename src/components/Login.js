import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "./img/mainlogo.jpg";

export default function Login() {
  const navigate = useNavigate();
  const navigateTo = (path) => {
    navigate(path);
  };
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // 로그인 처리 로직을 구현합니다.
    // 성공적으로 로그인되었다면 setIsLoggedIn(true)로 상태를 변경합니다.
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // 로그아웃 처리 로직을 구현합니다.
    // 로그아웃되었다면 setIsLoggedIn(false)로 상태를 변경합니다.
    setIsLoggedIn(false);
  };
  const buttonData = [
    { label: "PRODUCTS", path: "/Products" },
    { label: "COMMUNITY", path: "/Community" },
    { label: "TODO LIST", path: "/Todos" },
  ];
  return (
    <div>
      <span className="banner">
        <Link to="/">
          <div>
            <img className="bannerLogo" src={logo} alt="logo" />
          </div>
        </Link>
        <div className="banner_btnItems">
          <div className="left-buttons">
            {buttonData.map((button) => (
              <button
                className="bannerBtn"
                key={button.path}
                onClick={() => navigateTo(button.path)}
              >
                {button.label}
              </button>
            ))}
          </div>
          <div className="right-buttons">
            {isLoggedIn ? (
              <button>LOG OUT</button>
            ) : (
              <React.Fragment>
                <button
                  className="bannerBtn"
                  onClick={() => navigateTo("/SignUp")}
                >
                  SIGN UP
                </button>
                <button
                  className="bannerBtn"
                  onClick={() => navigateTo("/LogIn")}
                >
                  LOG IN
                </button>
              </React.Fragment>
            )}
          </div>
        </div>
      </span>
      <div className="center">
        <h1>Login</h1>
        <form method="post">
          <div className="txt_field">
            <input type="text" required />
            <label>User Name</label>
          </div>
          <div className="txt_field">
            <input type="password" required />
            <label>Password</label>
          </div>
          <div className="pass">Forgot password?</div>
          <input type="submit" value="Login" />
          <div className="signup_link">
            Not a member? <a href="/Signup">Signup</a>
          </div>
        </form>
      </div>
    </div>
  );
}