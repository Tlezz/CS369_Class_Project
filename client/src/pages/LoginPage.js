import React, { useEffect, useRef, useState } from "react";
// import { useNavigate } from 'react-router-dom';
import axios from "axios";
import API from "../api/API.js";

const Login = () => {
  const hostname = API;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState('');
  // const navigate = useNavigate();

  const [accountList, setAccountList] = useState([]);

  useEffect(() => {
    const getAccountList = () => {
      axios.get(`http://${hostname}:3306/api/login/`).then((response) => {
        setAccountList(response.data);
      });
    };
    

    getAccountList();
  }, []);

  const handleSubmit = () => {
    const loginSuccess = accountList.some(
      (val) => val.username === username && val.password === password
    );
    if (loginSuccess) {
      const loggedInUser = accountList.find((val) => val.username === username);
      localStorage.setItem("yourName", loggedInUser.username);
      // loginSuccessPop();
      console.log("Login successful");

      handleRefresh();
    } else {
      localStorage.setItem("yourName", "");
      // loginFailPop();
      console.log("mismatch account or password");
    }
  };

  const signOut = () => {
    localStorage.setItem("yourName", "");
    handleRefresh();
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <section class="content-section content-section-single">
      <div class="content-container">
      {localStorage.getItem("yourName") === "" ? (
        <div>
          <h2>Login</h2>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div style={{ marginTop: '16px' }}>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button style={{ marginTop: '24px' }} className="button button-primary" onClick={handleSubmit}>Sign In</button>
        </div>
      ) : (
        <><button className="button button-secondary" onClick={signOut}>Sign Out</button></>
      )}
      </div>
    </section>
  );
};

export default Login;
