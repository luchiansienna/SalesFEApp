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

  const formatCurrency = (value: number) => {
    return `£${value.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  const formatNumber = (value: number) => {
    return value.toLocaleString('en-GB');
  };

  return (
    <div className={styles.summary}>
      <div className={styles.summaryCard}>
        <div className={styles.title}>Total Revenue</div>
        <div className={`${styles.value} ${styles.revenue}`} data-testid="total-revenue">
          {formatCurrency(totalRevenue)}
        </div>
      </div>
      <div className={styles.summaryCard}>
        <div className={styles.title}>Total Units Sold</div>
        <div className={`${styles.value} ${styles.units}`} data-testid="total-units-sold">
          {formatNumber(totalUnitsSold)}
        </div>
      </div>
      <div className={styles.summaryCard}>
        <div className={styles.title}>Total Profit</div>
        <div className={`${styles.value} ${styles.profit}`} data-testid="total-profit">
          {formatCurrency(totalProfit)}
        </div>
      </div>
    </div>
  );
};

export default Summary; 