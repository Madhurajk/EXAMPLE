import React from 'react';
import { useBookingsQuery } from '../API/rtkQueryApi';

function LatestBookings() {
  const { data: bookings, error } = useBookingsQuery();

  let latestBookings = [];

  if (bookings) {
    const sortedBookings = [...bookings].sort((a, b) => new Date(b.date) - new Date(a.date));
    latestBookings = sortedBookings.slice(0, 3);
}
  return (
    <div>
      <h2>Latest Bookings</h2>
    {latestBookings.map((booking) => (
      <div>
         <p>{booking.title}</p>
        <p>Date : {booking.date}</p>
       <p key={booking.id} style={{ color: "brown", fontWeight: "bold" }}>{booking.users[0].name}</p>
        <hr></hr>
        </div>

        ))}
    </div>
  );
};

export default LatestBookings;
