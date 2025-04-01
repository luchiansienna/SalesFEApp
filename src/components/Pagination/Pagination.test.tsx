import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from './Pagination';

describe('Pagination Component', () => {
  const mockPaginate = jest.fn();

  beforeEach(() => {
    mockPaginate.mockClear();
  });

  it('renders pagination buttons correctly for small number of pages', () => {
    render(
      <Pagination
        pageIndex={0}
        pageSize={10}
        noOfPages={3}
        paginate={mockPaginate}
      />
    );

    // Should show all pages (1, 2, 3)
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
  });

  it('renders pagination buttons correctly for large number of pages', () => {
    render(
      <Pagination
        pageIndex={4}
        pageSize={10}
        noOfPages={10}
        paginate={mockPaginate}
      />
    );

    // Should show first 3 pages, current page (5) and surrounding pages, and last 2 pages
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
    expect(screen.getByText('6')).toBeInTheDocument();
    expect(screen.getByText('9')).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();
  });

  it('highlights the current page correctly', () => {
    render(
      <Pagination
        pageIndex={2}
        pageSize={10}
        noOfPages={5}
        paginate={mockPaginate}
      />
    );

    const currentPageButton = screen.getByText('3');
    expect(currentPageButton).toHaveClass('active');
  });

  it('calls paginate function with correct page number when clicked', () => {
    render(
      <Pagination
        pageIndex={0}
        pageSize={10}
        noOfPages={5}
        paginate={mockPaginate}
      />
    );

    const pageButton = screen.getByText('2');
    fireEvent.click(pageButton);
    expect(mockPaginate).toHaveBeenCalledWith(1); // pageIndex is 0-based
  });

  it('handles edge case when there is only one page', () => {
    render(
      <Pagination
        pageIndex={0}
        pageSize={10}
        noOfPages={1}
        paginate={mockPaginate}
      />
    );

    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.queryByText('2')).not.toBeInTheDocument();
  });

  it('handles edge case when current page is at the end', () => {
    render(
      <Pagination
        pageIndex={9}
        pageSize={10}
        noOfPages={10}
        paginate={mockPaginate}
      />
    );

    // Should show first 2 pages, last 3 pages, and surrounding pages
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('8')).toBeInTheDocument();
    expect(screen.getByText('9')).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();
  });
}); 