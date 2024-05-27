import React, { useEffect, useRef, useState } from "react";
// import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState('');
  // const navigate = useNavigate();

  const [accountList, setAccountList] = useState([]);

  useEffect(() => {
    const getAccountList = () => {
      axios.get("http://localhost:3306/api/login").then((response) => {
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
    <div>
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
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={handleSubmit}>Sign In</button>
        </div>
      ) : (
        <><button onClick={signOut}>Sign Out</button></>
      )}
      
    </div>
  );
};

export default Login;
