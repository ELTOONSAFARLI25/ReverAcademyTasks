import React from "react";
import loginCSS from "../login/Login.module.css";
function Login() {
  return (
    <>
      <div className={loginCSS.container}>
        <div className={loginCSS.div1}>
          <h2>Social media shared today,tomorrow or by location</h2>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZhIu7sFAGz-2YmFswmqEQKIajw0nR0ihrUA&s
          "
            alt="login"
          />
        </div>
        <div className={loginCSS.div2}>
          {" "}
          <h2>Create Account</h2>
          <span>For business, band or celebrity</span>
          <form>
            <div className={loginCSS.inputs}>
              {" "}
              <div className={loginCSS.inputDIV}>
                {" "}
                <label htmlFor="">First name</label>
                <input type="text" />
              </div>
              <div className={loginCSS.inputDIV}>
                {" "}
                <label htmlFor="">Last name</label>
                <input type="text" />
              </div>
              <div className={loginCSS.inputDIV}>
                {" "}
                <label htmlFor="">Email or phone number</label>
                <input type="email" />
              </div>
              <div className={loginCSS.inputDIV}>
                <label htmlFor="">Date of birth</label>

                <input type="date" />
              </div>
              <div className={loginCSS.inputDIV}>
                {" "}
                <label htmlFor="">Password</label>
                <input type="password" />
              </div>
              <div className={loginCSS.inputDIV}>
                {" "}
                <label htmlFor="">Confirm password </label>
                <input type="password" />
              </div>
            </div>

            <div className={loginCSS.links}>
              <div className={loginCSS.checkboxes}>
                {" "}
                <div className="">
                  {" "}
                  <input type="checkbox" />
                  <label htmlFor="">Remember me</label>
                </div>
                <div className="">
                  <input type="checkbox" />
                  <label htmlFor="">
                    I agree to all the <a href="">Terms</a> and{" "}
                    <a href="">Privacy policy</a>
                  </label>
                </div>
              </div>

              <div className="">
                <a href="">Forgot password?</a>
              </div>
            </div>
            <div className={loginCSS.buttons}>
              <button className={loginCSS.createAcc}>Create Account</button>

              <button className={loginCSS.signinGg}>Sign-in with Google</button>
            </div>

            <p>
              Don't have an account? <a href="">Login</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
