import { Sale } from "../../domain/Sale";
import styles from "./List.module.css";

interface IList {
  sales: Sale[];
  loading: boolean;
}

const List = ({ sales, loading }: IList) => {
  if (loading) {
    return <h2>Loading</h2>;
  }
  if (!sales || sales.length === 0) {
    return <h2>No data to show</h2>;
  }
  return (
    <table className={styles.container}>
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
      {sales.map((sale, i) => (
        <tr key={i} className={styles.row}>
          <td>{sale.segment}</td>
          <td>{sale.country}</td>
          <td>{sale.product}</td>
          <td>{sale.discountBand}</td>
          <td>{sale.unitsSold.toFixed(2)}</td>
          <td>£{sale.manufacturingPrice.toFixed(2)}</td>
          <td>£{sale.salePrice.toFixed(2)}</td>
          <td>{new Date(sale.date).toDateString()}</td>
        </tr>
      ))}
    </table>
  );
};

export default List;
