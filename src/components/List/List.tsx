import React from "react";
import { Sale } from "../../types/Sale";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import styles from "./List.module.css";

interface ListProps {
  sales: Sale[];
  loading: boolean;
}

const List: React.FC<ListProps> = ({ sales, loading }) => {
  if (loading) {
    return <LoadingSpinner />;
  }

  if (!sales || sales.length === 0) {
    return <h2>No data to show</h2>;
  }

  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <th>Segment</th>
            <th>Country</th>
            <th>Product</th>
            <th>Discount Band</th>
            <th>Units Sold</th>
            <th>Manufacturing Price</th>
            <th>Sale Price</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale, index) => (
            <tr key={index} className={styles.row}>
              <td>{sale.segment}</td>
              <td>{sale.country}</td>
              <td>{sale.product}</td>
              <td>{sale.discountBand}</td>
              <td>{sale.unitsSold.toLocaleString('en-GB')}</td>
              <td>£{sale.manufacturingPrice.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
              <td>£{sale.salePrice.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
              <td>{new Date(sale.date).toLocaleDateString('en-GB')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
