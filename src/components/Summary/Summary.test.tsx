import React from 'react';
import { render, screen } from '@testing-library/react';
import Summary from './Summary';

describe('Summary Component', () => {
  it('renders with correct values', () => {
    const props = {
      totalRevenue: 1234.56,
      totalUnitsSold: 100,
      totalProfit: 234.56,
      isLoading: false
    };

    render(<Summary {...props} />);

    // Check if all three cards are rendered
    expect(screen.getByText('Total Revenue')).toBeInTheDocument();
    expect(screen.getByText('Total Units Sold')).toBeInTheDocument();
    expect(screen.getByText('Total Profit')).toBeInTheDocument();

    // Check if values are displayed with correct formatting
    expect(screen.getByText('£1,234.56')).toBeInTheDocument();
    expect(screen.getByText('100')).toBeInTheDocument();
    expect(screen.getByText('£234.56')).toBeInTheDocument();
  });

  it('handles zero values correctly', () => {
    const props = {
      totalRevenue: 0,
      totalUnitsSold: 0,
      totalProfit: 0,
      isLoading: false
    };

    render(<Summary {...props} />);

    expect(screen.getByText('£0.00')).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
    expect(screen.getByText('£0.00')).toBeInTheDocument();
  });

  it('handles large numbers correctly', () => {
    const props = {
      totalRevenue: 999999.99,
      totalUnitsSold: 999999,
      totalProfit: 199999.99,
      isLoading: false
    };

    render(<Summary {...props} />);

    expect(screen.getByText('£999,999.99')).toBeInTheDocument();
    expect(screen.getByText('999,999')).toBeInTheDocument();
    expect(screen.getByText('£199,999.99')).toBeInTheDocument();
  });

  it('shows loading spinner when isLoading is true', () => {
    const props = {
      totalRevenue: 1000,
      totalUnitsSold: 100,
      totalProfit: 200,
      isLoading: true
    };

    render(<Summary {...props} />);
    expect(screen.queryByText('Total Revenue')).not.toBeInTheDocument();
  });
}); 