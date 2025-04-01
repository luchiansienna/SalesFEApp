import React from 'react';
import Dropdown from '../Dropdown/Dropdown';
import Types from '../../types/Types';
import styles from './FilterPanel.module.css';

interface FilterPanelProps {
  types: Types | null;
  selectedSegment: string;
  selectedCountry: string;
  selectedProduct: string;
  selectedDiscountBand: string;
  onSegmentChange: (value: string) => void;
  onCountryChange: (value: string) => void;
  onProductChange: (value: string) => void;
  onDiscountBandChange: (value: string) => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  types,
  selectedSegment,
  selectedCountry,
  selectedProduct,
  selectedDiscountBand,
  onSegmentChange,
  onCountryChange,
  onProductChange,
  onDiscountBandChange,
}) => {
  return (
    <div className={styles.filterPanel}>
      <div className={styles.dropdownsContainer}>
        <Dropdown
          options={types?.segments.map(segment => ({ value: segment, label: segment })) || []}
          value={selectedSegment}
          onChange={onSegmentChange}
          label="Segment"
          placeholder="Select segment"
        />
        <Dropdown
          options={types?.countries.map(country => ({ value: country, label: country })) || []}
          value={selectedCountry}
          onChange={onCountryChange}
          label="Country"
          placeholder="Select country"
        />
        <Dropdown
          options={types?.products.map(product => ({ value: product, label: product })) || []}
          value={selectedProduct}
          onChange={onProductChange}
          label="Product"
          placeholder="Select product"
        />
        <Dropdown
          options={types?.discountBands.map(band => ({ value: band, label: band })) || []}
          value={selectedDiscountBand}
          onChange={onDiscountBandChange}
          label="Discount Band"
          placeholder="Select discount band"
        />
      </div>
    </div>
  );
};

export default FilterPanel; 