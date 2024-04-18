import { useNavigate } from 'react-router-dom';
 import './mybookings.css';
import React, { useState , useEffect } from 'react';

export default function Mybookings(props) {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await fetch('http://localhost:5000/mybookings');
      if (!response.ok) {
        throw new Error('Failed to fetch bookings');
      }
      const data = await response.json();
      setBookings([data]);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  const cancelBooking = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/mybookings/${id}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error('Failed to cancel booking');
      }
      navigate('/home')
    } catch (error) {
      console.error('Error canceling booking:', error);
    }
  };
  
  return (
    <>
    <div className='parent-mybookings'>
      <h1 className='h1-heading'>Your Bookings</h1>
      {bookings.map((booking, index) => (
        <div key={index} className="cardbooking">
          <div className="imagebooking">
            <img className="booking" src={booking.url} alt="Booking" />
          </div>
          <div className="descbooking">
            <h1 className="h1booking">{booking.plan}</h1>
            <h2 className="h2booking">Booking Name: {booking.fullName}&nbsp;&nbsp;&nbsp;&nbsp; From Date: {booking.date}</h2>
            <h2 className="h2booking">Mobile Number: {booking.number}&nbsp;&nbsp;&nbsp;&nbsp;  Email: {booking.email}</h2>
            <h2 className="h2booking">Members: {booking.members}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   Total Nights: {booking.nights}</h2>
            <h1 className="h1pricebooking">Total Price: {booking.totalPrice} INR</h1>
            <button className="button2" onClick={() => cancelBooking(booking._id)}>Cancel Booking</button>
          </div>
        </div>
      ))}
      </div>
    </>
  );
}
