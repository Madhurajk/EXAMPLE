import React, { useState } from 'react';
import { useBookingsQuery } from '../API/rtkQueryApi';

const Reservations = () => {

  const { data: bookings, error } = useBookingsQuery();
  const [selectedDate, setSelectedDate] = useState('');

  let latestBookings = [];
  const filteredBookings = bookings?.filter((booking) => booking.date === selectedDate);
  
  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setSelectedDate(selectedDate);
  };

  const formatDate = (dateString) => {
    const parts = dateString.split('-');
    const year = parts[0];
    const month = parts[1].padStart(2, '0');
    const day = parts[2].padStart(2, '0');
    return `${year}-${month}-${day}`;
};
  return (
    <>
    <br />
    <p><h2>Reservations</h2></p>
    <label><h3>Date : </h3></label>
    <div>
        <input className="form-exampleFormControlTextarea1" type="date" value={selectedDate ? formatDate(selectedDate) : ""} onChange={handleDateChange} ></input>
    </div>
{selectedDate && filteredBookings.length > 0 ? (
    <div>
        {filteredBookings.map((booking) => (
            <div key={booking.id} className='ms-4 me-4'>
                <p className='mb-0'>{booking.title}</p>
                <p className='mb-0'>{booking.bookfor}</p>
                <p key={booking.id} style={{ color: "brown", fontSize: "1rem", fontWeight: "bold" }}>{booking.users[0].name}</p>
                <hr></hr>
            </div>
        ))}
    </div>
) : (
    <p>No bookings....!</p>
)}
</>

  );
};

export default Reservations;
