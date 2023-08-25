import React, { useEffect, useState } from 'react';
import './Welcome.css'; // Import your CSS file for styling

const Welcome = () => {
  const [quotes, setQuotes] = useState([]);
  const apiUrl = ''; // Replace with your actual API URL

  useEffect(() => {
    // Fetch quotes from the API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setQuotes(data))
      .catch((error) => console.error('Error fetching quotes:', error));
  }, []);

  return (
    <section className="welcome">
      <div className="welcome-container">
        <h2 className="welcome-title">Welcome to QuoteMuse-API</h2>
        <div className="quote-list">
          {quotes.map((quote, index) => (
            <div key={index} className="quote-card">
              <blockquote className="quote-text">{quote.text}</blockquote>
              <p className="quote-author">- {quote.author}</p>
            </div>
          ))}
        </div>
        <div className="api-info">
          <h3 className="api-info-title">API Information</h3>
          <p>
            To access the QuoteMuse API, make requests to the following base URL:
            <br />
            <a href="https://quotes-api.cyclic.cloud/" target="_blank" rel="noopener noreferrer">
              <code>https://quotes-api.cyclic.cloud/</code>
            </a>          
            </p>
            
          <p>
            Available Endpoints:
            <br />
            - <code>/quotes</code> (GET) - Get a list of quotes
            <br />
            <br />

            - <code>/quotes/movies</code> (GET) - Get quotes from Movies
            <br />
            <br />
            - <code>/quotes/books</code> (GET) - Get quotes from Books
            <br />
           
          </p>
          <p>
            Authentication:
            <br />
            If authentication is required, provide details here.
          </p>
          <p>
            Response Format:
            <br/>
            The API responds with JSON format.
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default Welcome;
