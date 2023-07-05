import React from 'react';

const Statistics = ({ todayBookings, totalBookings }) => {
  return (
    <div>
      <h2>Booking Statistics</h2>
      <p>Bookings made for today: {todayBookings}</p>
      <p>Total bookings for today: {totalBookings}</p>
      <p>Total bookings made: {totalBookings}</p>
    </div>
  );
};

export default Statistics;
