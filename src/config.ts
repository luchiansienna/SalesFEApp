
const API_URL = process.env.REACT_APP_API_URL || '';

const config = {
  baseUrl: API_URL,
  salesEndpoint: `${API_URL}/sales`,
  summaryEndpoint: `${API_URL}/sales/summary`,
  typesEndpoint: `${API_URL}/sales/types`,
};

export default config;

