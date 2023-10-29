import React, { useState } from 'react';
import './Login.css'; 
import  img from './imd-project.jpg';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
    console.log('Agree to Terms & Conditions:', agreeToTerms);
  };

  return (
    <div className="container">
      <div className="image-container">
        <img src={img} alt="Login" />
      </div>
      <div className="form-container">
        <h2>Login</h2>
        <label className="ID">
          <b>Login ID</b>
        </label>
        <input
          type="text"
          placeholder="Enter Login ID"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label className="password">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
         <a className="change-password-link" href="/change-password">Change Password</a>
            <div className="form-row">
              <span>
                <input type="checkbox"  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}/> Remember Me
              </span>
              <span>
                <input type="checkbox" checked={agreeToTerms}
                  onChange={() => setAgreeToTerms(!agreeToTerms)}/>
                  Agree to<a href="/Terms-Conditions">Terms & Conditions</a>
              </span>
            </div>
        <button onClick={handleLogin}>Login</button>
        <p>Don't have an account? <a href="/signup">Register Here</a></p>
      </div>
    </div>
  );
}

export default Login;
