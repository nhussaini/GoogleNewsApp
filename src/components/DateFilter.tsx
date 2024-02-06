type DateFilterProps = {
  selectedDate: string;
  handleDateChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const DateFilter = ({ selectedDate, handleDateChange }: DateFilterProps) => {
  return (
    <div>
      {' '}
      <label htmlFor="selected_date">Select Date:</label>
      <input
        type="date"
        id="selected_date"
        value={selectedDate}
        onChange={handleDateChange}
      />
    </div>
  );
};
export default DateFilter;
