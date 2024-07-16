import { useEffect, useState } from "react";
import axios from "axios";
import List from "./components/List/List";
import Pagination from "./components/Pagination/Pagination";

import "./App.css";
import { Sale } from "./domain/Sale";

function App() {
  const [sales, setSales] = useState<Sale[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [noOfPages, setNoOfPages] = useState(0);
  const [pageSize] = useState(10);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        process.env.REACT_APP_SERVICE_URI
          ? process.env.REACT_APP_SERVICE_URI.replace(
              "{pageIndex}",
              currentPage.toString()
            ).replace("{pageSize}", pageSize.toString())
          : ""
      )
      .then((response) => {
        setNoOfPages(Math.floor((response.data.count - 1) / pageSize) + 1);
        setSales(response.data.data);
        setIsLoading(false);
      })
      .catch(() => {
        setNoOfPages(0);
        setSales([]);
        setIsLoading(false);
      });
  }, [currentPage, pageSize]);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sales App</h1>
      </header>
      <List sales={sales} loading={isLoading} />
      <Pagination
        noOfPages={noOfPages}
        pageIndex={currentPage}
        pageSize={pageSize}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
