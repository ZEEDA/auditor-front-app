import React from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../layout";
import styles from "./index.module.scss";
type Props = {};

const LoginPage = (props: Props) => {
  return (
    <AuthLayout>
      <>
        <div className="card shadow border-none">
          <h1 className="title">Continue to your acount</h1>
          <form className="flex column" action="">
            <label htmlFor="username">User name or email address</label>
            <input
              id="username"
              type="text"
              placeholder="Username or email address"
              name="username"
            />
            <label htmlFor="password">Password</label>
            <input type="text" placeholder="Password" name="password" />
            <button className="btn btn-primary">Login</button>
            <Link className="form-link" to="/reset-password">
              Forget password?
            </Link>
          </form>
        </div>
        <p className="auth-link">
          Don't have an account? <Link to="/register">Sign up</Link>
        </p>
      </>
    </AuthLayout>
  );
};

export default LoginPage;
