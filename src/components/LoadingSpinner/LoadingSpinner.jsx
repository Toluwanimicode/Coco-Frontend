// LoadingSpinner.js

import React from 'react';
import './LoadingSpinner.css'; // Import CSS for styling

const LoadingSpinner = ({ loading }) => {
  return (
    <div className={`loading-spinner-overlay ${loading ? 'visible' : 'hidden'}`}>
      <div className="loading-spinner">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;













