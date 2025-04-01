import { useState } from 'react';

interface UseFilterHandlersResult {
  selectedSegment: string;
  selectedCountry: string;
  selectedProduct: string;
  selectedDiscountBand: string;
  handleSegmentChange: (value: string) => void;
  handleCountryChange: (value: string) => void;
  handleProductChange: (value: string) => void;
  handleDiscountBandChange: (value: string) => void;
  setCurrentPage: (page: number) => void;
  currentPage: number;
}

export const useFilterHandlers = (): UseFilterHandlersResult => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedSegment, setSelectedSegment] = useState<string>("");
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedProduct, setSelectedProduct] = useState<string>("");
  const [selectedDiscountBand, setSelectedDiscountBand] = useState<string>("");

  const handleSegmentChange = (value: string) => {
    setSelectedSegment(value);
    setCurrentPage(0);
  };

  const handleCountryChange = (value: string) => {
    setSelectedCountry(value);
    setCurrentPage(0);
  };

  const handleProductChange = (value: string) => {
    setSelectedProduct(value);
    setCurrentPage(0);
  };

  const handleDiscountBandChange = (value: string) => {
    setSelectedDiscountBand(value);
    setCurrentPage(0);
  };

  return {
    selectedSegment,
    selectedCountry,
    selectedProduct,
    selectedDiscountBand,
    handleSegmentChange,
    handleCountryChange,
    handleProductChange,
    handleDiscountBandChange,
    setCurrentPage,
    currentPage
  };
}; 