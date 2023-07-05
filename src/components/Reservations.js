import React, { useState } from 'react';
import DatePicker from '../Date/DatePicker';

const Reservations = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handlePrint = () => {
    // Logic for printing reservations for the selected date
  };

  return (
    <div>
      <h2>Reservations</h2>
      <p>Small Conference Room</p>
      <DatePicker />
      <button onClick={handlePrint}>Print</button>
      {/* Display bookings for the selected date */}
    </div>
  );
};

export default Reservations;
