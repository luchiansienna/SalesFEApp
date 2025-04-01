# Sales Dashboard Application

A modern React TypeScript application for displaying and analyzing sales data with interactive features and real-time filtering.

## Features

- 📊 Interactive sales dashboard with summary statistics
- 🔍 Advanced filtering capabilities:
  - Segment filtering
  - Country filtering
  - Product filtering
  - Discount band filtering
- 📱 Responsive design for all devices
- 📄 Paginated data display
- 🔄 Real-time data updates
- 🎨 Modern UI with clean design
- ♿ Accessibility features

## Tech Stack

- React 18
- TypeScript
- CSS Modules
- Axios for API calls

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd SalesFEApp
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory and add your environment variables:
```env
REACT_APP_API_URL=https://localhost:7225
```

4. Start the development server:
```bash
npm start
# or
yarn start
```

The application will be available at `http://localhost:3000`

## Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── Dropdown/      # Custom dropdown component
│   ├── FilterPanel/   # Filter controls panel
│   ├── List/         # Sales data list
│   ├── Pagination/   # Pagination controls
│   └── Summary/      # Summary statistics
├── hooks/            # Custom React hooks
│   ├── useFetchSales
│   ├── useGetSalesSummary
│   └── useGetTypes
├── types/            # TypeScript type definitions
├── config.ts         # Configuration settings
└── App.tsx          # Main application component
```

## Features in Detail

### Summary Dashboard
- Total Revenue
- Total Units Sold
- Total Profit
- Real-time updates based on filters

### Filtering System
- Multiple filter options
- Combined filtering
- Real-time updates
- Reset functionality

### Data Display
- Paginated results
- Sortable columns
- Responsive layout
- Loading states

## Testing

Run the test suite:
```bash
npm test
# or
yarn test
```

