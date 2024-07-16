import styles from "./Pagination.module.css";

interface IPagination {
  pageIndex: number;
  pageSize: number;
  noOfPages: number;
  paginate: Function;
}
const Pagination = ({
  pageIndex,
  noOfPages,
  paginate,
}: IPagination) => {
  const pageNumbers = [];

  for (let i = 1; i <= noOfPages; i++) {
    if (i <= 3 || Math.abs(i - pageIndex - 1) <= 2 || i >= noOfPages - 2)
      pageNumbers.push(i);
  }

  return (
    <nav className={styles.container}>
      <ul>
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              onClick={() => paginate(number - 1)}
              aria-label={`Go to Page ${number}`}
              className={
                pageIndex === number - 1 ? styles.active : styles.notActive
              }
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
