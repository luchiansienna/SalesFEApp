export type Sale = {
    segment: string;
    country: string;
    product: string;
    discountBand: string;
    unitsSold: number;
    manufacturingPrice: number;
    salePrice: number;
    date: Date;
}