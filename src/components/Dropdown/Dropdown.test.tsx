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
        label="Test Label"
      />
    );

    const dropdown = screen.getByText('Select an option');
    fireEvent.click(dropdown);

    expect(screen.getByText('All Test Label')).toBeInTheDocument();
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

  it('calls onChange with empty string when "All" option is clicked', () => {
    render(
      <Dropdown
        options={mockOptions}
        value="option1"
        onChange={mockOnChange}
        label="Test Label"
      />
    );

    const dropdown = screen.getByText('Option 1');
    fireEvent.click(dropdown);
    fireEvent.click(screen.getByText('All Test Label'));

    expect(mockOnChange).toHaveBeenCalledWith('');
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

  it('closes dropdown after selecting an option', () => {
    render(
      <Dropdown
        options={mockOptions}
        value=""
        onChange={mockOnChange}
      />
    );

    const dropdown = screen.getByText('Select an option');
    fireEvent.click(dropdown);
    expect(screen.getByText('All')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Option 1'));
    expect(screen.queryByText('All')).not.toBeInTheDocument();
  });

  it('toggles dropdown when clicking the same element', () => {
    render(
      <Dropdown
        options={mockOptions}
        value=""
        onChange={mockOnChange}
      />
    );

    const dropdown = screen.getByText('Select an option');
    
    // Open dropdown
    fireEvent.click(dropdown);
    expect(screen.getByText('All')).toBeInTheDocument();
    
    // Close dropdown
    fireEvent.click(dropdown);
    expect(screen.queryByText('All')).not.toBeInTheDocument();
  });

  it('handles empty options array', () => {
    render(
      <Dropdown
        options={[]}
        value=""
        onChange={mockOnChange}
        label="Test Label"
      />
    );

    const dropdown = screen.getByText('Select an option');
    fireEvent.click(dropdown);

    expect(screen.getByText('All Test Label')).toBeInTheDocument();
    expect(screen.queryByText('Option 1')).not.toBeInTheDocument();
  });

  it('displays placeholder when no value is selected', () => {
    render(
      <Dropdown
        options={mockOptions}
        value=""
        onChange={mockOnChange}
        placeholder="Custom placeholder"
      />
    );

    expect(screen.getByText('Custom placeholder')).toBeInTheDocument();
  });

}); 