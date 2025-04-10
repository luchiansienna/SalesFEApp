import { useFetchSales } from "./hooks/useFetchSales";
import { useGetSalesSummary } from "./hooks/useGetSalesSummary";
import { useGetTypes } from "./hooks/useGetTypes";
import { useFilterHandlers } from "./hooks/useFilterHandlers";
import Summary from "./components/Summary/Summary";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
import FilterPanel from "./components/FilterPanel/FilterPanel";
import "./App.css";
import List from "./components/List/List";
import Pagination from "./components/Pagination/Pagination";

function App() {
  const pageSize = 10;
  const {
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
  } = useFilterHandlers();

  const { types, isLoading: isLoadingTypes } = useGetTypes();
  const {
    sales,
    isLoading: isLoadingSales,
    noOfPages,
    error: salesError,
  } = useFetchSales({
    currentPage,
    pageSize,
    selectedSegment,
    selectedCountry,
    selectedProduct,
    selectedDiscountBand,
  });
  
  const {
    summary,
    isLoading: isLoadingSummary,
    error: summaryError,
  } = useGetSalesSummary({
    selectedSegment,
    selectedCountry,
    selectedProduct,
    selectedDiscountBand,
  });

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  if (isLoadingTypes) {
    return <LoadingSpinner />;
  }

  if (salesError || summaryError) {
    return <div>Error: {salesError?.message || summaryError?.message}</div>;
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sales Dashboard</h1>
      </header>
      <main>
        <FilterPanel
          types={types}
          selectedSegment={selectedSegment}
          selectedCountry={selectedCountry}
          selectedProduct={selectedProduct}
          selectedDiscountBand={selectedDiscountBand}
          onSegmentChange={handleSegmentChange}
          onCountryChange={handleCountryChange}
          onProductChange={handleProductChange}
          onDiscountBandChange={handleDiscountBandChange}
        />
        {isLoadingSummary ? (
          <LoadingSpinner />
        ) : (
          <Summary
            totalRevenue={summary.totalRevenue}
            totalUnitsSold={summary.totalUnitsSold}
            totalProfit={summary.totalProfit}
            isLoading={isLoadingSummary}
          />
        )}
        {isLoadingSales ? (
          <LoadingSpinner />
        ) : (
          <>
            <List sales={sales} loading={isLoadingSales} />
            <Pagination
              noOfPages={noOfPages}
              pageIndex={currentPage}
              pageSize={pageSize}
              paginate={paginate}
            />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
