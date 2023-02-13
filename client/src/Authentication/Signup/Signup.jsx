import React from "react";
import style from "../Login/Login.module.css";

function Signup() {
  return (
    <div className={style.loginContainer}>
      <div className={style.box}>
        <div className={style.content}>
          <form className={style.form}>
            <div className={style.logoWrap}>
              <img src="/images/key-black.png" />
            </div>
            <h1 className={style.loginheader}>Signup</h1>

            <div className={style.inputbox} style={{ marginBottom: "3rem" }}>
              <input type="text" required />
              <img className={style.inputicon} src="/images/username.png" />
              <span>Name</span>
            </div>

            <div className={style.inputbox} style={{ marginBottom: "3rem" }}>
              <input type="email " required />
              <img className={style.inputicon} src="/images/email.png" />
              <span>Email</span>
            </div>
            <div className={style.inputbox} style={{ marginBottom: "3rem" }}>
              <input type="password " required />
              <img className={style.inputicon} src="/images/password.png" />
              <span>New Password</span>
            </div>

            <div className={style.inputbox} style={{ marginBottom: "1rem" }}>
              <input type="password " required />
              <img className={style.inputicon} src="/images/password.png" />
              <span>Confirm Password</span>
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

export default Signup;
