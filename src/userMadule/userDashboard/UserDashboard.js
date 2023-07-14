import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useGetRoomBookingsQuery } from '../../API/rtkQueryApi';
import './UserDashboard.css'

const UserDashboard = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { data, error } = useGetRoomBookingsQuery();

    const navigateToAddBookingRoom = (booking) => {
        
        navigate(`/bookroom/${booking.id}`, { state: { booking } })
    }

    return (
        <div className='container-fluid p-0'>
            <div className="header">
                <p><h1>Meeting rooms</h1></p>
                
        <Link to="/">
                 <span>Logout</span>
                    </Link>
            </div>
            <hr ></hr>
            {data?.map((room) => (
                <div className="card m-5 p-4" key={room.id}>
                    <div className="row">
                        <div className="col-6">
                            <img src={room.image} width={"600px"}></img>
                            <div className="row">
                                <div className="col">
                                    <p className="mt-3 mb-0">Capacity:</p>
                                    <p style={{ fontWeight: "bold" }}>{room.capacity}</p>
                                </div>
                                <div className="col">
                                    <p className="mt-3 mb-0">Price:</p>
                                    {room?.price?.map((data) => (
                                        <>
                                            <p style={{ fontWeight: "bold" }} className="mb-0">~ {data}</p>
                                        </>
                                    ))}

                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <p style={{ color: "brown", fontSize: "1.5rem", fontWeight: "bold" }}>{room.roomName}</p>
                            {room.description.map((data) => (
                                <div>
                                    <p>-  {data}</p>
                                </div>
                            ))}
                            <button type="button" className="btn btn-primary btn-lg" onClick={() => navigateToAddBookingRoom(room)}>Book this room</button>
                        </div>
                        <hr ></hr>
                    </div>
                </div>
            ))}
        </div>
    )

}

export default UserDashboard;