import React from "react";
import "./Signup.css";

import Header from "./Header";

export default function Signup() {
  return (
    <>
      <Header />
      <div className="center">
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
      </div>
    </>
  );
}
