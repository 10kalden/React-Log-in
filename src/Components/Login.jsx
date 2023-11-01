import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
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
      setMessage("Login failed");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <div>
          <a href="/ForgotPassword">Forgot Password?</a>
        </div>
        <button type="submit">Login</button>

        <div>
          <p>
            Don't have an Account? <a href="/SignUp">Sign Up</a>
          </p>
        </div>
      </form>
      <p>{message}</p>
    </div>
  );
}


export default Login;
