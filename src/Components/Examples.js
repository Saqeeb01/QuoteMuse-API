import React from 'react';
import './Examples.css';

const Examples = () => {
  return (
    <section className="examples">
      <div className="container">
        <h2 className="section-title">Examples</h2>
        <p className="section-description">
          Explore some example use cases of our API in different scenarios.
        </p>
        <div className="example-list">
          <div className="example">
            <h3>Quote of the Day Widget</h3>
            <p>Display a random quote on your website every day.</p>
          </div>
          <div className="example">
            <h3>Quote Sharing App</h3>
            <p>Create an app that lets users share their favorite quotes on social media.</p>
          </div>
          <div className="example">
            <h3>Personal Quote Collection</h3>
            <p>Build an app to store and manage your personal collection of quotes.</p>
          </div>
          {/* Add more examples as needed */}
        </div>
      </div>
    </section>
  );
};

export default Examples;
