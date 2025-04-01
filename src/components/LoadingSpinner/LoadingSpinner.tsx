import React from 'react';
import styles from './LoadingSpinner.module.css';

const LoadingSpinner: React.FC = () => {
  return (
    <div className={styles.spinnerContainer} data-testid="loading-spinner">
      <svg
        className={styles.spinner}
        viewBox="0 0 50 50"
      >
        <circle
          className={styles.path}
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="5"
        />
      </svg>
    </div>
  );
};

export default LoadingSpinner; 