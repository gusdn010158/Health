import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./Header";

// Global styles
const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@700&family=Poppins:wght@400;500;600&display=swap");

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    overflow: hidden;
    font-family: 'Poppins', sans-serif;
  }
`;

// Styled Components
const Center = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  border-radius: 10px;
`;

// Signup Component
export default function Signup() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Center>
        <h1>Sign up</h1>
        <form method="post">
          <div className="txt_field">
            <input type="text" required />
            <label>User Name</label>
          </div>
          <div className="txt_field">
            <input type="password" required />
            <label>Password</label>
          </div>
          <div className="txt_field">
            <input type="text" required />
            <label>Email</label>
          </div>
          <div className="txt_field">
            <input type="text" required />
            <label>Address</label>
          </div>
          <input type="submit" value="Sign up" />
        </form>
      </Center>
    </>
  );
}
