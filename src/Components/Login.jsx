import React, { useState } from "react";
import "./login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (!username || !password) {
    //   setMessage("Enter email and password correctly!");
    //   return;
    // }
    const response = await fetch("#", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.status === 200) {
      setMessage("Login successful");
    } else {
      // setMessage("Login failed");
      setMessage("Enter email and password correctly!");
    }
  };

  return (
    <div>
      <div className="container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="input-container">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p className="message">{message}</p>

          <div className="forgot">
            <a href="/ForgotPassword">Forgot Password?</a>
          </div>
          <div className="button">
            <button type="submit">Login</button>
          </div>

          <div className="signup">
            <p>
              Don't have an Account? <a href="/SignUp">Sign Up</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
