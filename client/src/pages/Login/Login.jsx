import styles from "./Login.module.css";
import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import SecondaryBtn from "../../components/atoms/SecondaryBtn";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });
  const { loading, error, dispatch } = useContext(AuthContext);

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  const navigate = useNavigate();

  return (
    <div className={styles.loginContainer}>
      <div className={styles.wrapper}>
        <label htmlFor="username">Username</label>
        <input
          name="username"
          id="username"
          onChange={handleChange}
          type="text"
          placeholder="Username"
          className={styles.loginInput}
        />
        <label htmlFor="password">Password</label>
        <input
          name="password"
          id="password"
          onChange={handleChange}
          type="password"
          placeholder="Password"
          className={styles.loginInput}
        />
        <SecondaryBtn
          disabled={loading}
          onClick={handleLogin}
          text="Login"
          className={styles.login}
        />
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
}
