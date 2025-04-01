type Summary = {
    totalRevenue: number;
    totalUnitsSold: number;
    totalManufacturingCost: number;
    totalProfit: number;
    totalPerMonth: { Month: number, Total: number }[];
    productsSold: { Product: string, UnitsSold: number }[];
};

export default Summary;
