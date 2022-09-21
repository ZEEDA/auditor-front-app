import React from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../layout";

type Props = {};

const RegisterPage = (props: Props) => {
  return (
    <AuthLayout>
      <>
        <div className="card shadow border-none">
          <h1 className="title">Create your free account</h1>
          <form className="flex column" action="">
            <label htmlFor="username">User name</label>
            <input
              id="username"
              type="text"
              placeholder="Username"
              name="username"
            />
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="text"
              placeholder="Email address"
              name="email"
            />
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="text"
              placeholder="Password"
              name="password"
            />
            <label htmlFor="confirmPassword">ConfirmPassword</label>

            <input
              id="confirmPassword"
              type="text"
              placeholder="ConfirmPassword"
              name="confirmPassword"
            />
            <button className="btn btn-primary">Login</button>
            <Link className="form-link" to="/reset-password">
              Forget password?
            </Link>
          </form>
        </div>
        <p className="auth-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </>
    </AuthLayout>
  );
};

export default RegisterPage;
