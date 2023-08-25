import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <h2 className="home-title">Welcome to the API Documentation</h2>
        <p className="home-description">
          Learn how to integrate and use our API to enhance your applications.
        </p>
        <Link to="/getting-started" className="home-btn">
          Get Started
        </Link>      </div>
    </section>
  );
};

export default Home;
