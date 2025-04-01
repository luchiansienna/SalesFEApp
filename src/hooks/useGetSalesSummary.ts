import { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config';
import Summary from '../types/Summary';

interface UseGetSalesSummaryParams {
  selectedSegment?: string;
  selectedCountry?: string;
  selectedProduct?: string;
  selectedDiscountBand?: string;
}

export const useGetSalesSummary = ({
  selectedSegment,
  selectedCountry,
  selectedProduct,
  selectedDiscountBand
}: UseGetSalesSummaryParams = {}) => {
  const [summary, setSummary] = useState<Summary>({ totalRevenue: 0, totalUnitsSold: 0, totalManufacturingCost: 0, totalProfit: 0, totalPerMonth: [], productsSold: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  console.log('summary', summary);
  useEffect(() => {
    setIsLoading(true);
    setError(null);

    const params = new URLSearchParams();
    if (selectedSegment) params.append('segment', selectedSegment);
    if (selectedCountry) params.append('country', selectedCountry);
    if (selectedProduct) params.append('product', selectedProduct);
    if (selectedDiscountBand) params.append('discountBand', selectedDiscountBand);

    const url = `${config.summaryEndpoint}${params.toString() ? `?${params.toString()}` : ''}`;

    axios
      .get(url)
      .then((response) => {
        setSummary(response.data);
        
        console.log(response.data);
        console.log(summary);
      })
      .catch((err) => {
        setError(err);
        setSummary({ totalRevenue: 0, totalUnitsSold: 0, totalManufacturingCost: 0, totalProfit: 0, totalPerMonth: [], productsSold: [] });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [selectedSegment, selectedCountry, selectedProduct, selectedDiscountBand]);

  return { summary, isLoading, error };
}; 