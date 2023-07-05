import React from 'react';

const LatestBookings = ({ bookings }) => {
  return (
    <div>
      <h2>Latest Bookings</h2>
      
      {bookings.map((booking, index) => (
        <div key={index}>
          <p>Meeting Room: {booking.meetingRoom}</p>
          <p>Date of Booking: {booking.date}</p>
          <p>Customer Name: {booking.customerName}</p>
        </div>
      ))}
    </div>
  );
};

export default LatestBookings;
