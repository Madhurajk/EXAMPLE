import React from 'react';
import { Link } from "react-router-dom";


const QuickLinks = () => {
  return (
    <div>
      <h2>Quick Links</h2>
    <p><Link style={{textDecoration: 'none'}} to="/dateroom">+Add Booking</Link></p>
    <p><Link style={{textDecoration: 'none'}} to="/meetingroom">+Add Room</Link></p>
    <br />
    <p><Link style={{textDecoration: 'none'}} to="/invoices">View Booking</Link></p>
    <p><Link style={{textDecoration: 'none'}} to="/contacts">View Rooms</Link></p>
    <p><Link style={{textDecoration: 'none'}} to="/dateroom">Edit Booking Form</Link></p>
    </div>
  );
};

export default QuickLinks;
