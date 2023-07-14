import React from 'react';
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useNavigate } from 'react-router-dom';
import { ColorModeContext, useMode } from "../../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Sidebar from "../global/Sidebar";
import { useState } from 'react';
import InputBase from "@mui/material/InputBase";
import { IconButton} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { useBookingsQuery, useDeleteBookingMutation } from '../../API/rtkQueryApi';
import ModeEditOutlineRoundedIcon from "@mui/icons-material/ModeEditOutlineRounded";
import { DeleteForever } from '@mui/icons-material';


const Invoices = () => {

const [theme1, colorMode] = useMode();
 const [isSidebar, setIsSidebar] = useState(true);
  const navigate = useNavigate();
  const [searchBooking, setSearchBooking] = useState('');
    const { data: bookingData, error } = useBookingsQuery();
    const [selectedStatus, setSelectedStatus] = useState('All');
    const [deleteBooking] = useDeleteBookingMutation();
    const [successMessage, setSuccessMessage] = useState("");

    let filteredBookings = bookingData;
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

  const userFormHandler1 = () =>{
    navigate("/dateroom");
  }
  const handleStatusChange = (status) => {
      setSelectedStatus(status);
     };
  const handleSearch = (event) => {
      setSearchBooking(event.target.value);
  };

  if (selectedStatus !== 'All') {
      filteredBookings = filteredBookings.filter((booking) => booking.status === selectedStatus);
  }
  filteredBookings = filteredBookings?.filter((response) =>
      response.title.toLowerCase().includes(searchBooking.toLowerCase())
  )

  const navigateToEditBooking = (booking) => {
      navigate(`/editdatebookingroom/${booking.id}`, { state: { booking } })
  }

  const handleDelete = (bookingId) => {
      deleteBooking(bookingId).unwrap().then((res)=>{
          setSuccessMessage("Booking deleted successfully!");
          window.location.reload();
      })
  
}

  
  return (
<ColorModeContext.Provider value={colorMode}>
      {/* <ThemeProvider theme={theme1}> */}
        <CssBaseline />
        <div className="app">
          <main className="content" style={{ display: "flex" }}>
            {isSidebar && <Sidebar isSidebar={isSidebar} />}
            <Box flexGrow={1}>

    <Box m="20px">
      <Header title="Bookings Lists" subtitle="Review a list of all room bookings. Using the quck buttons you can manually add new booking. change its status, edit booking details, browse and delete bookings. " />
      <Box
        m="40px 0 0 0"
        height="75vh"
      >
        <button type="button" className='btn btn-primary' onClick= {userFormHandler1}><i className='fa fa-plus'></i>  + Add Booking</button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<Box display="flex" justifyContent="space-between" p={2}>
      <Box
        display="flex"
        backgroundColor={colors.greenAccent[700]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" value={searchBooking}
                            onChange={handleSearch}/>
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
      </Box>
     
    {successMessage && <div className="mt-3 alert alert-danger">{successMessage}</div>}
                    <div className='d-flex flex-row p-2 mt-5'>
                    
                    </div>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                      <button
                            type="button"
                            className={`rounded ${selectedStatus === 'All' ? 'active' : ''}`}
                            onClick={() => handleStatusChange('All')}> All
                        </button>&emsp;&emsp;
                        <button
                            type="button"
                            className={`rounded ${selectedStatus === 'Pending' ? 'active' : ''}`}
                            onClick={() => handleStatusChange('Pending')}>
                            Pending
                        </button>&emsp;&emsp;
                        <button
                            type="button"
                            className={`rounded ${selectedStatus === 'Confirmed' ? 'active' : ''}`}
                            onClick={() => handleStatusChange('Confirmed')}>
                            Confirmed
                        </button>&emsp;&emsp;
                        <button
                            type="button"
                            className={`rounded ${selectedStatus === 'Cancelled' ? 'active' : ''}`}
                            onClick={() => handleStatusChange('Cancelled')}>
                            Cancelled
                        </button>
                    </div>
<br />
                  <div className='card shadow bg-body rounded mt-5 p-3'>
                        {filteredBookings?.length === 0 ? (
                            <div>No data found.</div>
                        ) : (
                            <table className="table table-striped border">
                                <thead>
                                    <tr>
                                        <th>Room</th>
                                        <th>Date</th>
                                        <th>Name</th>
                                        <th>Total</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredBookings?.map((booking) => (
                                        <tr key={booking.id}>

                                            <td>{booking.title}</td>
                                            <td>{booking.date}</td>
                                            <td>
                                                {booking.users?.map((user) => (
                                                    <div key={user.id}>{user.name}</div>
                                                ))}
                                            </td>
                                            <td>{booking.total}</td>
                                            <td>{booking.status}</td>
                                            <td><ModeEditOutlineRoundedIcon
                                        color="secondary"
                                        onClick={() => navigateToEditBooking(booking)}
                                           sx={{ mr: 2, cursor: "pointer" }}
                                             />
                                             <DeleteForever
                                               onClick={() => handleDelete(booking.id)}
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>


                    </Box>
    </Box>
    
    </Box>
          </main>
        </div>
      {/* </ThemeProvider> */}
    </ColorModeContext.Provider>
  );
};

export default Invoices;
