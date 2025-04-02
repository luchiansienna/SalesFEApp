# Sales Dashboard Application

A modern React TypeScript application for displaying and analyzing sales data with interactive features and real-time filtering.

## Features

- 📊 Interactive sales dashboard with summary statistics
- 🔍 Advanced filtering capabilities:
  - Segment filtering
  - Country filtering
  - Product filtering
  - Discount band filtering
- 📄 Paginated data display
- 🔄 Real-time data updates
- 🎨 Modern UI with clean design

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
git clone https://github.com/luchiansienna/SalesFEApp
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

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Best Practices Implemented

- TypeScript for type safety
- Component-based architecture
- Custom hooks for logic separation
- CSS Modules for styling
- Responsive design
- Accessibility features
- Error handling
- Loading states
- Performance optimization


## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with React and TypeScript
- Styled with CSS Modules
- API integration with Axios
