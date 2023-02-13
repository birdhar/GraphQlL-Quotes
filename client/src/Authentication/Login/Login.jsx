import React from "react";
import style from "./Login.module.css";

function Login() {
  return (
    <div className={style.loginContainer}>
      <div className={style.box} style={{ paddingTop: "2rem" }}>
        <div className={style.content}>
          <form className={style.form}>
            <div className={style.logoWrap}>
              <img src="/images/key-black.png" />
            </div>
            <h1 className={style.loginheader}>Login</h1>

            <div
              className={style.inputbox}
              style={{ marginTop: "1.5rem", marginBottom: "3rem" }}
            >
              <input type="text" required />
              <img className={style.inputicon} src="/images/username.png" />
              <span>Username</span>
            </div>

            <div className={style.inputbox} style={{ marginBottom: "1rem" }}>
              <input type="password " required />
              <img className={style.inputicon} src="/images/password.png" />
              <span>Password</span>
            </div>

            <div className={style.links}>
              <a href="#">Forgot Password?</a>
              <a href="#">Sign Up</a>
            </div>

            <button type="submit" className={style.submitbtn}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
