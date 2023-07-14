import { useAddbookingMutation, useEditbookingMutation } from "../../API/rtkQueryApi";
import { useState , useEffect} from "react";
import { useNavigate,useLocation } from "react-router-dom";
import { ColorModeContext, useMode } from "../../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Sidebar from "../../scenes/global/Sidebar";
import { Box, Typography, useTheme } from "@mui/material";
import "./DateRoom.css"

const EditDateBookingRoom = () => {
  const [theme1, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();
    const { booking } = location.state;
    const [title, setTitle] = useState(booking?.title);
    const [date, setDate] = useState(booking?.date);
    const [capacity, setCapacity] = useState(booking?.capacity);
    const [total, setTotal] = useState(booking?.total);
    const [bookfor, setBookFor] = useState(booking?.bookfor);
    const [priceperday, setPricePerDay] = useState(booking?.priceperday);
    const [status, setStatus] = useState(booking?.status);
    const [name, setName] = useState(booking?.users[0]?.name);
    const [email, setEmail] = useState(booking?.users[0]?.email);
    const [phone, setPhone] = useState(booking?.users[0]?.phone);
    const [company, setCompany] = useState(booking?.users[0]?.company);
    const [address, setAddress] = useState(booking?.users[0]?.address);
    const [city, setCity] = useState(booking?.users[0]?.city);
    const [state, setState] = useState(booking?.users[0]?.state);
    const [zip, setZip] = useState(booking?.users[0]?.zip);
    const [country, setCountry] = useState(booking?.users[0]?.country);
    const [editbooking, { isLoading }] = useEditbookingMutation();
    const [step, setStep] = useState(1);
    const [successMessage, setSuccessMessage] = useState("");


    const handleSubmitEditBooking = (e) => {
        e.preventDefault();
        const updatedBooking= { ...booking, title, date, capacity, total, bookfor, priceperday, status,
            users:[{name, phone, email,address, company, city, state, country, zip}]};
        editbooking(updatedBooking).unwrap().then((response) => {
            setSuccessMessage("Booking updated successfully!");
            window.location.reload();
        })
    }
    const handleNextClick = () => { if (step === 1) { setStep(2); }
    };

    return (
      <>
      <ColorModeContext.Provider value={colorMode}>
      {/* <ThemeProvider theme={theme1}> */}
        <CssBaseline />
        <div className="app">
          <main className="content" style={{ display: "flex" }}>
            {isSidebar && <Sidebar isSidebar={isSidebar} />}
            <Box flexGrow={1}>

        <div className="DateRoom">
            <div className='row'>
                <div className='col-auto col-md-3 col-xl-2 p-0'>
                </div>
                <div className='col-auto col-md-9 col-xl-10 '>
                    <div className='fs-2 ms-3 font-weight-bold'><h1>Add a Booking</h1></div>
                    <div className="card shadow rounded ms-3 p-4 mt-4">
                            {step === 1 && (
                                <div className="row ">
                                    <div className='fs-4 mb-5' style={{ "font-weight": "bolder" }}><h3>Booking Details</h3></div>
                                    <div className="col-2 mb-4">
                                        <label className="fs-5">Room</label>
                                    </div>
                                    <div className="col-10 mb-4">
                                        <select className="form-control" value={title} onChange={(e) => setTitle(e.target.value)}>
                                            <option value="">Select a Room</option>
                                            <option value="Small Conference room">Small Conference room</option>
                                            <option value="Large Conference room">Large Conference room</option>
                                            <option value="Panoramic room">Panoramic room</option>
                                        </select>
                                    </div>
                                    <br />
                                    <div className="col-2 mb-4">
                                        <label className="fs-5">Capacity</label>
                                    </div>
                                    <div className="col-10  mb-4">
                                        <input className="form-control" type="number" value={capacity} onChange={(e) => setCapacity(e.target.value)}></input>
                                    </div><br />
                                    <div className="col-2 mb-4">
                                        <label className="fs-5">Date</label>
                                    </div>
                                    <div className="col-10 mb-4">
                                        <input className="form-control" type="date" value={date} onChange={(e) => setDate(e.target.value)}></input>
                                    </div><br />
                                    <div className="col-2 mb-4">
                                        <label className="fs-5">Book For</label>
                                    </div>
                                    <div className="col-10 mb-4">
                                        <select className="form-control" value={bookfor} onChange={(e) => setBookFor(e.target.value)}>
                                            <option value="">Select Option</option>
                                            <option value="Multiple Days">Multiple Days</option>
                                            <option value="Half Day">Half Day</option>
                                            <option value="Hour">Hour</option>
                                        </select>

                                    </div><br />
                                    <div className="col-2 mb-4">
                                        <label className="fs-5">Price per day</label>
                                    </div>
                                    <div className="col-10 mb-4">
                                        <div className="input-group">
                                            <input className="form-control" type="text" value={priceperday} onChange={(e) => setPricePerDay(e.target.value)} />
                                        </div>
                                    </div><br />
                                    <div className="col-2 mb-4">
                                        <label className="fs-5">Status</label>
                                    </div>
                                    <div className="col-10 mb-4">
                                        <select className="form-control" value={status} onChange={(e) => setStatus(e.target.value)}>
                                            <option value="">Select status</option>
                                            <option value="All">All</option>
                                            <option value="Pending">Pending</option>
                                            <option value="Confirmed">Confirmed</option>
                                            <option value="Cancelled">Cancelled</option>
                                        </select>
                                    </div><br />
                                    <div className="col-2 mb-4">
                                        <label className="fs-5">Total</label>
                                    </div>
                                    <div className="col-10 mb-4">
                                        <div className="input-group">
                                            <input className="form-control" type="text" value={total} onChange={(e) => setTotal(e.target.value)} />
                                        </div>
                                    </div><br /> <br />
                                    <div className="col-2 "></div>
                            <div className="col-10 mt-3 d-grid gap-2 d-md-flex">
                                    <button className="btn btn-primary btn-lg" onClick={handleNextClick}>Save</button>
                                    </div>
                                </div>
                            )}
                            {step === 2 && (
                                <div className="row">
                                    <div className='fs-4 mb-5' style={{ "font-weight": "bolder" }}><h3>Client Details</h3></div>
                                    <div className="col-2 mb-4">
                                        <label className="fs-5">Name</label>
                                    </div>
                                    <div className="col-10 mb-4">
                                    <input className="form-control" type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
                                    </div><br />
                                    <div className="col-2 mb-4">
                                        <label className="fs-5">Email</label>
                                    </div>
                                    <div className="col-10  mb-4">
                                        <input className="form-control" type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                                    </div><br />
                                    <div className="col-2 mb-4">
                                        <label className="fs-5">Phone</label>
                                    </div>
                                    <div className="col-10 mb-4">
                                        <input className="form-control" type="text" value={phone} onChange={(e) => setPhone(e.target.value)}></input>
                                    </div><br />
                                    <div className="col-2 mb-4">
                                        <label className="fs-5">Company</label>
                                    </div>
                                    <div className="col-10 mb-4">
                                    <input className="form-control" type="text" value={company} onChange={(e) => setCompany(e.target.value)}></input>
                                    </div><br />
                                    <div className="col-2 mb-4">
                                        <label className="fs-5">Address</label>
                                    </div>
                                    <div className="col-10 mb-4">
                                    <input className="form-control" type="text" value={address} onChange={(e) => setAddress(e.target.value)}></input>
                                    </div><br />
                                    <div className="col-2 mb-4">
                                        <label className="fs-5">City</label>
                                    </div>
                                    <div className="col-10 mb-4">
                                    <input className="form-control" type="text" value={city} onChange={(e) => setCity(e.target.value)}></input>
                                    </div><br />
                                    <div className="col-2 mb-4">
                                        <label className="fs-5">State</label>
                                    </div>
                                    <div className="col-10 mb-4">
                                    <input className="form-control" type="text" value={state} onChange={(e) => setState(e.target.value)}></input>
                                    </div><br />
                                    <div className="col-2 mb-4">
                                        <label className="fs-5">Zip</label>
                                    </div>
                                    <div className="col-10 mb-4">
                                    <input className="form-control" type="text" value={zip} onChange={(e) => setZip(e.target.value)}></input>
                                    </div><br />
                                    <div className="col-2 mb-4">
                                        <label className="fs-5">Country</label>
                                    </div>
                                    <div className="col-10 mb-4">
                                    <input className="form-control" type="text" value={country} onChange={(e) => setCountry(e.target.value)}></input>
                                    </div>
                                    <div className="col-2 "></div>
                                    <br /> <br />
                            <div className="col-10 mt-3 d-grid gap-2 d-md-flex">
                                <button type="button" className="btn btn-primary btn-lg" onClick={handleSubmitEditBooking}>Update</button>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <button type="button" className="btn btn-dark btn-lg" value="Cancel">Cancel</button>
                            </div>
                                </div>
                            )}
                           
                        </div>
                    </div>
                </div>
            </div>
            </Box>
          </main>
        </div>
      {/* </ThemeProvider> */}
    </ColorModeContext.Provider>

    </>
    )
}

export default EditDateBookingRoom;