const config = {
  baseUrl: process.env.REACT_APP_API_URL,
  salesEndpoint: `${process.env.REACT_APP_API_URL}/sales`,
  summaryEndpoint: `${process.env.REACT_APP_API_URL}/sales/summary`,
  typesEndpoint: `${process.env.REACT_APP_API_URL}/sales/types`,
};

export default config;

