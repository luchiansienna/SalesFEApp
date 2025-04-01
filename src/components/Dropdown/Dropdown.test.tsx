import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Dropdown from './Dropdown';

describe('Dropdown Component', () => {
  const mockOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  const mockOnChange = jest.fn();

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  it('renders with label and placeholder', () => {
    render(
      <Dropdown
        options={mockOptions}
        value=""
        onChange={mockOnChange}
        label="Test Label"
        placeholder="Select an option"
      />
    );

    expect(screen.getByText('Test Label')).toBeInTheDocument();
    expect(screen.getByText('Select an option')).toBeInTheDocument();
  });

  it('displays selected value when value prop is provided', () => {
    render(
      <Dropdown
        options={mockOptions}
        value="option2"
        onChange={mockOnChange}
      />
    );

    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });

  it('opens dropdown when clicked', () => {
    render(
      <Dropdown
        options={mockOptions}
        value=""
        onChange={mockOnChange}
      />
    );

    const dropdown = screen.getByText('Select an option');
    fireEvent.click(dropdown);

    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
    expect(screen.getByText('Option 3')).toBeInTheDocument();
  });

  it('calls onChange with selected value when option is clicked', () => {
    render(
      <Dropdown
        options={mockOptions}
        value=""
        onChange={mockOnChange}
      />
    );

    const dropdown = screen.getByText('Select an option');
    fireEvent.click(dropdown);
    fireEvent.click(screen.getByText('Option 2'));

    expect(mockOnChange).toHaveBeenCalledWith('option2');
  });

  it('closes dropdown when clicking outside', () => {
    render(
      <Dropdown
        options={mockOptions}
        value=""
        onChange={mockOnChange}
      />
    );

    const dropdown = screen.getByText('Select an option');
    fireEvent.click(dropdown);
    expect(screen.getByText('Option 1')).toBeInTheDocument();

    fireEvent.click(document.body);
    expect(screen.queryByText('Option 1')).not.toBeInTheDocument();
  });

  it('applies custom className when provided', () => {
    render(
      <Dropdown
        options={mockOptions}
        value=""
        onChange={mockOnChange}
        className="custom-class"
      />
    );

    const container = screen.getByText('Select an option').parentElement?.parentElement;
    expect(container).toHaveClass('custom-class');
  });
}); 