import React from 'react';
import './Support.css'; // Import your CSS file for styling

const Support = () => {
  return (
    <section className="support">
      <div className="support-container">
        <h2 className="support-title">Get Help and Support</h2>
        <p className="support-description">
          If you have any questions or need assistance, feel free to reach out to our support team.
        </p>
        <a href="mailto:support@example.com" className="support-btn">Contact Support</a>
      </div>
    </section>
  );
};

export default Support;
