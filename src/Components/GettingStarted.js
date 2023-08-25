import React from 'react';
import './GettingStarted.css';

const GettingStarted = () => {
  return (
    <section className="getting-started">
      <div className="container">
        <h2 className="section-title">Getting Started</h2>
        <p className="section-description">
          This section provides an introduction to the API, its purpose, and benefits. 
          Instructions on how to sign up, obtain API keys or credentials, and access the API.
        </p>
        <div className="steps">
          <div className="step">
            <h3>Step 1: Sign Up</h3>
            <p>Create an account on our platform to get started.</p>
          </div>
          <div className="step">
            <h3>Step 2: Obtain API Key</h3>
            <p>Log in to your account and generate an API key in the settings.</p>
          </div>
          <div className="step">
            <h3>Step 3: Access the API</h3>
            <p>Start making API requests using your API key and following our documentation.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GettingStarted;
