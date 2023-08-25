import React from 'react';
import './Endpoints.css';

const Endpoints = () => {
  return (
    <section className="endpoints">
      <div className="container">
        <h2 className="section-title">Endpoints</h2>
        <p className="section-description">
          Explore the available endpoints of our API and their functionalities.
        </p>
        <div className="endpoint-list">
          <div className="endpoint">
            <h3>/quotes</h3>
            <p>Retrieve a list of quotes from the API.</p>
          </div>
          <div className="endpoint">
            <h3>quotes/movies</h3>
            <p>Retrieve a list of quotes from Movies.</p>
          </div>
          <div className="endpoint">
            <h3>quotes/books</h3>
            <p>Retrieve a list of quotes Books .</p>
          </div>
          {/* Add more endpoints as needed */}
        </div>
      </div>
    </section>
  );
};

export default Endpoints;
