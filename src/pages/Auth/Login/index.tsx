import userEvent from "@testing-library/user-event";
import React, { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AppContext } from "../../../contexts";
import { User } from "../../../models/user";
import { SIGN_IN } from "../../../utils/strings";
import AuthLayout from "../layout";

type LoginFormType = {
  username: string;
  password: string;
};
const LoginPage = () => {
  const navigate = useNavigate();
  const {
    state: { auth },
    dispatch,
  } = useContext(AppContext);
  const { state } = useContext(AppContext);
  const [formData, setFormData] = useState<LoginFormType>({
    username: "",
    password: "",
  });

  const handleLogin = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    let _user: User = { id: "", username: "", imgUrl: "", token: "" };
    _user = {
      id: Date.now().toString(),
      username: formData?.username,
      imgUrl: "",
      token: "dfasdfadsfaasdfd",
    };
    dispatch({
      type: SIGN_IN,
      payload: { token: _user.token, user: _user },
    });
    navigate("/");
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <AuthLayout>
      <>
        {!!auth.userData && <h1>Welcome: {auth.userData?.username}</h1>}
        <div className="card shadow border-none">
          <h1 className="title">Continue to your acount</h1>
          <form className="flex column" action="">
            <label htmlFor="username">User name or email address</label>
            <input
              id="username"
              type="text"
              placeholder="Username or email address"
              name="username"
              onChange={handleChange}
            />
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Password" name="password" />
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleLogin}
            >
              Login
            </button>
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
