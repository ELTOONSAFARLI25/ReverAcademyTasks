import React, { useEffect, useState } from "react";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import loginCss from "../login/Login.module.css";
function Login() {
  const [users, setUsers] = useState([]); //users

  useEffect(() => {
    axios("http://localhost:3000/users").then((res) => {
      setUsers(res.data);
    });
  }, []);

  const SignupSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .required("Required")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter!")
      .matches(/[A-Z]/, "Password must contain at least one capital letter!")
      .matches(/^[A-Za-z0-9]+$/, "Password must not contain symbols!")
      .matches(/\d/, "Password must contain at least one number!")
      .matches(/^\S*$/, "Password must not contain spaces!")
      .min(8, "Password must be at least 8 characters!"),
  });
  return (
    <>
      <title>Login | Capital Shop</title>
      <link
        rel="icon"
        type="image/svg+xml"
        href="https://e7.pngegg.com/pngimages/286/599/png-clipart-isometric-projection-shopping-building-store-isometric-graphics-in-video-games-and-pixel-art-property.png"
      />

      <div className={loginCss.container_login}>
        <div className={loginCss.login_head}>
          <h1>Login</h1>
          <p>Enter Login details to get access</p>
        </div>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            // same shape as initial values
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className={loginCss.login_inputs}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    gap: "10px",
                  }}
                >
                  <label htmlFor="">
                    <h3>Username or Email Address</h3>
                  </label>
                  <Field
                    name="email"
                    placeholder="Username or Email Address"
                    type="email"
                    className={loginCss.input}
                  />{" "}
                  {errors.email && touched.email ? (
                    <p style={{ color: "red", fontSize: "13px" }}>
                      {errors.email}
                    </p>
                  ) : null}
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    alignItems: "start",
                  }}
                >
                  {" "}
                  <label htmlFor="">
                    <h3>Password</h3>
                  </label>
                  <Field
                    name="password"
                    type="password"
                    className={loginCss.input}
                    placeholder="Enter password"
                  />
                  {errors.password && touched.password ? (
                    <div style={{ color: "red", fontSize: "13px" }}>
                      {errors.password}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className={loginCss.links}>
                <label>
                  <Field type="checkbox" name="toggle" />
                  <span
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      marginLeft: "10px",
                    }}
                  >
                    Keep me Logged in
                  </span>
                </label>
                <a href="" style={{ color: "red" }}>
                  Forgot Password?
                </a>
              </div>
              <div className={loginCss.foot}>
                <p>
                  Don’t have an account?{" "}
                  <a href="/register" style={{ color: "red" }}>
                    Sign up
                  </a>{" "}
                  here
                </p>
                <button type="submit">Log in</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default Login;
