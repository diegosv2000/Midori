import React from 'react';
import './styles.css';

const Spinner = () => {
  return (
    <div className="preloadContainer">
      <div className="lds-dual-ring"></div>
    </div>
  );
};

export default Spinner;
