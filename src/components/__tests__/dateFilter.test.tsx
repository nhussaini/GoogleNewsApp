import { render, fireEvent, waitFor } from '@testing-library/react';
// import {DateFilter} from '../DateFilter';
import DateFilter from '../DateFilter';

describe('DateFilter component', () => {
  it('renders with the correct initial date value', () => {
    const selectedDate = '2024-02-14';
    const handleDateChange = jest.fn(); // Mock function

    const { getByLabelText } = render(
      <DateFilter
        selectedDate={selectedDate}
        handleDateChange={handleDateChange}
      />
    );

    const dateInput = getByLabelText('Select Date:') as HTMLInputElement;
    expect(dateInput.value).toBe(selectedDate);
  });

  // it('calls handleDateChange when the date input changes', () => {
  //   const selectedDate = '2024-02-14';
  //   const handleDateChange = jest.fn(); // Mock function

  //   const { getByLabelText } = render(
  //     <DateFilter
  //       selectedDate={selectedDate}
  //       handleDateChange={handleDateChange}
  //     />
  //   );

  //   const dateInput = getByLabelText('Select Date:') as HTMLInputElement;
  //   const newDate = '2024-02-15';

  //   fireEvent.change(dateInput, { target: { value: newDate } });

  //   expect(handleDateChange).toHaveBeenCalledTimes(1);
  //   expect(handleDateChange).toHaveBeenCalledWith(expect.any(Object));
  //   expect(dateInput.value).toBe(newDate);
  it('calls handleDateChange when the date input changes', async () => {
    const selectedDate = '2024-02-14';
    const handleDateChange = jest.fn(); // Mock function

    const { getByLabelText } = render(
      <DateFilter
        selectedDate={selectedDate}
        handleDateChange={handleDateChange}
      />
    );

    const dateInput = getByLabelText('Select Date:') as HTMLInputElement;
    const newDate = '2024-02-15';

    fireEvent.change(dateInput, { target: { value: newDate } });

    // Wait for the event to propagate and update the input value
    await waitFor(() => {
      expect(handleDateChange).toHaveBeenCalledTimes(1);
      expect(handleDateChange).toHaveBeenCalledWith(expect.any(Object));
      expect(dateInput.value).toBe(newDate);
    });
  });
});
