import { useAddbookingMutation } from "../../API/rtkQueryApi";
import { useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { ColorModeContext, useMode } from "../../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Sidebar from "../../scenes/global/Sidebar";
import { Box, Typography, useTheme } from "@mui/material";
import "./DateRoom.css"

const DateRoom = () => {
  const [theme1, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [capacity, setCapacity] = useState('');
    const [total, setTotal] = useState('');
    const [bookfor, setBookFor] = useState('');
    const [priceperday, setPricePerDay] = useState('');
    const [status, setStatus] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [company, setCompany] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [country, setCountry] = useState('');
    const [addbooking, error, isLoading] = useAddbookingMutation()
    const [step, setStep] = useState(1);

    const handleSubmitAddBooking = (e) => {
        e.preventDefault();
        const newBooking = {
            title,date,capacity,total,bookfor,priceperday,status,
           users:[{name, phone, email,address, company, city, state, country, zip}]
        };
        addbooking(newBooking).unwrap().then((res) => {
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
                    <div className='fs-2 ms-3 font-weight-bold'><h1>Add a booking</h1></div>
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
                                    <br />
                                    <div className='fs-4 mb-5' style={{ "font-weight": "bolder" }}><h2>Client Details</h2></div>
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
                                <button type="button" className="btn btn-primary btn-lg" onClick={handleSubmitAddBooking}>Save</button>
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

export default DateRoom;