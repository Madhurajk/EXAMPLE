import { useNavigate, useLocation } from 'react-router';
import { useState } from 'react';
import { useAddbookingMutation } from '../API/rtkQueryApi';
// import '../userMadule/userDashboard.css'

const UserConfirmation = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const [addbooking, error, isLoading] = useAddbookingMutation();
    const [successMessage, setSuccessMessage] = useState("");

    const storedBookingData = JSON.parse(localStorage.getItem('BookingData'));
    const newBooking = storedBookingData;

    const handleBooking = () => {
        addbooking(newBooking).unwrap().then((res) => {
            
            setSuccessMessage("Booking added successfully!");
            navigate('/usersDashboard');
            localStorage.removeItem('BookingData');
        })
    }

    return(
        <div className='container-fluid p-0'>
        <p> <h2>Meeting rooms</h2></p><hr />
        {successMessage && <div className="mt-3 alert alert-success">{successMessage}</div>}
        <div className="card m-5 p-4">
        <p className="fs-3"  style={{ fontWeight: "bolder", color:"brown" }}>Your Bookings</p>
            <p><b>Title:</b> <span className='mx-3'>{newBooking.title}</span> </p>
            <p><b>Capacity:</b> <span className='mx-3'>{newBooking.capacity}</span> </p>
            <p><b>BookFor:</b> <span className='mx-3'>{newBooking.bookfor}</span> </p>
            <p><b>Date:</b> <span className='mx-3'>{newBooking.date}</span> </p>
            <p><b>Status:</b> <span className='mx-3'>{newBooking.status}</span> </p>
            <p><b>Price per day:</b> <span className='mx-3'>{newBooking.priceperday}</span> </p>
            <p><b>Total:</b> <span className='mx-3'>{newBooking.total}</span> </p>
            <p>---------------------------------------------------------------</p>
            <p className="fs-3"  style={{ fontWeight: "bolder", color:"brown" }}>Personal Details</p>
            {newBooking.users.map((user)=>
            <div className='row'>
                <div className='col-4'>
                <p><b>Name:</b> <span className='mx-3'>{user.name}</span> </p>
                    </div>
                    <div className='col-4'>
                    <p><b>Email:</b> <span className='mx-3'>{user.email}</span> </p>
                    </div>
                    <div className='col-4'>
                    <p><b>Phone:</b> <span className='mx-3'>{user.phone}</span> </p>
                    </div>
                    <p>---------------------------------------------------------------</p>
                    <p className="fs-3"  style={{ fontWeight: "bolder", color:"brown" }}>Billing Address</p>
                    <div className='col-4'>
                    <p><b>Company:</b> <span className='mx-3'>{user.company}</span> </p>
                    </div>
                    <div className='col-4'>
                    <p><b>Address:</b> <span className='mx-3'>{user.address}</span> </p>
                    </div>
                    <div className='col-4'>
                    <p><b>City:</b> <span className='mx-3'>{user.city}</span> </p>
                    </div>
                    <div className='col-4 mt-3'>
                    <p><b>State:</b> <span className='mx-3'>{user.state}</span> </p>
                    </div>
                    <div className='col-4 mt-3'>
                    <p><b>Zip:</b> <span className='mx-3'>{user.zip}</span> </p>
                    </div>
                    <div className='col-4 mt-3'>
                    <p><b>Country:</b> <span className='mx-3'>{user.country}</span> </p>
                    </div>
                    <p>---------------------------------------------------------------</p>
                    <div className="col-2 "></div>
                                        <div className="col-10 mt-5 d-grid gap-2 d-md-flex justify-content-md-end">
                                            <button type="button" className="btn btn-primary btn-lg" onClick={handleBooking}>Confirm</button>
                                        </div>
                    </div>
            )}
            </div>
        </div>

    );
}

export default UserConfirmation;