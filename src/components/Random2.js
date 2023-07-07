import { useBookingsQuery } from '../API/rtkQueryApi';


const Random2 = () => {
  let bookingsMadeToday = 0;
  let bookingsForToday = 0;
let totalBookings = 0;

const { data: bookings, error } = useBookingsQuery();

if (bookings) {
  const currentDate = new Date().toISOString().split('T')[0];

  bookingsMadeToday = bookings.filter((booking) => {
      const bookingDate = new Date(booking.date);
      return (
          bookingDate.getDate() === new Date().getDate() &&
          bookingDate.getMonth() === new Date().getMonth() &&
          bookingDate.getFullYear() === new Date().getFullYear()
      );
  }).length;
  bookingsForToday = bookings.filter((booking) => booking.date === currentDate).length;
}

return (
  <div>
  <i style={{ "fontSize": "3rem" }}></i><span style={{ fontSize: "1.5rem", fontWeight: "bold" }}> Bookings for today : {bookingsForToday}</span>
</div>
);

}
export default Random2;
