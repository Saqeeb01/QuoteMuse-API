import React, { useState } from 'react';
import './Authentication.css';
import { Link } from 'react-router-dom';


const Authentication = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);



  const handleLogin = (e) => {
    e.preventDefault();

    // Validate email and password
    if (email.trim() === '' || password.trim() === '') {
      alert('Please provide both email and password.');
      return;
    }

    // Perform login logic here
    // For this example, let's assume the login is successful
    setLoggedIn(true);
  };



  return (
    <section className="authentication">
      <div className="auth-container">
        <h2 className="auth-title">Login or Sign Up</h2>
        <form className="auth-form" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="auth-btn">Login</button>
        </form>
        <p className="auth-subtext">
          {/* Don't have an account? <a href="#" onClick={handleSignUpClick}> */}

        </p>
        {loggedIn && (
          <WelcomeMessage />
        )}
      </div>
    </section>
  );
};

const WelcomeMessage = () => (
  <p className="auth-subtext">
    Welcome! You are now logged in. Go to <Link to="/welcome">Welcome Page</Link>
  </p>
);

export default Authentication;
