import React from 'react';
import styles from './Summary.module.css';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

type SummaryProps = {
  totalRevenue: number;
  totalUnitsSold: number;
  totalProfit: number;
  isLoading: boolean;
}

const Summary: React.FC<SummaryProps> = ({ totalRevenue, totalUnitsSold, totalProfit, isLoading }) => {
  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className={styles.summary}>
      <div className={styles.summaryCard}>
        <div className={styles.title}>Total Revenue</div>
        <div className={`${styles.value} ${styles.revenue}`}>
          £{totalRevenue?.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </div>
      </div>
      <div className={styles.summaryCard}>
        <div className={styles.title}>Total Units Sold</div>
        <div className={`${styles.value} ${styles.units}`}>
          {totalUnitsSold?.toLocaleString('en-GB')}
        </div>
      </div>
      <div className={styles.summaryCard}>
        <div className={styles.title}>Total Profit</div>
        <div className={`${styles.value} ${styles.profit}`}>
          £{totalProfit?.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </div>
      </div>
    </div>
  );
};

export default Summary; 