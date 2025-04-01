import { render, screen } from "@testing-library/react";
import List from "./List";
import axe from "axe-core";

test("renders no data to show", () => {
  render(<List sales={[]} loading={false} />);
  const linkElement = screen.getByText(/No data to show/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders loading spinner when loading", () => {
  render(<List sales={[]} loading={true} />);
  const spinner = screen.getByTestId('loading-spinner');
  expect(spinner).toBeInTheDocument();
});

test("renders data", () => {
    render(<List sales={[{ segment:  "Government",country: "Canada", product: "Carretera" , discountBand: "None" ,unitsSold: 1618.5, manufacturingPrice: 3.00, salePrice: 20.00, date: new Date("01/01/2014")}]} loading={false} />);
    const linkElement = screen.getByText(/Canada/i);
    expect(linkElement).toBeInTheDocument();
  });

test("Accessibility check", async () => {
  const { container } = render(<List sales={[]} loading={false} />);
  const results = await axe.run(container);
  expect(results.violations.length).toBe(0);
});
