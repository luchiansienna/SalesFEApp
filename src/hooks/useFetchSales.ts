import { useState, useEffect } from 'react';
import axios from 'axios';
import { Sale } from '../types/Sale';
import config from '../config';

interface UseFetchSalesResult {
  sales: Sale[];
  isLoading: boolean;
  noOfPages: number;
  error: Error | null;
}

interface UseFetchSalesParams {
  currentPage: number;
  pageSize: number;
  selectedSegment?: string;
  selectedCountry?: string;
  selectedProduct?: string;
  selectedDiscountBand?: string;
}

export const useFetchSales = ({
  currentPage,
  pageSize,
  selectedSegment,
  selectedCountry,
  selectedProduct,
  selectedDiscountBand,
}: UseFetchSalesParams): UseFetchSalesResult => {
  const [sales, setSales] = useState<Sale[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [noOfPages, setNoOfPages] = useState(0);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    
    const params = new URLSearchParams({
      pageIndex: currentPage.toString(),
      pageSize: pageSize.toString(),
      ...(selectedSegment && { segment: selectedSegment }),
      ...(selectedCountry && { country: selectedCountry }),
      ...(selectedProduct && { product: selectedProduct }),
      ...(selectedDiscountBand && { discountBand: selectedDiscountBand }),
    });

    axios
      .get(`${config.salesEndpoint}?${params.toString()}`)
      .then((response) => {
        setNoOfPages(Math.floor((response.data.count - 1) / pageSize) + 1);
        setSales(response.data.data);
      })
      .catch((err) => {
        setError(err);
        setNoOfPages(0);
        setSales([]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [currentPage, pageSize, selectedSegment, selectedCountry, selectedProduct, selectedDiscountBand]);

  return { sales, isLoading, noOfPages, error };
}; 